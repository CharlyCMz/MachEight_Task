//====================================================================================
//                              MachEight Entry Lvl Test
//                                Charly Correa Muñoz
//====================================================================================

/*The task is to write a function that finds pairs of integers from a list that sum to a 
given value. The function will take as input the list of numbers as well as the target sum*/

const refValue= 12; //Set point where the addition of numbers are correct
const values=[1,9,5,0,20,-4,12,16,7] //Sample values from the test

function findingPairs(values, refValue) {
    console.time('function');
    let i=0; //index to map the list as pivot
    let j=0; //index to map the list as floating
    //Im trying to use a for cicle centred on "i" to map each number on the array/list an then
    //use a do/while which makes the comparison of "i" to it's next "j"
    for (i; i < values.length; i++) {
        //using the strategy "error first", this is the edge case for the last digit of the array
        //it evaluates two conditions, being the last number and the case this number is equal to
        //the refference value given by the "user".
        if (i==values.length-1 && values[i]==refValue) {
            console.log(`${values[i]} it's equal to the addition by itself`);
        } else {
            do {
                //Here is where the "j" index start making pairs with the static "i"
                if(values[i]+values[j+1]==refValue) {
                    //Ths conditional makes the console printing when the pair fulfill the
                    //condition of interest
                    console.log(`${values[i]} + ${values[j+1]} = ${values[i]+values[j+1]}`);
                }
                j++;
            } while (j<values.length-1); //Stops before last number 'cause it's edge case
            //Here its relocated the "j" index to start the next for(i) cicle
            j=i+1;
        }
    }
    console.timeEnd('function');
}
//Call to execute the function
findingPairs(values,refValue);
//=========================================================================================