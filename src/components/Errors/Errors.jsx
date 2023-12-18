import './Errors.scss'

export const ErrorMessage = ({message}) => {
    return (
        <div className='error-message-wrapper'>
            <h2 className="error-message">
               Error: {message}
            </h2>
        </div>
    );
};
