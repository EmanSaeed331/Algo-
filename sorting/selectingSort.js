/**
 * @complexityTime (O(N^2))
 * @ComplexitySpace (O(1))
 */
let SelectingSort = (arr) =>{
    let min_index = 0 ;
    for(let i=0; i<arr.length; i++)
        {
            min_index = i ;
            for(j=i+1 ; j < arr.length ; j++) {
                if(arr[j] <arr[min_index]){
                    min_index = j;

                    swap(arr,min_index,i);
                }
            }
        }
        return arr ; 
}
let swap = (arr , xp , yp) =>{
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
console.log(SelectingSort([2,5,1,7,0]))