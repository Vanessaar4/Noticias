var conjuntos = [false, false, false, false];

function mudarCor(index, valor, btn){
    console.log(conjuntos[index]);
    if(conjuntos[index] ==  false){
        if(valor){
            btn.style.backgroundColor = "rgb(35, 71, 191)";
        } else {
            btn.style.backgroundColor = "rgb(73, 104, 208)";
        }
    }
}

function mudarCorD(index, valor, btn){
    if(conjuntos[index] ==  false){
        if(valor){
            btn.style.backgroundColor = "rgb(255, 62, 62)";
        } else {
            btn.style.backgroundColor = "rgb(253, 104, 104)";
        }
    }
}

function mudarCorLike(index, val){
    val.like.style.backgroundColor = "rgb(0, 0, 110)";
    val.deslike.style.backgroundColor = "rgb(253, 104, 104)"
    console.log(conjuntos[index]);
    conjuntos[index] = true;
}

function mudarCorDeslike(index, val){
    val.deslike.style.backgroundColor = "rgb(200, 0, 0)";
    val.like.style.backgroundColor = "rgb(73, 104, 208)";
    conjuntos[index] = true;
}

function mudarCorBtn(btn, valor){
    if(valor){
        btn.style.backgroundColor = "rgb(0, 128, 0)";
    }else {
        btn.style.backgroundColor = "rgb(43, 187, 43)";
    }
}

function btnClick(){
    if(form.log.value == "" || form.pass.value == ""){
        if (form.log.value == ""){
            document.getElementById("iId").style.borderColor = "rgb(255, 0, 0)"
        }
        if (form.pass.value == ""){
            document.getElementById("iPass").style.borderColor = "rgb(255, 0, 0)"
        }
    }else{
        alert("Login para o " + form.log.value + " efetuado com sucesso!");
    }
}

function selecionado(inp){
    inp.style.borderColor = "rgb(0, 128, 0)";
}

function descelecionado(inp){
    inp.style.borderColor = "rgb(12, 12, 12)";
}