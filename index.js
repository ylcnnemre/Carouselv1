const images=document.querySelectorAll(".carousel-item")
const numbers=document.querySelectorAll(".number")
console.log(images)
var count=0
document.querySelector(".next").addEventListener("click",function(){
    
    if(count==images.length-1)
    {
        images[count].classList.remove("carousel-active")
        
        images[0].classList.add("carousel-active")
       
        count=0
    }
    else{
        images[count].classList.remove("carousel-active")
        images[count+1].classList.add("carousel-active")
        count ++;
    }
   
    
   
   
    console.log(count)
    console.log(images.length)
})
document.querySelector(".prev").addEventListener("click",function(){
    if(count==0)
    {
        images[count].classList.remove("carousel-active")
        
        images[images.length-1].classList.add("carousel-active")
       
        count=3
    }
    else{
        images[count].classList.remove("carousel-active")
        images[count-1].classList.add("carousel-active")
        count --;
    }
   
})

numbers.forEach((value,index)=>{
    value.addEventListener("mouseover",function(){
       images.forEach((val)=>{
           val.classList.remove("carousel-active")
       })
       images[index].classList.add("carousel-active")
       count=index
    })
})