import { TextField, Button } from '@mui/material'

interface SignUpProps{
    onSubmit : Function;
}
const SignupForm = ({onSubmit} : SignUpProps) => {
    return (
        <>
            <div className="login-input-container">
                <TextField className="login-input-box" id="outlined-basic" label="First Name" variant="outlined" size="medium" color="success" />
            </div>

            <div className="login-input-container">
                <TextField className="login-input-box" id="outlined-basic" label="Last Name" variant="outlined" size="medium" color="success" />
            </div>

            <div className="login-input-container">
                <TextField className="login-input-box" id="outlined-basic" label="Email" variant="outlined" size="medium" color="success" />
            </div>

            <div className="login-input-container">
                <TextField className="login-input-box" id="outlined-basic" label="Password" variant="outlined" size="medium" color="success" />
            </div>

            <div className="login-input-container">
                <TextField className="login-input-box" id="outlined-basic" label="Confirm Password" variant="outlined" size="medium" color="success" />
            </div>

            <div className="login-input-container">
                <TextField className="login-input-box" id="outlined-basic" label="Mobile" variant="outlined" size="medium" color="success" />
            </div>

            <div className="login-input-container">
                <Button variant="contained" color="success" onClick={()=>onSubmit()}>Submit</Button>
            </div>
        </>
    )
}

export default SignupForm
