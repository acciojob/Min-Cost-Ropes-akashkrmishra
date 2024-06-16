let cost=0;
function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort((a,b) => a-b);
	for(let i=0;i<arr.length-1;i++){
	cost+=arr[0]+arr[1];
	arr.splice(0,2,cost);
	}
	return cost;
}

module.exports=mincost;
