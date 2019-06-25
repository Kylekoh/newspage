import React, { Component, Fragment } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import './Main.css';

class Main extends Component {
    render() {
        return (
                <div className="main_wrapper">
                    <div className="first_para">
                        <div className="main_head">
                            “올해도 혼자보내나 했는데.. 이게 뭐라고 설레죠?ㅎ”
                        </div>
                        <div className="syub_head">
                            “여자 분이 스케이트 타고 싶다고 하시는데 어디가 좋을까요?"
                        </div>
                    </div>
                    <div className="sec_para">
                        <img src={require('../images/image2.jpg')} alt="main_image1" />
                        <p>[AP=뉴스체크]</p>
                    </div>
                    <div className="third_para">
                        <div className="third_para_cont">
                        크리스마스 일일 데이트를 예약해주는 서비스가 화제다. 크리스마스 연휴에 데이트 할 이성을 매칭해주는 서비스로, 애인이 없어도 크리스마스에는 혼자 있고 싶지 않은 사람들의 심리가 잘 반영 되었다는 반응. 주 사용자 층은 당장 연애를 하고 있진 않지만 이성과 만남의 끈을 놓지 않는 2,30대 싱글 남녀들이다.
                        </div>
                    </div>
                    <div className="sec_para">
                        <img src={require('../images/image1.png')} alt="main_image1" />
                        <p>[AP=정오의데이트 제공]</p>
                    </div>
                    <div className="third_para">
                        <div className="third_para_cont">
                        이용 방법은 간단하다. 회원 가입 후 앱 내의 [크리스마스 데이트 플래너]에서 [예약가능]이라고 표시된 이성에게 예약을 신청하 면 된다. 이성이 예약 내역을 확인 한 후에 시간을 설정하면 예약이 완료되고, 해당 날짜에 약속한 장소로 향하면 된다.
                        </div>
                    </div>
                    <div className="sec_para">
                        <img src={require('../images/image3.jpg')} alt="main_image1" />
                        <p>[AP=정오의데이트 제공]</p>
                    </div>
                    <div className="third_para">
                        <div className="third_para_cont">
                        정오의데이트 운영팀은 "연인의 유무와 상관 없이 모든 대한민국 청춘들이 설렘 가득한 크리스마스를 보내길 바라는 마음으로 위와 같은 이벤트 서비스를 기획했다"라며, 11월 1일 기준 1,830쌍의 연말 데이트가 성사 되었다고 밝혔다.
                        </div>
                    </div>
                    <p className="copyright">[저작권자(c) 뉴스체크 무단전재 및 재배포 금지]</p>
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