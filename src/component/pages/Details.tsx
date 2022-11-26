import axios from "axios";
import {useState, useEffect} from "react";
import {IoArrowBack} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {searchByOneItem} from "../../config";
import {Button} from "../components/Button";
import Info from "../components/Info";

const Details = () => {
    const {id} = useParams()
    const navigation = useNavigate()
    const [items, setItems] = useState(null);

    useEffect(<T,>() => {
        axios.get(searchByOneItem(id)).then(({data}) => {
            setItems(data)
        })
    }, [id])
    console.log(items)
    return (
        <>
            <Button onClick={()=>navigation('/')}><IoArrowBack/>Button</Button>
            {items &&<Info props={items}/>}
        </>
    );
};

export default Details;
