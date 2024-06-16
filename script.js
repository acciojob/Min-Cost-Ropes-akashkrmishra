let cost=0;
function mincost(arr)
{ 
	let m=arr.length;
//write your code here
// return the min cost
	for(let i=0;i<m-1;i++){
		 arr.sort((a,b) => a-b);
	cost+=arr[0]+arr[1];
	arr.splice(0,2,cost);
	}
	return cost;
}

module.exports=mincost;
