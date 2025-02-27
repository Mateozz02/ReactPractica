import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("EL correo no es valido").min(1, "El correo es obligatorio"),
    password: z.string().min(5, "La contrasenia debe tener como minimo 5 caracteres"),
    confirmPassword: z.string().min(5, "La contrasenia debe tener como minimo 5 caracteres"),
  }).refine(data => data.password === data.confirmPassword, {
    message: "Las contrasenias no coinciden",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof schema>;

