// eslint-disable-next-line react/prop-types
const NumberAdjust = ({blockQuantity, setBlockQuantity, children}) => {


    const handleMinus = () => {
        if(blockQuantity > 1){
            setBlockQuantity(blockQuantity - 1)
        }
        else{
            throw Error('Minimun of 1 block')
        }
    }
    
    const handlePlus = () => {
        if(blockQuantity < 15){
            setBlockQuantity(blockQuantity + 1)
        }
        else{
            throw Error('Max number of blocks:15')
        }        
    }

    return (
        <div className="number-adjust"> 
            <button onClick={handleMinus}>-</button>
            <span>{blockQuantity}</span>
            <button onClick={handlePlus}>+</button>
            {children}
        </div>
     );
}
 
export default NumberAdjust;