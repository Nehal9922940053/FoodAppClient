import React, { useEffect, useState } from 'react'
import {AppBar, Toolbar, Box, IconButton, styled} from '@mui/material'
import  NavLinks  from './Navlinks';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";
import logo from "../../assets/images/logo.png";
import {Link} from 'react-router-dom'



//styled component
const Header = styled(AppBar)(({theme}) => ({
  padding:"0px",
  margin: "0px",
    width: '100%',
    // padding:"0.5rem 1rem",
    transition:"all 0.3s ease-in-out"
}))
  

const StyledToolbar = styled(Toolbar)(({theme}) => ({
     backgroundColor:"#000",
     opacity:" 0.7",
    // backdropFilter:"blur(15px)",
    display: "flex",
    width: "100%",
    maxWidth:"1538px",
    margin:"0 auto",
    alignItems:" center",
    justifyContent:"space-between",
    gap:"1.5rem",
   "&  img" : {
        width: "100px",
    }
  }))

const LinksContainer = styled(Box)(({theme}) => ({
    [theme.breakpoints.down("md")] : {
      display:"none",
    }

}))


const DrawerBtn = styled(Box)(({theme}) => ({
  display:"none",
  [theme.breakpoints.down("md")] : {
    display:"block",
  },
}))



const Navbar = () => {


  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll)
  }, []);


  const scroll = () => {
    if(window.scrollY > 10){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
  }

const handleClose = () => {
   setIsOpen(false);
};


  return (
    <Header sx={{ 
      background : isScrolled ? "rgb(202,213,223)" : "none",
      boxShadow  :  isScrolled ? "rgba(0,0,0,0.16) 0px 1px 4px" : "none"
    }}>
    <StyledToolbar>

    <Box component={Link} to="/">
        <img src={logo} alt='logo' />
    </Box>

    <LinksContainer>
      <NavLinks/>
    </LinksContainer>


    <DrawerBtn>
        <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon sx={{ color : isScrolled ? "#5D76A9" : "white" }} fontSize="large"/>
        </IconButton>
    </DrawerBtn>


    <Sidebar open={isOpen} handleClose={handleClose}/>

    </StyledToolbar>
    </Header>
  )
}

export default Navbar