import { defineConfig } from '@rspack/cli';

export default defineConfig({
  entry: {
    main: './src/main.ts',
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|ts)$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
          detectSyntax: 'auto',
        },
        type: 'javascript/auto',
      },
    ],
  },
  resolve:{
    extensions:[
      ".ts"
    ]
  }
});