import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import Header from '../components/organism/Header';
import Main from '../components/atom/Main';
import HomePage from '../pages/HomePage';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { changeTheme } from '../../redux/store/items/themeReducer';

const light = {
  color: 'hsl(200,15%,8%)',
  background: 'hsl(0,1%,95%)',
  backgroundShadow: 'rgba(149, 157, 165, 0.2) 0 8px 24px',
  colorUIBase: 'hsl(0,0%,100%)',
  errorColor: 'hsl(0,98%,38%)',
};
const dark = {
  color: 'hsl(0,0%,100%)',
  background: 'hsl(207,26%,17%)',
  backgroundShadow: 'rgba(245, 245, 245, 0.2) 0 0 8px',
  colorUIBase: 'hsl(209,23%,22%)',
  errorColor: 'hsl(219,63%,12%)',
};

function App() {
  const dispatch = useDispatch();
  const { themes } = useTypeSelector((state) => state.theme);
  const isDarkTheme = themes === 'dark';
  const handleTheme = () => {
    dispatch(changeTheme(isDarkTheme ? 'light' : 'dark'));
  };
  return (
        <ThemeProvider theme={isDarkTheme ? dark : light}>
            <Header handleTheme={handleTheme} isDarkTheme={isDarkTheme}/>
            <Main>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/item/:id' element={<Details/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes> </Main>
        </ThemeProvider>
  );
}

export default App;
