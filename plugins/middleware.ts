export default defineNuxtPlugin((nuxtApp) => {
  addRouteMiddleware(
    "GlobalDynamicLogger",
    (to) => {
      if (to.path == "/database") {
        return abortNavigation("You cant visit the database page");
      }
      if (
        (to.params.country as string | undefined)?.toLowerCase().trim() ==
          "israel" ||
        (to.query.country as string | undefined)?.toLowerCase().trim() ==
          "israel"
      ) {
        return abortNavigation("Fuck Israel");
      }
      console.log("Global Dynamic Middleware in the plugins directory");
    },
    { global: true }
  );
  addRouteMiddleware("GlobalLocalLogger", () => {
    console.log("Local Dynamic Middleware in the plugins directory");
  });
});
