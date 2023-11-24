import { ListItemText, ListItemIcon } from "@mui/material";
import { NavLink } from "react-router-dom";

const MenuLists = ({ menu, Icons, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${isActive ? " activeDashboard " : ""}  dashMenu`
      }
      end
    >
      <ListItemIcon className="icons">
        <Icons />
      </ListItemIcon>
      <ListItemText primary={menu} />
    </NavLink>
  );
};

export default MenuLists;
