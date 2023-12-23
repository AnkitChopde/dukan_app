import { Box, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'

const Overview = () => {
  return (
    <Box sx={{
        height: "57.625rem",padding:"1rem",background:"#FAFAFA",border:"1px solid red"}}>
      <Stack direction={"row"} justifyContent={"space-between"}>
      <Typography sx={{ color: 'black',fontFamily: "Inter",fontSize:" 0.9375rem",fontStyle:" normal",fontWeight: 900,lineHeight: "1.375rem" }}>
             Overview
             </Typography>
             <Select
      placeholder='select'
     
      style={{
        width:"10rem",
        color:"black",
        borderRadius: '0.375rem',
        background: '#F2F2F2',
        outline: 'none',
        boxShadow: 'none',
      }}
    >
      <MenuItem value="This month">
       This Month
      </MenuItem>
      <MenuItem value="january">January</MenuItem>
    </Select>
      </Stack>
    </Box>
  )
}

export default Overview
