// const scripts = {
//   index: "@/Main/index.js",
//   gpgpu: "./Main/gpgpu.js",
// };

// import(scripts[window.scriptKey]);

// import("@/Main/gpgpu.js");

switch (window.scriptKey) {
  case "index":
    import("@/Main/index");
    break;
  case "gpgpu":
    import("@/Main/gpgpu");
    break;
}
