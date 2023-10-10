import { hydrateRoot } from "react-dom/client";

async function runHydration() {
  try {
    const path = window.location.pathname.replace(/\//, "") || "index";

    const { default: Page } = await import(`../pages/${path}.tsx`);

    hydrateRoot(document.getElementById("app")!, <Page />);
  } catch (error) {
    console.log(error);
  }
}

runHydration();
