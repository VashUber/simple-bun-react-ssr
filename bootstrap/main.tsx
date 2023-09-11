import { hydrateRoot } from "react-dom/client";

async function runHydration() {
  try {
    const path = window.location.pathname.replace(/\//, "") || "index";
    const page = `${path}.tsx`;

    // doesn't work yet, I wrote issue https://github.com/oven-sh/bun/issues/5005
    const { default: Page } = await import(`../pages/${page}`);

    hydrateRoot(document.getElementById("app")!, <Page />);
  } catch (error) {
    console.log(error);
  }
}

runHydration();
