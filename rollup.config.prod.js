/*
 * @author: <your_name>
 * @date: <datetime>
 * @description: rullup configuration for publish
 */

import closureCompiler from "@ampproject/rollup-plugin-closure-compiler";
import commonjs from "rollup-plugin-commonjs";
import image from 'rollup-plugin-inline-image';
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import tsplugin from "rollup-plugin-typescript2";

export default [
  {
    input: "src/MyComponent.tsx",
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: "umd",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    external: ["react", "react-dom"],
    plugins: [
      image(),
      postcss({
        modules: false,
      }),
      tsplugin({
        // NOTE: enable this to work compatable with closure compiler,
        // or will cause Unknown object type "asyncfunction" error
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      resolve(),
      commonjs(),
      closureCompiler(),
    ],
  },
  {
    input: "src/MyComponent.tsx",
    output: [{ file: pkg.main, format: "cjs" }, { file: pkg.module, format: "es" }],
    external: ["react", "react-dom"],
    plugins: [
      image(),
      postcss({
        modules: false,
      }),
      tsplugin({
        clean: true,
        tsconfigOverride: {
          // NOTE: exclude to avoid unwanted files generated for publishing
          exclude: ["examples", "__mocks__", "__tests__"],
        },
      }),
    ],
  },
];
