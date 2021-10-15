import React, { useState } from 'react';
import Card from '../../../UI/Card';
import Search from './Search';
import './HeaderSearch.css';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderSearch = (props) => {
    const [showSearch, setShowSearch] = useState(false)
    const darkmode = useSelector(state => state.darkmode.darkmode);
    const light = useSelector(state => state.darkmode.light);
    const darkMode = useSelector(state => state.darkmode.isDarkmode);

    const handlerShowSearch = () => {
        setShowSearch(!showSearch)
    }
    
    return (
        <Card >
            <div className="header__search">
                <div className="header__search-icon" onClick={() => props.onMenu()}>
                    <i className="fas fa-bars header__search-icon--size"></i>
                </div>
                <div className="logo">
                <h2><Link to="/" style={darkMode ? darkmode : light}>DUY FILM</Link></h2>
                </div>
                <Search onSearch={showSearch}/>
                <DarkMode showSearchs={handlerShowSearch} onClick={() => props.onClick()}/>
            </div>
        </Card>
    );
};

export default HeaderSearch;