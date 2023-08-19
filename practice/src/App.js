import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './home/Home';
import Best from './component/best/Best';
import Top from './component/Top';
import Shirt from './component/Shirt';
import Bottom from './component/Bottom';
import Outer from './component/Outer';
import Acc from './component/Acc';
import Login from './Login/login';
import Join from './Join/Join';
import Basket from './component/basket';
import Detail from './component/best/Detail';

function App() {
  return ( 
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/best/*" element={<Best />}/>
          <Route path="/top" element={<Top />}/>
          <Route path="/shirt" element={<Shirt />}/>
          <Route path="/bottom" element={<Bottom />}/>
          <Route path="/outer" element={<Outer />}/>
          <Route path="/acc" element={<Acc />}/>
          <Route path="/acc" element={<Acc />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/join" element={<Join />}/>
          <Route path="/basket" element={<Basket />}/>
          <Route path="/detail/:id" element={<Detail />} />
            </Routes>
      </Router>
  )
}

export default App;

