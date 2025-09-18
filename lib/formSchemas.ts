import z from "zod";

const MAX_FILE_SIZE = 5_000_000; // 5 MB
const ALLOWED_FILE_TYPES_AVATAR = ["application/pdf", "image/png", "image/jpeg"];
const ALLOWED_FILE_TYPES_DOC = ["application/pdf", "image/png", "image/jpeg"];

export const userFormSchema = z.object({
  firstName: z.string().min(1, { error: "First name must have at least 1 letter." }).max(50),
  lastName: z.string().min(1, { error: "Last name must have at least 1 letter." }).max(50),
  email: z.email().min(1, { error: "A valid email address is required." }),
  password: z
    .string()
    .min(8, { error: "Password must be 8 or more characters." })
    .max(32, { error: "Password must be 32 or less characters." }),
  role: z.enum(["ADMIN", "GENERAL"]),
  phoneNumber: z.string().max(32, { error: "Phone number must be 32 or less characters." }).optional(),
  streetAddress: z.string().max(50, { error: "Street address must be 50 or less characters" }).optional(),
  city: z.string().max(28, { error: "City must be 28 or less characters" }).optional(),
  province: z.string().max(28, { error: "Province must be 28 or less characters" }).optional(),
  postalCode: z.string().max(7, { error: "Postal Code must be 7 or less characters" }).optional(),
  userAvatar: z
    .any()
    .refine((f) => (f instanceof File ? f.size <= MAX_FILE_SIZE : true), {
      message: `Avatar must be <= ${MAX_FILE_SIZE / 1_000_000} MB`,
    })
    .refine((f) => (f instanceof File ? ALLOWED_FILE_TYPES_AVATAR.includes(f.type) : true), {
      message: "Avatar PNG or JPG",
    })
    .optional(),
  note: z.string().max(280, { error: "Note must be 280 or less characters." }).optional(),

  //  Guard inputs start here
  employmentStatus: z.enum(["ACTIVE", "INACTIVE", "TERMINATED"]),
  hourlyRate: z.coerce.number().min(0, { message: "Hourly rate must be 0 or higher" }).optional(),
  licenseNumber: z
    .any()
    .refine((f) => (f instanceof File ? f.size <= MAX_FILE_SIZE : true), {
      message: `Security license must be <= ${MAX_FILE_SIZE / 1_000_000} MB`,
    })
    .refine((f) => (f instanceof File ? ALLOWED_FILE_TYPES_DOC.includes(f.type) : true), {
      message: "Security license must be PDF, PNG or JPG",
    }),
  smartServe: z
    .any()
    .refine((f) => (f instanceof File ? f.size <= MAX_FILE_SIZE : true), {
      message: `Smart Serve must be <= ${MAX_FILE_SIZE / 1_000_000} MB`,
    })
    .refine((f) => (f instanceof File ? ALLOWED_FILE_TYPES_DOC.includes(f.type) : true), {
      message: "Smart Serve must be PDF, PNG or JPG",
    }),
  casualAttire: z.boolean(),
  semiFormalAttire: z.boolean(),
  formalAttire: z.boolean(),
  guardNotes: z.string().max(280, { error: "Note must be 280 or less characters." }).optional(),
});
