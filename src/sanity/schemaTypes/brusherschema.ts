import { defineField, defineType } from "sanity";

export const BrusherType = defineType({
  name: "user_number",
  title: "User Number",
  type: "document",
  fields: [
    defineField({
      name: "user_number",
      title: "User Number",
      type: "string",
    }),
    defineField({
      name: "user_ip_address",
      title: "User IP Address",
      type: "string",
    }),
    defineField({
      name: "user_location",
      title: "User Location",
      type: "string",
    }),
    defineField({
      name: "submittedAt", // This field will store the timestamp
      title: "Submitted At",
      type: "datetime", // Use 'datetime' to store both date and time
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
    }),
  ],
});
