import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getSingleRestaurantProducts } from "../../store/builderFunctions";
import {Box, Typography, styled } from "@mui/material";
import { Card } from "../../components";


const Container = styled(Box)(({ theme }) => ({
    padding:"0 1.2rem",
    marginTop: "5rem",
    "& > h6": {
        fontWeight: "bold",
        fontSize:"1.2rem",
        color:"#5d76a9"
    }
}))

const ProductContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "0.8rem",
    marginTop: '1rem',
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]:{
        justifyContent:"center"
    }
}))


const OneRestaurant = () => {

    // extracting the restaurant id from the url using useParams 
    const { id } = useParams();

    const dispatch = useDispatch();

    // getting the data of single restaurant products stored into the redux store 
    const data = useSelector((state) => state.restaurants.singleRestaurantProducts)

    // dispatching the function 
    useEffect(() => {
        dispatch(getSingleRestaurantProducts(id))
    }, [id])


    return (
        <>
            <Container>
              
                {/* name of the restaurant    <Typography variant="h6" >{data?.name}</Typography>
                <Typography variant="h6"  sx={{ fontSize: "0.8rem !important" }} >{data.address}</Typography>
                <Typography variant="h6" sx={{ fontSize: "0.8rem !important" }} >Opening Time {data.opening}</Typography>
                <Typography variant="h6" sx={{ fontSize: "0.8rem !important" }} >Closing Time {data.closing}</Typography>
*/}
                {/* all the items/products of the restaurant  */}
                <ProductContainer>
                    {
                        data?.data?.map((item, index) => (
                            <Card key={index} data={item} restaurantName={data.name} restaurantID={data.id} />
                        ))
                    }
                </ProductContainer>
            </Container>
        </>
    )
}

export default OneRestaurant
