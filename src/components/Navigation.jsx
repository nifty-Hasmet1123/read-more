import { useState } from "react";
import "./css/Navigation.css";
import CodeComponent from "./CodeComponent";
import AboutMeComponent from "./AboutMeComponent";
import Goals from "./GoalsComponent";
import Welcome from "./WelcomeComponent";
import stringModification from "../javascript/stringModify";

const Navigation = () => {
    const [activeTab, setActiveTab] = useState("welcome");

    const handleClick = (tabSelection) => {
        setActiveTab(tabSelection);
    };

    const tabInterface = (divClassName, component) => {
        const textColor = { color: "white" };

        // example className will be "_hello"
        return activeTab === divClassName && (
            <section className={ "_" + divClassName } style={ textColor }>
                <h2 className="header">{ stringModification(divClassName) }</h2>
                { component }
            </section>
        );
    }

    return (
        <div className="container">
            <nav>
                <ul>
                    <li 
                        className={ activeTab === "welcome" ? "active": "" }
                        onClick={ () => handleClick("welcome") }
                    >
                        <span className="nav-des">Welcome</span>
                    </li>
                    <li 
                        className={ activeTab === "aboutMe" ? "active": "" }
                        onClick={ () => handleClick("aboutMe") }
                    >
                        <span className="nav-des">About Me</span>
                    </li>
                    <li
                        className={ activeTab === "goals" ? "active": "" }
                        onClick={ () => handleClick("goals") }
                    >
                        <span className="nav-des">Goals</span>
                    </li>
                    <li
                        className={ activeTab === "codes" ? "active": "" }
                        onClick={ () => handleClick("codes") }
                    >
                        <span className="nav-des">Codes</span>
                    </li>
                </ul>
            </nav>
            <main className="content">
                {tabInterface("welcome", <Welcome/>)}
                {tabInterface("aboutMe", <AboutMeComponent/>)}
                {tabInterface("goals", <Goals/>)}
                {tabInterface("codes", <CodeComponent/>)}
            </main>
        </div>
    );
}

export default Navigation;
