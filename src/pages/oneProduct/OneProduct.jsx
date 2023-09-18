import { useEffect } from "react"
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getSingleProduct } from "../../store/builderFunctions"
import { SingleProductCard } from "../../components"
/*
import { Box, Grid, styled } from '@mui/material'

const Container = styled(Grid)(({ theme }) => ({
    padding: "5rem 0 0 0",
    backdropFilter: "blur(5px)",
}))

const Bg = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    height: "100%",
    width: "100%",
    filter: "brightness(20%)",
    "& > img": {
        filter: "grayscale(1)",
        height: "100%",
        width: "100%",
        objectFit: "cover"
    }
}))

const Left = styled(Grid)(({ theme }) => ({
    padding: "1rem",
    "&>img": {
        height: "80%",
        width: "80%",
        borderRadius:"20px",
        objectFit: "cover",
    },
}))

const Right = styled(Grid)(({ theme }) => ({
    padding: "1rem",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
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


const ButtonContainer = styled(Box)(({theme})=>({
    "& > span":{
        width:"80px",
        textAlign:"center"
    },
    display:"flex",
    alignItems:"center",
    borderRadius:"20px",
    overflow:"hidden"
}))

*/

const OneProduct = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const data = useSelector(state => state.restaurants.singleProduct)
    const {state} = useLocation()



    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [id])


    return (
        <>

            {
                data?.map((item) => (
                    <SingleProductCard item={item} key={item._id} restaurantID={state} />
                ))
            }
        </>
    )
}

export default OneProduct
