// TODO: Add min offset
// TODO: Add negative offset

function OCSort (arr) {
    var inArray = arr.slice();
    var outArray = [];
    var countArray = [0];
    var cumSumArray = [0];
    var max = 0;
    for (i = 0; i < inArray.length; i++) {
        if (inArray[i] > max) {
            max = inArray[i];
        }
    }
    for (var i = 0; i < max; i++) {
        countArray.push(0);
        cumSumArray.push(0);
    }
    for (var i = 0; i < inArray.length; i++) {
        countArray[inArray[i]]++;
        outArray.push(0);
    }
    for (var i = 1; i < countArray.length; i++) {
        cumSumArray[i] = cumSumArray[i-1] + countArray[i];
    }
    console.log("inArray; "+inArray);
    console.log("countArray; "+countArray);
    console.log("cumSumArray; "+cumSumArray);
    console.log("outArray; "+outArray+"\n\n");
    for (var i = 0; i < inArray.length; i++) {
        x = inArray[i];
        outArray[(cumSumArray[x]-countArray[x])] = x;
        countArray[x]--;
        console.log("iteration: "+i);
        console.log("inArray; "+inArray);
        console.log("countArray; "+countArray);
        console.log("cumSumArray; "+cumSumArray);
        console.log("outArray; "+outArray+"\n\n");
    }
    console.log("input length: "+inArray.length);
    return outArray;
}
