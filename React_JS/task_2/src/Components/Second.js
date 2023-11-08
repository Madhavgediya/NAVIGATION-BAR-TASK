import React, { useState } from "react";
import DirectionsIcon from "@mui/icons-material/Directions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useLocation, useParams } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";

function Second(props) {
  // console.log(props.nam)
  const location = useLocation();
  // console.log(location.state.id);

  // const { nam } = useParams();

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("Enter Email Id");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    let text1 = document.getElementById("name").value;
    let salert = document.getElementById("succesAlertContainer");
    let dalert = document.getElementById("dangerAlertContainer");
    setEmail(text1);
    if (text1 == "") {
      salert.style.display = "none";
      dalert.style.display = "flex";
    } else {
      dalert.style.display = "none";
      salert.style.display = "flex";
    }
    console.log(text1);
    setOpen(false);
  };

  return (
    <>
      <div className="text-center mt-5">
        <h2>
        Hello {location.state.id} 
        </h2>
        <br />
        <Button variant="outlined" onClick={handleClickOpen} className="p-5">
          Click Here {location.state.id}
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Hello {location.state.id}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      <div
        id="succesAlertContainer"
        className="m-4"
        style={{ display: "none", justifyContent: "center" }}
      >
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is Your Email ID — <strong>{email}</strong>
        </Alert>
      </div>
      <div
        id="dangerAlertContainer"
        className="m-4"
        style={{ display: "none", justifyContent: "center" }}
      >
        <Alert variant="filled" severity="error">
          {" "}
          Error Please Enter Email ID — check it out!{" "}
        </Alert>
      </div>

      {/* <div>
        This is Second Page <br />
        Hello {nam}
      </div> */}
    </>
  );
}

export default Second;

// -----------------------------------------------------------------------------------------------------------------------------------------

// function Second() {
//   const { nam } = useParams();

//   const [open, setOpen] = React.useState(false);
//   const [email, setEmail] = useState("Enter Email Id");

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     let text1 = document.getElementById("name").value;
//     let salert = document.getElementById("succesAlertContainer");
//     let dalert = document.getElementById("dangerAlertContainer");
//     setEmail(text1);
//     if (text1 == "") {
//       salert.style.display = "none";
//       dalert.style.display = "flex";
//     } else {
//       dalert.style.display = "none";
//       salert.style.display = "flex";
//     }
//     console.log(text1);
//     setOpen(false);
//   };

//   return (
//     <>
//       <div className="text-center mt-5">
//         <Button variant="outlined" onClick={handleClickOpen} className="p-5">
//           Click Here {nam}
//         </Button>
//       </div>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Hello {nam}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here.
//             We will send updates occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose}>Subscribe</Button>
//         </DialogActions>
//       </Dialog>
//       <div id="succesAlertContainer" className="m-4" style={{ display: "none", justifyContent: "center" }}>
//         <Alert severity="success">
//           <AlertTitle>Success</AlertTitle>
//           This is Your Email ID — <strong>{email}</strong>
//         </Alert>
//       </div>
//       <div id="dangerAlertContainer"  className="m-4" style={{ display: "none", justifyContent: "center" }}>
//         <Alert variant="filled" severity="error">
//           {" "}
//           Error Please Enter Email ID — check it out!{" "}
//         </Alert>
//       </div>

//       {/* <div>
//         This is Second Page <br />
//         Hello {nam}
//       </div> */}
//     </>
//   );
// }

// export default Second;
