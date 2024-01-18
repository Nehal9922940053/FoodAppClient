import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, getUserCart } from "../../store/builderFunctions"
import { Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"
import { useGetUserID } from '../../hooks/getID'
import Total from "./Total"
import cartEmpty from '../../assets/images/emptyCart.png'
import { Footer } from '../../components/index'


//styled Components

const Empty = styled(Box)(({theme})=>({
    marginTop:"5rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"80vh",
    flexDirection:"column",
    gap:"1rem",
    "& > img":{
        height:"250px",
        width:"250px",
        objectFit:"contain",
        mixBlendMode:"color-burn"
    }
}))

const Container = styled(Box)(({ theme }) => ({
    margin: "5rem 0",
    "& > div": {
        width: "95%",
        margin:"0 auto"
    },
    "&  table": {
        margin: "0 auto",
        "& > thead > tr > th": {
            textAlign: "center"
        },
        "& > tbody tr td> img": {
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover"
        },
        "& > tbody > tr > td": {
            textAlign: "center"
        }
    }
}))




const Cart = () => {

    const dispatch = useDispatch()
    const userID = useGetUserID()
    const cart = useSelector((state) => state.restaurants.cart)
    const [isChanged, setIsChanged] = useState(cart);

    // handleDelete function 
    const handleDelete = (id, userID) => {
        dispatch(
          deleteItemFromCart({
            productID: id,
            userID,
            cb: (data) => {
              if (data.success === "Removed from cart") {
                dispatch(getUserCart(userID));
              }
            },
          })
        );
      };
    // when the userID is present then only the dispatch will work 
    useEffect(() => {
        if (userID) {
            dispatch(getUserCart(userID))
        }
    }, [isChanged])


  return (
    <>
    {
        !userID || cart?.length < 2 ? (
            <Empty>
                <img src={cartEmpty} alt="cart empty" />
                <h3>Cart empty</h3>
            </Empty>
        ) : (
            <Container>
                <Grid container>
                    <Grid item lg={8} md={8} sm={12} xs={12} sx={{ padding: "1rem" }} >

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sr. no </TableCell>
                                    <TableCell>Product </TableCell>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Remove</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    cart?.slice(1).map((item, index) => {
                                        return (
                                            <TableRow key={index} >
                                                <TableCell>{index}</TableCell>
                                                <TableCell>
                                                    <img src={item?.productImg} alt={item?.productName} />
                                                </TableCell>
                                                <TableCell>{item?.productName}</TableCell>
                                                <TableCell>{item?.quantity}</TableCell>
                                                <TableCell>{item?.total} Rs</TableCell>
                                                <TableCell><Button variant="contained" onClick={() => handleDelete(item.productID, userID)} color="error" >X</Button></TableCell>
                                            </TableRow>
                                        )
                                    }
                                    )
                                }
                            </TableBody>
                        </Table>
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12} sx={{ padding: "1rem", }} >
                    <div>
                     <Total data={cart} userID={userID} />
                    </div>   
                    
                    </Grid>
                </Grid>
            </Container>
        )
    }
    <Footer />
</>

  )
}

export default Cart