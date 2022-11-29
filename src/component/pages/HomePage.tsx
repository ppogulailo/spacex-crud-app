import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Controls from '../components/organism/Controls';
import List from '../components/atom/List';
import Card from '../components/molecules/Card';
import { AppDispatch, ISpaceXData } from '../../type/types';
import { addLaunches, fetchLaunches } from '../../redux/store/asyncActions/asyncAcrions';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    items, filtedItems, search, dateStart, dateEnd, error,
  } = useTypeSelector((state) => state.reducer);
  const [fetching, setFetching] = useState(false);
  const start = (dateStart != null) ? dateStart.value : '2006-01-1T00:00:00.000Z';
  const end = (dateEnd != null) ? dateEnd.value : '2022-01-1T00:00:00.000Z';
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchLaunches())
        .finally(() => setFetching(false));
    } else if (fetching) {
      dispatch(addLaunches({ search, start, end }))
        .finally(() => setFetching(false));
    }
  }, [fetching]);
  const scrollHandler = (): void => {
    if (document.documentElement.scrollHeight
        - (document.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  // Also I will add function to save your current position on page and save it
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
        <>
            <Controls dateEnd={dateEnd} dateStart={dateStart} search={search}/>
            <List>
                {
                    filtedItems?.map((item: ISpaceXData, index: number) => {
                      const cardInfo = {
                        img: item.links.patch.small,
                        name: item.name,
                        info: item.details,
                      };
                      return (
                            <Card {...cardInfo} key={index} onCLick={() => {
                              navigate(`/item/${item.id}`);
                            }}/>
                      );
                    })
                }
              {(error != null) && <>{error}</>}
            </List>
        </>
  );
};

export default HomePage;
