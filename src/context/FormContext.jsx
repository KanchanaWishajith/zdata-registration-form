import { createContext, useContext, useState } from "react";

const FormContext = createContext();
export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '',
    password: '', confirmPassword: ''
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
