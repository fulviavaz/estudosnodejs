// clearInterval irá cancelar um setInterval Registrado

const timeOut = 1000 
const cheking = () => console.log('cheking!')

let interval = setInterval(cheking, timeOut)
setTimeout(() =>clearInterval(interval), 4000)