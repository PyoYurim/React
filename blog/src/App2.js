/* eslint-disalbe */

import "./App.css";
import { useState } from "react";

function App2() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천"  ]);
  let [좋아요, 좋아요변경] = useState(0); //좋아요는 자주 바뀌는 항목이므로 state로 선언
  let [modal, setModal] = useState(false); //현재 UI의 상태 저장
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <span>ReactBlog</span>
      </div>

      <button //글자 가나다순 배열
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        정렬버튼
      </button>
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>


      {글제목.map(function (i, index) { 
        return (
            // key값에 i 대신 index를 넣는 이유는? https://www.inflearn.com/questions/13378/%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%B6%94%EA%B0%80%ED%95%98%EB%A9%B4-key-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%B4%EC%84%9C%EC%97%AC
            //객체 대신 객체 안에 든 고유한 값(ex id)를 넣어줘야함
          <div className="list" key={index}> 
            <span
              onClick={() => {
                setModal(true);
                setTitle(index);
              }}
            >
              {글제목[index]}
              <span
                onClick={() => {
                  좋아요변경(좋아요 + 1);
                }}
              > <h1>💛</h1>
              </span>
              {좋아요}
            </span>
            <p>2월 21일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1); //배열에서 데이터 삭제하는 문법
                글제목변경(copy);
              }}
            > 삭제</button>
          </div>
        );
      })}


     <input onChange={(e)=>{
        입력값변경(e.target.value);}}>

        </input>
      <button onClick={()=> {
        let copy = [...글제목];
        // 기존코드  입력값 + '👩🏻' 변수를 어디에다 넣을지 선언을 안 해서 오류가 발생 입력값.includes('여자') ? 글제목변경(입력값 + '👩🏻') : 글제목변경(입력값 + '🩷')
        let newCopy = 입력값.includes('여자') ? 입력값 + '👩🏻' : 입력값 + '🖤';
        copy.unshift(newCopy); //배열에서 데이터 추가하는 문법
        글제목변경(copy);
      }}>글발행</button>


      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.shift();
          copy.unshift(입력값); //배열에서 데이터 추가하는 문법
          글제목변경(copy);
        }}
      >
        글제목 수정
      </button>
      {modal === true ? (
        <Modal title={title} 글제목={글제목} 글제목변경={글제목변경} />
      ) : null}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <span>{props.글제목[props.title]}</span>{" "}
      {/*부모의 state를 가져와서 모달창에 띄우는 역할 */}
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자코트 추천"]);
        }}
      >
        여자코트로수정
      </button>
    </div>
  );
}

export default App2;
