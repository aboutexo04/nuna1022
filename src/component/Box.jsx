
function Box(props) {
    console.log("props:", props);

    const getBorderClass = () => {
        if (props.result === "win") return "box-win"
        if (props.result === "lose") return "box-lose"
        if (props.result === "tie") return "box-tie"
        if (!props.gameStarted) return "box-initial"
        return ""
    }

    return (
        <div className={`box ${getBorderClass()}`}>
            <h1>{props.title}</h1>
            {props.item ? (
                <img className="item-img" src={props.item.img} />
            ) : (
                <div className="question-mark">?</div>
            )}
            <h2>{props.result}</h2>
        </div>
    )
}

export default Box
