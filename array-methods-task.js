let arr=[4,2,7,1,9]
console.log(arr.sort());
console.log(arr.reverse());


let arr1=["banana","apple","cherry","date"]
console.log(arr1.sort());
console.log(arr1.reverse());


let arr2=[
    {name:"john",age:25},
    {name:"Alice",age:30},
    {name:"Bob",age:20}
]
console.log(arr2.sort((a,b)=>a.age-b.age));




let arr3=[10,20,30,40,50];
let k=arr3.find((ele)=>{
    return ele>25
})
console.log(k);


let arr4=["apple","banana","orange","grape"];
let m="b";
let l=arr4.find((ele)=>{
    return ele.startsWith(m);
})
console.log(l);


let arr5=[15,25,35,45,55];
let n=arr5.findIndex((ele,index)=>{
    if(ele%10==0)
    return index;
})
console.log(n);




let arr6=[3,7,8,12,15];
let p=arr6.some((ele)=>{
    if(ele%2==0)
    return ele;
})
console.log(p);


let arr7=[
    {name:"John",agr:25},
    {name:"Alice",age:30},
    {name:"Bob",age:20}
]
let q=arr7.some((ele)=>{
    if(ele.age>18)
    return ele;
})
console.log(q);


let arr8=["apple","banana","grape","kiwi"];
let a="b";
let x=arr8.some((ele)=>{
    return ele.startsWith(m);
})
console.log(a);


let arr9=[5,10,15,20,25];
console.log(arr9.reduce((a,b)=>a+b));


let arr10=["Hello", " ", "world","!"]
console.log(arr10.reduce((a,b)=>a+b));


let arr11=[[1,2],[3,4],[5,6]];
let c=arr11.reduce((a,b)=>{
    return a.concat(b);
})
console.log(c);
