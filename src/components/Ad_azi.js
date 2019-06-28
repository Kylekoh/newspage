import React, { Component } from 'react';

import './Advertisement.css';

class Advertisement extends Component {
    render() {
        return (
            <div className="ad_container">
                <div className="ad_wrapper">
                    <div className="ad_one">
                            <a href="http://yatag.me/t5zexpma3w" className="ad_link">
                                <div className="ad_img">
                                    <img src={require('../images/ad/ad5.jpg')} alt="main_image1" />
                                </div>
                                <div className="ad_contents">
                                    당신이 PICK한 강아지는? | 전 국민 모두 '평가하기'하고 경품 받기
                                </div>
                            </a>
                    </div>           
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
                                    1등 많이 나온 번호 받기 | 1등이 만들면 당신의 모든게 바뀝니다
                                </div>
                            </a>
                    </div>
                    <div className="ad_one">
                            <a href="http://yatag.me/t5y9fbaohi" className="ad_link">
                                <div className="ad_img">
                                    <img src={require('../images/ad/ad6.jpg')} alt="main_image1" />
                                </div>
                                <div className="ad_contents">
                                    반려동물 좋아하면, 자격증 따고 프리랜서 취미를 동시에
                                </div>
                            </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Advertisement;