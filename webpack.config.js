const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@bebel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(js)#/,
                use: [
                    {
                        loader: 'bable-loader'
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: ExtractCSS.extract([
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins() {
                                return [autoprefixer({ browsers: "cover 99.5%" })];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].[format]"
    },
    plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;