import React, {useEffect} from "react";
import {IoArrowBack} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {Button} from "../components/atom/Button";
import Info from "../components/organism/Info";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../type/types";
import {changeFetch} from "../../redux/store/asyncActions/asyncAcrions";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const Details = () => {
    const {id} = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const {item, isLoading} = useTypeSelector(state => state.reducer)
    const navigation = useNavigate()
    useEffect(() => {
        if (id) {
            dispatch(changeFetch(id))
        }
    }, [id])

    return (
        <>
            {isLoading ? <>Loading...</> : <>
                <Button onClick={() => navigation('/')}><IoArrowBack/>Button</Button>
                {item && <Info item={item}/>}
            </>
            }
        </>
    );
};

export default Details;
