import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/formInputReducer";

const FormInputContext = createContext();

const FormInputProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    captchaPreview: [],
    captchaInput: "",
    errorMsg: "",
    model: false,
  });

  return (
    <FormInputContext.Provider value={{ state, dispatch }}>
      {children}
    </FormInputContext.Provider>
  );
};

const useFormInput = () => useContext(FormInputContext);
export { FormInputProvider, useFormInput };
