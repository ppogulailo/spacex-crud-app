import React, {useEffect, useState} from 'react';
import Controls from "../components/organism/Controls";
import List from "../components/atom/List";
import Card from "../components/molecules/Card";
import {useNavigate} from "react-router-dom";
import {AppDispatch, ISpaceXData} from "../../type/types";
import {useDispatch} from "react-redux";
import {addLaunches, fetchLaunches} from '../../redux/store/asyncActions/asyncAcrions';
import {useTypeSelector} from "../../hooks/useTypeSelector";

const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const {items, filtedItems, search, dateStart, dateEnd, error} = useTypeSelector(state => state.reducer)
    const [fetching, setFetching] = useState(false)
    let start = dateStart ? dateStart.value : '2006-01-1T00:00:00.000Z';
    let end = dateEnd ? dateEnd.value : '2022-01-1T00:00:00.000Z'
    useEffect(() => {
        if (!items.length) {
            dispatch(fetchLaunches())
                .finally(() => setFetching(false))
        } else if (fetching) {
            dispatch(addLaunches({search, start, end}))
                .finally(() => setFetching(false))
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (): void => {
        if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }
    return (
        <>
            <Controls dateEnd={dateEnd} dateStart={dateStart} search={search}/>
            <List>
                {error && <>{error}</>}
                {
                    filtedItems?.map((item: ISpaceXData, index: number) => {
                        const cardInfo = {
                            img: item.links.patch.small,
                            name: item.name,
                            info: item.details,
                        }
                        return (
                            <Card {...cardInfo} key={index} onCLick={() => {
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
