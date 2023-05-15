import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styled from "styled-components";

//YelloBtn을 갖다쓸때 bg를 props로 써주겠다
// let YellowBtn = styled.button`
//   background : ${ props => props.bg }; 
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding : 10px;
// `




function Detail(props) {
  const [num, setNum] = useState('');
  const [alert1, setAlert1] = useState(true);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert1(false);
    }, 2000);

    if (isNaN(num)) {
      alert('그러지마세요');
    }

    return () => clearTimeout(timeout);
  }, [num]);

  return (
    <div className="container">
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
          <input onChange={(e) => setNum(e.target.value)} />
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

  export default Detail;