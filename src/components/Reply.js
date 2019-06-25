import React, { Component } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';


import './Reply.css';

class Reply extends Component {
    render() {
        return (
                <div className="reply_wrapper">
                    <div className="reply_header">
                        <p>댓글 239</p>
                        <div className="reply_input">
                            <span className="input_txt">로그인 해주세요</span>
                            <div className="input_imo">
                                <div className="imo_txt">이모티콘</div>
                                <button className="imo_img">
                                    <MaterialIcon icon="insert_emoticon" color='#B4B4B4' size="30px"/>
                                </button>
                            </div>
                        </div>
                        <div className="recommend_sort">
                            <div className="sort_wrapper">
                                <span id="sort_first">추천순</span>
                                <span>최신순</span>
                                <span>과거순</span>
                            </div>
                            <MaterialIcon icon="refresh" color="black" />
                        </div> 
                    </div>
                    <div className="reply_main">
                        <div className="reply_first">
                            <div className="first_line">
                                <div> 
                                    <span className="nick">minhah</span>
                                    <span className="wri_time">1시간전</span>
                                </div>
                                <span>
                                    <MaterialIcon icon="more_vert" color="#B4B4B4" />
                                </span>
                            </div>   
                            <div className="second_line">
                                <span>
                                    여친 있지만 이런거 나오면 솔깃하는게 사실. 이라고 하면 욕먹으려낰ㅋㅋ 
                                </span>
                            </div>
                            <div className="third_line">
                                <span className="anw_reply">
                                    답글쓰기
                                </span>
                                <div className="like_wrapper">
                                    <div className="count_like">
                                        <MaterialIcon icon="thumb_up" color="#B4B4B4" size="20px" />
                                        <span>218</span>
                                    </div>
                                    <div className="count_dislike">
                                        <MaterialIcon icon="thumb_down" color="#B4B4B4" size="20px" />
                                        <span >44</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reply_first">
                            <div className="first_line">
                                <div> 
                                    <span className="nick">koztwe</span>
                                    <span className="wri_time">1시간전</span>
                                </div>
                                <span>
                                    <MaterialIcon icon="more_vert" color="#B4B4B4" />
                                </span>
                            </div>   
                            <div className="second_line">
                                <span>
                                캐롤에다 거리 분위기까지.. 첨 보는 사이지만 대부분 썸이나 연인되지않을까
                                </span>
                            </div>
                            <div className="third_line">
                                <span className="anw_reply">
                                    답글쓰기
                                </span>
                                <div className="like_wrapper">
                                    <div className="count_like">
                                        <MaterialIcon icon="thumb_up" color="#B4B4B4" size="20px" />
                                        <span>180</span>
                                    </div>
                                    <div className="count_dislike">
                                        <MaterialIcon icon="thumb_down" color="#B4B4B4" size="20px" />
                                        <span >31</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reply_first">
                            <div className="first_line">
                                <div> 
                                    <span className="nick">허태섭</span>
                                    <span className="wri_time">1시간전</span>
                                </div>
                                <span>
                                    <MaterialIcon icon="more_vert" color="#B4B4B4" />
                                </span>
                            </div>   
                            <div className="second_line">
                                <span>
                                한번도 못 본 사람이랑 크리스마스데이트??.. 좌표점ㅎ
                                </span>
                            </div>
                            <div className="third_line">
                                <span className="anw_reply">
                                    답글쓰기
                                </span>
                                <div className="like_wrapper">
                                    <div className="count_like">
                                        <MaterialIcon icon="thumb_up" color="#B4B4B4" size="20px" />
                                        <span>175</span>
                                    </div>
                                    <div className="count_dislike">
                                        <MaterialIcon icon="thumb_down" color="#B4B4B4" size="20px" />
                                        <span>28</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reply_first">
                            <div className="first_line">
                                <div> 
                                    <span className="nick">황정민</span>
                                    <span className="wri_time">1시간전</span>
                                </div>
                                <span>
                                    <MaterialIcon icon="more_vert" color="#B4B4B4" />
                                </span>
                            </div>   
                            <div className="second_line">
                                <span>
                                남자친구랑 헤어지고싶다
                                </span>
                            </div>
                            <div className="third_line">
                                <span className="anw_reply">
                                    답글쓰기
                                </span>
                                <div className="like_wrapper">
                                    <div className="count_like">
                                        <MaterialIcon icon="thumb_up" color="#B4B4B4" size="20px" />
                                        <span>150</span>
                                    </div>
                                    <div className="count_dislike">
                                        <MaterialIcon icon="thumb_down" color="#B4B4B4" size="20px" />
                                        <span>7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="see_more_wrapper">
                        <span>더보기</span>
                        <MaterialIcon icon="keyboard_arrow_down" color="gray" size="25px" />
                    </div>
                    
                </div>
        );
    }
}

export default Reply;