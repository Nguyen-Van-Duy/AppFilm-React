import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link} from'react-router-dom';
import PaginationPage from './moviepages/PaginationPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

const image = 'https://anhdepfree.com/wp-content/uploads/2020/06/hinh-anh-xin-loi-vk.jpg';
const pathError = 'Thế Giới BL và Chàng Trai Không Muốn Bị Bẻ Cong';

const MovieGenre = ({listData, title}) => {
    const [curentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(24);

    const isDarkMode = useSelector(state => state.darkmode.isDarkmode);
    const dark = useSelector(state => state.darkmode.darkmode);
    const light = useSelector(state => state.darkmode.light);

    const indexOfLastPost = curentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = listData.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(listData.length / postPerPage);

    const paginateHandler = page => {
        setCurrentPage(page);
    }

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div className="movies-list">
            <div className="new-movies-list" style={isDarkMode ? dark : light}>
                <div className="movies-list__title">
                    <h2 style={isDarkMode ? {} : light}>{title}</h2>
                </div>
                <div className="new-movies-list__item">
                    <div className="row">
                        {currentPosts.map((data, index) => {
                            if( data.title !== 'Kẻ Thế Mạng - Self/Less') {
                                return (
                                    <div className="col l-3" key={index} 
                                    data-aos="fade-right" data-aos-once="false" 
                                    data-aos-anchor-placement="top"
                                    data-aos-duration="300">
                                        <Link className='List-item__link' style={isDarkMode ? {} : light} to={data.title}>
                                            <div className="list-item__detail">
                                                <img src={`${data.title === pathError ? image : data.imageUrl}`} alt={data.title} />
                                                <h4 style={isDarkMode ? {} : light}>{data.title}</h4>
                                                <h5 className='category' style={isDarkMode ? {} : light}>{data.category}</h5>
                                                <span className="chapter">{data.episode.length} tập</span>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                            return [];
                        })}
                        
                    </div>
                <PaginationPage paginate={paginateHandler} totalPages={totalPages} />
                </div>
            </div>
        </div>
    );
};

export default MovieGenre;