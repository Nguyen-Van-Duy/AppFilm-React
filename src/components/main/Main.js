import React, { Fragment } from 'react';
import Card from '../../UI/Card';
import SlideShow from './SlideShow';
import './Main.css';
import MoviesList from './MoviesList';
import FeaturedList from './FeaturedList';
import { useSelector } from 'react-redux';

const Main = () => {
    const dataFilm = useSelector(state => state.datafilm.dataFilm)
    console.log(dataFilm);
    
    return (
        <Fragment>
        <Card>
            <SlideShow />
            <div className="container__list">
                <div className="row">
                    <div className="col l-9-6 l-12"><MoviesList listFilm={dataFilm}/></div>
                    <div className="col l-2-4 hide-on-mobile"><FeaturedList /></div>
                </div>
            </div>
        </Card>
        </Fragment>
    );
};

export default Main;