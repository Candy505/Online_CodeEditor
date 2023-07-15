import AnimatedText from "./AnimatedText";
import Navbar from "./Navbar";

function Home() {
    const text1 = "Code Editor for Beginners. ";
    const text2 = "Smart Suggestions,";
    const text3 = "Manual Braces," ;
    const text4 = "Effortless Indentation." ;
    const speed = 450;
    const speed2 = 300;
    return (  
        <div>
        <AnimatedText text={text1} speed={speed2} />
        <AnimatedText text={text2} speed={speed} />
        <AnimatedText text={text3} speed={speed} />
        <AnimatedText text={text4} speed={speed} />
        </div>
    );
}

export default Home;