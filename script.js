// // 

// function add(a){
//     return function(b){
//         if(b) return add(a+b);
//         return a
//     }
// }
// console.log(add(2)(3)(5)())

// const cal = {
//     rerult :[],
//     add: function(a){
//         this.rerult+=a;
//         return this
//     }


// }
// console.log(cal.add(10));

var a = [0,1,2,3,4,5,6];
console.log(a.slice(0,1, 'AA'));
console.log(a);
a.splice(-1, "BB");
console.log(a);


const pie = document.querySelector('.pieChart');

document.querySelector('#inputhandler').addEventListener('input', (e) =>{
    pie.style = `--percentage: ${e.target.value}%`
})



function chekpanaGram(str) {
    
    let a = 'abcedefghijklmnopqrstuvwxyz';
    for(let w of a ){
        if (!str.includes(w)) {
            return false;
         }
    }
    return true;

}

console.log(chekpanaGram('abcdfghijklmnopqrstuvwxyz'))