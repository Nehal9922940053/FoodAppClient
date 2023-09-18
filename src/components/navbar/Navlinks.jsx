import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/context'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Avatar, Badge, Box, styled } from '@mui/material'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"
import { useGetUserID } from '../../hooks/useGetUserID';
import {Logout} from '../index'
//styled components
 

const NavLinksContainer = styled(Box)(({theme}) =>({
    display:"flex",
    alignItems:"center",
    gap:"2rem",
   " & > a " : {
       fontWeight:"bold",
       fontSize:"1.1rem",
    },
    [theme.breakpoints.down("md")] :{
        flexDirection:"column",
        alignItems:"start",
        marginTop: "1rem",
        "& > a ":{
           color: "#5D76A9 !important",
           margin:"0.5rem 0"
         },
    },
}))







//links 

const allLinks = [
    {name : "Home", to : "/"},
    {name : "Register Restaurant", to : "/restaurantLogin"},
    {name : "All Restaurants", to : "/menu"},
    {name : "Cart", to : "/cart"},
    {name : "Login", to : "/login"}
]

//admin Links

const adminLinks =[
    {name : "Home", to : "/"},
    {name : "All Restaurants", to : "/menu"},
    {name : "Dashboard", to : "/dashboard"},
    {name : "Create Item", to : "/create"}
]


//user Links


const userLinks = [
    {name : "Home", to : "/"},
    {name : "All Restaurants", to : "/menu"},
    {name : "Cart", to : "/cart"}
]




const Navlinks = () => {

    const [open, setOpen] = useState(null);
    const {role} = useGlobalContext();
    const  userID = useGetUserID()


    const handleClose = () => {
        setOpen(null);
    };

    const handleOpen = (e) => {
        setOpen(e.currentTarget);
    };


    const initial = localStorage.getItem("email");

    const [initialChar, setInitialChar] = useState(initial)


    useEffect (() => {
        setInitialChar(initial?.charAt(0))
    }, [initial])


    const data = useSelector ((state) => state.restaurants.cart)

  return (
   <NavLinksContainer>
   {
    role === "user" || role === "admin" ? null : <Link to ="/restaurantLogin">Register Restaurants</Link>
   }

   {
    role === "admin" ? null : <Link to ="/allRestaurants">All Restaurants</Link>
   }

   {
    role === "admin" ? null : <Link to ="/menu">Menu</Link>
   }

   {
     role === "admin" ? null : <Link to="/cart"><Badge color="secondary" badgeContent={userID && data?.length ? data.length - 1 : 0 }>
     Cart&nbsp;<ShoppingCartIcon/>
     </Badge>
     </Link>
   }

   {
    role === "user" && <Link to="/pastOrders">Past Orders</Link>
   }

   
    {role === "admin" && <Link to="/orders">Orders</Link>}
    {role === "admin" && <Link to="/allProducts">All Products</Link>}



    {role === "admin" && <Link to="/create">Create Item</Link>}

    {
        !initial && !role ? <Link to="/login">Login</Link>:
        <Avatar onClick={handleOpen} sx={{ cursor : "pointer", background: "#5d76a9" }}>
        {initialChar}
        </Avatar>
    }   


    {
        role &&
        <Logout open={open} handleClose={handleClose}/>
    }

   </NavLinksContainer>
  )
}

export default Navlinks