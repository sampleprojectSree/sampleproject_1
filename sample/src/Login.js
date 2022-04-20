import React, {useState} from 'react';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';



    const Login = () => {
        const [data,setData] = useState({username:'',password:''})
        // we can use the useState for declaring the variables.And  to store the values in the 'data' variable.
    
        const {username,password} = data;
        // we will do destucturing the variables to store the values in above line .
    
        const changeHandler = e =>{
            setData({...data,[e.target.name]:[e.target.value]})
           
        }

        const submitHandler = e =>{

            if(data.username=="admin") {
                if(data.password=="admin@123") {
                    alert("Login Success!")
                }
                else {
                    alert("Incorrect Credential data!")
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
                        <OutlinedInput type='username' name='username' className='MuiInputBase-input-MuiOutlinedInput-input' value={username} onChange={changeHandler} placeholder="Username" />
                        <OutlinedInput type='password' name='password' className='MuiInputBase-input-MuiOutlinedInput-input' value={password} onChange={changeHandler} placeholder="Password" />
                        <br/>  
                        <Button style={{marginTop:15,marginBottom:15}} type="submit" variant="contained" color="success">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Login;