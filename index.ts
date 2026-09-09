function fizzBuzz() : void {
    let number : number = 1;
    while (number <= 100) {
        let res : string = ""
        if (number % 3 === 0) {
            res += "Fizz"
        }  

        if (number % 5 == 0) {
            res += "Buzz"
        }

        if (res === "") {
            res = String(number)
        }
        
        console.log(res)
        number++;
    } 

}

fizzBuzz();