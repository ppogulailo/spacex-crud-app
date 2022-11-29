import React, { useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Button } from '../components/atom/Button';
import Info from '../components/organism/Info';
import { AppDispatch } from '../../type/types';
import { changeFetch } from '../../redux/store/asyncActions/asyncAcrions';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { item, isLoading } = useTypeSelector((state) => state.reducer);
  const navigation = useNavigate();
  useEffect(() => {
    if (id) {
      void dispatch(changeFetch(id));
    }
  }, [id]);

  return (
        <>
            {isLoading ? <>Loading...</> : <>
                <Button onClick={() => navigation('/SpaceXAPI/')}><IoArrowBack/>Button</Button>
                {item && <Info item={item}/>}
            </>
            }
        </>
  );
};

export default Details;
