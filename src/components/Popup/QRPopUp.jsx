import { Dialog, DialogContent, DialogTitle, Grid, Paper, Button, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import PageHeader from "components/Layout/PageHeader";
import QRCode from "qrcode.react";
import Input from "components/Control/Input";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import { Girl } from "@mui/icons-material";
import Iconify from "assets/theme/components/icon/Iconify";
const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
//hih
export default function QRPopUp(props) {
  const { OpenPopUp, SetOpenPopUp, link } = props;
  const [input, setInput] = useState([]);

  const handleClose = () => {
    SetOpenPopUp(false);
  };

  const [qrCodeUrl, setQRCodeUrl] = useState("");

  useEffect(() => {
    const canvas = document.getElementById("qr-code-canvas");
    if (canvas) {
      setQRCodeUrl(canvas.toDataURL());
    }
  }, []);

  return (
    <Paper>
      <Dialog maxWidth="md" open={OpenPopUp} onClose={handleClose}>
        <DialogTitle>
          <PageHeader
            title="Chia sẻ chiến dịch"
            subTitle="Bạn có thể chia sẻ chiến dịch đến mọi người"
            icon={getIcon("ph:share-bold")}
          />
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <Box marginTop="2%">
            <Input
              disable="disable"
              // variant="outlined"
              // name={link}
              label="Chia sẻ liên kết"
              defaultValue={link}
              // value={link}
              onChange={(e) => {}}
            />
          </Box>

          <ButtonCustomize
            marginTop="2%"
            variant="contained"
            type="submit"
            nameButton="Copy Link"
            bgColor="#F6911B"
          />
          <Box sx={{ marginTop: "2%" }}>
            <QRCode id="qr-code-canvas" value={link} />
          </Box>
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
