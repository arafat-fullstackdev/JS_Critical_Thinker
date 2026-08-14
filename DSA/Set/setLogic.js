// ? union()  [to take all elements]
const setA = new Set(["A", "B", "C", "D", "F"]);
const setB = new Set(["B", "C", "E", "G"]);
const setC = setA.union(setB);
//console.log("set A", setA);
//console.log("set B", setB);
console.log("set C", setC);
// ! difference()
const setD = setA.difference(setB);
console.log("Difference set", setD);
// * intersection()  [to take common elements]
const setE = setA.intersection(setB);
console.log("intersection", setE);
// ? isDisjointFrom()
const setF = setA.isDisjointFrom(setB);
console.log('Disjoin', setF)

// * isSubsetOf()
const setG = setA.isSubsetOf(setB);
console.log("Sub set", setG);

// ! isSupersetOf()
const setH = setA.isSupersetOf(setB);
console.log('Super set', setH)
    // * symmetricDifference()
const setI = setA.symmetricDifference(setB);
console.log("Symmetric Difference", setI);