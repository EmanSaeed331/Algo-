/**
 * @functions swap() , bubbleSort()
 * @Complexity Best -> O(N) , Average O(n^2) , worst O(n^2)
 * */ 
let swap = (arr , xp , yp)=>{
    var temp = arr[xp]
    arr[xp]  = arr[yp] 
    arr[yp]  = temp 
 }
/**
 * @approach1 (iterations)
 */
 let BubbleSort =(arr , n) => {
    for(let i =0 ; i <n ; i++) {
        for(let j =0 ; j< n-i-1 ; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr 
 }
 /**
  * @approach2 (recursive) 
  * 
  */
 let bubbleSortRec = (arr , n) =>{
     // base case 
     if (n == 1){
         return ;
     }
     for (let i = 0 ; i<n-1 ; i++){
         if(arr[i] > arr[i+1]){
             // swap arr[i] , arr[i+1]
             let temp = arr[i];
             arr[i]   = arr[i+1];
             arr[i+1] = temp; 
         }
     }
     bubbleSortRec(arr, n-1)
     return arr ; 
 }
 console.log(BubbleSort([15,1,5,1],4))
 console.log(bubbleSortRec([41,4,1,5,1],5))