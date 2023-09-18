import React from 'react';
import {Box, Button, styled  } from "@mui/material"


//styled Components
const ButtonContainer = styled(Box)(({ theme }) => ({
    "& > span": {
        width: "80px",
        textAlign: "center"
    },
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    overflow: "hidden"
}))





const ButtonGroup = ({ item, increaseQuantity, decreaseQuantity, quantity }) => {

    return (
        // increase decrease buttons 
        <ButtonContainer>
            <Button sx={{ background: "#5d76a9" }} onClick={decreaseQuantity} variant="contained" >-</Button>
            <span  >{quantity}</span>
            <Button sx={{ background: "#5d76a9" }} onClick={() => increaseQuantity(item?.quantity)} variant="contained" >+</Button>
        </ButtonContainer>
    )
}

export default ButtonGroup
