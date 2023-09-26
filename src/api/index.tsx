const baseUrl = "http://vps49484.publiccloud.com.br:3001/v1/";

export const login = async ({
  body,
  onSuccess,
  onError,
  onFinnaly
}: {
  body: any,
  onSuccess?: (req: any) => void,
  onError?: (e: any) => void,
  onFinnaly?: () => void
}) => {
  const url = `${baseUrl}authenticate/login`

  try{
    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
  
    const data = await response.json()

    onSuccess && onSuccess(data)
  
  }catch(e){
    console.error({ e })
    onError && onError({ e })
  }finally{
    onFinnaly && onFinnaly();
  }
}

export const registerMusician = async ({
  body,
  onSuccess,
  onError,
  onFinnaly
}: {
  body: any,
  onSuccess?: (req: any) => void,
  onError?: (e: any) => void,
  onFinnaly?: () => void
}) => {
  const url = `${baseUrl}singers/create`

  try {
    const request = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )

    onSuccess && onSuccess(request)
  } catch (e) {
    console.error(e)
    onError && onError(e)
  } finally {
    onFinnaly && onFinnaly();
  }
}

export const fetchMusiciansList = async ({
  onSuccess,
  onError,
  onFinnaly
}: {
  onSuccess?: (req: any) => void,
  onError?: (e: any) => void,
  onFinnaly?: () => void
}) => {
  const url = `${baseUrl}singers/list`

  try {
    const response = await fetch(
      url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${window.localStorage.getItem("token")}`
        },
      }
    )

    const data = await response.json()

    onSuccess && onSuccess(data)
  } catch (e) {
    console.error(e)
    onError && onError(e)
  } finally {
    onFinnaly && onFinnaly();
  }
}

export const postUpdateStatus = async ({
  body,
  onSuccess,
  onError,
  onFinnaly
}: {
  body: any,
  onSuccess?: (req: any) => void,
  onError?: (e: any) => void,
  onFinnaly?: () => void
}) => {
  const url = `${baseUrl}singers/confirmation_email`

  try {
    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${window.localStorage.getItem("token")}`
        },
        body: JSON.stringify(body),
      }
    )

    const data = await response.json()

    onSuccess && onSuccess(data)
  } catch (e) {
    console.error(e)
    onError && onError(e)
  } finally {
    onFinnaly && onFinnaly();
  }
}