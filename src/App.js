import './App.css';
import Layout from './UI/Layout';
import {useSelector} from 'react-redux';
import { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DataFilmAction } from './store/dataFilmSlice';
import ScrollToTop from './components/main/ScrollToTop';
import Modal from './UI/modal/Modal';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const background = useSelector(state => state.darkmode.background);
  const isbackground = useSelector(state => state.darkmode.isDarkmode);
  const dispatch = useDispatch();
  
    const fetchedMovies = useCallback(async () => {
        const response = await fetch('https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST');
        const data = await response.json();
        const listDataFilm = data.phim;
        const allDataFilm = listDataFilm.phimle.concat(listDataFilm.phimbo).concat(listDataFilm.phimhoathinh).concat(listDataFilm.phimchieurap);
        // setData(dataFilm)
        dispatch(DataFilmAction.fetchData(listDataFilm))
        dispatch(DataFilmAction.allDataFilm(allDataFilm))
        setIsLoading(false)
    }, [dispatch]);
    
    useEffect(() => {
        fetchedMovies();
        console.log('%c Chúng ta nên bỏ qua lỗi! ^^', 'font-size: 2.5rem; color: green');
    }, [fetchedMovies])

  return (
    <>
      {isLoading ? <Modal /> : <div className="App" id="app" style={isbackground ? background : {}}>
        <ScrollToTop />
        <Layout />
      </div>}
    </>
  );
}

export default App;
