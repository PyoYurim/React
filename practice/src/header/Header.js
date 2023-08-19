import './Header.css';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {InputLabel} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <div className = "header">
            <Link to="/" style={{textDecoration : "none"}}>
                <div className='logo' >Devil & Angel</div>
            </Link>
                <div className = "menu" >
                    <Link to="/best" style={{textDecoration : "none"}}>
                    <div className='menu'>BEST</div></Link>
                    <Link to="/top" style={{textDecoration : "none"}}>
                    <div className='menu'>TOP</div></Link>
                    <Link to="/shirt" style={{textDecoration : "none"}}>
                    <div className='menu'>SHIRT/BLOUSE</div></Link>
                    <Link to="/bottom" style={{textDecoration : "none"}}>
                    <div className='menu'>BOTTOM</div></Link>
                    <Link to="/outer" style={{textDecoration : "none"}}>
                    <div className='menu'>OUTER</div></Link>
                    <Link to="/acc" style={{textDecoration : "none"}}>
                    <div className='menu'>ACC</div></Link>
                    <Box component="form" sx={{'& .MuiTextField-root' : {marginLeft:'50px', marginTop:'-15px',width: '20ch'},}}noValidate autoComplete="off"> {" "}
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native" ></InputLabel>
                    </FormControl>
                        <div>
                            <TextField
                                id="standard-search"
                                type="search"
                                variant="standard"
                            />  
                            <IconButton type="submit" sx={{ marginTop: '-15px', p: "10px" }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            
                        </div>    
                </Box>
                    <Link to="/login" style={{textDecoration : "none"}}>
                        <div className='menu'>LOGIN</div></Link>
                    <Link to="/join" style={{textDecoration : "none"}}>
                        <div className='menu'>JOIN</div></Link>
                    <Link to="/basket" style={{textDecoration : "none"}}>
                        <div className='menu'><ShoppingCartIcon/></div></Link>
                    <Link to="/mypage" style={{textDecoration : "none"}}>
                        <div className='menu'>MY PAGE</div></Link>

                            
                
                </div>
                
            
        </div>
    )
}
export default Header;