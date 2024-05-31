import { Button } from '@mui/material';

const CreateAccount = () => {
    return (
        <div>
            <div>
                Email: <input type={'email'} />
            </div>
            <div>
                Password: <input type={'password'} />
            </div>
            <Button>Create Account</Button>
        </div>
    );
};

export default CreateAccount;
