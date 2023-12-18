import './Preloaders.scss'

export const DefaultPreloader = () => {
    return (
        <div className='spinner-wrapper'>
            <div className="spinner-inner">
                <div className="spinner"></div>
                Loading ...
            </div>
        </div>
    );
};

export const SuspensePreloader = ({message = 'Loading Components ...'}) => {
    return (
        <h1 className="preloader-suspense"></h1>
    );
};

