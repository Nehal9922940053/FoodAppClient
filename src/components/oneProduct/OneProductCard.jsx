import React, { useEffect, useState } from "react";
import { Box, Grid, Button, Typography, styled } from "@mui/material"
import ButtonGroup from "./ButtonGroup"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { toast } from 'react-toastify'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addProductToCart } from "../../services/api";


//styled components

const Container = styled(Grid)(({ theme }) => ({
    padding: "5rem 0 0 0",
    minHeight:"100vh",
    height:"auto",
    backdropFilter: "blur(0px)",
}))




const Bg = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    height: "100%",
    width: "100%",
    //  backgroundColor: "#FF7722",
     backgroundImage: "linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)"
    /* filter: "brightness(80%)",
    "& > img": {
        filter: "grayscale(0)",
        height: "100%",
        width: "100%",
        objectFit: "cover"
    }*/
}))

const Left = styled(Grid)(({ theme }) => ({
    padding: "1rem",
    "&>img": {
        height: "73%",
        width: "73%",
        borderRadius: "20px",
        objectFit: "cover",
    },
}))

const Right = styled(Grid)(({ theme }) => ({
    padding: "1rem",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1.5rem",
    "& > h4": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bolder"
    },
    [theme.breakpoints.down("md")]: {
        marginTop: "3rem"
    }
}))







const OneProductCard = ({ item, restaurantID }) => {

    // setting the initial price of to half 
    const [price, setPrice] = useState(item.price[0])

    // setting the initial quantity as 1 
    const [quantity, setQuantity] = useState(1);

    // setting the initial value as  0 
    const [value, setValue] = useState(0)

    // extracting the id from the url 
    const { id } = useParams();

    // getting the userID from localStorage 
    const userID = localStorage.getItem("userID");
    const navigate = useNavigate();

    // getting the data which is sent from useNavigate 
    const { state } = useLocation()


    useEffect(() => {
        setValue(price)
    }, [price])


    // total function 
    const total = (cost, quan) => {
        return cost * quan;
    }

    // increaseQuantity function 
    const increaseQuantity = (quantityAvailable) => {
        if (quantity >= quantityAvailable) {
            return toast.info("Quantity not available")
        } else {
            setQuantity(quantity + 1)
            const val = total(price, quantity + 1)
            setValue(val)
        }
    }

    // decrease quantity function 
    const decreaseQuantity = () => {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
            const val = total(price, quantity - 1)
            setValue(val)
        }
    }

    // add product function 
    const addProduct = async () => {
        const { data } = await addProductToCart({
            id,
            productID: id,
            userID,
            productName: item.productName,
            productImg: item.productImg,
            quantity,
            total: value,
            restaurantID: restaurantID ? restaurantID : state
        })
        if (data) {
            if (data.error) {
                toast.error(data.error);
            } else if (data.info) {
                toast.info(data.info)
                navigate("/login")
            } else {
                toast.success(data.success)
                navigate("/cart")
            }
        } else {
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <Box sx={{
                position: "relative", minHeight: "100vh", overflow: "hidden"
            }} >
                <Container container>
                    {/* food image start  */}
                    <Left item xs={12} sm={12} lg={6} md={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                     <img src={item.productImg} alt={item.productName} />
                    </Left>
                    {/* food image end */}

                    <Right item sm={12} xs={12} lg={6} md={12} sx={{ padding: "1rem" }}>
                        {/* category start  */}
                        <Typography variant="h4" >{item.productName} <span>{item.category === "Veg" ? "🟢" : "🔴"}</span> </Typography>
                        {/* category end */}

                        {/* description start  */}
                        <Typography sx={{ letterSpacing: "1px" }}> <i>{item.desc}</i> </Typography>
                        {/* description end */}

                        {/* quantity start  */}
                        <small>{item.quantity} Quantity Available</small>
                        {/* quantity end */}

                        {/* total start  */}
                        <Typography>Total :  <span style={{ color: "lightgreen" }}>{value}Rs.</span>&nbsp;<small style={{ color: "#878787", fontSize: "10px" }}>If you order.</small></Typography>
                        {/* total end */}

                        <Box>
                            {/* half price start  */}
                            <Button sx={{ margin: "0 1rem 0 0", background: "#5d76a9" }} onClick={() => { setPrice(item.price[0]); setQuantity(1) }}
                                variant="contained">Half {item.price[0]}</Button>
                            {/* half price end */}

                            {/* full price start  */}
                            <Button sx={{ margin: "0 1rem 0 0", background: "#5d76a9" }} onClick={() => { setPrice(item.price[1]); setQuantity(1) }} variant="contained">Full {item.price[1]}</Button>
                            {/* full price end */}
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }} >
                            {/* add to cart start  */}
                            <Button variant="contained" color="error" onClick={addProduct} >
                                <AddShoppingCartIcon />&nbsp;Add to Cart
                            </Button>
                            {/* add to cart end */}

                            {/* passing the increase and decrease quantity function to button group start  */}
                            <ButtonGroup increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} quantity={quantity} item={item} />
                            {/* passing the increase and decrease quantity function to button group end */}
                        </Box>
                    </Right>
                </Container>
                <Bg>
                   {/* <img src={item.productImg} alt={item.productName} />*/}
                </Bg>
            </Box >
        </>
    )
}

export default OneProductCard
