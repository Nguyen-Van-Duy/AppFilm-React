import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../../UI/Card';
import FeaturedList from '../FeaturedList';
import MovieGenre from '../MovieGenre';

const Movies = () => {

    const dataFilm = useSelector(state => state.datafilm.dataFilm).phimbo;
    // const listDataFilm = [];
    // for(let key in dataFilm) {
    //     listDataFilm.push({
    //         key: dataFilm[key],
    //         category: dataFilm[key].category,
    //         imageUrl: dataFilm[key].imageUrl,
    //         urlTrainer: dataFilm[key].url,
    //         title: dataFilm[key].title,
    //         episode: dataFilm[key].episode,
    //     })
    // }
    // const listData = listDataFilm.sort(() => Math.random() -0.5);

    return (
        <Card>
            <div className="container__list-film">
                <div className="row">
                    <div className="col l-9-6 l-12"><MovieGenre listData={dataFilm} title='PHIM BỘ' /></div>
                    <div className="col l-2-4 hide-on-mobile"><FeaturedList /></div>
                </div>
            </div>
        </Card>
    );
};

export default Movies;