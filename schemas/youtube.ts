import { defineField, defineType } from "sanity";
import { YoutubeWidget } from "@/app/components/widgets/YoutubeWidget";

export const youtube = defineType({
  name: "youtube",
  title: "Youtube",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Youtube Video",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
  },
  components: {
    preview: YoutubeWidget,
  },
});
