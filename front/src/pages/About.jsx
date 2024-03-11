import { useLanguageContext } from "../hooks/useLanguageContext";

const AboutPage = () => {
    const { language } = useLanguageContext();

    return ( 
        <div className="about-page">
            <h2>About: { language } </h2>
        </div>
     );
}
 
export default AboutPage;