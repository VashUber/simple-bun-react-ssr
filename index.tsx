import { renderToReadableStream } from "react-dom/server";
import { FileSystemRouter } from "bun";

const router = new FileSystemRouter({
  dir: process.cwd() + "/pages",
  style: "nextjs",
});

Bun.serve({
  port: 3000,
  async fetch(request: Request) {
    if (request.url.includes("/bootstrap/")) {
      return new Response(Bun.file(`./bootstrap/main.js`));
    }

    const route = router.match(request);
    if (!route) {
      return new Response("");
    }
    const { default: Root } = await import(route.filePath!);
    return new Response(
      await renderToReadableStream(<Root {...route.params} />, {
        bootstrapModules: [`/bootstrap/main.js`],
      })
    );
  },
});
