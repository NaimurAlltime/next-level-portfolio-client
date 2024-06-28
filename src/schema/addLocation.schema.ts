import { z } from "zod";

const addLocationValidation = z.object({
  name: z.string({
    required_error: "title is required",
  }),
  mapIframe: z.string({}).optional(),
});

export default addLocationValidation;
