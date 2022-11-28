import React, { ReactNode } from 'react';
import styled from "styled-components";
import {Container} from "./Container";
import {IMain} from "../../../type/types";

const Wrapper = styled.main`
    padding: 2rem 0;
    background-color:  ${props => props.theme.colorUIBase};
    @media(max-width: 767px){
      padding:4rem 0;
    }
`

const Main = ({children}:IMain) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default Main;
