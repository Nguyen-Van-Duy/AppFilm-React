import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import './MainNavigation.css';
import { useSelector } from 'react-redux';

export const listLink = [
    {
        id: 1,
        link: '/',
        title: 'Trang chủ',
        icon: 'fa fa-home'
    },
    {
        id: 2,
        link: '/phim-moi',
        title: 'Phim mới',
        icon: 'fas fa-globe-asia'
    },
    {
        id: 3,
        link: '/phim-bo',
        title: 'Phim bộ',
        icon: 'fas fa-video'
    },
    {
        id: 4,
        link: '/phim-le',
        title: 'Phim lẻ',
        icon: 'fas fa-film'
    },
    {
        id: 5,
        link: '/phim-hoat-hinh',
        title: 'Anime',
        icon: 'fas fa-tv'
    },
    {
        id: 6,
        link: '/phim-chieu-rap',
        title: 'Phim chiếu rạp',
        icon: 'fas fa-ticket-alt'
    },
    
]

const MainNavigation = (props) => {

    const darkMode = useSelector(state => state.darkmode.isDarkmode)
    const darkmode = useSelector(state => state.darkmode.darkmode)
    const light = useSelector(state => state.darkmode.light)
    
    return (
        <Fragment>
            <div className={`${props.showModal ? 'modal-menu' : ''}`} onClick={() => props.onModal()}></div>

            <nav className={`nav ${props.showMenu ? 'show-nagination' : ''}`} style={darkMode ? darkmode : light}>
                <ul>
                    {listLink.map(item => { 
                        return (
                        <li key={item.id} className='link-item'>
                            {/* darkMode ? darkmode : light */}
                            <NavLink to={item.link} style={darkMode ? darkmode : light}><i className={item.icon}></i> {item.title}</NavLink></li>
                        )
                    })}
                </ul>
            </nav>
        </Fragment>
        
    );
};

export default MainNavigation;