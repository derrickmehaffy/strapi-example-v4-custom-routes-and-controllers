module.exports = {
  async testGet(ctx) {
    return {
      okay: true,
      type: "GET",
    };
  },
};
