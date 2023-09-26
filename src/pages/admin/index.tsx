import Login from "../../components/login"
import Dash from "../../components/dash";
import useAdminPage from "./hook";

const AdminPage = () => {
  const { 
    isLoading, 
    isLogged, 
    onSubmit,
    tableList,
    getTableList
  } = useAdminPage();

  if(isLogged){
    return (
      <Dash 
        tableList={tableList}
        getTableList={getTableList}
      />
    )
  }else{
    return (
      <Login 
        onSubmit={(e) => {
          onSubmit(e)
        }}
        isLoading={isLoading}
      />
    )
  }
}

export default AdminPage