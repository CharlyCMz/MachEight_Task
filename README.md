# **MachEight - Entry Lvl Test**

## **The Task**
Writing a function that finds pairs of integers from a list that sum to a 
given value. The function will take as input the list of numbers as well as the target sum.

You can assume that all input values are integers. You can assume that there aren't any repeated values in the list. The algorithm to find the pairs must be faster than O(n^2). All edge cases should be handled appropriately.

## **How do I solve it?**
As the efficiency its a limit condition I choos to use a Binary Search structure, which allows the process to map the array/list from two points at the same time, using a validating condition as the addition of the values. Then, if it fulfills the requierment its printed on console and if not the result its compared to the refference value, if its higher, reduce the "high" position and if its lower increase the "low" position.

### **Special Considerations**
* To use this way of solving the problem, the list will be sorted inside the function.
* As it is based on looping the positions in the array, it does *not* matter if there are repeated values, it just shows the valid pair of operators again.

## **How to Run the code?**
This algoritm was made in JavaScript and you could run it by having Node installed on your dev environment, entering this command to terminal:

    `node [name _of_the_file].js`

For this default case:

    `node main.js`

And it will run the default entry submited on the task, with its execution time.

Another way of running this code its to use the VSC extension "Code Runner" which allows you to run code by blocks, just selecting the code *(CMD+A)* and right clicking on the Run Code option that shows off.

## **Unit Testing**
Adicionally to the task, I generate three case scenarios where the function shoul have differet responses:
* Find the correct pairs
* Cant find any pairs
* Can find pairs even if repeated numbers are submited

For this section you con look at the file *"main.test.js"* where these cases are shown, and also if you want to run this test you could enter this command to terminal:

    `npm test`

**Thanks** for the attention and reading this info, feel free to write down any feedback to my e-mail or linkedIn account.