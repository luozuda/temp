module.exports = {
    devtool: "source-map",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"] //从右到左执行
        }]
    }
}