function *fun(){
    var i=1;
    while(true){
        yield i++;
    }
}

var gen = fun();
for(var i=0;i<8;i++){
    console.log(gen.next().value);
}






















// a = {};

// a[Symbol.iterator] = function(){
//     let i=0;
//     done = false;
//     return{
//         next(){
//             i+=1;
//             if(i==5){done=true;}
//             return{value:i,done:done};
//         }
//     };
// }

// for(const i of a){
//     console.log(i);
// }
















// function getNumbers(){
//     let i=0;
//     return{
//         next : function(){
//             i+=1;
//             if(i==3){
//                 return{value:i,done:true};
//             }
//             return {value:i,done:false};
//         }
//     };
// }

// const a =getNumbers();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


















// let str1 = "abcdef";
// let str2 = "ABCGHIJ";
// let len1 = str1.length;
// let len2 = str2.length;

// function lengthA()
// {
//     document.getElementById('para').innerHTML=len1;
// }

// function lengthB()
// {
//     document.getElementById('para').innerHTML=len2;
// }

// function concatAB()
// {
//     document.getElementById('para').innerHTML=str1.concat(str2);
// }
// function upperA()
// {
//     document.getElementById('para').innerHTML=str1.toUpperCase();
// }
// function lowerB()
// {
//     document.getElementById('para').innerHTML=str2.toLowerCase();
// }

