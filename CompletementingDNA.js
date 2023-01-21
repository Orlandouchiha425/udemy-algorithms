function dnaComplement(s) {
    // Write your code here
let complements = {
    A: "T",
    T: "A",
    C:'G',
    G:"C"
}
let reversed = s.split('').reverse().map(c => complements[c]).join('')
return reversed
}

console.log(dnaComplement('GTCAG'))