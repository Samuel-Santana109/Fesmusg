import { useState } from "react"
import { toast } from 'react-toastify';
import { registerMusician } from "../api";

const useFormPage = () => {
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (e: any) => {
    var formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData)

    setIsLoading(true)

    registerMusician({
      body: formValues,
      onSuccess: () => {
        setIsRegisterSuccess(true)
      },
      onError: () => {
        toast.error("Ocorreu um erro inesperado")
      },
      onFinnaly: () => {
        setIsLoading(false)
      }
    })
  }

  return {
    isRegisterSuccess,
    onSubmit,
    isLoading
  }
}

export default useFormPage