import React from 'react'
import {Menu, MenuItem } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import { useGlobalContext } from '../../context/context'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Logout = ({open, handleClose}) => {
        
    const openMenu = Boolean(open)

    const {setRole} = useGlobalContext()

    const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);

    const navigate  = useNavigate()

    const logout = () => {
        localStorage.clear()
        removeCookies("access_token")
        toast.success("Logged out Successfully")
        setRole(null)
        navigate("/")
    }


  return (
     <>
   <Menu 
        sx={{ marginTop:"0.8rem" }}
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
   >
   
        <MenuItem sx={{ padding: "0  3rem" }} onClick={logout}>
        Logout&nbsp;<PowerSettingsNewIcon/>
        </MenuItem>


   </Menu>
   </>
  )
}

export default Logout