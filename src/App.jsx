
import { Stack } from '@mui/material'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Overview from './components/Overview'

function App() {
  

  return (
    <>
     <Stack direction={"row"} sx={{position:"relative"}} >
     <Sidebar/>
    <Stack>
    <Navbar/>
    <Overview/>
    </Stack>
     </Stack>
    </>
  )
}

export default App
