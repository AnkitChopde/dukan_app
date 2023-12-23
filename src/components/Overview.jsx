import { Avatar, Box, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import help from "../assets/Help.png"
import help1 from "../assets/HelpWhite.png"
import rightIcon from "../assets/chevronRight.png"
import bluerightIcon from "../assets/blueRight.png"
const Overview = () => {
  return (
    <Box sx={{
        height: "57.625rem",padding:"1rem",background:"#FAFAFA"}}>
      <Stack direction={"row"} justifyContent={"space-between"}>
      <Typography sx={{ color: 'black',fontFamily: "Inter",fontSize:" 0.9375rem",fontStyle:" normal",fontWeight: 900,lineHeight: "1.375rem" }}>
             Overview
             </Typography>
             <select
    
      style={{
        width: '150px',
        padding: '0.5rem',
        borderRadius: '0.375rem',
        background: '#F2F2F2',
        outline: 'none',
        boxShadow: 'none',
      }}
    >
      <option value="" disabled>
       This month
      </option>
      <option value="option1">This month</option>
     
    </select>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}  sx={{marginTop:"0.5rem"}}>
        <Box sx={{width:"30%",height:"9.625rem",padding:"0.8rem",color:"white",backgroundColor:"#146EB4"}}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-start"} spacing={1} >
     <Typography sx={{color:"white",fontFamily: "Galano Grotesque",fontSize:" 1rem",fontStyle:" normal",fontWeight: 400,lineHeight: "1.5rem" }}>
           Next Payout
             </Typography>
             <Avatar src= {help1} alt={"Navicon"} sx={{ width: '15px', height: '15px',borderRadius:0,color:"white" }}/>
     </Stack>
     <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={1} sx={{marginTop:"1rem"}}>
     <Typography sx={{color:"white",fontFamily: "Galano Grotesque",fontSize:" 2rem",fontStyle:" normal",fontWeight: 500,lineHeight: "2.375rem", }}>
           ₹2,312.23
             </Typography>
             <Stack direction={"row"} alignItems={"center"} spacing={1}>
             <Typography sx={{color:"white",fontFamily: "Galano Grotesque",fontSize:" 1rem",fontStyle:" normal",fontWeight: 400,lineHeight: "1.5rem",textDecoration:"underline" }}>
          23 orders
             </Typography>
             <Avatar src= {rightIcon} alt={"Navicon"} sx={{ width: '15px', height: '15px',borderRadius:0,color:"white" }}/>
             </Stack>
     </Stack>
    
        </Box>
        <Box sx={{width:"30%",height:"5rem",padding:"0.8rem",color:"white",backgroundColor:"white",boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)"}}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-start"} spacing={1} >
     <Typography sx={{color:"#4D4D4D",fontFamily: "Galano Grotesque",fontSize:" 1rem",fontStyle:" normal",fontWeight: 400,lineHeight: "1.5rem" }}>
           Amount Pending
             </Typography>
             <Avatar src= {help} alt={"Navicon"} sx={{ width: '15px', height: '15px',borderRadius:0,color:"white" }}/>
     </Stack>
     <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={1} sx={{marginTop:"1rem"}}>
     <Typography sx={{color:"#1A181E",fontFamily: "Galano Grotesque",fontSize:" 2rem",fontStyle:" normal",fontWeight: 500,lineHeight: "2.375rem", }}>
           ₹92,312.20
             </Typography>
             <Stack direction={"row"} alignItems={"center"} spacing={1}>
             <Typography sx={{color:"#146EB4",fontFamily: "Galano Grotesque",fontSize:" 1rem",fontStyle:" normal",fontWeight: 400,lineHeight: "1.5rem",textDecoration:"underline" }}>
          13 orders
             </Typography>
             <Avatar src= {bluerightIcon} alt={"Navicon"} sx={{width: '15px', height: '15px',borderRadius:0}}/>
             </Stack>
     </Stack>
  
        </Box>
        <Box sx={{width:"30%",height:"5rem",padding:"0.8rem",color:"white",backgroundColor:"white",boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)"}}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-start"} spacing={1} >
     <Typography sx={{color:"#4D4D4D",fontFamily: "Galano Grotesque",fontSize:" 1rem",fontStyle:" normal",fontWeight: 400,lineHeight: "1.5rem" }}>
           Amount Processed
             </Typography>
             <Avatar src= {help} alt={"Navicon"} sx={{ width: '15px', height: '15px',borderRadius:0,color:"white" }}/>
     </Stack>
     <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={1} sx={{marginTop:"1rem"}}>
     <Typography sx={{color:"#1A181E",fontFamily: "Galano Grotesque",fontSize:" 2rem",fontStyle:" normal",fontWeight: 500,lineHeight: "2.375rem", }}>
           ₹23,92,312.19
             </Typography>
            
     </Stack>
  
        </Box>
        
        
       
      </Stack>
    
    </Box>
  )
}

export default Overview
