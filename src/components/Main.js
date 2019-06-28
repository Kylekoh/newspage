import React, { Component, Fragment } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import Advertisement from './Advertisement';

import './Main.css';

class Main extends Component {
    render() {
        return (
                <div className="main_wrapper">
                    <div className="first_para">
                        <div className="main_head">
                            "반려동물 관련 차별화된 건강관리 등 다양한 컨텐츠 제공"
                        </div>
                        <div className="syub_head">
                            “매달 업데이트되는 이벤트를 통해 다양한 경품, 할인혜택"
                        </div>
                    </div>
                    <div className="sec_para">
                        <img src={require('../images/azinang0.jpg')} alt="main_image1" />
                        <p>[AP=뉴스픽]</p>
                    </div>
                    <Advertisement></Advertisement>
                    <div className="third_para">
                        <div className="third_para_cont">
                        반려인 1000만명 시대를 맞아 삼성카드는 반려동물과 반려인들의 행복한 동행을 위해 커뮤니티 ‘아지냥이’를 운용하며 다양한 컨텐츠를 제공하고 있다. 
                        </div>
                    </div>
                    <div className="sec_para">
                        <img src={require('../images/azinang1.jpg')} alt="main_image1" />
                        <p>[AP=아지냥이 앱 화면]</p>
                    </div>
                    <div className="third_para">
                        <div className="third_para_cont">
                        아지냥이는 반려동물과 반려인을 위한 전문성 높은 콘텐츠를 제공한다. 동물병원 가는 날, 예방접종 하는 날, 사료 구매하는 날 등 반려동물 일정을 기록할 수 있는 캘린더를 제공하고 반려동물과 산책할만한 날씨인지 알려주는 산책지수를 제공한다. 또한 반려동물을 길들이기 위한 클리커, 주파수, 사운드박스 기능을 제공한다.
                        </div>
                    </div>
                    <div className="sec_para">
                        <img src={require('../images/azinang2.jpg')} alt="main_image1" />
                        <p>[AP=아지냥이 제공]</p>
                    </div>
                    <div className="third_para">
                        <div className="third_para_cont">
                        반려동물의 정서적 안정을 위한 액션 플랜도 제공한다. 수의사가 제시한 산책량, 양치 이력 등 데일리 미션에 도전하거나 반려동물을 위한 활동 등을 사진으로 인증하는 방식이다. 반려동물의 건강관리 정보 및 수의사와 직접 1:1 무료 상담 받을 수 있다. 질병이나 행동, 양육법에 대해  검증된 전문가 정보를 신속하게 답변받을 수 있는 챗봇 서비스도 제공 중이다.
                        </div>
                    </div>
                    <div className="sec_para">
                        <img src={require('../images/azinang3.jpg')} alt="main_image1" />
                        <p>[AP=아지냥이 제공]</p>
                    </div>
                    <div className="third_para">
                        <div className="third_para_cont">
                        아지냥이에 가입하면 매달 새롭게 업데이트되는 할인쿠폰이나 이벤트를 통해 반려동물 사료, 의류, 기타용품 등의 다양한 경품, 할인 혜택을 받을 수 있다. 아지냥이는 삼성카드 회원이 아니어도 누구나 모바일 앱을 통해 가입하고 무료로 이용할 수 있다.
                        아지랑이 관계자는 “이러한 커뮤니를 통해 지치고 힘든 사람들에게 심리적 안정과 힐링을 주는 ‘디지털 소통’ 공간을 제공함으로써 고객들의 삶이 좀 더 윤택해지기를 바란다”고 말했다.
                        </div>
                    </div>                    
                    <p className="copyright">[저작권자(c) 뉴스픽 무단전재 및 재배포 금지]</p>
                    <div className="foot_imo">
                        <button className="news_view">
                            <MaterialIcon icon="sync" color='black' size="30px" />
                        </button>
                        <button className="no_like">
                            <MaterialIcon icon="favorite_border" color='#F74B60' size="small" />
                            <span>817</span>
                        </button>
                    </div>
                </div>
        );
    }
}

export default Main;