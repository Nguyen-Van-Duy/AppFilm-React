import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { DataFilmAction } from '../../../store/dataFilmSlice';
import './Search.css';

const Search = (props) => {
    const [onSearch, setOnSearch] = useState('');
    const [input, setInput] = useState('');
    const history = useHistory();
    const dataFilm = useSelector(state => state.datafilm.allDataFilm);
    const dispatch = useDispatch();

    const handlerChangeInput = e => {
        setInput(e.target.value.trim())
        setOnSearch([]);
        dataFilm.filter(data => {
            if(data.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').includes((e.target.value).toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D'))) {

                setOnSearch(onSearch=>[...onSearch, data])
            }
            return [];
        })
    }

    const handlerSubmitSearch = e => {
        e.preventDefault();
        if (input.length > 0 & onSearch.length > 0) {
            dispatch(DataFilmAction.searchDataHandler(onSearch))
            setInput('');
            history.push('tim-kiem');
        }
    }

    return (
        <Fragment>
        
        <div className={`search ${props.onSearch ? 'show-on-mobile' : ''}`}>
                <form className='search__form' onSubmit={handlerSubmitSearch}>
                    <input onChange={handlerChangeInput} className="search__input" type="text" placeholder=" Nhập tên phim" />
                    <button className="search__button" type='submit'><i className="fas fa-search"></i></button>
                </form>
                {input.length > 2 && <div className="search__history">
                    <ul>
                        {onSearch.map((data, index) => (
                            <li key={index} onClick={() => setInput([])}>
                            <Link to={data.title}>
                                <img src={data.imageUrl || ''} alt=""></img>
                                <div className="search__history-content">
                                    <h4>{data.title}</h4>
                                    <span className="">{data.category}</span>
                                </div>
                            </Link>
                        </li>
                        ))}
                        
                    </ul>
                </div>}
        </div>
        </Fragment>
    );
};

export default Search;