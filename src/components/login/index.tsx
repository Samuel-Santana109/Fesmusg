import cardProps from "../../sharedProps/card"
import inputProps from "../../sharedProps/input"
import Button from "../button"

interface ILogin {
  onSubmit: (e: any) => void
  isLoading: boolean
}

const Login = ({ onSubmit, isLoading }: ILogin) => {
  return (
    <form 
      className="flex items-center min-h-screen justify-center px-4"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(e)
      }}
    >     
      <div 
        {...cardProps}
        className={`${cardProps.className} w-full max-w-[400px]`}
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...inputProps} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Senha</span>
            </label>
            <input 
              type="password"
              {...inputProps} 
            />
          </div>
          <div className="form-control mt-6">
            <Button 
              type="submit"
              isLoading={isLoading}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login