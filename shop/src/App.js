import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import bg from './img/bg.png'
import data from './data.js';
import { Routes, Route, Link, HashRouter, useNavigate, Outlet} from 'react-router-dom'

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
    <HashRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/" style={{textDecoration:"none", marginLeft:20}}>홈</Link>
            <Link to="/detail" style={{textDecoration:"none", marginLeft:40}}>상세페이지</Link> */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{}}>Cart</Nav.Link>
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
            </>
          }/>
          <Route path="/detail" element={<div><Detail></Detail></div>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

function Detail() {
  return (
  <div className="container">
    <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">상품명</h4>
      <p>상품설명</p>
      <p>120000원</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
    </div>
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
