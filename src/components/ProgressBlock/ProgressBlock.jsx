const ProgressBlock = ({progressFinishedModules, progressModules, maxProgressValue = 100}) => {
    const finishedPercentVal = progressModules >= progressFinishedModules
        ? parseInt((progressFinishedModules / progressModules) * maxProgressValue)
        : 0;

    return (<div>
        <progress value={finishedPercentVal} max={maxProgressValue}>
            {finishedPercentVal}
        </progress>
        <div className="card__info">
            <p>{progressModules >= progressFinishedModules ? progressFinishedModules : finishedPercentVal} / {progressModules} Modules</p>
            <div>{finishedPercentVal}%</div>
        </div>
    </div>)
}

export default ProgressBlock;