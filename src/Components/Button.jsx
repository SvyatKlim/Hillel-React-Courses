export const Button = ({name, action}) => {
    return (
        <button className={`button button-${name}`} onClick={action}>
            {name}
        </button>
    )
}