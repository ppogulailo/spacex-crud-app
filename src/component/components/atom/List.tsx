import React from 'react';
import styled from 'styled-components';
import { IMain } from '../../../type/types';

const Wrapper = styled.section`
    width: 100%;
    padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap: 2rem;
  
  @media(min-width: 767px){
    grid-template-columns: repeat(2,1fr);
    gap: 3rem;
  }
  @media(min-width: 1020px){
    grid-template-columns: repeat(4,1fr);
    gap: 4rem;
  }
`;
const List = ({ children }: IMain) => (
        <Wrapper>
            {children}
        </Wrapper>
);

export default List;
