import React from 'react';
import { useDispatch } from 'react-redux';
import './DarkMode.css';
import { DarkModeAction } from '../../../store/darkModeSlice';

const DarkMode = (props) => {
    
    const dispatch = useDispatch();

    const handlerDarkMode = () => {
        dispatch(DarkModeAction.handlerDarkMode())
    }

    return (
        <div className="header-right">
            <div className="header__icon show-on-search" onClick={() => props.showSearchs()}>
                <i className="fas fa-search header__icon--size"></i>
            </div>
            <div className="header__icon" onClick={handlerDarkMode}>
                <i className="fas fa-adjust header__icon--size"></i>
            </div>
            
        </div>
    );
};

export default DarkMode;