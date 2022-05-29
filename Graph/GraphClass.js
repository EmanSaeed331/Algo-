/**
 * @Functions 
 *  - addVertex(v)
 *  - addEdge(V,W) 
 *  - PrintGraph()
 *  - bfs  (v) 
 *  - dfs  (v)
 */

class Graph { 
    constructor (noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map ()
        
    }
    // Adding of Vertex
    addVertex(v){
        this.AdjList.set(v,[]);
    }
    // Adding of Edge  ( V , W ) are vertex 
    addEdge(v , w ){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);

    }

    printGraph(){
        // vertices as map key 
        var get_Keys = this.AdjList.keys();
        // i represents vertex
        for (var i of get_Keys){
            var get_values = this.AdjList.get(i);
            var conc = "";

            for (var j of get_values)
                conc +=j +" ";
            console.log(i + " -> " + conc);

        }
        
    }
    // BFS 
    bfs(startingNode) {
    
    // create a visited object
    var visited = {};
 
    // Create an object for queue
    var q = new Queue();
 
    // add the starting node to the queue
    visited[startingNode] = true;
    q.enqueue(startingNode);
 
    // loop until queue is empty
    while (!q.isEmpty()) {
        // get the element from the queue
        var getQueueElement = q.dequeue();
 
        // passing the current vertex to callback function
        console.log(getQueueElement);
 
        // get the adjacent list for current vertex
        var get_List = this.AdjList.get(getQueueElement);
 
        // loop through the list and add the element to the
        // queue if it is not processed yet
        for (var i in get_List) {
            var neigh = get_List[i];
 
            if (!visited[neigh]) {
                visited[neigh] = true;
                q.enqueue(neigh);
            }
        }
    }
}
// DFS 

// Main DFS method
dfs(startingNode)
{
 
    var visited = {};
 
    this.DFSUtil(startingNode, visited);
}
 
// Recursive function which process and explore
// all the adjacent vertex of the vertex with which it is called
DFSUtil(vert, visited)
{
    visited[vert] = true;
    console.log(vert);
 
    var get_neighbours = this.AdjList.get(vert);
 
    for (var i in get_neighbours) {
        var get_elem = get_neighbours[i];
        if (!visited[get_elem])
            this.DFSUtil(get_elem, visited);
    }
}
}
 // Class Queue 

// Queue class
class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }
                  
    // Functions to be implemented
    // enqueue(item)
    // dequeue()
    // front()
    // isEmpty()
    // printQueue()
    
        // enqueue function
        enqueue(element)
        {    
            // adding element to the queue
            this.items.push(element);
        }
        
        // dequeue function
        dequeue()
        {
            // removing element from the queue
            // returns underflow when called 
            // on empty queue
            if(this.isEmpty())
                return "Underflow";
            return this.items.shift();
        }
        
        // front function
        front()
        {
            // returns the Front element of 
            // the queue without removing it.
            if(this.isEmpty())
                return "No elements in Queue";
            return this.items[0];
        }
        
        // isEmpty function
        isEmpty()
        {
            // return true if the queue is empty.
            return this.items.length == 0;
        }
        
        // printQueue function
        printQueue()
        {
            var str = "";
            for(var i = 0; i < this.items.length; i++)
                str += this.items[i] +" ";
            return str;
        }
}  

let g = new Graph(6);
let vertices = ['A','B','C','D','E','F']
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// adding vertices
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
g.printGraph();
g.bfs('A')
console.log(`##########################`)
g.dfs('A')