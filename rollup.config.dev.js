/*
 * @author: <your_name>
 * @date: <datetime>
 * @description: rullup configuration for development
 */

import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import serve from "rollup-plugin-serve";
import tsplugin from "rollup-plugin-typescript2";
import image from "rollup-plugin-inline-image";

export default {
  input: "./examples/examples.tsx",
  output: {
    file: "dist/examples.bundle.js",
    format: "iife",
    sourcemap: true,
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
  },
  external: ["react", "react-dom"],
  plugins: [
    image(),
    resolve(),
    commonjs(),
    postcss({
      modules: false,
    }),
    tsplugin({
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
      },
    }),

    serve({
      open: true,
      port: 3000,
      contentBase: "./",
    }),
    livereload(),
  ],
};
