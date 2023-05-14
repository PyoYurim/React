/* eslint-disalbe */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경 ] = useState(0); //좋아요는 자주 바뀌는 항목이므로 state로 선언
  let [좋아요1, 좋아요변경1 ] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); //현재 UI의 상태 저장
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

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
        글제목변경(copy);}}> 글제목 수정 </button><input onChange={(e)=>{
          입력값변경(e.target.value);
          console.log(입력값)}}></input>
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
        //modal == true ? <Modal/> : null
      }

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>{글제목[i]} {/*105번째 줄에서 시행한거를 for문을 돌려서 */}
                <span onClick={() => {좋아요변경(좋아요+1)
                }}>🩷</span>{좋아요}</h4>
              <p>2월 17일 발행</p>
              <button onClick={()=> {
                let copy = [...글제목];
                copy.splice(i,1); //배열에서 데이터 삭제하는 문법
                글제목변경(copy);
                }}>삭제</button>
            </div>
          );
        })
      }
      {/* 글발행 누르면 글이 추가되는 기능 */}
      <input onChange={(e)=>{
        입력값변경(e.target.value);
        console.log(입력값)}}></input>
      <button onClick={()=> {
        let copy = [...글제목];
        // {
        //   입력값.includes('여자') ? 글제목변경(입력값 + '👩🏻') : 글제목변경(입력값 + '🩷')
        // }
        copy.unshift(입력값); //배열에서 데이터 추가하는 문법

      }}>글발행</button>
      
      {/* 스스로과제 */}
      <input onChange={(e)=>{
        입력값변경(e.target.value);
        console.log(입력값)}}></input>  
      <button onClick={()=> {
        let copy = [...글제목];
        copy.shift();
        copy.unshift(입력값); //배열에서 데이터 추가하는 문법
        글제목변경(copy);
      }}>글제목 수정</button>
      {
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null
      }
    </div>
  );
}
//props : 부모의 것을 가져다 쓰기 위해서!
function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4> {/*부모의 state를 가져와서 모달창에 띄우는 역할 */}
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> {props.글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬독학'])}}>글수정 </button>
    </div>
  )
}

export default App;