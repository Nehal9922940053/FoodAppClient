import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useGetRestaurantID } from "../../hooks/useGetUserID"
import { deleteProduct, getSingleRestaurantProducts } from "../../store/builderFunctions"
import { Card, Footer } from "../../components"
import {Box, styled} from '@mui/material'


//styled components

const Container = styled(Box)(({ theme }) => ({
    margin: "5rem 0",
    padding: "0.5rem",
    display: "flex",
    flexWrap: "wrap",
    "& > h1": {
        textAlign: "center",
        width: "100%"
    },
    gap: "1rem",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center"
    },
}))









const Products = () => {
    const restaurantID = useGetRestaurantID()
    const data = useSelector((state) => state.restaurants.singleRestaurantProducts)
    const [products, setProducts] = useState(data)

    const dispatch = useDispatch()

    // dispatching the restaurants products 
    useEffect(() => {
        dispatch(getSingleRestaurantProducts(restaurantID))
    }, [products])

    // deleting item function 
    const handleDelete = (id, restaurantID) => {
        dispatch(deleteProduct({ productID: id, restaurantID }))
    }


    return (
        <>
            <Container>
                {
                    data?.data?.length < 1 ? (
                        <h1>Add products</h1>
                    ) : (
                        <>
                            {
                                data?.data?.map(item => (
                                    <Card key={item._id} data={item} handleDelete={handleDelete} restaurantID={restaurantID} />
                                ))
                            }
                        </>
                    )
                }
            </Container>
            <Footer />
        </>
    )
}

export default Products