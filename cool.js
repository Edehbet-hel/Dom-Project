function getRandomColor(){
    const letters='0123456789ABCDEF';
    let color='#';
    for(let i=0;i < 6; i++){
        color  +=letters[Math.floor(Math.random()*16)];
    }
    return color;
}



const colorBox=document.getElementById("color-box")
const btn=document.getElementById("change-color-btn")

btn.addEventListener('click', () => {
    colorBox.style.backgroundColor=getRandomColor();

});