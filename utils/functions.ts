import showToast from "./notification";
import { ref, computed } from "vue";
import { APP_SEGMENTS } from "./api";
import axios from "axios";

export function getProductLink(id: number, name: string, model_number: string, main_second_parent_cat: string) {
  const firstPart = main_second_parent_cat?.split("/")[0];
  // Replace spaces with dashes
  let transformedName = name.replace(/ /g, "-").replace(/\//g, "-");
  // Remove consecutive dashes
  transformedName = transformedName.replace(/-+/g, "-");
  // Remove leading and trailing dashes
  transformedName = transformedName.replace(/^-+|-+$/g, "");
  // Convert to lowercase
  transformedName = transformedName.toLowerCase();

  let transformedModelNumber = model_number
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/\//g, "-");
  // Remove consecutive dashes
  transformedModelNumber = transformedModelNumber.replace(/-+/g, "-");
  // Remove leading and trailing dashes
  transformedModelNumber = transformedModelNumber.replace(/^-+|-+$/g, "");

  return firstPart
    ? `/${firstPart}/product/${id}/${transformedName}-${transformedModelNumber}`
    : `/product/${id}/${transformedName}-${transformedModelNumber}`;
}

const isAdding = ref(false);
const url = process.env.API_URL;

export const addToCartText = computed(() => {
  return isAdding.value ? "Adding..." : "Add to Cart";
});

export function addToCart(product: any) {
  if (isAdding.value) return;
  isAdding.value = true;
  const store = useCartStore();
  try {
    store.addToCart(product);
    showToast("Item added to cart", "success");
  } catch (error) {
    console.error(error);
    showToast("An error occurred. Please try again", "error");
  } finally {
    isAdding.value = false;
  }
}

export const getCategoryLink = (id: number, name: string, page?: string): string => {
  const route = useRoute();

  const segment = APP_SEGMENTS.find((item) => item.slug === route.params.segment);

  const transformedName = transformName(name);

  if (page) {
    return segment ? `/${segment.slug}/${id}/${transformedName}/page/${page}` : `/product/${id}/${transformedName}/page/${page}`;
  }

  return segment ? `/${segment.slug}/${id}/${transformedName}` : `/product/${id}/${transformedName}`;
};

const transformName = (name: string): string => {
  if (!name) return "";
  return name
    .replace(/ /g, "-")
    .replace(/\//g, "-")
    .replace(/-+/g, "-") // Remove consecutive dashes
    .replace(/^-+|-+$/g, "") // Remove leading and trailing dashes
    .toLowerCase();
};

export function removeFromCart(index: number) {
  const store = useCartStore();
  store.removeFromCart(index);
}

export function formatPrice(price: string | number) {
  if (typeof price === "string") {
    price = parseFloat(price);
  }
  return new Intl.NumberFormat("en-KE").format(price);
}

export function calculateDiscount(original: number, discounted: number) {
  return Math.round(((original - discounted) / original) * 100);
}

export function capitalizeMainWords(str: string) {
  const excludeWords = ["and", "the", "of", "in", "on", "at", "to", "a", "an"];
  return str
    .split(" ")
    .map((word) => {
      if (excludeWords.includes(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

// Function to generate solution routes
export async function generateSolutionRoutes() {
  const routes: string[] = [];
  console.log("🚀 Starting Solution Routes Generation");
  console.log(`Base URL: ${url}`);
  console.log(`Total Segments to Process: ${APP_SEGMENTS.length}`);

  for (const [index, segment] of APP_SEGMENTS.entries()) {
    console.log(`\n🔍 Processing Segment ${index + 1}/${APP_SEGMENTS.length}: ${segment.name}`);

    try {
      console.log(`Fetching solutions for segment: ${segment.id}`);
      const response = await axios.get(
        `/api/get-solutions/${segment.id}`,
        {
          baseURL: url,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
          withXSRFToken: true,
        }
      );

      const data = response.data.data;
      console.log(`Received ${data.length} solutions for ${segment.name}`);

      const solutionRoutes = data.map((solution: any) => {
        const transformedName = solution.name
          .toLowerCase()
          .replace(/[\s/]+/g, "-")
          .replace(/^-+|-+$/g, "");

        const route = `/${segment.slug}/solutions/${solution.id}/${transformedName}`;
        console.log(`Generated Route: ${route}`);
        return route;
      });

      routes.push(...solutionRoutes);
      console.log(`✅ Successfully processed ${segment.name}`);
    } catch (error) {
      console.error(`❌ Error fetching solutions for ${segment.name}:`, error);
      console.warn(`Continuing to next segment despite error...`);
    }
  }

  console.log(`\n🏁 Solution Routes Generation Complete`);
  console.log(`Total Routes Generated: ${routes.length}`);
  return routes;
}

// Function to generate category routes
export async function generateCategoryRoutes() {
  const routes: string[] = [];
  console.log("🚀 Starting Category Routes Generation");
  console.log(`Base URL: ${url}`);
  console.log(`Total Segments to Process: ${APP_SEGMENTS.length}`);

  for (const [index, segment] of APP_SEGMENTS.entries()) {
    console.log(`\n🔍 Processing Segment ${index + 1}/${APP_SEGMENTS.length}: ${segment.name}`);

    try {
      console.log(`Fetching categories for segment: ${segment.id}`);
      const response = await axios.get(
        `/api/get-main-categories/${segment.id}`,
        {
          baseURL: url,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
          withXSRFToken: true,
        }
      );

      const data = response.data.data;
      console.log(`Received ${data.length} categories for ${segment.name}`);

      const categoryRoutes = data.map((category: any) => {
        let transformedName = category.name
          .replace(/ /g, "-")
          .replace(/\//g, "-")
          .replace(/-+/g, "-")
          .replace(/^-+|-+$/g, "")
          .toLowerCase();

        const route = `/${segment.slug}/${category.id}/${transformedName}`;
        console.log(`Generated Route: ${route}`);
        return route;
      });

      routes.push(...categoryRoutes);
      console.log(`✅ Successfully processed ${segment.name}`);
    } catch (error) {
      console.error(`❌ Error fetching categories for ${segment.name}:`, error);
      console.warn(`Continuing to next segment despite error...`);
    }
  }

  console.log(`\n🏁 Category Routes Generation Complete`);
  console.log(`Total Routes Generated: ${routes.length}`);
  return routes;
}
