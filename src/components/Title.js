import React, { Component, Fragment } from 'react';
// import { far, faComment } from "@fortawesome/free-solid-svg-icons";
import { far, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialIcon, {colorPalette} from 'material-icons-react';

import './Title.css';

class Title extends Component {
    render() {
        return (
            <Fragment>
                <div className="main_title">
                    [화제] “크리스마스에 일일 데이트 어때요?” 연말 데이트 사전 예약 어플 화제
                </div>
                <div className="news_date">
                    기사 입력 2017.11.02 오후 01:016
                </div>
                <div className="num_reply">
                    <div className="rep_wrapper">
                        <FontAwesomeIcon icon={faComment} />
                        <span>239</span>
                    </div>
                    <div className="imo_wrapper">
                        <button className="short_cut">
                            <MaterialIcon icon="timeline" color='black' />
                        </button>
                        <button className="short_cut">
                            <MaterialIcon icon="swap_calls" color='black' />
                        </button>
                        <button className="short_cut">
                            <MaterialIcon icon="notifications_active" color='black' />
                        </button>
                        <button className="short_cut">
                            <MaterialIcon icon="360" color='black' />
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Title;