import Tabla from "../components/TablaWarning";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Ayuda = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className='content w-100'>
        <Navbar /> 
        <Tabla />
      </div>
    </div>
  )
}

export default Ayuda
