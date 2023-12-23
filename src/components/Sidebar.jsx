import React from 'react'
import {Avatar, Box,Icon,Stack, Typography} from "@mui/material"
import Img from "../assets/image.png"
import down from "../assets/Down.png"
import wallet from "../assets/wallet.png"
import { sidebarData } from './sidebarData'


const Sidebar = () => {
  return ( <>
  <Box sx={{position:"sticky",top:"0",width:"14rem",height:"98vh",flexDirection:"column",backgroundColor:"#1E2640",padding:"1rem 0.625rem",flex:"1 0 0"}}>
        
       
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Avatar src={Img} alt={"Navicon"} sx={{ width: '50px', height: '40px',borderRadius: 0 }}/>
          <Stack direction={"column"}>
             <Typography sx={{ color: 'white',fontFamily: "Inter",fontSize:" 0.9375rem",fontStyle:" normal",fontWeight: 500,lineHeight: "1.375rem" }}>
              Nishyan
             </Typography>
             <Typography sx={{ color: '#FFF',fontFamily: "Galano Grotesque",fontSize:" 0.8125rem",fontStyle:" normal",fontWeight: 400,lineHeight: "1rem", textDecoration: 'underline' }}>
              Visit Store
             </Typography>
          </Stack>
        </Stack>
        
        <Avatar src={down} alt={"Navicon"} sx={{ width: '20px', height: '20px'}}/>
        </Stack>
      
       <Box sx={{marginTop:"2rem",}}>
          {sidebarData.map((menu)=>(
            <>
            <Stack direction={"row"} spacing={4} alignContent={"center"} sx={{marginTop:"1rem",marginLeft:'0.5rem'}}>
            <Avatar src= {menu.icon} alt={"Navicon"} sx={{ width: '20px', height: '20px' }}/>
            <Typography sx={{ color: '#FFF',fontFamily: "Galano Grotesque",fontSize:" 0.8125rem",fontStyle:" normal",fontWeight: 400,lineHeight: "1rem" }}>
              {menu.title}
             </Typography>
            </Stack>
            </>
          ))}
        </Box>
       
       <Stack sx={{height:"40%"}} justifyContent={"flex-end"} 
       >
       <Box sx={{backgroundColor:"#353C53",marginBottom:"20px",padding: "1rem 0.625rem",alignItems: "center"}}>
     <Stack direction={"row"} spacing={3} alignItems={"center"}> 
      <Avatar src= {wallet} alt={"Navicon"} sx={{ width: '20px', height: '20px',borderRadius:0,bgcolor:"rgba(255, 255, 255, 0.10)" }}/>
      <Stack>
      <Typography sx={{ color: 'white',fontFamily: "Inter",fontSize:" 0.9375rem",fontStyle:" normal",fontWeight: 500,lineHeight: "1.375rem" }}>
             Available Credits
             </Typography>
             <Typography sx={{ color: '#FFF',fontFamily: "Inter",fontSize:" 1rem",fontStyle:" normal",fontWeight: 900,lineHeight: "1.5rem" }}>
             222.10
             </Typography>
      </Stack>
     </Stack>
</Box>
       </Stack>
      
      
      
  </Box>
  </>
  )
}

export default Sidebar

