import React from 'react';
import './FeaturedList.css';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const FeaturedList = () => {

    const isDarkMode = useSelector(state => state.darkmode.isDarkmode);
    const dark = useSelector(state => state.darkmode.darkmode);
    const light = useSelector(state => state.darkmode.light);
    const dataFilm = useSelector(state => state.datafilm.dataFilm);

    const FILM = [
        {
            title: 'PHIM BỘ HOT',
            data: dataFilm.phimbo,
        },
        {
            title: 'PHIM LẺ HOT',
            data: dataFilm.phimle,
        }
    ]
    return (
        <div className="featured" style={isDarkMode ? dark : light}>
            {FILM.map((name, index) => (
                    <div key={index}>
                        <h2 style={isDarkMode ? {} : light}>{name.title}</h2>
                        <div className="featured__list">
                            <div className="row">
                                {name.data.map((dataFilm, index) => {
                                    if(index < 20) {
                                        return (
                                            <div className="col" key={index}>
                                                <Link to={dataFilm.title} className="featured__item"  style={isDarkMode ? dark : light}>
                                                    <div className="featured__item-img">
                                                        <img src={dataFilm.imageUrl} alt={dataFilm.title} />
                                                    </div>
                                                    <div className="featured__item--infomation">
                                                        <h4 className="featured__item--title" style={isDarkMode ? {} : light}>{dataFilm.title}</h4>
                                                        <h5 className='category' style={isDarkMode ? {} : light}>{dataFilm.category}</h5>
                                                        <span>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </span>
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
                )
            
                
            )}
        </div>
    );
};

export default FeaturedList;