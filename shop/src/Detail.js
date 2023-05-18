import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'

import {Context1} from './App.js'
// import styled from "styled-components";

//YelloBtn을 갖다쓸때 bg를 props로 써주겠다
// let YellowBtn = styled.button`
//   background : ${ props => props.bg }; 
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding : 10px;
// `




function Detail(props) {

  let { 재고 } = useContext(Context1);

  const [num, setNum] = useState('');
  const [alert1, setAlert1] = useState(true);
  let [탭, 탭변경] = useState(0);
  const [count, setCount] = useState(0);
  // URL의 매개변수 값 추출 후, props.shoes 배열에서 해당 매개변수 값과 일치하는 첫번째 상품을 찾은 상품 변수에 할당한다
  const { id } = useParams();
  const 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  //useEffect()훅을 사용하여 num변수의 변경 감지, 이에 따른 다양한 동작 수행
  useEffect(() => {
  //2초 후에 실행되는 타임아웃 설정, 2초 후에 setAlter1(false)를 호출하여 alert1 상태 변경
    let timeout = setTimeout(() => {
      setAlert1(false);
    }, 2000);
    //isNan()함수는 전달된 값이 숫자인지 확인하는 함수, num이 숫자가 아닌 경우 그러지마세요 경고 메세지를 띄우는 역할
    if (isNaN(num)) {
      alert('그러지마세요');
    }

    return () => clearTimeout(timeout);
  }, [num]);

  return (
    <div className="container">
      {/* alert1이 true인 경우 2초 이내 구매 시 할인이 뜨고 2초후 false로 바뀌므로 null로 바뀐다 */}
      {alert1 ? (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      ) : null}
      {count}
      <button onClick={() => setCount(count + 1)}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="shoes" />
        </div>
        <div className="col-md-6">
          {/* 사용자의 입력을 실시간으로 감지하고 상태 업데이트 */}
          <input onChange={(e) => setNum(e.target.value)} />
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    //0.1초 후에 실행되는 타임아웃 설정
    setTimeout(() => {
      setFade('end');
    }, 100);
    //useEffect()의 반환 함수를 사용하여 정리 함수 제공 마운트가 해제되거나 업데이트되기 전에 실행
    return () => {
      setFade('');
    };
  }, [탭]);

  return (
    //start와 fade의 상태 값을 조합하여 클래스명 생성 fade값이 end일 경우 startend클래스 적용 그렇지 않을 경우 start클래스 적용
    <div className={'start' + fade}>
      {/* 배열을 사용하여 탭 값에 따라 내용을 렌더링하는 부분 배열의 인데스에 탭 값을 넣어 해당하는 내용 선택, 에를 들어 탭 값이 0이면 첫번째 내용0이 렌더링된다 */}
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

  export default Detail;