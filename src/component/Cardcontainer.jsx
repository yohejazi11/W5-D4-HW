import Card from "./Card"

function Cardcontainer() {
    return (
        <div className="program-camp-section">
            <h2 className="section-title-one">المعسكرات والبرامج</h2>
            <div className="program-camp-container">

                <Card
                    pdate={28}
                    ptag={'معسكر'}
                    ptext={''}
                    plocation={'riyadh'}
                    ptime={'3'}
                ></Card>

                <Card
                    pdate={28}
                    ptag={'برنامج'}
                    ptext={''}
                    plocation={'riyadh'}
                    ptime={'3'}
                ></Card>

                <Card
                    pdate={28}
                    ptag={'برنامج'}
                    ptext={''}
                    plocation={'riyadh'}
                    ptime={'3'}
                ></Card>

                <Card
                    pdate={22}
                    ptag={'معسكر'}
                    ptext={''}
                    plocation={'riyadh'}
                    ptime={'3'}
                ></Card>

                <Card
                    pdate={23}
                    ptag={'معسكر'}
                    ptext={''}
                    plocation={'riyadh'}
                    ptime={'3'}
                ></Card>

                <Card
                    pdate={25}
                    ptag={'معسكر'}
                    ptext={''}
                    plocation={'riyadh'}
                    ptime={'3'}
                ></Card>

            </div>
            <button className="more-program-btn">المزيد من المعسكرات والبرامج</button>

        </div>
    )
}

export default Cardcontainer
