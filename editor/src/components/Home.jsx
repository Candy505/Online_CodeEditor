import AnimatedText from "./AnimatedText";
import Navbar from "./Navbar";

function Home() {
    const text = "Code Editor for Beginners.{\n}Empowering Coders:\nSmart Suggestions, Manual Braces,\nEffortless Indentation";
    const speed = 450;
    return (  
        <div>
        <AnimatedText text={text} speed={speed} />
        </div>
    );
}

export default Home;