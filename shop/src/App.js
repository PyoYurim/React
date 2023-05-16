import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import { useState } from "react";
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import bg from './img/bg.png'
import data from './data.js';
import { Routes, Route, Link, HashRouter, useNavigate, Outlet} from 'react-router-dom'
import Detail from './Detail.js';
import MyPage from './MyPage.js';
import axios from 'axios'

export let Context1 = createContext()

function App() {

  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12])

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/" style={{textDecoration:"none", marginLeft:20}}>홈</Link>
            <Link to="/detail" style={{textDecoration:"none", marginLeft:40}}>상세페이지</Link> */}
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/mypage')}}>My Page</Nav.Link>
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
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{ 
                  setShoes(shoes.concat(결과.data)) 
                })
              }}>버튼</button>
            </>
          }/>
          
          <Route path="/detail/:id" element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          } />
        {/* 404 페이지 */}
        <Route path="*" element={<div>없는 페이지요</div>} />
        <Route path="/mypage" element={<MyPage></MyPage>}/>

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
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;
