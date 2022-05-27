/**
 * @ComplexityTime  O(n^2)
 * @ComplexitySpace O(1)
 * @functions  1- (insertionSort ) 
 * @param {arr,n}  
 */
/**
 * @approach1 (iteration)
 */

let insertionSort = (arr, n) =>{
    let key , j ; 
    for (let i=1; i < n ; i++){
        key = arr[i] ; 
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[ j + 1 ] = arr[j] ; 
            j = j - 1; 
        }
        arr[ j + 1 ] = key ;
     

    }
    return arr;

}
/**
 * 
 * @approach2 (recursive iteration )
 */
let insertionSortRec  = (arr , n) =>{ 
    // Base Case 
    if (n <=1) return ; 
    // Recursive Case 
    insertionSortRec( arr , n-1 );
    let last = arr[n-1];
    let j = n-2;
    while(j >= 0 && arr[j] > last ){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = last;
    return arr
} 
console.log(insertionSort([2,1,0,3],4))
console.log(insertionSortRec([0,1,4,1,3,0],6))