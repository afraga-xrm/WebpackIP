const path = require('path');
const os = require('os');

module.exports = {
  entry: './src/index.ts', // Entry point for the application
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: os.cpus().length - 1, // Number of worker processes
            },
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true, // Enable HappyPack mode for compatibility
            },
          },
        ],
        include: [path.resolve(__dirname, 'src')], // Include all files in the src directory and subfolders
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: os.cpus().length - 1, // Number of worker processes
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'], // Resolve both JavaScript and TypeScript files
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
