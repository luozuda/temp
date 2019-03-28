const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    output: {
        filename: "[chunkHash].js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]//从右到左执行
        }]
    },
    plugins:[
        new MiniCssExtractPlugin()
    ]
}