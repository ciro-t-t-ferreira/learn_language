import { useLanguageContext } from "../hooks/useLanguageContext";
import LetterBlocks from "../components/LetterBlocks";
import NumberAdjust from "../components/NumberAdjust";
import Modal from "../components/Modal";
import alphabetHelp from "../components/AlphabetHelp"
import { useState } from "react";


const AlphabetPage = () => {
    const { language } = useLanguageContext()
    const [blockQuantity, setBlockQuantity] = useState(5);
    const [modal, setModal]     = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
        
    return ( 
        <div className="home">
            <h2>Alphabet: { language } </h2>
            <button onClick={toggleModal}>?</button>
            {modal &&
            <Modal
            ModalContent = { alphabetHelp }
            toggleModal = { toggleModal } />}
            <NumberAdjust 
             blockQuantity={blockQuantity}
             setBlockQuantity={setBlockQuantity}
            >
                <LetterBlocks blockQuantity={blockQuantity}/>
            </NumberAdjust>
        </div>
    );
}
 
export default AlphabetPage;