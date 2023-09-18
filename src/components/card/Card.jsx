import React from 'react'
import {Paper,Box,Typography, Button, styled} from '@mui/material'
import {useNavigate} from "react-router-dom"
import {useGlobalContext} from '../../context/context'

//styled components

const StyledPaper = styled(Paper)(({theme})=>({
    padding:"0.3rem",
    width:"18rem",
    cursor:"pointer",
    display:"flex",
    flexDirection:"column",
    [theme.breakpoints.down("md")]:{
        width:"80%",
        height:"25rem"
    },
    height:"30rem"
}))

const Image = styled(Box)(({theme})=>({
width:"100%",
height:"60%",
overflow:"hidden",
"& > img":{
    objectFit:"cover",
    height:"100%",
    width:"100%"
}
}))

const Content = styled(Box)(({theme})=>({
    display: "flex",
    gap:"0.5rem",
    padding:"0.5rem",
    flexDirection:"column",
    "& > h6":{
        fontWeight:"bold"
    }
}))

const Title = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    "& > h6":{
        fontWeight:"bold",
        fontSize:"1rem"
    }
}))






const Card = ({data, restaurantName, handleDelete, restaurantID}) => {
    const { role } = useGlobalContext()

    const navigate = useNavigate();

    // trimming the string from 0 to 80 length
    const trimString = (text) => {
        return text?.slice(0, 80) + "..."
    }

    // edit endpoint for the restaurant/admin 
    const edit = () => {
        navigate(`/edit/${data._id}`)
    }


    // if the role is not admin the it will navigate to this endpoint 
    const navigateTo = () => {
        if (role !== "admin") {
            navigate(`/product/${data._id}`, { state: restaurantID })
        }
    }



  return (
    <StyledPaper>
    <Image onClick={navigateTo} >
    <img src={data.productImg} alt="food image" />
</Image>
{/* food img end */}

{/* content of the food item start */}
<Content>
    {/* restaurant name start  */}
    <Typography variant="h6" >{restaurantName}</Typography>
    {/* restaurant name end */}
    <Title>
        {/* product name start  */}
        <Typography variant="h6" >{data.productName}</Typography>
        {/* product name end */}

        {/* product category start  */}
        <Typography>{data.category}&nbsp;{data.category === "Non-veg" ? "🔴" : "🟢"}</Typography>
        {/* product category end */}
    </Title>
    {/* when the role is not admin the desc and price will be shown start */}
    {
        role !== "admin" && (
            <>

                <Typography>
                    {trimString(data.desc)}
                </Typography>

                <Typography variant="body-2" >Rs.&nbsp;{data?.price[0]}</Typography>
            </>
        )
    }
    {/* when the role is not admin the desc and price will be shown end */}

    {/* when the role is admin the available quantity button,edit button and delete button will be shown start */}
    {
        role === 'admin' && (
            <>
                <Button sx={{ background: "green", color: "lightgreen", ":hover": { background: "green", color: "lightgreen" } }} >Available quantity {data.quantity}</Button>
                <Button variant="contained" onClick={edit} >Edit</Button>
                <Button variant="contained" color="error" onClick={() => handleDelete(data._id, restaurantID)} >Delete</Button>
            </>
        )
    }
    {/* when the role is admin the available quantity button,edit button and delete button will be shown end */}
</Content>

    </StyledPaper>
  )
}

export default Card