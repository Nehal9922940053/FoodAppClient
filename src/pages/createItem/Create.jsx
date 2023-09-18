import React, {useState} from 'react'
import {Box ,Paper, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, styled } from "@mui/material"
import FileBase from 'react-file-base64'
import { addProduct } from "../../services/restaurantProductApi"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

//styled components
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




const Create = () => {

    const [prices, setPrices] = useState([]);
    const navigate = useNavigate()

    const initialValues = {
        productName: "",
        desc: "",
        quantity: 0,
        category: "",
        price: prices,
        productImg: ""
    }

    const [formValues, setFormValues] = useState(initialValues);
    const restaurantID = localStorage.getItem("restaurantID")

    // this functions gets the half and full value from the restaurant and puts it into the price array
    const handlePrices = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices)
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const { data } = await addProduct(restaurantID, formValues);
        if (data) {
            if (data.error) {
                toast.error(data.error)
            } else if (data.info) {
                toast.info(data.info)
            } else {
                toast.success(data.success)
                setFormValues(initialValues)
                navigate("/allProducts")
            }
        } else {
            toast.error("Something went wrong")
        }
    }

    return (
        <>
            <Container>
                <StyledPaper>
                    <Typography variant="h5" >Create Item</Typography>
                    <form>
                        <Box>
                            <TextField
                                fullWidth
                                value={formValues.productName}
                                onChange={handleChange}
                                name="productName"
                                label="Product name" />
                        </Box>
                        <Box>
                            <TextField
                                fullWidth
                                value={formValues.desc}
                                onChange={handleChange}
                                name="desc"
                                label="Description" />
                        </Box>
                        <Box>
                            <TextField
                                fullWidth
                                value={formValues.quantity}
                                name="quantity"
                                onChange={handleChange}
                                label="Quantity" />
                        </Box>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="category"
                                    name="category"
                                    value={formValues.category}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Non-veg" >Non-veg</MenuItem>
                                    <MenuItem value="Veg" >Veg</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box>
                            <TextField
                                fullWidth
                                label="Price : Half"
                                onChange={(e) => handlePrices(e, 0)} />

                            <TextField
                                onChange={(e) => handlePrices(e, 1)}
                                fullWidth
                                label="Price : Full" />
                        </Box>
                        <Typography sx={{ fontSize: "0.9rem", fontWeight: "bold" }} >Upload item image</Typography>
                        <Box>
                            <FileBase
                                type='file'
                                multiple={false}
                                onDone={({ base64 }) => setFormValues({ ...formValues, productImg: base64 })}
                            />
                        </Box>
                        <Box>
                            <Button fullWidth variant="contained" onClick={handleCreate} >Create</Button>
                        </Box>
                    </form>
                </StyledPaper>
            </Container>
        </>

    )
}

export default Create
