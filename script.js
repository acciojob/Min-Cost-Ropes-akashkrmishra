// let cost=0;
// function mincost(arr)
// { 

// //write your code here
// // return the min cost
// 	for(let i=0;arr.length>1;i++){
// 		 arr.sort((a,b) => a-b);
// 	cost+=arr[0]+arr[1];
// 	arr.splice(0,2,cost);
// 	}
// 	return cost;
// }

// module.exports=mincost;



function mincost(arr) {
    let cost = 0;
    arr.sort((a, b) => a - b);
    while (arr.length > 1) {
        const newRope = arr.shift() + arr.shift();
        cost += newRope;
        arr.push(newRope);
        arr.sort((a, b) => a - b);
    }
    return cost;
}
console.log(mincost([7,3,5,9,4])); 
console.log(mincost([1, 2, 3, 4, 5])); 
module.exports = mincost;

