import React, { useEffect, useState } from "react";
import { Box, Paper, IconButton, MenuItem, Typography ,styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/builderFunctions'
import { useNavigate } from 'react-router-dom'


//styled components


const Container = styled(Box)(({theme})=>({
    maxWidth:"800px",
    display:"flex",
    width:"80%",
    position:"relative",
    background:"rgb(255, 255, 255)",
    padding:"0 1.2rem",
    borderRadius:"50px",
    alignItems:"center",
    "& > input":{
        width:"100%",
        padding:"1.2rem 3rem",
        background:"none",
        outline:"none",
        border:"none",
        fontSize:"1.1rem"      
    },
}))

const Wrapper = styled(Paper)(({theme})=>({
position:"absolute",
top:"4.5rem",
left:0,
width:"100%",
maxHeight:"18rem",
overflowY:"scroll",
"& img":{
    width:"60px"
},
"& li> div":{
    display:"flex",
    width:"100%",
    alignItems:"center",
        justifyContent:"space-between"
}
}))






const Search = () => {

    // creating a state for the input word 
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // dispatching allproducts 
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    // extracting the data from redux store 
    const allProducts = useSelector((state) => state.restaurants.allRestaurantProduct)

    // storing the word into the state 
    const getText = (word) => {
        setText(word)
    }

    // function to navigate along with some data 
    const handleNavigate = (id, restaurantID) => {
        setText(null);
        navigate(`product/${id}`, { state: restaurantID })
    }

    return (
        <>
            <Container>
                {/* input to search  */}
                <input
                    type="text"
                    placeholder="Search food items..."
                    value={text}
                    onChange={(e) => getText(e.target.value)} />
                <IconButton>
                    <SearchIcon fontSize="large" />
                </IconButton>

                {/* when the user types something into the input field then only the list will show  */}
                {
                    text && (
                        <Wrapper>
                            {
                                allProducts.map((prod) => (
                                    prod.products.filter((product) => (
                                        product?.productName.toLowerCase().includes(text.toLowerCase())
                                    )).map((product) => (
                                        <MenuItem key={product._id} >
                                            <Box onClick={() => handleNavigate(product._id, prod.id)} >
                                                <img src={product.productImg} alt="product" />
                                                <Typography>{product.productName}</Typography>
                                                <Typography>Half: {product?.price[0]}rs</Typography>
                                            </Box>
                                        </MenuItem>
                                    ))
                                ))
                            }

                        </Wrapper>
                    )
                }
            </Container>
        </>
    )
}

export default Search
