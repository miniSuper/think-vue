const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: "./src/index.js", //入口
  // 出口
  output: {
    // 虚拟打包路径 就是说文件夹不会真正生成 而是在8080端口虚拟生成
    publicPath: "/think-vue/",
    filename: "bundle.js",
  },
  devServer: {
    port: 8080, // 端口号
    contentBase: "www", // 静态资源文件夹
  },
};
