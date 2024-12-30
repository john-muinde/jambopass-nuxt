import showToast from "./notification";
import { APP_SEGMENTS } from "./api";
import moment from "moment";

import { ref, computed } from "vue";

export const stripHtml = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").substring(0, 160);
};

export const transformName = (name?: string): string => {
  if (!name) return "";
  return name
    .toLowerCase()
    .replace(/[\s/]+/g, "-") // Replace spaces and slashes with hyphens
    .replace(/[^\w-&]+/g, "") // Remove non-word characters except hyphens
    .replace(/-+/g, "-") // Replace consecutive hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

export function getProductLink(product: any = {}): string {
  if (!product) return `/${APP_SEGMENTS[0].slug}`;

  const { id, name, model_number, categories_json: categories } = product;

  const firstPart = getSegment(
    categories?.[0]?.parent_name_with_slashes?.split("/")[0]
  )?.slug;

  // Replace spaces with dashes
  const transformedName = transformName(name);
  const transformedModelNumber = transformName(model_number);

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

export const formatLocalDate = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm a");
};

// Validation and Formatting Utilities
export const validatePhoneNumber = (phone) => {
  const phoneRegex =
    /^(?:254|\+254|0)?(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;
  if (!phone) return "Phone number is required";
  if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
    return "Invalid Kenyan phone number";
  }
  return "";
};

export const validateCardNumber = (cardNumber) => {
  const cleanedNumber = cardNumber.replace(/\s/g, "");
  const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;

  if (!cardNumber) return "Card number is required";
  if (!cardRegex.test(cleanedNumber)) {
    return "Invalid card number";
  }
  return "";
};

export const formatPhoneNumber = (phone) => {
  return phone
    .replace(/\D/g, "") // Remove non-digits
    .slice(0, 12) // Limit to 12 characters
    .replace(/(\d{4})(?=\d)/g, "$1 "); // Add space every 4 digits
};

export const formatCardNumber = (cardNumber) => {
  return cardNumber
    .replace(/\D/g, "") // Remove non-digits
    .slice(0, 16) // Limit to 16 digits
    .replace(/(\d{4})(?=\d)/g, "$1 "); // Add space every 4 digits
};
