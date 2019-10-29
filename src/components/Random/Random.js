/**
 * 
 * @param {*} boardSize 
 */
let generateRandomLetters = (boardSize) => {


    let randomLetters = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


    for (let i = 0; i < boardSize * boardSize; i++) {
        randomLetters += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomLetters;


}

export { generateRandomLetters };