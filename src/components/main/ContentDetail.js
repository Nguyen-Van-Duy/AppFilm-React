import React, { useState } from 'react';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ContentDetail.css';
import RelateMovie from './relatemovie/RelateMovie';
import Card from '../../UI/Card';

const ContentDetail = ({result, listItemFilm}) => {
    const darkMode = useSelector(state => state.darkmode.isDarkmode)
    const darkmode = useSelector(state => state.darkmode.darkmode)
    const light = useSelector(state => state.darkmode.light)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1);

    //lấy số tập
    const episodes = listItemFilm.map(chapter => {
        if (chapter.episode & !Number.isNaN(chapter.episode) & chapter.episode !== undefined) {
            return chapter.episode;
        } else {
            return 1;
        }
    })[0];

    //Lấy chỉ mục cuối cùng của 1 trang = trang hiện tại * số lượng 1 trang
    const indexOfLastPost = currentPage * postsPerPage;
    //lấy chỉ mục đầu tiên của trang hiện tại = chỉ mục cuối cùng - số lượng 1 Trang
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    //cắt chỉ mục lấy ra số lượng sp ở chỉ mục đó
    const currentPosts = listItemFilm.slice(indexOfFirstPost, indexOfLastPost);

    const paginateHandler = (pageNumber) => setCurrentPage(pageNumber);

    return (<Card>
        <div className="detail__list-body">
            <div className="detail__list-menu">
                <ul style={darkMode ? {} : light}>
                    <li><Link style={darkMode ? darkmode : light} to='/'>Xem phim</Link></li>
                    <li style={darkMode ? {} : light}><i className="fas fa-chevron-right"></i></li>
                    <li style={darkMode ? {} : light}>{result[0].category}</li>
                </ul>
            </div>
            <div className="detail__list-introduce" style={darkMode ? darkmode : {}}>
                <div className='row list-introduce__body'>
                    <div className='col l-2-5'>
                        <div className='list-introduce__image'>
                            <img src={result[0].imageUrl} alt=''/>
                        </div>
                    </div>
                    <div className='col l-2-7'>
                        <div className='content-detail'>
                            <h2 style={darkMode ? {} : light}>{result[0].title}</h2>
                            <ul>
                                <li>Trạng thái:<span>{listItemFilm.length} tập VIETSUB</span></li>
                                <li>Đạo diễn:<span>Đang cập nhật (Nguyễn Văn Duy)</span></li>
                                <li>Diễn viên:<span>Đang cập nhật (Nguyễn Văn Duy)</span></li>
                                <li>Thể loại: <span>{result[0].category}</span></li>
                                <li>Quốc gia: <span>Đang cập nhật (Việt Nam)</span></li>
                                <li>Năm SX: <span>Đang cập nhật (2021)</span></li>
                                <li>Đánh giá: 
                                    <span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </span>
                                </li>
                            </ul>
                            <a href="#film" className='content-link'>
                                <span className="watch-movie"><i className="fa fa-play"></i> Xem ngay</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='film'></div>
            <div className="detail__list-video">
                {currentPosts.map((filmss, index) => {
                    if (filmss.url.includes('https://streamtape.com')) {
                        return (<video key={index} controls className='detail__list-movie'
                        frameBorder="0" allow="autoplay" allowFullScreen="allowfullscreen">
                           <source src='https://sp.rmbl.ws/s8/2/i/D/y/l/iDylc.caa.mp4' type="video/mp4" />
                       </video>)
                    }
                    if (filmss.type === 'iframe') {
                        return (<div key={index}>
                            <iframe src={filmss.url || ''} title='Film Details' className='detail__list-movie'
                             frameBorder="0" allow="autoplay" allowFullScreen="allowfullscreen"></iframe>
                            {/* <div className='row'>tập{filmss.episode} </div> */}
                        </div>)
                    }
                    if(filmss.type === 'video') {
                         return (<video key={index} controls className='detail__list-movie'
                         frameBorder="0" allow="autoplay" allowFullScreen="allowfullscreen">
                            <source src={filmss.url || ''} type="video/mp4" />
                        </video>)
                    } else {
                        return (<video key={index} controls className='detail__list-movie'
                        frameBorder="0" allow="autoplay" allowFullScreen="allowfullscreen">
                           <source src='https://sp.rmbl.ws/s8/2/i/D/y/l/iDylc.caa.mp4' type="video/mp4" />
                       </video>)
                    }
                }
                )}
            </div>
            <h2 style={darkMode ? {} : light}>{result[0].title}</h2>
            <h3 style={darkMode ? darkmode : light}>Chọn tập</h3>
            <Pagination postsPerPage={postsPerPage} chapter={+episodes} totalPosts={listItemFilm.length} paginate={paginateHandler}/>
            <RelateMovie category={result[0].category} />
        </div>
        </Card>
    );
};

export default ContentDetail;