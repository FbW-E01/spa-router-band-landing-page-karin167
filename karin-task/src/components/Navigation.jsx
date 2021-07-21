import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <ul>
      <li>
        <NavLink exact to="/vocals">
          Vocals
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/guitar">
          Guitar
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/bass">
          Bass
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/drums">
          Drums
        </NavLink>
      </li>
    </ul>
  );
}
