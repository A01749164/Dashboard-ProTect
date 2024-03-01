import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa6";

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
      </ul>
    </div>
  );
};

export default Sidebar;
