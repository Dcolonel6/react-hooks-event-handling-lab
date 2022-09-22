// Code Keypad Component Here

function Keypad (){
    const changeHandler = (event) =>{
        console.log('Entering password...')
    }
    return (
        <input 
            type="password" 
            name="password" 
            id="password"
            onChange={changeHandler}
         />
    )
}

export default Keypad;