const webpackMerge = require("webpack-merge"); //融合对象

module.exports = (presets) => {
    presets = presets || [];
    const mergePresets = [].concat(presets); //只传一个参数时是字符串，这里做处理，无论多少参数都拼接成数组
    const mergeConfig = mergePresets.map((presetName) => {
        return require(`./presets/webpack.${presetName}`);
    })
    return webpackMerge({}, ...mergeConfig);
}