function fiba(n) {
    fq =[0, 1]
    if(n <= 1 ){console.log(fq[0])}
    if (n == 2){console.log(...fq)}

    if (n > 2){
        for (let i = 1; i <= (n-2); i++) {
            fq.push(fq[fq.length-1] + fq[fq.length-2])
        }
        console.log(...fq)
    }
}

fiba(1)
fiba(2)
fiba(10)