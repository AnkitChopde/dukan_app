import { Avatar, Box, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import help from "../assets/Help.png"
import search from "../assets/search.png"
import group from "../assets/Group.png"
import menu from "../assets/Menu.png"

const Navbar = () => {
    const inputStyles = {
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
      
        borderRadius: '0.375rem',
        background: '#F2F2F2',
        outline: 'none',
        boxShadow: 'none',
        border: '1px solid #ccc', 
        // Add any other styles as needed
      }
  return (
    <Stack sx={{width: "76rem",height:"8vh",borderBottom: "1px solid #D9D9D9"}} direction="row" justifyContent={"space-between"} alignItems={"center"}>
     <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={1} sx={{paddingLeft:"1rem"}}>
     <Avatar src= {help} alt={"Navicon"} sx={{ width: '20px', height: '20px',borderRadius:0,bgcolor:"rgba(255, 255, 255, 0.10)" }}/>
     <Typography sx={{ color: '#4D4D4D',fontFamily: "Galano Grotesque",fontSize:" 0.75rem",fontStyle:" normal",fontWeight: 400,lineHeight: "1rem" }}>
           How it works
             </Typography>
     </Stack>
     <TextField
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Avatar src= {search} alt={"Navicon"} sx={{ width: '10px', height: '10px',borderRadius:0}}/>
          </InputAdornment>
        ),
      }}
      sx={inputStyles}
      placeholder={"Search features tutorials, etc"}
      // Add other TextField props as needed
    />
    <Stack direction={"row"} spacing={2}>
    <Avatar src= {group} alt={"Navicon"} sx={{ width: '20px', height: '20px',borderRadius:0,bgcolor:"rgba(255, 255, 255, 0.10)" }}/>
    <Avatar src= {menu} alt={"Navicon"} sx={{ width: '20px', height: '20px',borderRadius:0,bgcolor:"rgba(255, 255, 255, 0.10)" }}/>
    </Stack>


    </Stack>
  )
}

export default Navbar
