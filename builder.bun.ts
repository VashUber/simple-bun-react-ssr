await Bun.build({
  entrypoints: ["./bootstrap/main.tsx"],
  outdir: "./.ssr",
  naming: {
    entry: "[name].[ext]",
    chunk: "[name]-[hash].[ext]",
    asset: "[name]-[hash].[ext]",
  },
  minify: true,
  splitting: true,
  format: "esm",
  target: "browser",
});
