import "./css/Code.css";

const CodeComponent = () => {
    return (
        <article className="code-container">
            <div className="code-spans">
                <p className="src-para">See SRC CODE: </p>
                <p className="a-para">
                    <a  
                        id="github-url"
                        rel="noopener noreferrer" 
                        target="_blank" 
                        href="https://github.com/nifty-Hasmet1123/read-more"
                        >  GitHub
                    </a>
                </p>
            </div>
        </article>
    );
}

export default CodeComponent;