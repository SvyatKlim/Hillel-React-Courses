import './buttons.scss';
import DeleteIcon from "../../assets/pictures/delete.svg?react";

export const DefaultButton = ({
                                  additionalClassName,
                                  buttonUrl = '#placeholder',
                                  buttonText = 'placeholder',
                                  handler = null
                              }) => {
    const buttonClassName = additionalClassName ? additionalClassName : '';
    return (
        <>
            {handler !== null
                ? <button className={`button button-red ${buttonClassName}`} onClick={handler}>{buttonText}</button>
                : <a className={`button button-red ${buttonClassName}`} href={buttonUrl}>{buttonText}</a>
            }
        </>
    )
}
export const ResetCartButton = ({buttonUrl = '#placeholder', buttonText = 'placeholder', handler, additionalClassName}) => {
    const buttonClassName = additionalClassName ? additionalClassName : '';
    return (
        <>
            <button className={`button reset-button ${buttonClassName}`} onClick={handler}>{buttonText}</button>
        </>
    )
}


export const CardButton = ({buttonUrl = '#placeholder', buttonText = 'placeholder', handler, additionalClassName}) => {
    const buttonClassName = additionalClassName ? additionalClassName : '';
    return (
        <>{additionalClassName === 'counter-button' || buttonUrl === ''
            ? <button className={`button button-card ${buttonClassName}`} onClick={handler}>{buttonText}</button>
            : <a className={`button button-card ${buttonClassName}`} href={buttonUrl} onClick={handler}>{buttonText}</a>
        }
        </>
    )
}

export const QuantityButton = ({handler, text}) => {
    return (
        <>
            <button className={`button-quantity`} onClick={handler}>{text}</button>
        </>
    )
}

export const RemoveItemButton = ({handler}) => {
    return (
        <>
            <button className="button btn-remove" onClick={handler}><DeleteIcon/></button>
        </>
    )
}