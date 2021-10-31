import './App.css';
import Layout from './UI/Layout';
import {useSelector} from 'react-redux';
import { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DataFilmAction } from './store/dataFilmSlice';
import ScrollToTop from './components/main/ScrollToTop';
import Modal from './UI/modal/Modal';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAtnTqGyU2sAK0uDaPF7-76rgPXx5lbXo",
  authDomain: "app-film-10550.firebaseapp.com",
  projectId: "app-film-10550",
  storageBucket: "app-film-10550.appspot.com",
  messagingSenderId: "232762366274",
  appId: "1:232762366274:web:e2502e6abf3ffbccf950db",
  measurementId: "G-EYZ560HPTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
