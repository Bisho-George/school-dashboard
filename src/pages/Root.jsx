import React from "react";
import Asidebar from "../components/Asidebar/Asidebar";
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
=======
import Navbar from "../components/Navbar/Navbar.jsx";
>>>>>>> b819a8cea0aab578db602e80dddd452ef5d96151

const theme = createTheme({
    palette: {
        primary: {
            main: "#1246AC",
            gray: '#464950'
        },
        secondary: {
            main: "#EAF1FF",
<<<<<<< HEAD
=======
            gray: "rgba(217, 217, 210, 0.39)"

>>>>>>> b819a8cea0aab578db602e80dddd452ef5d96151
        },
    },
});

const Root = () => {
    const drawerWidth = 261;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <div>
<<<<<<< HEAD
=======
                <Navbar drawerWidth={drawerWidth}/>
>>>>>>> b819a8cea0aab578db602e80dddd452ef5d96151
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
