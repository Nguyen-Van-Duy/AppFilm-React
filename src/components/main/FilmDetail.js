import React from 'react';
import { useSelector } from 'react-redux';
import { useParams} from 'react-router';
import ContentDetail from './ContentDetail';
import FeaturedList from './FeaturedList';
import './FilmDetail.css';
import NotFound from './moviepages/NotFound';

const FilmDetail = () => {
    
    //lấy danh sách tất cả phim
    const allListFilm = useSelector(state => state.datafilm.allDataFilm);
    
    //nối mảng các thể loại phim
    // const listFilm = allListFilm.phimle.concat(allListFilm.phimbo).concat(allListFilm.phimhoathinh).concat(allListFilm.phimchieurap);
    //lấy địa chỉ paramid trên url
    const param = useParams()

    //lấy bộ phim === id
    const result = allListFilm.filter(film => film.title.trim() === param.filmId.trim());
    if(result.length === 0) {
        return <NotFound />;
    }
    //lấy danh sách array các tập phim
    const listItemFilm = result.map(film => film.episode)[0];
    
    return (
            <div className="container-detail__list">
                <div className="row">
                    <div className="col l-9-6 l-12">
                        <ContentDetail result={result} listItemFilm={listItemFilm} />
                    </div>
                    <div className="col l-2-4 hide-on-mobile"><FeaturedList /></div>
                </div>
            </div>
    );
};

export default FilmDetail;