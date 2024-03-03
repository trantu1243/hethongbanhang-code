import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchFile = async () => {
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}/users.txt`);
            if (!response.ok) {
                throw new Error('Failed to fetch file');
            }
            const content = (await response.text()).split("\n");
            
            setUserList([]);
            content.forEach(str => {
                const user = str.split(" ");
                setUserList(preValue => ([...preValue, {username:user[0], password:user[1].split("\r")[0]}]));
            });
           
        } catch (error) {
            console.error('Error fetching file:', error);
        }
        };

        fetchFile();
    }, []);


    const [user, setUser] = useState({username:"", password:""});
    const [checkUser, setCheckUser] = useState(true);

    function handleChange(event){
        const {name, value} = event.target;
        setUser(preValue => ({...preValue, [name]:value}));
    }

    function handleClick(event){
        event.preventDefault();
        userList.forEach(item => {
            if (user.username === item.username && user.password === item.password){
                navigate("/home");
                return;
            }
            setCheckUser(false);
        });
    }

    return (
        <div className="login-page">
            <div className="top-line"></div>
            <div className="content-login">
                <div className="left-login">
                    <h1>New Thanh Xuan</h1>
                    <img src="images/Store-Front-sq.png" alt=""/>
                </div>
                <div className="right-login">
                    <h1>Welcome!</h1>
                    <form className="login-form">
                        <div>
                            <label>Tên đăng nhập:</label>
                            <input type="text" id="username" name="username" value={user.username} onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Mật khẩu:</label>
                            <input type="password" id="password" name="password" value={user.password} onChange={handleChange}/>
                        </div>
                        {!checkUser && <p style={{color:"red",margin:"0",padding:"0",width:"100%", textAlign:"center", paddingLeft:"10px"}}>Tên đăng nhập hoặc mật khẩu không đúng</p>}
                        <button type="submit" onClick={handleClick}>Đăng nhập</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login;