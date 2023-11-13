import UserIcon from "../UserIcon/UserIcon.jsx";
import ProgressBlock from "../ProgressBlock/ProgressBlock.jsx";

const Card = ({props}) => {
    const {duration, id, image, level, modules, rating, students, title, user, isMyCourse = false,finishedModules = null } = props;
    function secondsToHours(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);

        return `${hours}:${minutes}h`;
    }

    return (
        <div id={id} className="card">
            <div className="image__container">
                <img
                    src={image}
                    alt="Some Image"
                />
                <div className="level">{level}</div>
            </div>
            <h3 className="card__title">{title}</h3>

            <div className="card__info">
                <UserIcon image={user.avatar} userIconName={user.name}/>
                <div className="rating">
                    <p>{rating}</p>
                </div>
            </div>

            {isMyCourse && <ProgressBlock progressFinishedModules={finishedModules} progressModules={modules} />}

            <div className="card__info">
                <div>{students} Student</div>
                <div>{modules} Modules</div>
                <div>{secondsToHours(duration)}</div>
            </div>
        </div>
    )
}

export default Card;