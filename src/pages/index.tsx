import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Form from "../form"
import Alert from "../components/alert"
import useFormPage from "./hook"

function FormPage() {
  const {
    isRegisterSuccess, 
    onSubmit,
    isLoading
  } = useFormPage()

  return (
    <div className="p-8">
      <Navbar title="FEMUSG Cadastro de música" />
      {isRegisterSuccess 
        ? <div className="my-40 max-w-[500px] mx-auto">
            <Alert message="Cadastro realizado com sucesso e enviado para análise" />
          </div> 
        : <Form 
            onSubmit={(e: any) => {
              onSubmit(e)
            }}
            isLoading={isLoading}
          />
      }
      <Footer />
    </div>
  )
}

export default FormPage


