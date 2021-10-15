import { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import './Layout.css';
import Card from "./Card";
import Main from "../components/main/Main";
import {Switch, Route} from 'react-router-dom';
import SeriesMovie from "../components/main/moviepages/SeriesMovie";
import NewMovie from "../components/main/moviepages/NewMovie";
import Movies from "../components/main/moviepages/Movies";
import ListSearch from "../components/main/moviepages/ListSearch";
import Cartoon from "../components/main/moviepages/Cartoon";
import MovieTheaters from "../components/main/moviepages/MovieTheaters";
import FilmDetail from "../components/main/FilmDetail";
import NotFound from "../components/main/moviepages/NotFound";

const Layout = () => {

    return (
        <Fragment>
            <Header />
            <Card>
                <main className="main">
                    
                    <Switch>
                        <Route path="/" exact>
                            <Main />
                        </Route>
                        <Route path="/phim-moi">
                            <NewMovie />
                        </Route>
                        <Route path="/phim-bo">
                            <SeriesMovie />
                        </Route>
                        <Route path="/phim-le">
                            <Movies />
                        </Route>
                        <Route path="/phim-hoat-hinh">
                            <Cartoon />
                        </Route>
                        <Route path="/phim-chieu-rap">
                            <MovieTheaters />
                        </Route>
                        <Route path="/tim-kiem">
                            <ListSearch />
                        </Route>
                        <Route path="/:filmId">
                            <FilmDetail />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </main>
            </Card>
            <Footer />
        </Fragment>
    )
}

export default Layout;