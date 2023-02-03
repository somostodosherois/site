import React from "react";
import { Snackbar as SnackbarMUI, Alert } from "@mui/material";

const Snackbar = ({ open, setOpenSnack, message, type }) => {
    return (
        <SnackbarMUI
            open={open}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={() => setOpenSnack(false)}
        >
            <Alert severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </SnackbarMUI>
    )
}

export default Snackbar