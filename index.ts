function fizzBuzz() : void {
    let number : number = 1;
    while (number <= 100) {
        let res : string = ""
        if (number % 3 === 0) {
            res += "Fizz"
        }  

        if (number % 13 == 0) {
            res += "Fezz"
        }

        if (number % 5 == 0) {
            res += "Buzz"
        }

        if (number % 7 == 0) {
            res += "Bang"
        }

        if (number % 11 == 0) {
            if (number % 13 == 0) {
                res = "FezzBong"
            } else {
                res = "Bong"
            }
        }

        if (res === "") {
            res = String(number)
        }
        
        console.log(res)
        number++;
    } 

}

fizzBuzz();