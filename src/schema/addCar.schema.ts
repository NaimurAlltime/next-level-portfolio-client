import { z } from "zod";

const addCarValidation = z.object({
  title: z.string({
    required_error: "title is required",
    invalid_type_error: "title must be a string",
  }),
  location: z.string({
    required_error: "location is required",
    invalid_type_error: "location must be a string",
  }),
  image: z.any({
    required_error: "location is required",
  }),
  description: z
    .string({
      invalid_type_error: "description must be a string",
    })
    .optional(),
  rentPerDay: z.string({
    required_error: "rentPerDay is required",
    invalid_type_error: "rentPerDay must be a string",
  }),
  isAvailable: z
    .boolean({
      invalid_type_error: "isAvailable must be a boolean",
    })
    .optional(),
  featured: z
    .boolean({
      invalid_type_error: "featured must be a boolean",
    })
    .optional(),
  category: z
    .string({
      required_error: "Category is must required",
      invalid_type_error: "Category must be a string",
    })
    .refine(
      (data) => {
        return ["medium", "premium", "small", "large", "SUVs", "People Carrier", "Estate"].includes(data);
      },
      {
        message: "Category must be a medium, premium, small, large, SUVs, People Carrier or Estate",
      }
    ),
  seats: z.string({
    required_error: "seats is required",
    invalid_type_error: "seats must be a string",
  }),
  bags: z.string({
    required_error: "bags is required",
    invalid_type_error: "bags must be a string",
  }),
  dors: z.string({
    required_error: "dors is required",
    invalid_type_error: "dors must be a string",
  }),
  fuel: z.string({
    required_error: "fuel is required",
    invalid_type_error: "fuel must be a string",
  }),
  ac: z
    .boolean({
      invalid_type_error: "ac must be a boolean",
    })
    .optional(),
  automatic: z
    .boolean({
      invalid_type_error: "automatic must be a boolean",
    })
    .optional(),
});

export default addCarValidation;
