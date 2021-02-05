// vue.config.js
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // 选项...
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
    // 关闭语法警告
    lintOnSave: false,
    // css
    css: {
        loaderOptions: {
            scss: {
                //  注意：在 sass-loader v8 中，这个选项名是 "prependData"
                prependData: `@import "@/stylus/main.scss";`
            },
        }
    },
    // 配置别名
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("a", resolve("src/assets"))
            .set("~", resolve("src/components"))
            .set("base", resolve("baseConfig"))
            .set("~p", resolve("views"))
            .set("public", resolve("public"));
    },
}