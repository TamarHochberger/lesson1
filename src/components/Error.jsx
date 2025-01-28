import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>error</h1>
            <button onClick={() => navigate('/home')}>back to homepage</button>
        </div>
    );
};

export default Error;
