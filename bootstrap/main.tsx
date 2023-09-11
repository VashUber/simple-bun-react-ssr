import { hydrateRoot } from "react-dom/client";
import { Content } from "../pages";

hydrateRoot(document.getElementById("app")!, <Content />);
