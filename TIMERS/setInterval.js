// SetInterval vai rodar uma função N Vezes
// depois de X milissegundos

const timeOut = 1000 
const cheking = () => console.log('cheking!')

setInterval(cheking, timeOut)