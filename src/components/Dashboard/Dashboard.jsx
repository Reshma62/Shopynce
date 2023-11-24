import { styled } from "@mui/material/styles";
import {
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Grid,
} from "@mui/material";

import { Menu, ChevronLeft, Notifications } from "@mui/icons-material";
import { useState } from "react";
import MenuLists from "./MenuLists/MenuLists";

const drawerWidth = 240;

const AppBars = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawers = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
import { Dashboard } from "@mui/icons-material";
import Copyright from "../Shared/footer/Copyright";
const DashboardSideBar = ({ Outlet }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Grid sx={{ overflow: "hidden" }}>
      <Box sx={{ display: "flex" }}>
        <AppBars position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <Menu />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBars>
        <Drawers variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" sx={{}}>
            <MenuLists
              menu={"Dashboard"}
              Icons={Dashboard}
              href={"/dashboard"}
            />
            <MenuLists menu={"Shop"} Icons={Dashboard} href={"shop"} />
            <MenuLists menu={"Dashboard"} Icons={Dashboard} href={"e"} />
            <MenuLists menu={"Dashboard"} Icons={Dashboard} href={"f"} />

            <Divider sx={{ my: 1 }} />
            <MenuLists menu={"Home"} Icons={Dashboard} href={"/"} />
          </List>
        </Drawers>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "calc(100vh - 24px)",
            overflow: "auto",
            pt: 10,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Copyright />
    </Grid>
  );
};
export default DashboardSideBar;
