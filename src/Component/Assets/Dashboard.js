import React from 'react';
import Sidenav from './Sidenav';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from './AccordionDash';
import "./../../Dashboard.css"
import BarChart from '../../Chart/BarChart.js';
import CountUp from 'react-countup';


const Dashboard = () => {
  return (
    <>
    <div className='bgcolor'>
     <Navbar/>
       <Box height={80}/>
       <Box sx={{ display: 'flex' }}>
       <Sidenav/>
      {/* <h1> Dashboard</h1> */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
        <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent>
      <div  className='iconstylee'><CreditCardIcon/></div>
        {/* <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography> */}
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
         $<CountUp start={0.2} end={500.00} delay={0.3}></CountUp>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
          Total Earnings
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
    <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography> */}
        <div  className='iconstylee'><ShoppingBagIcon/></div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
        $<CountUp start={0.2} end={900.00} delay={0.3}></CountUp>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
          Total Orders
        </Typography>
      </CardContent>
      </Card>
      </Stack>
        </Grid>

        <Grid item xs={4}>
        <Stack spacing={2}>
        <Card className='gradientlight'
        // sx={{ maxWidth: 345 }}
        >
    {/* <CardContent> */}
    <Stack spacing={2} direction="row">
     <div className='iconstylee'>
      <StorefrontIcon/>
     {/* </div>  */}
      </div>
      <div className='paddingall'>
        <span className='pricetittle'>$203k</span>
        <br />
        <span className='pricesubtittle'>Total Income</span>
      </div>
      </Stack>
      {/* </CardContent> */}
      </Card>

      <Card 
      // sx={{ maxWidth: 345 }}
      >
    {/* <CardContent> */}
    <Stack spacing={2} direction="row">
     <div className='iconstyleeblack'>
      <StorefrontIcon/>
      </div> 
      <div className='paddingall'>
        <span className='pricetittle'>$203k</span>
        <br />
        <span className='pricesubtittle'>Total Income</span>
      </div>
      </Stack>
      {/* </CardContent> */}
      </Card>
        </Stack>
        </Grid>
        </Grid>
        <Box height={20}/>
        <Grid container spacing={2}>
        <Grid item xs={8}>
           <Card sx={{ height: 60 +"vh" }}>
    <CardContent>
      < BarChart/>
        {/* <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography> */}
      </CardContent>
      </Card>

         </Grid>
        <Grid item xs={4}>
        <Card sx={{ height: 60 +"vh" }}>
    <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography> */}
         <div className='paddingall'>
        <span className='pricetittle'>Popular Product</span>
      </div>
        <AccordionDash/>
      </CardContent>
      </Card>
        </Grid>
        </Grid>
  
 </Box>
 </Box>
 </div>
    </>
  )
}


export default Dashboard;
