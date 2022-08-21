// console.log("Hello world");

// list1 = [1,2,4], list2 = [1,3,4]
// var mergeTwoLists = function(list1, list2) {
//     return  list1.concat(list2).sort();
    
// };


// console.log(mergeTwoLists(list1,list2))

// ####################################################
// //console.log(isValid("{()}(())"));  // true
//console.log(isValid("{(}(())"));  // false
// ########################################################
// Remove the dulpcates

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// console.log([...new Set(nums)]);
// const removeDuplicates = function(nums){
//     var out = nums.filter(function(i, idx){
//         return nums.indexOf(i) == idx;
//     })
//     return out;

// }
// console.log(removeDuplicates(nums));



var haystack = "hello",  needle = "ll";

// function strstr(a, b){
//     console.log(a.indexOf(b));

// }
// function strstr(haystack, needle, bool) {
//     var pos = 0;

//     haystack += "";
//     pos = haystack.indexOf(needle); if (pos == -1) {
//         return false;
//     } else {
//         if (bool) {
//             return haystack.substr(0, pos);
//         } else {
//             return haystack.slice(pos);
//         }
//     }
// }
// console.log(strstr(haystack, needle, false));
// var array = [1,2,3,4];

// array.push(array.pop()+1 )
// console.log(array);


// const plusOne = function(a){

// }


// var intersect = function(nums1, nums2) {
    
//     return nums1.filter(x => nums2.includes(x));
// };

// let union = [...new Set([...[1,2,2,1], ...[2]])];

// console.log(union);



// var isPowerOfThree = function(n) {
//     if(n == 0 || n==1) {
//         return false
//     }
//     return n%3 == 0
// };


// var moveZeroes = function(nums) {
//     let output = [];
//     let index = 0;
//     for(var i=0;i<nums.length;i++){
//         if(nums[i]!=0){
//             output[index]=nums[i];
//            index++;
//         }else {
//             output.push(0);
//         }
//     }
//     return output;
// };

// console.log(moveZeroes([0,1,0,3,12]));

// console.log(isPowerOfThree(45));
// var missingNumber = function(nums) {
//     let len = nums.length+1;
//     var total = Math.floor(len*(len+1)/2);
//     var arrayToatl = nums.reduce((item, val) =>  item + val);
//     console.log(total-arrayToatl);

    
// };
// missingNumber([1,2,3,5]);





//two sum

var twosum = function(nums, tar){
    const indices = {};
    for(let i=0; i < nums.length; i++){
        const  co = tar-nums[i];
        console.log(co);
        if(co in indices){
            return [indices[co], i]
        }

        indices[nums[i]] = index

    }

}

console.log(twosum([2,7,11,15], 9));


// var mergeTwoLists = function(list1, list2) {
//     return [...list1, ...list2].sort()
// };

// console.log(mergeTwoLists([1,3,4], [1,2,3]))


// function circleofSol(n) {

//     let a = Array(n).fill(1).map((n,i) => n+i);
//     let death = []
//     while(a.length !== 1) {
//      for(let i=1; i < 2; i++){
//             a.push(a.shift());
//             death.push(a.shift())
            
//      }
     
//     }
//     return a[0]
     
//     }
    
//     console.log(circleofSol(100));
    
    
//     function josIterative(n, k) {
//     let queue = [];
//     for (let i = 1; i <= n; i++) queue.push(i);
    
//     let deathOrder = [];
    
//     while (queue.length !== 1) {
//         for (let skip = 1; skip < k; skip++) {
//            queue.push(queue.shift());
          
//           deathOrder.push(queue.shift());
//         }
       
//     }
    
    
//     return queue[0]; //survivor
//     }
    
//     console.log(josIterative(100, 2) + " is survivor");


// var coinChange = function(coins, amount) {
//     var dp = Array(amount + 1).fill(amount + 1);
   
  
//     if (amount < 0) return -1;
//     if (amount === 0) return 0;
  
//     dp[0] = 0;
//    console.log(dp);
//     for (var i = 1; i <= amount; i++) {
//       for (var j = 0; j < coins.length; j++) {
//         if (i >= coins[j]) {
//           dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
//         }
//       }
//     }
  
//     return dp[amount] > amount ? -1 : dp[amount];
//   };
  
  
//   console.log(coinChange([1,2,5], 11))