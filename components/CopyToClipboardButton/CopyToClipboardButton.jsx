import React from "react";
import { IconButton, TextField } from "@mui/material";
import ContentCopy from "@mui/icons-material/ContentCopy";

const CopyToClipboardButton = ({ content, setOpenSnack, setMessageSnack }) => {

  const handleClick = () => {
    navigator.clipboard.writeText(content)
      .then(() =>  {
        setOpenSnack(true)
        setMessageSnack('Código copiado com sucesso')
      })
      .catch(err => console.error("Falha ao copiar o texto:", err));
  };

  return (
    <div className="flex">
      <TextField error fullWidth label={content} disabled variant="standard" className="cursor-pointer" />
      <IconButton onClick={handleClick} fullWidth color="error" size='small' className="mt-4 cursor-pointer">
        <ContentCopy />
      </IconButton>
    </div>
  );
};

export default CopyToClipboardButton;