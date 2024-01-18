import React , { useEffect} from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getSingleProduct } from "../../store/builderFunctions"
import EditForm from "./EditForm"


const Edit = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.restaurants.singleProduct)

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [id])





    return (
        <>
            {
                data.map((item, index) => (
                    <EditForm data={item} key={index}/>
                ))
            }
        </>

    )
}

export default Edit
