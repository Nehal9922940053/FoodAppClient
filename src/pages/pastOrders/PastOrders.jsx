import React, { useEffect } from "react"
import {Box, Table, TableBody, TableCell, TableHead, TableRow,styled } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { getPastOrders } from '../../store/builderFunctions'
import { useGetUserID } from '../../hooks/useGetUserID'


//styled Components

const Container = styled(Box)(({ theme }) => ({
    marginTop: "5rem",
    "& > h2": {
        textAlign: "center"
    },
    "& > h1": {
        textAlign: "center",
        color: "#5d76a9",
        padding: "2rem 0"
    },
    "& > table": {
        borderRadius: "10px",
        overflow: "hidden",
        maxWidth: "1200px",
        width: "95%",
        margin: "2rem auto",
        "& > thead > tr > th": {
            background: "#5d76a9",
            color: "white",
            textAlign: "center",
        },
        "& > tbody > tr > td > img": {
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            objectFit: "cover"
        },
        "& > tbody > tr > td": {
            textAlign: "center"
        },
        "& > tbody": {
            background: "white"
        },
    }
}))





const PastOrders = () => {

    const dispatch = useDispatch()
    const id = useGetUserID()
    const data = useSelector((state) => state.restaurants.pastOrders)

    useEffect(() => {
        if (data?.length === 0) {
            dispatch(getPastOrders(id))
        }
    }, [data])




    return (
        <>
            <Container>
                {
                    data?.length < 1 || data === undefined ? (
                        <h1>No items ordered yet</h1>
                    ) : (
                        <>
                            <h2>Past Orders</h2>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell>Restaurant Name</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data?.map((item, indx) => (
                                            <TableRow key={indx} >
                                                <TableCell>
                                                    <img src={item.productImg} alt="" />
                                                </TableCell>
                                                <TableCell>{item.productName}</TableCell>
                                                <TableCell>{item.restaurantName}</TableCell>
                                                <TableCell>{item.quantity}</TableCell>
                                                <TableCell>{item.price} Rs</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </>
                    )
                }
            </Container>
        </>
    )
}

export default PastOrders
