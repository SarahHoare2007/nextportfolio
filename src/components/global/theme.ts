'use client';
import { createTheme } from '@mui/material/styles';
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

const theme = createTheme({
    typography: {

        fontFamily: figtree.style.fontFamily,

    },
    palette: {
        primary: {
            light: "#9BD7D0",
            main: "#5FA9A0",
            dark: "#3B8377",
        },
    }
})

export default theme;