const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/scripts/main.ts',

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },

            {
                test: /\.pug$/,
                use: ["pug-loader"]
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
                use: [
                    {
                        loader: "babel-loader",
                    },
                ]
            },

            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src/scripts')]
            },

            {
                test: /\.(gif|jpe?g|png|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',

                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "imgs"
                        }
                    },

                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //         disable: true,
                    //         mozjpeg: {
                    //             progressive: true,
                    //             quality: 65
                    //         },
    
                    //         optipng: {
                    //             enabled: false,
                    //         },
    
                    //         pngquant: {
                    //             quality: [0.65, 0.90],
                    //             speed: 4
                    //         },
    
                    //         gifsicle: {
                    //             interlaced: false,
                    //         },
    
                    //         webp: {
                    //             quality: 75
                    //         }
                    //     }
                    // },
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',

                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts"
                        }
                    }
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    plugins: [
        new HtmlWebPackPlugin({
            title: '',
            template: "./src/views/index.pug",
            filename: "./index.html",
            hash: false
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],

    optimization: {
        moduleIds: 'hashed', // o hash de vendor se manterá consistente entre builds.
        runtimeChunk: 'single',

        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};
