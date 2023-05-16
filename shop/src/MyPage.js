import React, { useState, useEffect} from 'react';
function MyPage() {
    let [name, setName] = useState('');
    let [call, setCall] = useState('');
    let [birth, setBirth] = useState('');
    let [showImage, setShowImage] = useState(false)

    const handleImageClick = () => {
        setShowImage(true);
    }
    return (
        
        <div className="info">
            <input onChange={(e) => {
                {
                setName(e.target.value);
                }
            }}
            />
            <p>이름 : {name}</p>
            <br></br>
            <input onChange={(e) => {
                {
                setCall(e.target.value);
                }
            }}
            />
            <p>전화번호 : {call}</p>
            <br></br>
            <input onChange={(e) => {
                {
                setBirth(e.target.value);
                }
            }}
            />
            <p>생일 : {birth}</p>
            <br></br><br></br>

            {
                showImage ? (<img src={require('./img/한교동3.png')} alt="사진"/>
                ): (<button onClick={handleImageClick}>사진 가져오기</button>)
            }
            {/* 처음에 false로 값을 정해주고 버튼을 클릭했을 때 사진가져오기 버튼이 나올 수 있도록 해주었다 
            버튼을 누르면 true로 바꿔주기로 위에서 선언을 했고 true로 바뀌면 저절로 앞에 구문이 실행이된다. */}
        </div>
        

    )
}
export default MyPage;