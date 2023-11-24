import { MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

const MenuItems = ({ handleCloseNavMenu, href, items }) => {
  return (
    <MenuItem
      sx={{ fontSize: 18, fontWeight: 600, textTransform: "capitalize" }}
      onClick={handleCloseNavMenu}
    >
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : "menuItem"
        }
        to={href}
        textAlign="center"
      >
        {items}
      </NavLink>
    </MenuItem>
  );
};

export default MenuItems;
