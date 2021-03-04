import React from "react";
import classes from "./introBox.module.css";
import person from "../../assets/images/productdetail/person.png";
import emailverified from "../../assets/images/productdetail/email_verified.svg";
import phoneverified from "../../assets/images/productdetail/phone_verified.svg";
import locationverified from "../../assets/images/productdetail/Location.svg";
import { RiEdit2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Cropper from "../PhotoUploder/Cropper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "400px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const IntroBox = () => {
  const styles = useStyles();

  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const [getCropedImage, setGetCropedImage] = React.useState(null);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFile(null);
  };

  const croping = async (e) => {
    const fr = new FileReader();
    fr.onload = () => {
      setFile(fr.result);
    };
    fr.readAsDataURL(e.target.files[0]);

    // await setFile(e.target.files);
    handleOpen();
  };

  //   const updateTmpImage = (file) => {
  //     fr.readAsDataURL(file);
  //   };

  const cruntUser = JSON.parse(localStorage.getItem("__user__"));

  return (
    <>
      <div className={classes.box}>
        <div className={classes.imgBox}>
          <img className={classes.image} src={person} />
          <input style={{ display: "none" }} id="contained-button-file" type="file" accept="image/*" onChange={croping} />
          <label htmlFor="contained-button-file" className={classes.editBtn}>
            <IconContext.Provider value={{ color: "#E7C68E", size: "1.4em" }}>
              <RiEdit2Fill />
            </IconContext.Provider>
          </label>
        </div>

        <h2>{cruntUser.name}</h2>
        <p className={classes.membersince}>Member since : Aug,2020</p>
        {/* <button className={classes.follow}>Follow</button> */}
        <div>
          <img className={classes.icon} src={emailverified} />
          <img className={classes.icon} src={phoneverified} />
          <img className={classes.icon} src={locationverified} />
        </div>
      </div>
      <div>
        {/* <button type="button" onClick={handleOpen}>
          react-transition-group
        </button> */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={styles.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={styles.paper}>
              <h2 id="transition-modal-title"></h2>
              <Cropper image={file} setGetCropedImage={setGetCropedImage} />
              <button className={classes.save} onClick={handleClose}>
                Save
              </button>
              <button className={classes.cancle} onClick={handleClose}>
                Cancle
              </button>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export { IntroBox };
