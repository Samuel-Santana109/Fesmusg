import cardProps from "../sharedProps/card"
import inputProps from "../sharedProps/input"
import banner from "../assets/banner.jpg"
import Button from "../components/button"

const Form = ({ 
  onSubmit, 
  isLoading 
}: { 
  onSubmit: (e: any) => void,
  isLoading: boolean
}) => {
  return (
    <div className="flex justify-between flex-col lg:flex-row">
      <div className="lg:w-[49%] flex flex-row items-start justify-center opacity-80">
        <img
          src={banner}
          className="w-full max-w-[800px] rounded-2xl"
          alt="60 anos de galvão, 20 mil em prêmios, FEMUSG XXII, 26 e 27 de Outubro"
        />
      </div>
      <form
        className="flex items-start justify-center lg:w-[49%] my-8"
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(e)
        }}
      >
        <div
          {...cardProps}
          className={`${cardProps.className} w-full max-w-[600px]`}
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nome *</span>
              </label>
              <input
                type="text"
                name="name"
                maxLength={80}
                /* value="Jonh doe" */
                {...inputProps}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email *</span>
              </label>
              <input
                type="email"
                name="email"
                maxLength={200}
                /* value="rodrigo@gmail.com" */
                {...inputProps}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">CPF *</span>
              </label>
              <input
                type="text"
                maxLength={11}
                minLength={11}
                name="cpf"
                pattern="\d*"
                /* value="00000000000" */
                {...inputProps}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Endereço *</span>
              </label>
              <input
                type="text"
                maxLength={80}
                name="address"
                /* value="Ocidental" */
                {...inputProps}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Telefone *</span>
              </label>
              <input
                type="text"
                maxLength={11}
                name="phone"
                /* value="11961198782" */
                {...inputProps}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Nome Artístico *</span>
              </label>
              <input
                type="text"
                maxLength={80}
                name="artistic_name"
                /* value="Diferentão" */
                {...inputProps}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Música *</span>
              </label>
              <input
                type="text"
                maxLength={80}
                name="song_name"
                /* value="Architects" */
                {...inputProps}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Solo *</span>
              </label>
              <input
                type="text"
                name="presentation_type"
                maxLength={80}
                /* value="Solo" */
                {...inputProps}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Versão ou Tom *</span>
              </label>
              <input
                type="text"
                name="music_type"
                maxLength={80}
                /* value="Dó" */
                {...inputProps}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Url do YouTube *</span>
              </label>
            </div>
            <input
              type="url"
              placeholder="Exemplo: https://www.youtube.com"
              maxLength={200}
              name="youtube_link"
              /* value="https://www.youtube.com" */
              {...inputProps}
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Dados Bancários *</span>
              </label>
              <input
                type="text"
                maxLength={200}
                name="bank_account"
                /* value="Bank" */
                {...inputProps}
              />
            </div>

            <div className="form-control mt-6">
              <Button
                type="submit"
                isLoading={isLoading}
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form