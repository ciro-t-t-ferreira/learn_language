import { Link } from "react-router-dom";
import { useLanguageContext } from "../hooks/useLanguageContext";

const NavBar = () => {
    const { setLanguage } = useLanguageContext()
    
    const handleChange = (e) => {
        setLanguage(e.target.value)
    }
    
    return ( 
        <div> 
            <div className="language-selector">Learn 
            <select onChange={(e) => handleChange(e)}>
                    <option value="greek">Greek </option>
                    <option value="devanagari">Devanagari</option>
                    <option value="hebrew">Hebrew </option>
                    <option value="cyrillic">Cyrillic </option>
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