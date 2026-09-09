function fizzBuzz() : void {
    let number : number = 1;
    while (number <= 100) {
        let res: string[] = [];

        if (number % 3 === 0) {
            res.push("Fizz");
        }  

        if (number % 13 == 0) {
            res.push("Fezz");
        }

        if (number % 5 == 0) {
            res.push("Buzz");
        }

        if (number % 7 == 0) {
            res.push("Bang");
        }

        if (number % 11 == 0) {
            if (number % 13 == 0) {
                res = ["Fezz", "Bong"];
            } else {
                res = ["Bong"];
            }
        }


        if (number % 17 == 0) {
            res.reverse();
        }

        if (res.length === 0) {
            res.push(String(number));
        }
        
        const final_res: string = res.join('');


        console.log(final_res);
        number++;
    } 

}

fizzBuzz();