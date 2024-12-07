import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroe",
  title: "Heroes",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Social URL",
      type: "url",
    }),
    defineField({
      name: "met",
      title: "Have you met this hero?",
      type: "boolean",
    }),
  ],
});
