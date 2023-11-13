import './buttons.scss';
export const DefaultButton = ({buttonUrl='#placeholder', buttonText = 'placeholder', additionalClassName}) => {
   const buttonClassName = additionalClassName ? additionalClassName : '';
    return (
        <>
            <a className={`button button-red ${buttonClassName}`} href={buttonUrl}>{buttonText}</a>
        </>
    )
}