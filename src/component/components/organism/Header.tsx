import React, { useState } from 'react';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../atom/Container';
import { IHeaderProps } from '../../../type/types';

const HeaderEl = styled.header`
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  background-color: ${(props) => props.theme.background};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled(Link).attrs({
  to: '/',
})`
  color: ${(props) => props.theme.color};
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ThemeSwitcher = styled.div`
  color: ${(props) => props.theme.color};
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;
const Header = ({ handleTheme, isDarkTheme }: IHeaderProps) => {
  const [, setToggle] = useState(isDarkTheme);

  const toggleChange = () => {
    setToggle(!isDarkTheme);
    handleTheme();
  };
  return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>
                        Pinterest
                    </Title>
                    <ThemeSwitcher onClick={toggleChange}>
                        {isDarkTheme
                          ? <><IoMoon/><span style={{ marginLeft: '0.75rem' }}>Dark Theme</span></>
                          : <><IoMoonOutline/><span style={{ marginLeft: '0.75rem' }}>Light Theme</span></>
                        }
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
  );
};

export default Header;
