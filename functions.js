function createSketchPad(n,cont){
    cont.style.cssText = `grid-template-columns:repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr)`;  
    for(let i=0; i<n*n; i++){
    const div = document.createElement('div');
    div.addEventListener('mouseover', function (e){
        e.target.style.backgroundColor = `rgba(${randomColor()},${randomColor()},${randomColor()},1)`;
    });
    div.classList.add('square');
    cont.appendChild(div);
    }
}

function randomColor(){
    return Math.floor(Math.random()*255);
}

function deleteSketchPad(sktpd){
    while(sktpd.firstChild){
        sktpd.removeChild(sktpd.firstChild);
    }
}

function clrAndCreate(sqrs,n,cont){
    sqrs.forEach((div)=>{
        div.style.backgroundColor = 'white';
    });
    do{
        n = parseInt(prompt("Enter how many squares per side you want for the new Sketchpad (under 70): "));
        if(n>70){
            alert("The number must be 70 or less!");
        }
        if(Number(n)!==n){
            alert("You must introduce a number!");
        }
    }while(n>70 || Number(n)!==n);
    deleteSketchPad(cont);
    createSketchPad(n,cont);
}