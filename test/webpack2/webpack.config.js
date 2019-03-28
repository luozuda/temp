const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge"); //融合对象
const loaderPresets = require("./build-utils/loadPresets");
const configMode = (mode) => {
    return require(`./build-utils/webpack.${mode}.js`);
}

module.exports = ({
    mode,
    presets
}) => {

    return webpackMerge({
            mode,
            entry: "./src/index.js",
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }]
                }, {
                    test: /\.jpe?g$/,
                    use: [{
                        loader: "url-loader",
                        //options用来配置loader
                        options: {
                            limit: 5000 //大于5000bit，直接生成一个图片
                        }
                    }]
                }]
            },
            plugins: [
                new htmlWebpackPlugin({
                    template: "./index.html"
                }), //生成index.html并引入打包好的js，模板为自己建的index.html
                new webpack.ProgressPlugin() //显示打包进度
            ]
        },
        configMode(mode),
        loaderPresets(presets) //加载presets
    )
}