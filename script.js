function Selecionada(selector,parent){
    if(selector instanceof HTMLElement){
        return selector;
    }

    return(parent || document).querySelectorAll(selector);
}

function CambioClase(element,className) {
    return element.classList.contains(className);
}

function radioClass(element,className){
    Selecionada("."+className).forEach((elem)=>
    elem.classList.remove(className));
    element.classList.toggle(className);
}

function tabs(nav){
    let ElementoNav=Selecionada(nav)[0];

    console.log(ElementoNav);

    ElementoNav.addEventListener("click",(e)=>{
        let target=e.target;
        if(CambioClase(target,"tab")){
            radioClass(target,"active")
        }

        let linkTab=Selecionada("."+target.id)[0];
        radioClass(linkTab,"visible");
        console.log(target);
    });

    let active=Selecionada(".tab.active")[0];

    if(active){
        radioClass(Selecionada("."+active.id)[0],"visible");
    }
}


tabs(".menu-nav");

let BtnloadMore1=document.querySelector('#load-more-1');
let currentItem1=4;

BtnloadMore1.onclick = () =>{
    let cajas=[...document.querySelectorAll('.box-container-1 .box-1')];
    console.log(cajas);
    for(var i=currentItem1; i<currentItem1+4 ;i++){
        cajas[i].style.display='inline-block';
    }

    currentItem1 +=4;
    if(currentItem1 >= cajas.length){
        BtnloadMore1.style.display='none';
    }
}


let BtnloadMore2=document.querySelector('#load-more-2');
let currentItem2=4;

BtnloadMore2.onclick = () =>{
    let cajas=[...document.querySelectorAll('.box-container-2 .box-2')];
    console.log(cajas);
    for(var i=currentItem2; i<currentItem2+4 ;i++){
        cajas[i].style.display='inline-block';
    }

    currentItem2 +=4;
    if(currentItem2 >= cajas.length){
        BtnloadMore2.style.display='none';
    }
}

let BtnloadMore3=document.querySelector('#load-more-3');
let currentItem3=4;

BtnloadMore3.onclick = () =>{
    let cajas=[...document.querySelectorAll('.box-container-3 .box-3')];
    console.log(cajas);
    for(var i=currentItem3; i<currentItem3+4 ;i++){
        cajas[i].style.display='inline-block';
    }

    currentItem3 +=4;
    if(currentItem3 >= cajas.length){
        BtnloadMore3.style.display='none';
    }
}

function showContent() {
    element = document.getElementById("content");
    check = document.getElementById("menu-logo");
    if (check.checked) {
        element.style.marginTop='300px';
    }
    else {
        element.style.marginTop='0px';
    }
}