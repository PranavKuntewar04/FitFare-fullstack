import React, { useContext } from "react";
import FormContext from "../context/FormContext.jsx";


const useFormContext = () => {
  return (
    useContext(FormContext)
  )
}

export default useFormContext