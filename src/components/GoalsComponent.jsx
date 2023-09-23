import "./css/Goals.css";

const Goals = () => {
    return (
        <article className="goalsContainer">
            <div className="left-goal">
                <p className="main-para-goal">
                    As for my career aspirations, my current goal is to become a full-fledged developer, continuously honing my coding skills and expanding my knowledge.
                    However, my long-term dream is to delve into the exciting realm of game development, with a particular focus on using
                    C++
                </p>
            </div>
            <div className="right-goal">
                <video title="Croatia" id="videoPlayerGoal" className="europe-video" muted autoPlay loop> 
                    <source src="./assets/croatia.webm"/>
                </video>
            </div>
        </article>
    )
}

export default Goals;