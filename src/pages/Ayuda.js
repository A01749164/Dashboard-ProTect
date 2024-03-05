import Tabla from "../components/TablaWarning";
import Sidebar from "../components/Sidebar";

const Ayuda = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className='content w-100 tablas-protect'>
        <Tabla />
      </div>
    </div>
  )
}

export default Ayuda
