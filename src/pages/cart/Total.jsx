import React, { useEffect, useState } from "react"
import { Paper, Typography , styled} from "@mui/material"
import { buy, handlePayment, verifyPayment, pastOrders } from "../../services/api"
import { useGetUserID } from "../../hooks/useGetUserID"
import { toast } from "react-toastify"
//  import { KEY } from "../../keys/data"
import { useDispatch } from "react-redux"
import { clearCart } from "../../store/builderFunctions"
import { useNavigate } from "react-router-dom"

//styled components



const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: "1rem",
    display:"flex",
    width:"100%",
    flexDirection:"column",
    gap:"1rem",
    "& > p":{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    "& > button":{
        border:"none",
        padding:"0.5rem 1.5rem",
        outline:"none",
        background:"#5D76A9",
        color:"white",
        cursor:"pointer"
    }
}))



const Total = ({ data }) => {

    const dispatch = useDispatch()

    const [total, setTotal] = useState(0)

    const userID = useGetUserID();

    const [productDetails, setProductDetails] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        totalAmount();
    }, [data])

    const totalAmount = () => {
        let price = 0;

        data?.map(item => {
            const itemTotalValue = parseFloat(item?.total) || 0;
            price += itemTotalValue;
        });

        setTotal(price);
    };


    const handlePay = async () => {
        await payment(total + 50)
    }


    const buyProduct = async () => {

        data?.slice(1)?.map((item) => {
            let product = {
                productID: item.productID,
                quantity: item.quantity,
                price: item.total,
                restaurantID: item.restaurantID
            }

            productDetails.push(product)
        })
        const response = await buy({ userID, productDetails: productDetails })
        if (response.data) {
            if (response.data.success) {
                toast.success(response.data.success)
            } else {
                toast.error(response.data.error)
            }
        }
    }


    const handleOpenRazorPay = (data) => {
        const options = {
            // key: KEY,
            amount: Number(data.amount) * 100,
            currency: data.currency,
            name: "FOOD ORDERING APP",
            order_id: data.id,
            handler: async function (response) {
                console.log(response)
                try {
                    const { data } = await verifyPayment(response)
                    console.log(data)
                    dispatch(clearCart(userID))
                    buyProduct();
                    await pastOrders({ userID, productDetails})
                    navigate("/")
                } catch (error) {
                    console.log(error)
                }
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open();
    }

    const payment = async (amt) => {
        const response = await handlePayment(amt)
        console.log(response)
        if (response) {
            if (response.data.error) {
                console.log(response.data.error)
            } else {
                console.log(response.data.success)
                handleOpenRazorPay(response.data.data)
            }
        } else {
            console.log("Something went wrong");
        }
    }



    return (
        <>
            <StyledPaper>
                <Typography >
                    <h3>Total</h3>
                    <span>Cart Items({data?.length - 1})</span>
                </Typography>
                <Typography>
                    <span>Amount</span>
                    <span style={{ color: "green", fontWeight: "bold" }} >{total} Rs</span>
                </Typography>
                <Typography>
                    <span>Delivery Charges</span>
                    <span style={{ color: "red", fontWeight: "bold" }} >50 Rs</span>
                </Typography>
                <Typography>
                    <span>Total</span>
                    <span style={{ color: "green", fontWeight: "bold" }} >{total + 50} Rs</span>
                </Typography>
                <button onClick={handlePay} >Buy</button>
            </StyledPaper>
        </>
    )
}

export default Total
