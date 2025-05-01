const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "number-baseball-setting",
  mode: "development", // 실서비스: production
  devtool: "eval", // 개발용 소스맵. 배포용은 'hidden-source-map'등 사용
  resolve: {
    extensions: [".js", ".jsx"], // import 시 확장자 생략 허용
  },

  entry: {
    app: ["./client"], // client.jsx 또는 client.js
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"], // browserslist
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-transform-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"), // C\users\kdhgu\...\2.끝말잇기\dist
    filename: "app.js",
    publicPath: "/dist/",
  }, // 출력
  devServer: {
    // webpack 5버전 이후
    devMiddleware: { publicPath: "/dist/" }, // app.use('/dist', express.static(__dirname, 'dist'))
    static: { directory: path.resolve(__dirname) },
    hot: true,
    port: 3000, // 포트 고정 (선택사항)
  },
};
