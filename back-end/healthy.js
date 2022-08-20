
const healthyCheck = (fiber, protein, added_sugar) => {
    let is_healthy = false

    if (protein > 5 || fiber > 5) {//this condition is checking for protein and fiber to be > 5
        added_sugar < 5 ? is_healthy = true : is_healthy = false;//this is only checking if sugar is < 5
        //if sugar is < 5 then is_healthy should return true else it should return false
        //but will this alone return anything. 
    }
    return is_healthy
}
module.export = healthyCheck