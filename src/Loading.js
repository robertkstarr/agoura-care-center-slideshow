import './Loading.css';
import loading from './Images/loadingDial.gif';

const Loading = () => {
    return (
        <div className={'Loading'}>
            <img alt={'loading'} src={loading} />
        </div>
    );
};

export default Loading;
