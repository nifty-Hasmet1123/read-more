import React from "react";
import "./css/AboutMe.css";

const AboutMeComponent = () => {
    return (
        <article className="aboutMeContainer">
            <div className="left-about">
                <p className="main-para-about">
                    Hello! I'm a passionate coder with a love for learning and a strong foundation in programming. 
                    My journey in the world of coding began with <strong>Python</strong>, which was my first programming language. 
                    As I delved deeper into the realm of coding, I expanded my skill set to include <strong>JavaScript, HTML5, and CSS3</strong>, 
                    allowing me to create dynamic <em>web applications and websites.</em>
                </p>
                <p className="main-para-about">
                    My passion for coding drives me to continuously acquire new skills and explore different aspects of the field. 
                    In my pursuit of knowledge, I ventured into the world of data science and machine learning, 
                    where I utilized Python frameworks like <strong>BeautifulSoup (bs4), Selenium, and Pandas.</strong>
                    These tools have been invaluable in my journey to become proficient in data analysis and manipulation.
                </p>
                <p className="main-para-about">
                    My coding journey didn't stop there. I also ventured into front-end development, mastering JavaScript to create engaging user interfaces. 
                    On the back-end, I've worked with <strong>Django Rest Framework in Python and Node.js with Express.js,</strong> 
                    enabling me to build robust and scalable web applications.
                </p>
                <p className="main-para-about">
                    One of my favorite tools in the front-end development arsenal is <strong>React.js</strong>
                    , which I've used to create dynamic and responsive user interfaces. 
                    This framework has opened up endless possibilities for crafting engaging web experiences.
                </p>
                <p className="main-para-about">
                    When it comes to data storage, I'm well-versed in <strong>PostgreSQL</strong> 
                    , a powerful relational database management system that complements my skill set perfectly.
                </p>
                <p className="main-para-about">
                <em>Outside the exhilarating world of coding, I have a variety of hobbies and interest that keep me balanced and engaged in life. 
                One of my favorite past-times is playing chess, playing computer games(strategy games, moba, shooter, rpg)</em>
                </p>
                <p className="main-para-about">
                    <em>
                        I also cherish the moments spent with my family. 
                        These moments, though sometimes scarce due to the demands of coding are precious to me. 
                        and I make sure to enjoy them fully whenever possible.
                    </em>
                </p>
            </div>
            <div className="right-about">
                <div className="message-container">
                    <span className="message">No Tailwind/Bootstrap just plain HTML/CSS and React</span>
                </div>
                <div className="video-container">
                    <video title="Tuscany" id="videoPlayerAbout" className="europe-video" muted autoPlay loop> 
                        <source src="./assets/tuscany.webm"/>
                    </video>
                </div>        
            </div>
        </article>
    );
}

export default AboutMeComponent;