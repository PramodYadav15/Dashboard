import React from 'react';
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const Module = () => {
  return (
    <>
    <Navbar/>
       <Box height={40}/>
    <Box sx={{ display: 'flex' }}>
       <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1> Module</h1>
     </Box>
     </Box>
   </>
  )
}
export default Module;
