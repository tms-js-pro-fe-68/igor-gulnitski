import {
    AppBar as MuiAppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Menu,
    MenuItem
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'




export default function AppBar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);

    const handleCloseMenu = () => setAnchorEl(null);

    const handleLogout = () => {
        sessionStorage.token = ''
        sessionStorage.email = ''
        handleCloseMenu()
        navigate('/login', { replace: true });
    }

    return (
        <>
            <MuiAppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home Page
                    </Typography>
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem onClick={handleLogout}>Sign out</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </MuiAppBar>
            <Box sx={{ minHeight: { xs: 56, sm: 64 } }} />
        </>
    )
}