import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import React from 'react';
import { searchValidation } from '../../../validation/validation';
import { ISearch } from '../../../type/types';

const InputContainer = styled.label`
  background-color: ${(props) => props.theme.background};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--raddi);
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  width: 100%;
  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search...',
})`
  background-color: ${(props) => props.theme.background};
  margin-left: 2rem;
  border: none;
  outline: none;

`;

export const Search = ({
  search, handleDispatch, register,
}: ISearch) => (
    <InputContainer>
        <IoSearch/>
            <Input
                {...register('search', searchValidation)}
                onChange={
                (e) => { handleDispatch(e.target.value); }}
                 value={search}
            />
    </InputContainer>
);
