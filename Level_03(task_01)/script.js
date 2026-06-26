
const currentImage = document.getElementById("currentImage");

const thumbnails = document.querySelectorAll(".thumb");

let index = 0;

function showImage(i){

    currentImage.src = thumbnails[i].src;

    thumbnails.forEach(img=>{
        img.classList.remove("active");
    });

    thumbnails[i].classList.add("active");

    index = i;
}

thumbnails.forEach((img,i)=>{

    img.addEventListener("click",()=>{

        showImage(i);

    });

});

setInterval(()=>{

    index++;

    if(index>=thumbnails.length){
        index=0;
    }

    showImage(index);

},3000);