import React from 'react';
import './SlideShow.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    {
      url: 'https://images4.alphacoders.com/273/thumb-1920-273854.jpg',
      caption: 'Chúc các bạn xem phim vui vẻ!'
    },
    {
      url: 'http://techrum.vn/chevereto/images/2017/11/20/pyLql.jpg',
      caption: 'Hiện tại 1 số phim bị lỗi không thể xem được! chúng tôi đang cố gắng khắc phục!'
    },
    {
      url: 'http://photo.techrum.vn/images/2019/04/06/44oF00.jpg',
      caption: 'Phim luôn được cập nhật!'
    },
  ];

const SlideShow = () => {
    return (
        <div className="slide-show">
            <div className="slide-container">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                    <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                        <span>{slideImage.caption}</span>
                    </div>
                    </div>
                ))} 
                </Slide>
            </div>
        </div>
    );
};

export default SlideShow;