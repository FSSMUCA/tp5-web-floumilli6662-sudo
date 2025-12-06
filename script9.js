function factorielle(n) {
    if (n === 0) {
        return 1;  
    } else {
        return n * factorielle(n - 1);  
    }
}

let resultat = factorielle(5);
console.log("Factorielle de 5 :", resultat); 
