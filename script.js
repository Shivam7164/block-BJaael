let div1 = document.querySelector(".div1")
for(let i=1;i<=500;i++){
let div2 =document.createElement("div")
div2.className="box"
div1.append(div2)
div1.addEventListener("mousemove",function(){
    div2.innerText=Math.floor(Math.random() * 500);
    let color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let symbol="#"
    for(let i=1;i<=6;i++){
       let number = Math.floor(Math.random() * color.length) 
       symbol += color[number]
    }
    div2.style.backgroundColor=symbol
})
}
