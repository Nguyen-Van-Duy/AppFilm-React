import { useState } from 'react';
import Card from '../../UI/Card';
import './Header.css';
import MainNavigation from './mainNavigation/MainNavigation';
import HeaderSearch from './search/HeaderSearch';
import { useSelector } from 'react-redux';


const Header = () => {
    const darkMode = useSelector(state => state.darkmode.isDarkmode);
    const darkmode = useSelector(state => state.darkmode.darkmode)
    const light = useSelector(state => state.darkmode.light)
    const [showMenu, setShowMenu] = useState(false)
    const [onModal, setOnModal] = useState(false)

    const handlerShowMenu = () => {
        setShowMenu(!showMenu);
        setOnModal(!onModal);
    }

    return (
        // darkMode ? darkmode : light
        <header className="header" style={darkMode ? darkmode : light}>
            <Card>
                <HeaderSearch onMenu={handlerShowMenu}/>
                <MainNavigation showMenu={showMenu} onModal={handlerShowMenu} showModal={onModal}/>
            </Card>
        </header>
    )
}

export default Header;