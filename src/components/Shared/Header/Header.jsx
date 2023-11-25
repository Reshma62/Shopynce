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
import useAuthContext from "../../../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import useGetUserQuery from "../../../Hooks/useGetUserQuery";
import Loading from "../Loading/Loading";
const Header = () => {
  const { user, logOUtUser } = useAuthContext();
  const navigate = useNavigate();
  const { data: userData, isLoading } = useGetUserQuery(user);

  console.log(userData.data.role);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  if (isLoading) {
    return <Loading />;
  }
  const userRole = userData?.data?.role;
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
  const handleLogOut = async () => {
    await logOUtUser();
  };
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
              <Box
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
                          src={user?.photoURL}
                          sx={{
                            border: "2px solid #5F1E2E",
                            width: 56,
                            height: 56,
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </>
              </Box>
            </Box>

            {/* Desktop menu*/}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  gap: 5,
                  alignItems: "center",
                },
              }}
            >
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
                        src={user?.photoURL}
                        sx={{
                          border: "2px solid #5F1E2E",
                          width: 56,
                          height: 56,
                        }}
                      />
                    </IconButton>
                  </Tooltip>

                  <Menu
                    sx={{ mt: "85px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem>
                      <Typography
                        sx={{ color: "#5F1E2E", textAlign: "center" }}
                      >
                        {user?.displayName}
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogOut}>
                      <Typography textAlign="center">LogOut</Typography>
                    </MenuItem>
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
