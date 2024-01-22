function genNumber(maxInt, maxFract) {
    let intPart = Math.random();
    intPart = Math.trunc(intPart * maxInt);
    
    let fractPart = Math.random();
    fractPart = Math.trunc(fractPart * maxFract);
    let count = maxFract;
    let countFract = 0;
    while (count > 0) {
        count = Math.trunc(count / 10);
        countFract++;
    }
    
    return intPart + fractPart / (Math.pow(10, countFract));
}

module.exports = { genNumber };