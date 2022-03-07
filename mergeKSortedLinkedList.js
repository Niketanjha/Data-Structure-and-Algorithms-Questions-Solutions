//Link: https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1#
// Given K sorted linked lists of different sizes. The task is to merge them in such a way that after merging they will be a single sorted linked list.
// Input:
// K = 4
// value = {{1,2,3},{4 5},{5 6},{7,8}}
// Output: 1 2 3 4 5 5 6 7 8
// Explanation:
// The test case has 4 sorted linked 
// list of size 3, 2, 2, 2
// 1st    list     1 -> 2-> 3
// 2nd   list      4->5
// 3rd    list      5->6
// 4th    list      7->8
// The merged list will be
// 1->2->3->4->5->5->6->7->8.

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Solution {
    //Function to merge K sorted linked list.
    mergeKLists(arr, K){
        //your code here
        const arrayOfData = []; 
        arr.forEach((head)=>{
            while(head!==null){
                arrayOfData.push(head.data);
                head=head.next;
            }
        })
    arrayOfData.sort((a,b)=>a-b);
        
    const arrayOfNodes = arrayOfData.map((data)=>{
        return new Node(data)
    })
    arrayOfNodes.forEach((node,index)=>{
        node.next=arrayOfNodes[index+1];
    })
    arrayOfNodes[arrayOfNodes.length-1].next=null;
    
    // console.log(arrayOfNodes);
        return arrayOfNodes[0];
    }
}
