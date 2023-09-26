import logo from "../../assets/logo.png"

const Navbar = ({ title }: {title: string}) => {
  return (
    <div className="navbar bg-base-100 shadow-xl rounded-box mb-8">
      <div className="flex items-center justify-center pl-4">
        <img className="w-[30px] h-auto mr-4" src={logo} alt="Logo" />
        <a className="normal-case text-xl font-semibold">{title}</a>
      </div>
    </div>
  )
}

export default Navbar