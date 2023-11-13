const userIcon = ({image, userIconName}) => {
    return (
        <div className="user">
            {image &&
                <img
                    src={image}
                    alt={userIconName ? userIconName : 'Some User'}
                />
            }
            <p>{userIconName ? userIconName : 'Some User'}</p>
        </div>
    )
}

export default userIcon;