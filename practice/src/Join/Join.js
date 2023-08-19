import Header from "../header/Header";
import { useNavigate } from 'react-router-dom';
import "../Join/Join.css"
import { Input } from '@mui/material';

function Join(type, form, onChange, onSubmit) {
    const navigate = useNavigate();

    const navigateToJoin = () => {
        navigate("/login");
    }

    return(
        <div className="login">
            <div className="header1">
             Our flying start!
            </div>
            <Header></Header>
            <p className="name"> 회원정보 </p>
                
                <form onSubmit={onSubmit} className="join-form">
                <div>아이디</div>
                <Input className="auth-input"
                autoComplete="userid"
                name="userid"
                onChange={onChange}
                value={form.userid} 
                />
                <br/><br/>
                <div>비밀번호</div>
                <Input className="auth-input"
                autoComplete="userpw"
                name="userpw"
                type="password"
                onChange={onChange}
                value={form.userpw}/>
                <br></br><br></br>
                <div>비밀번호 확인</div>
                <Input className="auth-input"
                autoComplete="usercheckpw"
                name="usercheckpw"
                type="password"
                onChange={onChange}
                value={form.usercheckpw}/>
                <br/><br></br>
                <div>이름</div>
                <Input className="auth-input"
                autoComplete="username"
                name="username"
                onChange={onChange}
                value={form.username} 
                />
                <br/><br/>
                <div>생년월일</div>
                <Input className="auth-input"
                autoComplete="birth"
                name="birth"
                placeholder="ex)20231230"
                onChange={onChange}
                value={form.birth} 
                />
                <br/><br></br>
                <div>주소</div>
                <Input className="auth-input"
                autoComplete="post"
                name="post"
                placeholder="우편번호"
                onChange={onChange}
                value={form.post}/><br/>
                <Input className="auth-input"
                autoComplete="general"
                name="general"
                placeholder="기본주소"
                onChange={onChange}
                value={form.general}/>
                <Input className="auth-input"
                autoComplete="detailadress"
                name="detailadress"
                placeholder="상세주소"
                onChange={onChange}
                value={form.detailadress} 
                />
                <br/><br/>
                <div>휴대전화</div>
                <Input className="auth-input"
                autoComplete="phone"
                name="phone"
                placeholder="- 를 포함해서 입력해주세요"
                onChange={onChange}
                value={form.phone} 
                />
                <br/><br/>
                <div>이메일</div>
                <Input className="auth-input"
                autoComplete="email"
                name="email"
                onChange={onChange}
                value={form.email} 
                />
                <br/><br/>
                <button onClick={navigateToJoin} className='join-button'>JOIN</button>
                <br/><br/>
            </form>
    
        </div>
    )
}

export default Join;