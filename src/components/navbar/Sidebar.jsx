import React from 'react'
import {Divider, Drawer, styled} from "@mui/material"
import Navlinks from './Navlinks';
import logo from '../../assets/images/logo.png'


//styled Components

const SideDrawer = styled(Drawer)(({theme}) => ({
    "& > div":{
          padding: "1rem 2rem",
        "& img": {
          margin: " 0 1rem 1rem 0",
          width:"150px",
        }
    },
}))





const Sidebar = ({open, handleClose}) => {
  return (
   <SideDrawer open={open} onClose={handleClose}>
      <img src={logo} alt='logo'/>
      <Divider/>
      <Navlinks/>
   </SideDrawer>
  )
}

export default Sidebar