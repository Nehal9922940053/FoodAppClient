import React ,{ useEffect, useState } from "react";
import {Box, Paper, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, styled } from "@mui/material"
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { updateProduct } from "../../store/builderFunctions"
import { useGetRestaurantID } from '../../hooks/useGetUserID'
import { useNavigate } from "react-router-dom"

//styled Components


const Container = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding:"5rem 1rem"
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: "1.5rem",
    width: "100%",
    maxWidth: "500px",
    "& > h5": {
        textAlign: "center",
        fontWeight: "bold",
    },
    "& > form": {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width:"100%",
        gap:"1rem",
        margin:"1rem 0",
        "& > div":{
            width:"100%",
            display: "flex",
            justifyContent: "space-between",
            gap:"0.8rem",
            alignItems: "center",
        }
    }
}))



const EditForm = ({ data }) => {

    const [formValues, setFormValues] = useState(null)
    const [prices, setPrices] = useState([]);
    const dispatch = useDispatch();
    const restaurantID = useGetRestaurantID();
    const navigate = useNavigate()

    useEffect(() => {
        setFormValues(data)
        setPrices(data?.price)
    }, [data])




    // this functions gets the half and full value from the restaurant and puts it into the price array
    const handlePrices = (e, index) => {
        console.log(e.target.value, index)
        const currentPrices = [...prices];
        currentPrices[index] = e.target.value;
        setPrices(currentPrices)
    }




    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        dispatch(updateProduct({ data: formValues, restaurantID }))
        navigate("/allProducts")
    }

    return (
        <>
            <Container>
                <StyledPaper>
                    <Typography variant="h5" >Edit Item</Typography>
                    <form>
                        <Box>
                            {/* product name  */}
                            <TextField
                                fullWidth
                                value={formValues?.productName}
                                onChange={handleChange}
                                name="productName"
                                label="Product name" />
                        </Box>
                        <Box>
                            {/* product desc  */}
                            <TextField
                                fullWidth
                                value={formValues?.desc}
                                onChange={handleChange}
                                name="desc"
                                label="Description" />
                        </Box>
                        <Box>
                            {/* product quantity  */}
                            <TextField
                                fullWidth
                                value={formValues?.quantity}
                                name="quantity"
                                onChange={handleChange}
                                label="Quantity" />
                        </Box>
                        <Box>
                            {/* product category  */}
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="category"
                                    name="category"
                                    value={formValues?.category}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Non-veg" >Non-veg</MenuItem>
                                    <MenuItem value="Veg" >Veg</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box>
                            {/* half price  */}
                            <TextField
                                fullWidth
                                label="Price : Half"
                                value={prices[0]}
                                onChange={(e) => handlePrices(e, 0)} />

                            {/* full price  */}
                            <TextField
                                onChange={(e) => handlePrices(e, 1)}
                                fullWidth
                                value={prices[1]}
                                label="Price : Full" />
                        </Box>

                        {/* product image  */}
                        <Box>
                            <img src={formValues?.productImg} style={{ width: "100%", height: "10rem", objectFit: "cover" }} />
                        </Box>
                        <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }} >Update item image</Typography>

                        {/* update product image  */}
                        <Box>
                            <FileBase
                                type='file'
                                multiple={false}
                                onDone={({ base64 }) => setFormValues({ ...formValues, productImg: base64 })}
                            />
                        </Box>

                        {/* handle delete  */}
                        <Box>
                            <Button fullWidth variant="contained" onClick={handleEdit} >Edit</Button>
                        </Box>
                    </form>
                </StyledPaper>
            </Container>
        </>
    )
}


export default EditForm