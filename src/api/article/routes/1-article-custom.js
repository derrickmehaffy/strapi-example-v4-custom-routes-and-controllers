module.exports = {
  routes: [
    {
      method: "POST",
      path: "/articles/custom/testPost",
      handler: "api::article.article.testPost",
    },
    {
      method: "GET",
      path: "/articles/custom/testGet",
      handler: "api::article.1-article-custom.testGet",
    },
  ],
};
