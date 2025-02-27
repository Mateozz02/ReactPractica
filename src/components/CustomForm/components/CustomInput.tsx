import { Control, Controller, FieldError } from "react-hook-form"
import { FormValues } from "../schema/form.schema";

interface Props {
  name : keyof FormValues;
  type? : string;
  label : string;
  control : Control<FormValues>;
  error? : FieldError;
  
}

   const CustomInput = ({name, type,label,control,error} : Props) =>{
  return (
      <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
      name={name} 
      control={control} 
      render={({field})=> <input id={name} type={type} {...field} className={`form-control ${error ? "is-invalid" : ""}`}/>} />
          {error && <p className="error">{error.message}</p>}
      </div>
  )
}

export default CustomInput
