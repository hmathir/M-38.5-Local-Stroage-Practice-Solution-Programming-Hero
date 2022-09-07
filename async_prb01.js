// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,

console.log(1);
console.log(2);
setTimeout(()=>{
    console.log(3)
},3500);
console.log(4);
console.log(5);