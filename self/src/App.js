/* eslint-disalbe */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Link, HashRouter, useNavigate, Outlet} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Write from './Write.js';
import Detail from './Detail.js';

function App() {
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
            <Nav.Link onClick={()=>{navigate('/read')}}>Read</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/write')}}>Wrtie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
          <Route path="/" element={
            <>
              <div className="main-image"></div>
              
            </>
          }/>
          <Route path="/Read" element={<Read/>}></Route>
          <Route path="/Detail" element={<Detail></Detail>}/>
          <Route path="/Write" element={<Write/>}/>
        </Routes>
    </div>
  );


}

function Read() {
  let navigate = useNavigate();
  let [fade, setFade] = useState('');

  useEffect(()=>{
    setTimeout(()=> {
      setFade('end');
    }, 500);

    return() => {
      setFade('');
    }
  })
  return (
    <div className={'start' + fade}>
      <h4>읽기 페이지입니다.</h4>
      <Button onClick= {()=>navigate('/detail')}>자세히보기</Button>
    </div>
  );
}

export default App;