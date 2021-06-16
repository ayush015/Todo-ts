export const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: any) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://vast-inlet-30630.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
