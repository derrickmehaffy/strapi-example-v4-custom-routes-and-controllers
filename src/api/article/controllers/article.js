"use strict";

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async testPost(ctx) {
    return {
      okay: true,
      type: "POST",
    };
  },
}));
