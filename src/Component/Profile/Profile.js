import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import * as React from "react";
import { TextField, MenuItem, Box, Grid,Paper} from "@mui/material/";
import { InputLabel, Select, Button,styled, FormControl } from "@mui/material/";
import "./../../stylee.css"
import Pro from "./../Profile/Pro.js"
// import { useNavigate } from "react-router-dom";

function Profile() {
    // const navigate = useNavigate();
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <>
      
     <div
      className="container-fluid d-flex justify-content-center align-items-center "
    //   style={{ height: "100vh" }}
    //   style={{ width: "80%" }}
    >
        
      <div className="card shadow-lg p-3  w-100  "> 
        <div className="card-body ">
           
      <Box sx={{ flexGrow: 1 }}> 
      <Grid container spacing={2}>
      <Grid item xs={4}>
          <Item ><Pro/>
          </Item>
          <Item className=' m-2 p-3'>
          <Button className='w-100' variant="outlined"  
        //   onClick={() => navigate("/newpassword")}
          >Save</Button>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item> <h4>User Info</h4>
          <hr/>
        <div>
        {/* <Box sx={{ minWidth: 120 }}> */}
        <FormControl fullWidth>
          <InputLabel 
           
          id="demo-simple-select-label">Location</InputLabel>
          <Select
          className=" m-2 w-100"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            label="Select Country"
            onChange={handleChange}
          >
            <MenuItem value={10}>Belgium</MenuItem>
            <MenuItem value={20}>Canada</MenuItem>
            <MenuItem value={30}>Denmark</MenuItem>
            <MenuItem value={40}>Estonia</MenuItem>
            <MenuItem value={50}>France</MenuItem>
            <MenuItem value={60}>India</MenuItem>
            <MenuItem value={70}>US</MenuItem>
          </Select>
        </FormControl>
        {/* </Box> */}
        </div>

        <div><TextField 
         className=" m-2 w-100" 
         id="outlined-basic" label="Company"
          variant="outlined"/></div>

        <div><TextField 
        className=" m-2 w-100"
         id="outlined-basic" 
         label="Position"
          variant="outlined"/></div>

        <h4 className="m-2">Contact Info</h4>
        <hr/>
        <div><TextField 
        className=" m-2 w-100"
        id="outlined-basic" 
        label="Work Number" 
        variant="outlined" />
        </div>

        <div><TextField
        className=" m-2 w-100"
          id="outlined-basic"
          label="Mobile Number"
          variant="outlined"
        /></div>

        <div><TextField
        className=" m-2 w-100"
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        /></div>

        <div><TextField
        className=" m-2 w-100"
          id="outlined-basic"
          label="Work Address"
          variant="outlined"
        /></div>
      </Item>
        </Grid>
        </Grid>
      </Box>
      </div>
      </div>
      </div>

       
    </>
  );
}
export default Profile;
