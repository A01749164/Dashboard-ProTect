import Tabla from "../components/TablaSuccess";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Salvo = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content w-100">
        <Navbar />
        <Tabla />
      </div>
    </div>
  )
}

export default Salvo
