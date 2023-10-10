import { UserConfig } from "vite";

const config: UserConfig = {
  build: {
    outDir: ".ssr",
    rollupOptions: {
      input: ["./bootstrap/main.tsx"],
      output: {
        entryFileNames: (chunk) => `${chunk.name}.js`,
      },
    },
  },
};

export default config;
