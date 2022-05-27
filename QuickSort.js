/**
 * @ComplexitySpace O(n)
 * @ComplexityTime O(n^2)
 * @functions ( 1-Swap , 2-Partitioning , 3-QuickSort )
 * @steps
 *  - Picks Pivot element 
 *  - partitions  the given arr around the picked pivot . 
 * @ways 
 * quickSort that pick pivot in different ways. 

    1- Always pick first element as pivot.
    2- Always pick last element as pivot (implemented below)
    3- Pick a random element as pivot.
    4- Pick median as pivot.
 */
let Swap = (arr , i , j) =>{
    let temp = arr[i];
    arr[i]   = arr[j];
    arr[j]   = temp;
}

let Partitioning = (arr , low , high) =>{
    // pivot is last element 
    let pivot = arr[high];
    let i = (low - 1) ; 
    for (let j = low ; j<=high-1;j++){
        if (arr[j] < pivot){
            i++;
            Swap(arr, i , j);
        }
    }
    Swap(arr, i+1 , high);
    return (i +1);

}
let quickSort = (arr , low , high ) =>{
    if (low < high) {
        let pi =Partitioning(arr , low , high) ; 
        quickSort(arr , low , pi-1) ; 
        quickSort (arr , pi+1 , high); 
    }
    return arr
}

let a = [2,4,0,1,3,55,1]
console.log(quickSort(a, 0 , a.length-1 ))