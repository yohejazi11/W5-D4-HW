function Card(props) {
    let datenew = new Date();
    let day=datenew.getDate();
    let border = '';

    console.log(day)

    if (props.pdate < day) {
        border = 'un-active-programe';
    } else if (props.ptag === "معسكر") {
        border = 'camp-programe';
    } else if (props.ptag === "برنامج") {
        border = 'programe';
    }

    return (
        <div className={`program-card ${border}`} >
            <p className="program-tag">{props.ptag}</p>
            <p className="program-title">{props.ptext}</p>
            <div className="program-location-time">
                <div className="location"><img src="" alt="Location"/>{props.plocation}</div>
                <div className="time"><img src="" alt="Time"/>{props.ptime} اسابيع</div>
            </div>
            <div className="program-date-btn">
                <p className="program-date">التاريخ {props.pdate}</p>
                <button className="program-btn" disabled={props.pdate < day ? true : false}>التفاصيل</button>
            </div>
        </div>
    )
}

export default Card;
