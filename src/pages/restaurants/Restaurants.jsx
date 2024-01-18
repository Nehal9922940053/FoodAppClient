import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from "../../store/builderFunctions"
import {Box, Table, TableBody, TableCell, TableHead, TableRow, Typography , styled} from "@mui/material"
import { useNavigate } from "react-router-dom"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Container = styled(Box)(({ theme }) => ({
    width: "90%",
    margin: "5rem auto",
    "& > table td": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        color: "black",
        fontSize: "1.1rem",
        cursor: "pointer",
    },
    "& > table h5": {
        fontWeight: "bold",
        color: "#5d76a9"
    }
}))

const ProductContainer = styled(Box)(({theme})=>({
    display:"flex",
    gap:"0.8rem",
    flexWrap:"wrap",
}))

const RestaurantHeading = styled(Typography)(({theme})=>({
    color:"#2F3A8F",
    fontFamily:"Courier New,cursive",
    fontWeight:"600",
}))

const Restaurants = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate()

    const allProducts = useSelector((state) => state.restaurants.allRestaurantProduct);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])



  return (
    <Container>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell sx={{ textAlign: "center" }} >
                    <RestaurantHeading variant="h3" >All Restaurants</RestaurantHeading>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody  >
            {
                allProducts.map((restaurant) => (
                    <TableRow key={restaurant.id} >
                        <TableCell onClick={() => navigate(`/singleRestaurant/${restaurant.id}`)} >
                            {restaurant.restaurantName}
                            <ChevronRightIcon />
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
</Container>

  )
}

export default Restaurants