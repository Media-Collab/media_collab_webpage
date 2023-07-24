const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "www.w3.org"],
  },
  experimental: {
    newNextLinkBehavior: true,
  },
};
