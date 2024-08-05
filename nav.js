let menu=document.getElementById("menu")
let Status="hide"
function toggle() {
    if(Status==="hide"){
        menu.classList.add("show")
        Status="show"
    }else{
        menu.classList.remove("show")
        Status="hide"
    }
}

let pics=document.querySelector("#picss")
let arrveiw=["./media/cameraa .jpg","./media/veiw1.jpg","./media/veiw2.jpg","./media/veiw3.jpg","./media/veiw4.jpg","./media/veiw5.jpg","./media/veiw6.jpg","./media/veiw7.jpg","./media/veiw8.jpg",]
// console.log(arrveiw)
let curentindex=0
function next(){
curentindex++;
if(curentindex>=arrveiw.length){
    curentindex=0
}
pics.src=arrveiw[curentindex]
}
function previous(){
curentindex--;
if(curentindex<0){
    curentindex=arrveiw.length-1
}
pics.src=arrveiw[curentindex]
}
setInterval(() => {
    next() 
}, 3000);
