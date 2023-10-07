import React from "react";
import Asidebar from "../components/Asidebar/Asidebar";
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1246AC",
            gray: '#464950'
        },
        secondary: {
            main: "#EAF1FF",
            gray: "rgba(217, 217, 210, 0.39)"

        },
    },
});

const Root = () => {
    const drawerWidth = 261;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <div>
                <Navbar drawerWidth={drawerWidth}/>
                <Asidebar />
                <Box
                    component="main"
                    sx={{
                        marginLeft: {
                            sm: `${drawerWidth}px`,
                        },
                        display: "flex",
                        justifyContent: "center",
                        mt: "66px",
                    }}
                >
                    <Outlet />
                </Box>
            </div>
        </ThemeProvider>
    );
};

export default Root;
