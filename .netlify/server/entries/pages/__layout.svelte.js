var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2835083a = require("../../chunks/index-2835083a.js");
var index = "";
const Nav = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  let width;
  width = 0;
  return `

${width > 1024 ? `<nav class="${"fixed top-1/4 left-40 text-xl scroll-smooth"}"><ul class="${"relative w-36 text-center -skew-y-[15deg] bg-[#191919]"}"><li class="${"w-full after:content-[''] after:-z-20 hover:bg-red-900 after:absolute after:-top-10 after:left-0 after:w-full after:h-10 after:bg-[#141414] after:origin-bottom after:skew-x-[45deg] before:content-[''] before:absolute before:top-0 before:-left-10 before:-z-10 before:h-full before:bg-[#141414] before:origin-right before:skew-y-[45deg] before:w-10 transition duration-100 my-8 py-3 cursor-pointer hover:text-[#afafaf]"}"><a class="${"p-4 w-full h-full"}" href="${"/"}">Home</a></li>
        <li class="${"w-full after:content-[''] after:-z-20 hover:bg-red-900 after:absolute after:-top-10 after:left-0 after:w-full after:h-10 after:bg-[#141414] after:origin-bottom after:skew-x-[45deg] before:content-[''] before:absolute before:top-0 before:-left-10 before:-z-10 before:h-full before:bg-[#141414] before:origin-right before:skew-y-[45deg] before:w-10 transition duration-100 my-8 py-3 cursor-pointer hover:text-[#afafaf]"}"><a class="${"p-4 w-full h-full"}" href="${"#about"}">About</a></li>
        <li class="${"w-full after:content-[''] after:-z-20 hover:bg-red-900 after:absolute after:-top-10 after:left-0 after:w-full after:h-10 after:bg-[#141414] after:origin-bottom after:skew-x-[45deg] before:content-[''] before:absolute before:top-0 before:-left-10 before:-z-10 before:h-full before:bg-[#141414] before:origin-right before:skew-y-[45deg] before:w-10 transition duration-100 my-8 py-3 cursor-pointer hover:text-[#afafaf]"}"><a class="${"p-4 w-full h-full"}" href="${"#projects"}">Projects</a></li></ul></nav>` : `<nav class="${"fixed backdrop-blur-md m-0 top-0 left-0 w-full"}"><ul class="${"flex py-6 ml-6 px-4 text-lg"}"><li class="${"mr-4 "}"><a class="${"inline-block w-full h-full hover:text-gray-300 transition duration-150"}" href="${"/"}">Home</a></li>
        <li class="${"mr-4 "}"><a class="${"inline-block w-full h-full hover:text-gray-300 transition duration-150"}" href="${"#about"}">About</a></li>
        <li class="${"mr-4 "}"><a class="${"inline-block w-full h-full hover:text-gray-300 transition duration-150"}" href="${"#projects"}">Projects</a></li></ul></nav>`}`;
});
const _layout = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2835083a.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
<div class="${"mx-0 lg:mx-96 p-8 overflow-hidden lg:p-16 mt-16"}">${slots.default ? slots.default({}) : ``}</div>`;
});
