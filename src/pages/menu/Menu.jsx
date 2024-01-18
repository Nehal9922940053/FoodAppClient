import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Box, styled } from "@mui/material";
import { getAllProducts } from "../../store/builderFunctions";
import { Card, Footer } from "../../components";



//styled component

const Container = styled(Box)(({theme})=>({
    margin:"5rem 0",
    padding:"1rem",
    display:"flex",
    flexWrap:"wrap",
    gap:"1rem",
    [theme.breakpoints.down("md")]:{
        justifyContent:"center"
    }
}))


const Menu = () => {


const dispatch = useDispatch();
const data = useSelector((state) => state.restaurants.allRestaurantProduct);
    

    useEffect(() => {
        if (data?.length === 0) {
          dispatch(getAllProducts());
        }
      }, []);



    return (
        <>
            <Container>
                {data?.map((item) => (
                        item.products.map((itm) => (
                            <Card 
                            key={itm._id} 
                            data={itm} 
                            restaurantName={item.restaurantName} 
                            restaurantID={item.id}
                            />
                        ))
                    ))
                }
            </Container>
            <Footer />
        </>
    );
};

export default Menu;
