module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    output: {
        path: __dirname + "/app/assets/javascripts/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["react", "es2015"]
                }
            },

            {
              loader: "react-map-styles"
            }
        ]
    }
};
