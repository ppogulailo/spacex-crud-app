import React from 'react';
import styled from "styled-components";
import {ICard} from "../../../type/types";



const Wrapper=styled.article`
    border-radius: var(--raddi);
    background-color:${props => props.theme.background};
    box-shadow:var(--shadow);
    cursor: pointer;
    overflow: hidden;
    color: ${props => props.theme.color};;
`
const CardImage=styled.img`
    display: block;
    width: 100%;
    height: 290px;
    object-fit: cover;
    object-position: center;
    box-shadow: ${props => props.theme.backgroundShadow};;
`
const CardBody= styled.div`
      padding: 1rem 1.5rem 1.5rem;
`
const CardTitle= styled.h3`
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fs-bold);
`
const CardList= styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0;
  
`
const CardListItem=styled.li`
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);
  
    & > strong{
      font-weight: var(--fw-bold);
    }
`
const Card = ({img,name,info,onCLick}:ICard) => {

    return (
        <Wrapper onClick={onCLick}>
            <CardImage src={img} alt={name}/>
            <CardBody>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardList>
                     <CardListItem>{info?info:''}</CardListItem>

                </CardList>
            </CardBody>
        </Wrapper>
    );
};

export default Card;
