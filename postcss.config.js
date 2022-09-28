

module.exports = {
    plugins: {
      "postcss-pxtorem": {
        rootValue({ file }) {
          return file.indexOf("vant") !== -1 ? 37.5 : 75; // 37.5用于兼容vant-ui，75基于750px设计稿
        },
        unitPrecision: 5,
        propList: ["*"], // 需要转换rem的元素
        // selectorBlackList: ["van-"],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
        exclude: /node_modules|floder_name/i,
      },
    },
}