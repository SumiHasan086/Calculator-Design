let input=document.querySelector(".input");
let addInput=document.querySelectorAll(".addInput");
let percent=document.querySelector(".percent");
let clear=document.querySelector(".clear");
let equal=document.querySelector("#equal");
let Delete=document.querySelector(".delete");
let addInputAction=document.querySelectorAll(".addInputAction");


addInput.forEach((singlebtn)=>{
    singlebtn.addEventListener("click",(e)=>{
        input.value+=e.target.getAttribute("data-value");
    })
})


percent.addEventListener("click",(e)=>{
   input.value=input.value/100;
})


clear.addEventListener("click",(e)=>{
    input.value="";
})


equal.addEventListener("click",(e)=>{
    input.value=eval(input.value);
})


Delete.addEventListener("click",(e)=>{
    const val=input.value.split("");
    val.pop();
    input.value=val.join("");

    //or
    //input.value=input.value.slice(0,-1);
})


//when we dont want repeated action button only.
// addInputAction.forEach((action)=>{
//     action.addEventListener("click",(e)=>{

//         if(e.target.getAttribute("data-value")!==
//         input.value[input.value.length-1]){
//             input.value+=e.target.getAttribute("data-value");
//         }
//     })
// })



//when we want to replace action button instantly without press delete button.
addInputAction.forEach((action)=>{
    action.addEventListener("click",(e)=>{
        const result=input.value.replace(/\+$|-$|\*$|=$|\/$|\.$/m,"");
        input.value=result + e.target.getAttribute("data-value");
    })
})


















