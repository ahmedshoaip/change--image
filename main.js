let img= document.getElementById("img");
let i=0;
let arr=["image/2.jpg",'image/3.jpg','image/4.jpg','image/5.jpg'];

function change(){
    img.setAttribute("src",arr[i]);
    if(i == arr.length-1){
        i=0;
    }else{
        i++;

    }
    setTimeout(function(){
change()
    },2000);
}
change()