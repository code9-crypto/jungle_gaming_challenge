import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import Inicio from "./routes/Inicio";
import Mercado from "./routes/Mercado";
import Criadores from "./routes/Criadores";
import Aprenda from "./routes/Aprenda";
import App from "./App";

const rootRoute = createRootRoute({
  component: App
});

const inicioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Inicio,
});

const mercadoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/routes/mercado",
  component: Mercado,
});

const criadoresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/routes/criadores",
  component: Criadores,
});

const aprendaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/routes/aprenda",
  component: Aprenda,
});

const routeTree = rootRoute.addChildren([
  inicioRoute,
  mercadoRoute,
  criadoresRoute,
  aprendaRoute,
]);

export const router = createRouter({
  routeTree,
});
