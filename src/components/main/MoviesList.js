import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MoviesList.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const image = 'https://anhdepfree.com/wp-content/uploads/2020/06/hinh-anh-xin-loi-vk.jpg';
const pathError = 'Thế Giới BL và Chàng Trai Không Muốn Bị Bẻ Cong';

const MoviesList = (props) => {
    const isDarkMode = useSelector(state => state.darkmode.isDarkmode);
    const dark = useSelector(state => state.darkmode.darkmode);
    const light = useSelector(state => state.darkmode.light);
    const MOVIES = [
        {
            tilteFilm: 'PHIM LẺ MỚI',
            listFilm: props.listFilm.phimle,
            link: '/phim-le'
        },
        {
            tilteFilm: 'PHIM BỘ MỚI',
            listFilm: props.listFilm.phimbo,
            link: '/phim-bo'

        },
        {
            tilteFilm: 'PHIM CHIẾU RẠP MỚI',
            listFilm: props.listFilm.phimchieurap,
            link: '/phim-chieu-rap'

        },
        {
            tilteFilm: 'PHIM HOẠT HÌNH MỚI',
            listFilm: props.listFilm.phimhoathinh,
            link: '/phim-hoat-hinh'

        },

    ]

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div className="movies-list">
            {MOVIES.map((listData, index) => (
                <div key={index} className="new-movies-list" style={isDarkMode ? dark : light}>
                    <div className="movies-list__title">
                        <h2 style={isDarkMode ? {} : light}>{listData.tilteFilm}</h2>
                        <Link to={listData.link} style={isDarkMode ? dark : light}>Xem tất cả</Link>
                    </div>
                    <div className="new-movies-list__item">
                        <div className="row">
                            {listData.listFilm.map((data, index) => {
                                if(index < 12) {
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
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MoviesList;