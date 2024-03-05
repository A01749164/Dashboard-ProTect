import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/ayuda"
            className="w-100 d-inline-block"
            activeClassName="active"
          >
            <FaIcons.FaBell className="me-3" />
            Necesitan Ayuda
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/salvo"
            className="w-100 d-inline-block"
            activeClassName="active"
          >
            <FaIcons.FaCheckDouble className="me-3" />
            Están a Salvo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="w-100 d-inline-block"
            activeClassName="active"
          >
          <IoIosCloseCircle className="me-3" />
          Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
