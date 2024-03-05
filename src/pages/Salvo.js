import Tabla from "../components/TablaSuccess";
import Sidebar from "../components/Sidebar";

const Salvo = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content w-100 tablas-protect">
        <Tabla />
      </div>
    </div>
  )
}

export default Salvo
