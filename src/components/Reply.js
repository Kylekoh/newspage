import React, { Component } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';


import './Reply.css';

class Reply extends Component {
    render() {
        return (
                <div className="reply_wrapper">
                    <div className="reply_header">
                        <p>댓글 118</p>
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
                                    <span className="nick">minhahaha</span>
                                    <span className="wri_time">1시간전</span>
                                </div>
                                <span>
                                    <MaterialIcon icon="more_vert" color="#B4B4B4" />
                                </span>
                            </div>   
                            <div className="second_line">
                                <span>
                                    강아지 어플에센 쵝오 ~~^^
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
                                    <span className="nick">kozelia</span>
                                    <span className="wri_time">1시간전</span>
                                </div>
                                <span>
                                    <MaterialIcon icon="more_vert" color="#B4B4B4" />
                                </span>
                            </div>   
                            <div className="second_line">
                                <span>
                                진짜 좋음 추천하가 갠찬은데 아쉬운점은 날짜별로 몸무게 적는곳도 있으면 좋겠음 ㅜ
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
                                    <span className="nick">ggulchui</span>
                                    <span className="wri_time">1시간전</span>
                                </div>
                                <span>
                                    <MaterialIcon icon="more_vert" color="#B4B4B4" />
                                </span>
                            </div>   
                            <div className="second_line">
                                <span>
                                    매번 병원 다닐수도 없고 이렇게 편하게 정보 얻을수 잇어서 너무 좋네요ㅜㅜ
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
                                    <span className="nick">choochoo</span>
                                    <span className="wri_time">1시간전</span>
                                </div>
                                <span>
                                    <MaterialIcon icon="more_vert" color="#B4B4B4" />
                                </span>
                            </div>   
                            <div className="second_line">
                                <span>
                                    초보집사에요. 다다가 문제행동을 보이거나 아플 때 질문을 올리면 친절하게 답해줘서 좋아요. 아지냥이 통해서 많이 배웁니다
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