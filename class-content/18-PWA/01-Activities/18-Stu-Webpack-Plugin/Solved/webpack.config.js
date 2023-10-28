const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "./public/assets/js/app.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + "/public/dist/",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      name: 'Image Application',
      short_name: 'Image App',
      description: 'Some activity they are making me do',
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",
      inject: false,
      fingerprints: false,
      icons: [
        {
          src: path.resolve(__dirname, 'public/assets/images/icons/icon-512x512.png'),
          sizes: [72, 96, 128, 144, 152, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ]
};

module.exports = config;
