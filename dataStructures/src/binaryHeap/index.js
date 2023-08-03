/* 
    Binary Heap : 
        It is similar to binary search tree but with different rules
        -  In maxBinaryHeap, parent Nodes are always larger than child node 
        -  In minBinaryHeap, parent node are always smaller then the child nodes

    Max Binary Heap :
        - Each parent has at most 2 child nodes 
        - The values of each parent node is always greater than its child node
        - In max binary heap the parent is greater than the children, but there is no guarantee b/w sibling nodes
        - A binary heap is as compact as possible. All the children of each node  are as full as they can be and the left 
          children are filled out first

          Value of parent is always greater than children
                                            100
                                19                      36
                        17              3           25       1
                    2       7

        Why do we need this ? : 
         - Binary heaps are used to implement Priority Queue
         - They are also used quite a bit with graphs traversal algorithm

         Relationship: 
                                        100
                            19                          36
                    17              12            25           5
                9       15      6       11     13     8     1       4

                100 | 19 | 36 | 17 | 12 | 25 | 5 | 9 | 15 | 6 | 11 | 13 | 8 | 1 | 4

            100-p | 19-l-c | 36-r-c
            19-p | 17-l-c | 12-r-c
            36-p | 25-;-c | 5-r-c 
            ...
        Formula for child from parent 
            for any index of array n...
            > Left child is stored @ -> 2n+1
            > right child is stored @ -> 2n+2
        Formula from parent from child
            for any index of array n...
            > parent -> Math.floor(n-1/2) 

*/
