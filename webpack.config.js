const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // remove arquivos inutilizados de builds anteriores.

module.exports = env => {
    // Use env.<YOUR VARIABLE> here:
    // console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
    // console.log('Production: ', env.production); // true

    return {
        mode: 'development',
        entry: './src/scripts/main.js',
        output: {
            // filename: 'build.js',
            filename: '[name].[contenthash].js', // lidando com caching do browser
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
    
        /**
         * Source Maps: facilitam encontrar erros específicos a um determinado arquivo js.
         * Ele permite identificar o arquivo específico, independente se o mesmo foi buildado junto a outros três para um 'main.js'.
         * 
         * Ex.: Três arquivos 'a.js', 'b.js' e 'c.js' foram buildados em um arquivo 'main.js'. Caso um deles retorne erro,
         * o source map permite identificar qual deles é o responsável, ao invés de retornar que o erro ocorreu no 'main.js'.
         *  */
        devtool: 'inline-source-map',
    
        /**
         * Com webpack-dev-server, fazendo com que os arquivos do build sejam servidos em localhost:8080.
         */
        devServer: {
            contentBase: './dist',
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
            }),
    
            /**
             * Usando Watch Mode: preciso dizer ao CleanWebpackPlugin para não remover o arquivo index.html após a build incremental
             * gerada pelo watch, através da opção 'cleanStaleWebpackAssets'.
             */
            new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        ],
    
        /**
         * A partir do código de desenvolvimento, irá fatiar um 'chunk' para um arquivo separado. Ou seja:
         * Ex.: O código js do projeto em geral irá ser buildado para um 'main.js', por exemplo.
         * 
         * No exemplo abaixo, as dependências de 'node_modules' (como bibliotecas) serão buildadas para um outro chunk
         * separado, 'vendor', já que as mesmas não mudam com tanta frequência comparado ao código fonte
         * de um projeto. O que reduz a necessidade de subir um novo arquivo ao servidor de um
         * site ou app.
         * 
         */
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

        devServer: {
            port: 9000,
        },
    }
};
