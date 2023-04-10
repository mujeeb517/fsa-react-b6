import LoaderImg from './assets/loader.gif';

function Loader({ loading }) {
    return loading ?
        <div className="flex bg-white border border-gray-300 p-1 text-gray-500" style={{ position: 'absolute', top: '40%', left: '45%' }}>
            <img src={LoaderImg} width={32} height={32} />
            <span className="m-1">Loading</span>
        </div> :
        null;
}

export default Loader;