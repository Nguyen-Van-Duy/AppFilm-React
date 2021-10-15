import './Footer.css';
import {useState, useEffect} from 'react';
import Card from '../../UI/Card';
import { useSelector } from 'react-redux';

const Footer = () => {

    const isdarkMode = useSelector(state=>state.darkmode.isDarkmode);
    const light = useSelector(state=>state.darkmode.light);

    const [valueScrollY, setValueScrollY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })

    const handleScroll = () => {
        setValueScrollY(window.scrollY);
    }

    return (
        <footer style={isdarkMode ? {} : light}>
            <Card>
                <div className="footer" style={isdarkMode ? {} : light}>
                    <div className="footer__list">
                        <li><i className="fas fa-id-card"></i>Liên hệ</li>
                        <li><i className="far fa-newspaper"></i>Giới thiệu</li>
                        <li><i className="far fa-copyright"></i>Bản quyền</li>
                    </div>
                    <div className="footer__list">
                        <li><i className="fas fa-film"></i>Phim lẻ</li>
                        <li><i className="fas fa-video"></i>Phim bộ</li>
                        <li><i className="fas fa-globe-asia"></i>Phim mới</li>
                    </div>
                    <div className="footer__list">
                        <li><i className="fas fa-envelope"></i>Gmail</li>
                        <li><i className="fab fa-twitter"></i>Twitter</li>
                        <li><i className="fab fa-facebook-square"></i>Facebook</li>
                    </div>
                </div>
                <span className="footer__info">Copy right @ By Nguyen Van Duy</span>
                {valueScrollY && <div className='scroll-top' onClick={()=>window.scrollTo(0,0)}>
                    <i className="fas fa-angle-double-up"></i>
                </div>}
            </Card>
        </footer>
    );
};

export default Footer;