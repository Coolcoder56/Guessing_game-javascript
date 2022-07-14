const levelOrder = function(root){
    let q = root; //Assigning q to root 
    ans =[]  //result variable
    while(q[0]){
    let qlen = q.length;
    row = [] //traversing through row
    for(let i =0;i<qlen;i++){
            let curr = q.shift();    //shifting current value
            row.push(curr.val())
            if(curr.left) q.push(curr.left)         //pushing left and right value in row
            if(curr.right) q.push(curr.right)        
        }
    ans.push(row)
    }
    return console.log(ans);
};


//Driver code

levelOrder([3,9,20,null,null,15,7])