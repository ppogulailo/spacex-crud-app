import React, {useEffect, useState} from 'react';
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {ALL_URL_QUERY} from '../../config';
import {IHomePage, ISpaceXData} from "../../type/types";

const HomePage = ({items, setItems}: IHomePage) => {
    const [filteredItem, setFilteredItem] = useState(items)
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const navigate = useNavigate()

    const handleSearch = (search: string) => {
        let data = [...items];

        if (search) {
            data = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredItem(data)
    }

    useEffect(() => {
        if (
            // !items.length &&
            fetching) {
            axios.post(ALL_URL_QUERY,
                {
                    query: {},
                    options: {
                        select: ['name','date_local','details','links',],
                        pagination: true,
                        page: currentPage
                    }
                }
            ).then(({data}) => {
                setItems([...items, ...data.docs])
                setCurrentPage(prevState => prevState + 1)
            })
                .finally(() => setFetching(false))
        }

    }, [fetching]);
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);
    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    useEffect(() => {
        handleSearch('');
    }, [items]);

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {
                    filteredItem.map((item: ISpaceXData, index: number) => {
                        const cardInfo = {
                            img: item.links.patch.small,
                            name: item.name,
                            info: item.details,
                        }
                        return (
                            <Card {...cardInfo} key={item.id} onCLick={() => {
                                navigate(`/item/${item.id}`);
                            }}/>
                        )
                    })
                }
            </List>
        </>
    );
};

export default HomePage;
