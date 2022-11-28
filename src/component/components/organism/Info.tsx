import React from 'react';
import YouTube from 'react-youtube';
import styled from "styled-components";

import {IInfo, ISpaceXData} from "../../../type/types";


const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  color: ${props => props.theme.color};

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 767px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`
const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;

`
const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`
const ListGroup = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: var(--fw-light);
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & > * {
    padding: 0.4rem;
  }
`
const ListItem = styled.li`
  & > strong {
    font-weight: var(--fw-normal);
  }
`
const Info: React.FC<IInfo> = ({item}) => {
    const {
        name,
        date_local,
        details,
        links,
        success,
    } = item
    const date = new Date(date_local).toLocaleDateString();
    return (
        <Wrapper>
            <InfoImage src={links.patch.large} alt={name}/>
            <div>
                <InfoTitle>
                    {name}
                </InfoTitle>

                <ListGroup>

                    <List>
                        <ListItem>
                            <strong>Time:</strong>{date}
                        </ListItem>
                        <ListItem>
                            <strong>Success:</strong>{success ? 'true' : 'false'}
                        </ListItem>

                        <ListItem>
                            <strong>Details:</strong> {details}
                        </ListItem>
                    </List>
                </ListGroup>
                <YouTube
                    opts={{playerVars: {autoplay: true}}}
                    videoId={links.youtube_id}
                    allow-presentation
                />
            </div>
        </Wrapper>
    );
};

export default Info;
