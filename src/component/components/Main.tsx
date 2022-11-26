import React from 'react';
import styled from "styled-components";
import {Container} from "./Container";

const Wrapper = styled.main`
    padding: 2rem 0;
    background-color:  ${props => props.theme.colorUIBase};
    @media(max-width: 767px){
      padding:4rem 0;
    }
`

const Main = ({children}:any) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default Main;
