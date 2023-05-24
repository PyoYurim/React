import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import { useState, useEffect } from "react";
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import bg from './img/bg.png'
import data from './data.js';
import { Routes, Route, Link, HashRouter, useNavigate, Outlet, useParams, NavLink } from 'react-router-dom'
import Detail from './Detail.js';
import MyPage from './MyPage.js';
import axios from 'axios'
import Cart from './routes/Cart.js'
import { useQuery } from 'react-query';

export let Context1 = createContext()

function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]))
    
  }, [])

  //data.js에서 정보 가져오기
  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12])
  let param = useParams();
  let navigate = useNavigate();
  //object자료 만들기
  let obj = {name: 'kim'}
  //JSON으로 변환
  //localStorage에 저장
  localStorage.setItem('data', JSON.stringify(obj))

  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      console.log('요청됨')
      return a.data
    })
  )

  


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* Shop클릭 시 home으로 */}
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/" style={{textDecoration:"none", marginLeft:20}}>홈</Link>
            <Link to="/detail" style={{textDecoration:"none", marginLeft:40}}>상세페이지</Link> */}
            {/* Nav를 이용하여 스타일 지정 */}
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            {/* Detail클릭 시 /detail경로로 이동하게 해주는거 */}
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/mypage')}}>My Page</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            { result.isLoading ? '로딩중' : result.data.name }
          </Nav>
        </Container>
      </Navbar>
      <Routes>
          <Route path="/" element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  { shoes.map(function(a, index){
                    return <Card shoes={shoes[index]} i={index}></Card>
                  })}
                </div>
              </div>
              <button onClick={()=>{
                //axios.get을 이용해서 데이터를 가져온다
                axios.get('https://codingapple1.github.io/shop/data2.json')
                //setShoes 함수를 이용하여 shoes배열에 결과.data 배열을 합칩니다.
                .then((결과)=>{ 
                  setShoes(shoes.concat(결과.data)) 
                })
              }}>버튼</button>
            </>
          }/>
          {/* URL 경로 설정하는 속성, :id는 매개변수 역할을 수행하며 동적인 값을 가질 수 있는 경로 */}
          <Route path="/detail/:id" element={
            <Context1.Provider value={{ 재고, shoes }}>
              {/* Detail 컴포넌트를 렌더링하는 부분으로 shoes라는 props를 전달하여 Detail 컴포넌트에서 해당 데이터를 사용할 수 있도록 하기 위함이다 */}
              <Detail shoes={shoes} />
            </Context1.Provider>
          } />
          <Route path="/cart" element={<Cart/>}/>
        {/* 404 페이지 */}
        <Route path="*" element={<div>없는 페이지요</div>} />
        <Route path="/mypage" element={<MyPage></MyPage>}/>
        
        {/* /about/member 이런식으로 검색하면 멤버임이 화면에 나온다 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} /> {/* 어디에 보여줄지 정하기 위해 <Outlet></Outlet>사용 */}
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>
      </Routes>

    </div>
  );
}
function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      {/* one, two를 경로표시할때 나타나게 하기 위해서 */}
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Card (props) {
  return(
    <div className="col-md-4" key ={props.i}>
      <NavLink to = {"/detail/"+(props.i)}>
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%"></img></NavLink>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;
