import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { fetchMusiciansList, login } from "../../api"

const useAdminPage = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [tableList, setTableList] = useState([])

  const storeToken = (data: {
    refresh_token: string,
    token: string,
    user: string,
  }) => {
    window.localStorage.setItem("refresh_token", data.refresh_token)
    window.localStorage.setItem("token", data.token)
    window.localStorage.setItem("user", JSON.stringify(data.user))
  }

  const hasToken = () => {
    return window.localStorage.getItem("refresh_token") && window.localStorage.getItem("token")
  }

  const onSubmit = (e: any) => {
    const email = e.target[0].value
    const password = e.target[1].value

    setIsLoading(true)

    login({
      body: { 
        email, 
        password 
      },
      onSuccess: (data) => {
        storeToken(data);
        toast.success("Logado com sucesso")
        setIsLogged(true)
      },
      onError: () => {
        toast.error("Erro inesperado")
      },
      onFinnaly: () => {
        setIsLoading(false)
      }
    });
  }

  const getTableList = (onFinnaly?: () => void) => {
    fetchMusiciansList({
      onSuccess: (data: any) => {
        console.log({ data })
        setTableList(data);
      },
      onFinnaly: () => {
        onFinnaly && onFinnaly()
      }
    })
  }

  useEffect(() => {
    if(hasToken()){
      setIsLogged(true)
      getTableList();
    }else{
      setIsLogged(false)
    }
  }, [])

  return {
    isLoading,
    isLogged,
    onSubmit,
    tableList,
    getTableList
  }
}

export default useAdminPage