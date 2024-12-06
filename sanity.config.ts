import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { projectId, dataset } from "./lib/env.api";

export default defineConfig({
  name: "timhodgson",
  title: "timhodgson.com",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool(), codeInput(), table()],
  schema: { types: schemaTypes },
});
