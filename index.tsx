import { renderToReadableStream } from "react-dom/server";
import { RootLayout } from "./layouts/default";

const router = new Bun.FileSystemRouter({
  dir: process.cwd() + "/pages",
  style: "nextjs",
});

Bun.serve({
  port: 3000,
  async fetch(request: Request) {
    if (request.url.includes("/.ssr/")) {
      const url = new URL(request.url);

      return new Response(Bun.file(`.${url.pathname}`));
    }

    const route = router.match(request);
    if (!route) {
      return new Response("");
    }

    const { default: Root } = await import(route.filePath!);
    return new Response(
      await renderToReadableStream(
        <RootLayout>
          <Root {...route.params} />
        </RootLayout>,
        {
          bootstrapModules: [`/.ssr/main.js`],
        }
      )
    );
  },
});
