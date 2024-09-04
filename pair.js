function isPaire(nombre) {
    if (nombre === 2 || nombre ===3 ) {
        return true;
    }
    
    if (nombre === 1 || nombre % 2 === 0) {
        return false;
    }
    
    for (let i = 3; i< Math.sqrt(nombre); i += 2) {
        if(nombre % i === 0){
            return false;
        }
    }
}

console.log(isPaire(2))