/**
 * 
 * @Complexity O(N)
 */

let LinearSearch =  (arr , target  ) =>{
    for (let i =0 ; i < arr.length ; i++){
        if (arr[i] == target){
            return i 
        }
    }
    return -1
}
// Failure Case 
console.log(LinearSearch([1,2,4,6,8] , 7))

// Success case
console.log(LinearSearch([1,2,4,0,8] , 1))
