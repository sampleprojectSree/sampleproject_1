import React, {useState} from 'react';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

    const Login = () => {    
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [isDisabled,setIsDisabled]=useState(true);

        React.useEffect(() => {
            console.log(username, password);
            setIsDisabled(true)
            if (username != '' && password != '') {
              setIsDisabled(false);
            }
          });

        const submitHandler = e =>{
            
            if(username==="admin") {
                if(password==="admin@123") {
                    alert("Login Success!");
                }
                else {
                    alert("Incorrect Credential data!");
                }
            }
            else {
                alert("No user found")
            }
             
        }
return (
    <div>
            <div >
                <h2 style={{textAlign:"center"}}>Login Form</h2>
            </div>

            <div style={{ alignItems:"center"}} className='login-input'>
                    <div style={{textAlign:"center"}}>

                        <form onSubmit={submitHandler}>  
                            <OutlinedInput type='username' name='username' id='u-name' className='MuiInputBase-input-MuiOutlinedInput-input' value={username}  onChange={(e) => setUsername(e.target.value)}  placeholder="Username"  />
                            <OutlinedInput type='password' name='password' id='u-psw' className='MuiInputBase-input-MuiOutlinedInput-input' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            <br/>  
                            <Button style={{marginTop:15,marginBottom:15,}} type="submit" id='submit' variant="contained" color="success" disabled={isDisabled}>
                                Login
                            </Button>
                        </form>
                        
                    </div>
            </div>
    </div>
  )
}

export default Login;