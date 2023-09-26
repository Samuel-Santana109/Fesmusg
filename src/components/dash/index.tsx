import { useState } from "react"
import Button from "../button"
import Footer from "../footer"
import Navbar from "../navbar"
import Loader from "../loader"
import { postUpdateStatus } from "../../api"

function Dash({ tableList, getTableList }: any) {
  const [activeTab, setActiveTab] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const getApprovedList = () => {
    return tableList.filter((item: any) => {
      return item.registration_status === "confirmado"
    })
  }

  const getNotApprovedList = () => {
    return tableList.filter((item: any) => {
      return item.registration_status === "rejeitado"
    })
  }

  const getNotPedingList = () => {
    return tableList.filter((item: any) => {
      return item.registration_status === "pendente"
    })
  }

  const renderheaders = () => {
    return (
      <>
        <td>Nome</td>
        <td>CPF</td>
        <td>E-mail</td>
        <td>Endereço</td>
        <td>Telefone</td>
        <td>Nome Artístico</td>
        <td>Música</td>
        <td>Solo</td>
        <td>Versão ou Tom</td>
        <td>Url do YouTube</td>
        <td>Dados Bancários</td>
        <td>Status</td>
      </>
    )
  }

  const renderList = (data: any, showButtons = false) => {
    return (
      <>
        {data.map((item: any) => {
          const {
            id,
            name,
            cpf,
            email,
            address,
            phone,
            artistic_name,
            song_name,
            presentation_type,
            music_type,
            youtube_link,
            bank_account,
          } = item;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{cpf}</td>
              <td>{email}</td>
              <td>{address}</td>
              <td>{phone}</td>
              <td>{artistic_name}</td>
              <td>{song_name}</td>
              <td>{presentation_type}</td>
              <td>{music_type}</td>
              <td>
                <a
                  className="link link-primary"
                  href={youtube_link}
                  target="_blank"
                >
                  URL
                </a>
              </td>
              <td>{bank_account}</td>
              <td>
                {
                  showButtons
                    ? <div className="flex items-center">
                      <Button
                        className="btn-xs mr-1"
                        variant="success"
                        isLoading={false}
                        title="Aprovar"
                        onClick={() => {
                          setIsLoading(true)
                          postUpdateStatus({
                            body: {
                              id: id,
                              registration_status: "confirmado"
                            },
                            onSuccess: () => {
                              getTableList(
                                () => {
                                  setIsLoading(false)
                                }
                              )
                            },
                          })
                        }}
                      >
                        ✅
                      </Button>

                      <Button
                        className="btn-xs"
                        variant="error"
                        isLoading={false}
                        title="Reprovar"
                        onClick={() => {
                          setIsLoading(true)
                          postUpdateStatus({
                            body: {
                              id: id,
                              registration_status: "rejeitado"
                            },
                            onSuccess: () => {
                              getTableList(
                                () => {
                                  setIsLoading(false)
                                }
                              )
                            },
                          })
                        }}
                      >
                        ❌
                      </Button>
                    </div>
                    : <></>
                }
              </td>
            </tr>
          )
        })}
      </>
    )
  }

  const renderLists = () => {
    switch (activeTab) {
      case 0:
        return renderList(getNotPedingList(), true)
      case 1:
        return renderList(getApprovedList())
      case 2:
        return renderList(getNotApprovedList())
    }
  }

  return (
    <div className="p-8">
      <Navbar title="FEMUSG Admin" />
      <div className="tabs tabs-boxed">
        <a
          className={`tab ${activeTab === 0 && 'tab-active'}`}
          onClick={() => {
            setActiveTab(0)
          }}
        >
          Pendentes
        </a>
        <a
          className={`tab ${activeTab === 1 && 'tab-active'}`}
          onClick={() => {
            setActiveTab(1)
          }}
        >
          Aprovados
        </a>
        <a
          className={`tab ${activeTab === 2 && 'tab-active'}`}
          onClick={() => {
            setActiveTab(2)
          }}
        >
          Reprovados
        </a>
      </div>
      <div className="overflow-x-auto h-96 mb-8">
        {isLoading
          ? (
            <div className="flex items-center justify-center mt-10">
              <Loader />
            </div>
          )
          : <table className="table table-sm table-pin-rows table-pin-cols">
            <thead>
              <tr>
                {renderheaders()}
              </tr>
            </thead>
            <tbody>
              {renderLists()}
            </tbody>
          </table>
        }
      </div>

      <Footer />
    </div>
  )
}

export default Dash