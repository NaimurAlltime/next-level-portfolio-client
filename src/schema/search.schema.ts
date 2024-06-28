import { z } from "zod";

const searchValidation = z.object({
  location: z.string({
    required_error: "title is required",
    invalid_type_error: "title must be a string",
  }),
  pickDate: z.string({
    required_error: "title is required",
    invalid_type_error: "title must be a string",
  }),
  pickTime: z.string({
    required_error: "title is required",
    invalid_type_error: "title must be a string",
  }),
  returnDate: z.string({
    required_error: "title is required",
    invalid_type_error: "title must be a string",
  }),
  returnTime: z.string({
    required_error: "title is required",
    invalid_type_error: "title must be a string",
  }),
  dropOff: z.boolean({
    invalid_type_error: "title must be a string",
  }).optional(),
  driverAge: z.boolean({
    invalid_type_error: "title must be a string",
  }).optional(),
});

export default searchValidation;
