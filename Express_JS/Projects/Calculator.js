let item = document.getElementsByClassName('griditems');
let btnBox =document.getElementsByClassName('btnBox')
let input = document.getElementById('input');
let elements = ['AC',"DEL","%","/","7",'8','9','*','4','5','6','-','1','2','3','+','0','.','='];

for(let i = 0; i<19;i++){
    let child = document.createElement('div');
    child.className = "num griditems";
    if(i % 4 == 3)child.style.background = "#FF9F0A";
    if(i<3) {child.style.cssText += "background:#A0A0A0;color : black";}
    if(i==16){child.style.cssText += " grid-column:1 / span 2;width :100px;border-radius:30px";}
    child.innerHTML = elements[i];
    child.addEventListener('click', ()=>{ clickInput(elements[i]);
        child.style.scale = '.9';
        setTimeout(()=>{child.style.scale = '1';},100)
    })
    btnBox[0].appendChild(child)
}


function clickInput(val){
    input.focus();
    if(val == "="){
        input.value = eval(input.value)
    }else if(val == "AC"){
    input.value = "";3
    }else if(val == 'DEL'){
        let str = input.value.substring(0,input.value.length-1);
        input.value = str;
    }
    else{
        input.value += val;
    }
}

document.addEventListener("keydown",(e)=>{
    input.focus();
    if(e.key == "=" || e.key == "Enter"){
        input.value = eval(input.value)
    }else if(e.key == "Backspace"){
        let str = input.value.substring(0,input.value.length-1);
        input.value = str;
    }else if(elements.includes(e.key)){
        input.value += e.key;
    }
})