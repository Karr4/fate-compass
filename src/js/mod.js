export const mod = (number) => {
    if (number > 22) {
        let newNumber = 0;
        number = number.toString().split("");

        for (let num of number) 
            newNumber += parseInt(num);
        
        return mod(newNumber);
    }
    return number;
}