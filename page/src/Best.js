import React from 'react';
import './Best.css'
import {Link} from 'react-router-dom';

function Best() {
    return (
        <div>
            <div className='best1'>
                <Link to={'/detail1'}>
                    <img src = {require('./img/tshirt.png')} alt =" "/>
                    <div className='summmary'>
                        <h3>여러가지 색깔의 옷</h3><p>질 좋고 합리적인 가격에, 핏 세분화까지!<br/>취향에 맞게 고를 수 있는 썸머 베이직 tee<br/>기본부터 파스텔 포인트 컬러까지 준비완료!</p><hr></hr><p>13,000원</p>
                    </div>
                </Link>
            </div>
            
        </div>
        
    );
}

export default Best;
