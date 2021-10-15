import { useSelector } from "react-redux";
import Slider from "react-slick";
import './RelateMovie.css';
import {Link} from 'react-router-dom';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

const RelateMovie = ({category}) => {

  const allListFilm = useSelector(state => state.datafilm.allDataFilm);
    const isDarkMode = useSelector(state => state.darkmode.isDarkmode);
    const dark = useSelector(state => state.darkmode.darkmode);
    const light = useSelector(state => state.darkmode.light);

    const listDataFilm = allListFilm.filter(film => film.category === category);
    
    return (
        <div className="relate-movie" style={isDarkMode ? dark : light}>
        <h2 style={isDarkMode ? {} : light}>Phim liên quan</h2>
        <Slider {...settings}>
          {listDataFilm.map((film, index) => {
            if(film.title !== 'Kẻ Thế Mạng - Self/Less') {
              return (
                <div className='col' key={index}>
                  <Link className='List-item__link' style={isDarkMode ? {} : light} to={film.title}>
                    <div className="list-item__detail">
                        <img src={film.imageUrl} alt="" />
                        <h4 style={isDarkMode ? {} : light}>{film.title}</h4>
                        <h5 className='category' style={isDarkMode ? {} : light}>{film.category}</h5>
                        <span className="chapter">{film.episode.length} tập</span>
                    </div>
                  </Link>
                </div>
              )
            } else {
              return [];
            }
          })}
          
          
        </Slider>
      </div>
    );
};

export default RelateMovie;