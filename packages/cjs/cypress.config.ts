import { defineConfig } from "cypress";
import { foo } from "./common_js";
// import { bar } from "./es_module";
import { barTs } from "./es_module_ts";
// import {a} from '../esm/index'  // 💥 importing from ESM package in CJS

console.log('foo from CJS file is', foo)
// console.log('bar from ESM file is', bar)
console.log('bar from ESM.ts file is', barTs)
// console.log('a from esm package file is', a); // 💥 importing from ESM package in CJS

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
