<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'JamboPass') }}</title>

    <!-- Meta Tags for SEO -->
    <meta name="description"
        content="JamboPass is Kenya's leading event ticketing platform, offering seamless online and offline ticket sales. Purchase tickets with M-Pesa, Visa, and enjoy easy verification through scanning.">
    <meta name="keywords" content="Event Tickets, Kenya, Ticketing Platform, JamboPass, M-Pesa, Event Verification">
    <meta name="author" content="Infinity Vortex">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="JamboPass - Kenya's Premier Event Ticketing Platform">
    <meta property="og:description"
        content="Discover JamboPass, the top event ticketing platform in Kenya, where buying and selling event tickets is effortless. Secure payments via M-Pesa, Visa, and more.">
    <meta property="og:url" content="https://jambopass.john-muinde.com">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://jambopass.john-muinde.com/seo-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="JamboPass - Kenya's Premier Event Ticketing Platform">
    <meta name="twitter:description"
        content="Explore JamboPass, where ticket buying and selling is seamless. Enjoy secure payments through M-Pesa and Visa.">

    <!-- Structured Data for SEO -->
    <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "JamboPass",
      "url": "https://jambopass.john-muinde.com",
      "logo": "https://jambopass.john-muinde.com/logo.png",
      "sameAs": [
        "https://www.instagram.com/jambopass/",
        "https://twitter.com/jambopass",
        "https://www.facebook.com/jambopass"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254-708-660880",
        "contactType": "Customer Service",
        "email": "info@jambopass.com"
      },
      "description": "JamboPass is Kenya's leading event ticketing platform, offering seamless online and offline ticket sales powered by Infinity Vortex.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KE"
      },
      "founder": {
        "@type": "Person",
        "name": "Infinity Vortex"
      }
    }
    </script>

    <style>
        .initial-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: background-color 0.3s ease;
        }

        .loader-spinner {
            width: 35px;
            height: 35px;
            margin-bottom: 16px;
            border: 4px solid #eab308;
            border-top: 4px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    </style>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    <div id="initial-loader" class="initial-loader">
        <div
            style="text-align: center; display: flex; justify-content: center; align-items: center; flex-direction: column;">
            <p id="loader-text" style="font-size: 1.125rem; color: #374151;">JamboPass</p>
            <div class="loader-spinner"></div>
        </div>
    </div>

    @inertia

    <script>
        // Apply theme based on localStorage value
        function applyTheme(theme) {
            const root = document.documentElement;
            const loader = document.getElementById('initial-loader');
            const loaderText = document.getElementById('loader-text');

            if (theme === 'dark') {
                root.classList.add('dark');
                loader.style.backgroundColor = '#1f2937'; // Dark background
                loaderText.style.color = '#f9fafb'; // Light text
            } else {
                root.classList.remove('dark');
                loader.style.backgroundColor = '#ffffff'; // Light background
                loaderText.style.color = '#374151'; // Dark text
            }
        }

        const theme = localStorage.getItem('theme') || 'system';
        if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark ? 'dark' : 'light');
        } else {
            applyTheme(theme);
        }

        // Try both events to ensure the loader is removed
        document.addEventListener('DOMContentLoaded', function() {
            const loader = document.getElementById('initial-loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 1000); // Allow transition to complete
            }
        });

        // Backup in case DOMContentLoaded fires too early
        window.addEventListener('load', function() {
            const loader = document.getElementById('initial-loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 300); // Allow transition to complete
            }
        });
    </script>
</body>

</html>
