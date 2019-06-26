import React, { Component } from 'react';

import './Advertisement.css';

class Advertisement extends Component {
    render() {
        return (
            <div className="ad_container">
                <div className="ad_wrapper">
                <div className="ad_one">
                            <a href="http://yatag.me/t5zesuj0d0" className="ad_link">
                                <div className="ad_img">
                                    <img src={require('../images/ad/ad1.png')} alt="main_image1" />
                                </div>
                                <div className="ad_contents">
                                    무료 사전등록 이벤트 | 최대규모 인테리어,건축 박람회
                                </div>
                            </a>
                    </div>                
                    <div className="ad_one">
                            <a href="http://yatag.me/t5zevxxkiu" className="ad_link">
                                <div className="ad_img">
                                    <img src={require('../images/ad/ad2.png')} alt="main_image1" />
                                </div>
                                <div className="ad_contents">
                                    1등 많이 나온 번호 받기 | 1등이 만들면 인생이 바뀝니다
                                </div>
                            </a>
                    </div>
                    <div className="ad_one">
                            <a href="http://castij.kr/t5zevxxcsz" className="ad_link">
                                <div className="ad_img">
                                    <img src={require('../images/ad/ad3.jpg')} alt="main_image1" />
                                </div>
                                <div className="ad_contents">
                                    최대 지원금! 역대급 저렴한 가격으로 스마트폰 구매하자!!
                                </div>
                            </a>
                    </div>
                    <div className="ad_one">
                            <a href="https://rental-event.shop" className="ad_link">
                                <div className="ad_img">
                                    <img src={require('../images/ad/ad4.jpeg')} alt="main_image1" />
                                </div>
                                <div className="ad_contents">
                                    롯데렌터카 장기렌트 6월 핫딜 차량 | 마감임박
                                </div>
                            </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Advertisement;