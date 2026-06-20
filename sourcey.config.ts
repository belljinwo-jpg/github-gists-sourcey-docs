import { defineConfig, openapi } from "sourcey";

export default defineConfig({
  name: "Modrinth API Reference",
  description: "Independent, source-generated reference for the public Modrinth API.",
  navigation: {
    tabs: [
      {
        tab: "API Reference",
        source: openapi("./openapi.yaml"),
      },
    ],
  },
  theme: {
    preset: "api-first",
    colors: {
      primary: "#1bd96a",
      light: "#62e993",
      dark: "#0f9e4b",
    },
  },
});
