/* eslint-disalbe */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경 ] = useState(0); //좋아요는 자주 바뀌는 항목이므로 state로 선언
  let [좋아요1, 좋아요변경1 ] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); //현재 UI의 상태 저장

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      
      <button onClick = { () => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }} >정렬버튼</button>

      <button onClick = { () => {
        let copy = [...글제목]; // let copy = 글제목이 안되는 이유 : state변경 함수는 ()안에 넣은 것으로 바꿔주는데 기존state == 신규state은 변경되지 않는다.
        copy[0] = '여자코트 추천';
        글제목변경(copy);}}> 글제목 수정 </button>
      {/* 글제목 수정을 클릭하면 여자코트 추천으로 글제목이 변경된다 */}
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요+1)}}>🩷</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>


      
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      
      
      <div className="list">
        <h4 onClick={() => { 
          {
            modal == true ? setModal(false) : setModal(true) //글제목을 클릭하면 modal이 나오고 한번 더 클릭하면 다시 없어지도록
          }
         }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
        
        {/* 정답 예시
        <button onClick={ ()=> {setModal(!modal)}}> {글제목[0]}</button>
        {
          modal == true ? <Modal></Modal> : null
        } */}
      </div>
      
      {
        //삼항연산자 -> 조건식 ? 참일때 실행할 코드 : 거짓일 떄 실행할 코드
        //state가 false면 <Modal> 안보이게 state가 true면 <Modal> 보이게
        modal == true ? <Modal/> : null
      }

      {
        글제목.map(function(a, i){ //a는 array안에 있던 데이터 i는 반복문 돌 때마다 0부터 1씩 증가하는 정수
          return (
          <div className="list">
            <h4>{ 글제목[i] } 
            <span onClick={()=>{
              let copy = [...좋아요1];
              copy[i] = copy[i] + 1;
              좋아요변경1(copy)
              }}>🩷</span>{좋아요1[i]}</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }
         
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;