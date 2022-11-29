import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SingleValue } from 'react-select';
import { SubmitHandler, useForm } from 'react-hook-form';
import React from 'react';
import { Search } from '../atom/Search';
import { CustomSelect } from '../atom/CustomSelect';
import { changeSearch, changeDataStart, changeDataEnd } from '../../../redux/store/items/itemReducer';
import { filterLaunches } from '../../../redux/store/asyncActions/asyncAcrions';
import {
  AppDispatch, IControl, ISearchForm, Option,
} from '../../../type/types';
import { ButtonChange } from '../atom/Button';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const ErrorMessage = styled.div`
  padding: 1rem 3rem;
  color:  ${(props) => props.theme.errorColor};
  font-weight:var(--fw-normal) ;
`;
const options = [
  { value: '2006-01-1T00:00:00.000Z', label: '2006' },
  { value: '2007-01-1T00:00:00.000Z', label: '2007' },
  { value: '2008-01-1T00:00:00.000Z', label: '2008' },
  { value: '2009-01-1T00:00:00.000Z', label: '2009' },
  { value: '2010-01-1T00:00:00.000Z', label: '2010' },
  { value: '2011-01-1T00:00:00.000Z', label: '2011' },
  { value: '2012-01-1T00:00:00.000Z', label: '2012' },
  { value: '2013-01-1T00:00:00.000Z', label: '2013' },
  { value: '2014-01-1T00:00:00.000Z', label: '2014' },
  { value: '2015-01-1T00:00:00.000Z', label: '2015' },
  { value: '2016-01-1T00:00:00.000Z', label: '2016' },
  { value: '2017-01-1T00:00:00.000Z', label: '2017' },
  { value: '2018-01-1T00:00:00.000Z', label: '2018' },
  { value: '2019-01-1T00:00:00.000Z', label: '2019' },
  { value: '2020-01-1T00:00:00.000Z', label: '2020' },
  { value: '2021-01-1T00:00:00.000Z', label: '2021' },
  { value: '2022-01-1T00:00:00.000Z', label: '2022' },
];

const Controls = ({ dateStart, dateEnd, search }: IControl) => {
  const dispatch = useDispatch<AppDispatch>();
  const start = (dateStart != null) ? dateStart.value : '2006-01-1T00:00:00.000Z';
  const end = (dateEnd != null) ? dateEnd.value : '2022-01-1T00:00:00.000Z';
  const handleFilter: SubmitHandler<ISearchForm> = () => {
    void dispatch(filterLaunches({ search, start, end }));
  };

  const handleSelectionChange = (
    arg: SingleValue<Option>,
  ) => {
    dispatch(changeDataStart(arg as Option));
  };
  const { register, handleSubmit, formState: { errors } } = useForm<ISearchForm>({
    mode: 'onChange',
  });
  return (
        <Wrapper>
            <Search register={register} search={search}
                    handleDispatch={(arg) => dispatch(changeSearch(arg))}/>
            <CustomSelect
                options={options}
                isClearable
                value={dateStart}
                onChange={(arg) => handleSelectionChange(arg as Option)}
                isSearchable={false}
                placeholder='Select start'
            />
            <CustomSelect
                options={options}
                isClearable
                value={dateEnd}
                onChange={(arg) => dispatch(changeDataEnd(arg as Option))}
                isSearchable={false}
                placeholder='Select end'
            />
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <ButtonChange onClick={ handleSubmit(handleFilter) }>Filter</ButtonChange>
          <ErrorMessage>{errors?.search && <>{errors?.search?.message}</>}</ErrorMessage>
        </Wrapper>
  );
};

export default Controls;
