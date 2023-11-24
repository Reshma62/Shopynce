import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import Logo from "../../../assets/logo.png";
import { Menu as MenuIcons } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const Header = () => {
  const user = true;
  const userRole = "admin";
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = ["Logout"];
  return (
    <AppBar sx={{ background: "transparent" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ width: "150px" }}>
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </Box>

          <Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcons />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <>
                  <MenuItems
                    handleCloseNavMenu={handleCloseNavMenu}
                    items={"Home"}
                    href={"/"}
                  />

                  {user ? (
                    <>
                      {userRole === "user" && (
                        <>
                          {" "}
                          <MenuItems
                            handleCloseNavMenu={handleCloseNavMenu}
                            items={"Create-shop"}
                            href={"/create-shop"}
                          />
                        </>
                      )}
                      {(userRole === "admin" || userRole === "manager") && (
                        <>
                          <MenuItems
                            handleCloseNavMenu={handleCloseNavMenu}
                            items={"Dashboard"}
                            href={"/dashboard"}
                          />
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <MenuItems
                        handleCloseNavMenu={handleCloseNavMenu}
                        items={"Login"}
                        href={"/login"}
                      />
                      <MenuItems
                        handleCloseNavMenu={handleCloseNavMenu}
                        items={"Register"}
                        href={"/register"}
                      />
                    </>
                  )}
                  <Link
                    target="_blank"
                    to={"https://youtu.be/6Q2jPqyhFCQ?si=aqUNfzKsr4sPRb8A"}
                  >
                    <Button sx={{}} color="primary" variant="contained">
                      Watch Demo
                    </Button>
                  </Link>
                  <Box>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <>
                          {" "}
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        </>
                      ))}
                    </Menu>
                  </Box>
                </>
              </Menu>
            </Box>

            {/* Desktop menu*/}
            <Box sx={{ display: { xs: "none", md: "flex", gap: 5 } }}>
              <MenuItems
                handleCloseNavMenu={handleCloseNavMenu}
                items={"Home"}
                href={"/"}
              />
              {user ? (
                <>
                  {userRole === "user" && (
                    <MenuItems
                      handleCloseNavMenu={handleCloseNavMenu}
                      items={"Create-shop"}
                      href={"/create-shop"}
                    />
                  )}
                  {(userRole === "admin" || userRole === "manager") && (
                    <MenuItems
                      handleCloseNavMenu={handleCloseNavMenu}
                      items={"Dashboard"}
                      href={"/dashboard"}
                    />
                  )}
                </>
              ) : (
                <>
                  <MenuItems
                    handleCloseNavMenu={handleCloseNavMenu}
                    items={"Login"}
                    href={"/login"}
                  />
                  <MenuItems
                    handleCloseNavMenu={handleCloseNavMenu}
                    items={"Register"}
                    href={"/register"}
                  />
                </>
              )}
              <Link
                target="_blank"
                to={"https://youtu.be/6Q2jPqyhFCQ?si=aqUNfzKsr4sPRb8A"}
              >
                <Button
                  sx={{
                    fontSize: 15,
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                  color="primary"
                  variant="contained"
                >
                  Watch Demo
                </Button>
              </Link>
              {user && (
                <Box sx={{ ml: 2 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <>
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      </>
                    ))}
                  </Menu>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
