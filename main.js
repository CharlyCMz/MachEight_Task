//====================================================================================
//                              MachEight Entry Lvl Test
//                                Charly Correa Muñoz
//====================================================================================

/*The task is to write a function that finds pairs of integers from a list that sum to a 
given value. The function will take as input the list of numbers as well as the target sum*/

const refValue= 12; //Set point where the addition of numbers are correct
const values=[1, 9, 5, 0, 20, -4, 12, 16, 7] //Sample values from the test

//====================================================================================

function bynarySearch(values, refValue) {
    console.time('BinarySearch')
    values.sort((a, b) => a-b); // It sorts the array/list as a requirement ASC
    //It steps into the extreme sides of the array/list
    let startPoint = 0;
    let endPoint = values.length-1;
    let couples = []; //Resulr array to storage coples and compare to tests
    //Loop looking for the addition of those values when equals to the reference
    while (startPoint < endPoint) { //loop until the available numbers are not repeated in the search
        //evaluate that the current values are valid operators
        if (values[startPoint] + values[endPoint] == refValue) {
            console.log(`${values[startPoint]} + ${values[endPoint]}`);
            let pair = [values[startPoint], values[endPoint]]
            couples.push(pair); //pushes the current valid response
        }
        //Then, it evaluates if it has to move the "startPoint" or the "endPoint" with the sum result
        if (values[startPoint] + values[endPoint] > refValue) {
            endPoint--;
        } else {
            startPoint++
        }
    }
    //Manage the case when the loop stops and can't find a valid result
    if (couples.length==0) {
        console.log(`Valid operators were not found`);
    }
    console.timeEnd('BinarySearch')
    return couples;
}
//Call to execute the function
bynarySearch(values, refValue);

//Export the function to use it at the test file
module.exports = bynarySearch;
//=====================================================================================