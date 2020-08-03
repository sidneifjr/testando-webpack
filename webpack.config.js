const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'main.js',
        // path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.html$/,

                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // {
            //     test: /\.(png|svg|jpg|gid)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',

                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true, // webpack 2 or newer

                            // Minificadores de imagens/assets em vários formatos.
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },

                            optipng: {
                                enabled: false,
                            },

                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },

                            gifsicle: {
                                interlaced: false,
                            },

                            // Habilita WEBP, opcional.
                            webp: {
                                quality: 75
                            }
                        }
                    },

                    // {
                    //     loader: 'url-loader',
                    //     options: {
                    //         limit: 8192,
                    //     },
                    // },
                ]
            },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192,
            //             },
            //         }
            //     ]
            // },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}
