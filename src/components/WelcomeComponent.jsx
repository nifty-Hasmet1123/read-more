import "animate.css";
import "./css/Welcome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const textList = ["Welcome", "to", "my", "profile!"];
const animationDuration = 1000; // Animation duration in milliseconds

const p2 = {
    display: "flex",
    justifyContent: "center",
    fontSize: "small"
};

const Welcome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textAnimationClass, setTextAnimationClass] = useState("animate__flash");

    useEffect(() => {
        const interval = setInterval(() => {
            setTextAnimationClass(""); // set flash animation to empty first after each iteration

            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % textList.length);
                setTextAnimationClass("animate__flash");
            }, animationDuration / 2); // Wait half of the animation duration before changing text

        }, animationDuration * 2); // Interval should be twice the animation duration

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="welcome-container">
            <header id="welcome-header">
                <h1 id="welcome-text" className={`animate__animated ${textAnimationClass}`}>
                    {textList[currentIndex]}
                </h1>
            </header>
            <footer id="welcome-footer">
                <div className="text-footer-container">
                    <h1 className="text-content">
                        <p>Thank you for visiting my Profile</p>
                        <p>0997-228-7803</p>
                        <p style={p2}>This Profile is still work-in-progress...</p>
                    </h1>
                </div>
                <div className="icon">
                    <a href="https://github.com/nifty-Hasmet1123/read-more" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} beatFade size="2xl" style={{color: "#000000"}} className="font-aw"/>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Welcome;
