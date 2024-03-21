import { Link } from "react-router-dom";
import { useLanguageContext } from "../hooks/useLanguageContext";
import languages from "../utilities/languages"


const NavBar = () => {
    const { setLanguage } = useLanguageContext()
    
    const handleChange = (e) => {
        setLanguage(e.target.value)
    }
    
    return ( 
        <div> 
            <div className="language-selector">Learn 
            <select onChange={(e) => handleChange(e)}>
                {Object.values(languages).map((language) => (
                    <option key={language} value={language}>{language}</option>
                ))}
            </select>
            </div>
            <div className="menu">
                <Link to='/'> Home </Link>
                <Link to='/alphabet'> Alphabet </Link>
                <Link to='/vocabulary'> Vocabulary </Link>
                <Link to='/about'> About </Link>
            </div>
        </div>
     );
}
 
export default NavBar;