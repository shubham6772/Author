import { TextField, Button } from '@mui/material'

interface LoginProps{
    onSubmit : Function,

}

const LoginForm = ({onSubmit} : LoginProps) => {
    
    return (
        <>
            <div className="input-container">
                <TextField className="login-input-box" id="outlined-basic" label="Username" variant="outlined" size="medium" color="success" />
            </div>

            <div className="input-container">
                <TextField className="login-input-box" id="outlined-basic" label="Password" variant="outlined" size="medium" color="success" />
            </div>

            <div className="input-container">
                <Button variant="contained" onClick={()=> onSubmit()} color="success">Submit</Button>
            </div>

            {/* <hr className="login-divider" />
                <div className="login-or-container">
                    <p>or</p>
                </div> */}
        </>
    )
}

export default LoginForm
