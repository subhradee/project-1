import React from "react";
import signUpModule2 from "../styles/loginSignup/signup2.module.css";
import Image from "next/image";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import WcIcon from "@mui/icons-material/Wc";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PasswordIcon from '@mui/icons-material/Password';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Signup2 = () => {
  const [sex, setSex] = React.useState("");

  const handleChange = (event) => {
    setSex(event.target.value);
  };
  return (
    
    <div className={signUpModule2.mainDiv}>
      <div className={signUpModule2.inputs_login}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 600,
              height: 530,
            },
          }}
        >
          <Paper elevation={3}>
            <div className={signUpModule2.design}>
              <h1 className={signUpModule2.brandName}>HexaOverflow</h1>
              <h2>Let's get started !!</h2>
              <p className={signUpModule2.signupPara}>
                Enter details to continue
              </p>

              <Box sx={{ "& > :not(style)": { m: 2 } }}>
                <div className={signUpModule2.inputfield}>
                  <Box sx={{ display: "inline-block", alignItems: "flex-end" }}>
                    <LocationCityRoundedIcon sx={{ mr: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter Pincode"
                      defaultValue=""
                      autoComplete="off"
                    />
                  </Box>
                  <Box sx={{ display: "inline-block", alignItems: "flex-end" }}>
                    <CalendarMonthRoundedIcon sx={{ mr: 2, ml: 2, my: 2 }} />
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter Date of Birth"
                      defaultValue=""
                      autoComplete="off"
                    />
                  </Box>
                  <Box sx={{ display: "inline-block", alignItems: "flex-end",my:2 }}>
                    <PasswordIcon sx={{ mr: 2, ml:18, my: 2 }} />
                    <TextField
                      required
                      id="outlined-required"
                      label="Enter the OTP"
                      defaultValue=""
                      autoComplete="off"
                    />
                  </Box>
                </div>
                <div className={signUpModule2.signupBtnDiv}>
                  <Button
                    className={signUpModule2.signupBtn}
                    variant="contained"
                  >
                   Signup <ArrowForwardIosRoundedIcon/>
                  </Button>
                </div>
              </Box>
            </div>
          </Paper>
        </Box>
        <div className={signUpModule2.sidePara}>
          <h1>Discover a new world with us.</h1>
          <p>We're here to give you a better social media experience where you can learn and grow without losing a single bit of fun.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
