/* var removeDuplicates = function(nums) {
       
    var  dups = nums.filter((item, i) =>  nums.indexOf(item)  ===  i);
    return dups;
};





var strStr = function(haystack, needle) {
var out = [];
 var re  = new RegExp(needle, 'gi');
 while(re.exec(haystack)){
       out.push(re.lastIndex)
 }
    
    
   return out
    
};
console.log(strStr("hellollalladddlld jj ll", "ll")) */

function build_Palindrome(new_str) {
  var flag;
  for (var i = new_str.length; ; i++) {
    flag = true;
    console.log(i);
    for (var j = 0; j < i - j - 1; j++) {
      console.log(new_str[j], i - j - 1, new_str[i - j - 1]);
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (var j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str;
    }
  }
}

console.log(build_Palindrome("abcddc"));
console.log(build_Palindrome("abcdda"));

function maxarea(height) {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (j > i) {
    let a = height[i];
    let b = height[j];
    const area = Math.min(height[i], height[j]) * (j - i);

    max = area > max ? max : area;
    if (b > a) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}

console.log(maxarea([1,8,6,2,5,4,8,3,7]));





// static void maxSubArraySum(int a[], int size) 
// { 
//     int max_so_far = Integer.MIN_VALUE, 
//     max_ending_here = 0,start = 0, 
//     end = 0, s = 0; 

//     for (int i = 0; i < size; i++)  
//     { 
//         max_ending_here += a[i]; 

//         if (max_so_far < max_ending_here)  
//         { 
//             max_so_far = max_ending_here; 
//             start = s; 
//             end = i; 
//         } 

//         if (max_ending_here < 0)  
//         { 
//             max_ending_here = 0; 
//             s = i + 1; 
//         } 
//     } 
//     System.out.println("Maximum contiguous sum is " 
//                        + max_so_far); 
//     System.out.println("Starting index " + start); 
//     System.out.println("Ending index " + end); 
// } 


const sum = arr => arr.reduce((a,b) => a + b)

function cal(arr, x) {
  const rs = []
  for (let i = 0; i< arr.length; i++) {
    const tmp = []
    for (let j=i; j<arr.length; j++ ) {
      tmp.push(arr[j])
      if(sum(tmp) === x) rs.push([...tmp])
    }
  }
  return rs
}


console.log(cal([1, 11, 100, 1, 0, 200, 3, 2, 1, 280], 280)) // -> [280]
console.log(cal([2, 4, 45, 6, 0, 19], 51)); // -> [2, 4, 45] [45, 6] [45, 6, 0]
console.log(cal([1, 3, 6, 11, 1, 5, 4], 4));



for(var a = 1; a < 500; a++){
    for(var b = a; b < 1000; b++){
      var c = Math.sqrt(a * a + b * b);
      if(c > b && Number.isInteger(c) && a + b + c == 1000){
        console.log(a * b * c);
      }
    }
  }