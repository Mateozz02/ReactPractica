import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm, SubmitHandler } from "react-hook-form";
import  CustomInput  from "./components/CustomInput";
import { FormValues, schema } from "./schema/form.schema";


export const CustomForm = () => {
  const {control,handleSubmit,formState: { errors }} = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit : SubmitHandler<FormValues> = (data) => {
    console.log(data);
  }
  return (
    <form onClick={handleSubmit(onSubmit)}>
      <CustomInput name="name" label="Nombre" type="text" control={control} error={errors.name} />
      <CustomInput name="email" label="Correo Electronico" type="email" control={control} error={errors.email} />
      <CustomInput name="password" label="Contrasenia" type="password" control={control} error={errors.password} />
      <CustomInput name="confirmPassword" label="Confirmar contrasenia" type="password" control={control} error={errors.confirmPassword} />
      <button type="submit" name="submit">Enviar</button>
    </form>

  )

};
