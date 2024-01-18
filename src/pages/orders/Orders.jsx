import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Footer, Navbar } from "../../components"
import { getOrderedProducts } from "../../store/builderFunctions";
import { useGetRestaurantID } from "../../hooks/getID";
import {Box, Button, Table, TableBody, TableCell, TableHead, TableRow ,styled} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { changeStatus } from "../../services/api";
import { toast } from "react-toastify";



//styled components



const Container = styled(Box)(({ theme }) => ({
    marginTop: "5rem",
    padding: "1rem",
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
        "& > tbody > tr > td": {
            textAlign: "center"
        },
        "& > tbody": {
            background: "white"
        },
    },
    "& > h2": {
        textAlign: "center"
    }
}))




const Orders = () => {

    const id = useGetRestaurantID()
    const dispatch = useDispatch();

    const data = useSelector((state) => state.restaurants.orders)

    useEffect(() => {
        if (data?.length === 0) {
            dispatch(getOrderedProducts(id))
        }
    }, [id])


    const handleStatus = async (orderId, restaurantId) => {
        const { data } = await changeStatus({ orderID: orderId, restaurantID: restaurantId })
        if (data) {
            if (data.success) {
                toast.success(data.success)
                dispatch(getOrderedProducts(id))
            } else {
                toast.error(data.error)
            }
        } else {
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <Navbar />
            <Container>
                {
                    data?.length < 1 ? (
                        <>
                            <h2>No orders yet...</h2>
                        </>
                    ) : (
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order Id</TableCell>
                                    <TableCell>Product ID</TableCell>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Accept</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data?.map((item, index) => (
                                        <TableRow key={index}  >
                                            <TableCell>{item?._id?.slice(0, 10)}...</TableCell>
                                            <TableCell>{item?.productID?.slice(0, 10)}...</TableCell>
                                            <TableCell>{item.productName}</TableCell>
                                            <TableCell>{item.quantity}</TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            <TableCell>{item.status === false ? "Pending" : "On the way"}</TableCell>
                                            <TableCell><Button variant="contained" onClick={() => handleStatus(item._id, id)} disabled={item.status ? true : false} > <DoneIcon /> </Button></TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    )
                }
            </Container>
            <Footer />
        </>
    )
}

export default Orders;


