/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.datocms-assets.com", "cdn.sanity.io"],
  },
  i18n: {
    locales: ["ru", "en"], // Укажите поддерживаемые языки
    defaultLocale: "ru", // Укажите язык по умолчанию
  },
};

export default nextConfig;
