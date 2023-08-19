import { Input } from '@mui/material';
import Header from "../header/Header";
import '../Login/login.css'
import { useNavigate } from 'react-router-dom';


function Login(type, form, onChange, onSubmit) {
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate("/");
    }
    const navigateToJoin = () => {
        navigate("/join");
    }
    return (
        <div className="login">
            <div className="header1">
             Our flying start!
            </div>
            <Header></Header>
            <p className="name"> 회원로그인 </p>
                
                <form onSubmit={onSubmit} className="login-form">
                <Input className="auth-input"
                autoComplete="userid"
                name="userid"
                placeholder="아이디"
                onChange={onChange}
                value={form.userid} 
                />
                <br/><br/>
                <Input className="auth-input"
                autoComplete="userpw"
                name="userpw"
                placeholder="비밀번호"
                type="password"
                onChange={onChange}
                value={form.userpw}/>
                <br></br><br></br>
                <button onClick={navigateToMain} className='login-button'>LOGIN</button>
                <br/>
                <h4>아직 회원이 아니신가요?</h4>
                <hr></hr><br></br>
                <h4>Devil & Angel에 가입하셔서<br/>더 많은 혜택을 누려보세요</h4>
                <button onClick={navigateToJoin} className='join-button'>JOIN</button>
            </form>
    
        </div>
    )
}

export default Login