import * as React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Container,
    Divider,
    Avatar,
    Button,
    Tooltip,
    ListItemIcon,
    Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Loading from "./Loading.js";

import AppConfig from ".@/config";
import { themeLight, themeDark } from "../Theme.js";
import { useAuth } from "../contexts/Auth";

export function ResponsiveAppBar() {
    // const { signOut, user } = useAuth();

    // const setTheme = props.setTheme;

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [dark, setDark] = React.useState(true);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleChangedarkTheme = (event) => {
        setDark(!dark);
        if (!dark) {
            setTheme(themeDark);
        } else {
            setTheme(themeLight);
        }
    };

    function handleSignOut() {
        setAnchorElUser(null);
        signOut();
    }

    return (
        <AppBar position="relative">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            display: "flex",
                        }}
                    >
                        {AppConfig.name}
                    </Typography>

                    <Loading color="secondary" />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Abrir menu do usuário" placement="left">
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenUserMenu}
                            >
                                <MenuIcon />
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
                            <MenuItem onClick={(event) => {}}>
                                <ListItemIcon>
                                    {dark ? (
                                        <DarkModeIcon fontSize="small" />
                                    ) : (
                                        <LightModeIcon fontSize="small" />
                                    )}
                                </ListItemIcon>
                                Tema Dark
                                <Switch
                                    checked={dark}
                                    onChange={handleChangedarkTheme}
                                    inputProps={{ "aria-label": "controlled" }}
                                />
                            </MenuItem>

                            {user ? (
                                <MenuItem>
                                    <ListItemIcon>
                                        <Avatar
                                            src={user.user_metadata.avatar_url}
                                            sx={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                    </ListItemIcon>
                                    {user.user_metadata.name}
                                </MenuItem>
                            ) : (
                                ""
                            )}
                            <Divider />
                            {user ? (
                                <MenuItem onClick={handleSignOut}>
                                    <ListItemIcon>
                                        <LogoutIcon fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            ) : (
                                ""
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;
