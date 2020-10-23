var conjuntos = [false, false, false, false];
var user = {
    nome: "",
    login: "",
    senha: "",
    cpf: "",
    telefone: ""
}

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
    if(conjuntos[index] == false){
        val.like.style.backgroundColor = "rgb(0, 0, 110)";
        val.deslike.style.backgroundColor = "rgb(253, 104, 104)"
        conjuntos[index] = true;
        fetch('http://demo4415299.mockable.io/like')
            .then(responseStream => {
                responseStream.json().then(data => alert(data.msg))
            })
    }
}

function mudarCorDeslike(index, val){
    if(conjuntos[index] == false){
        val.deslike.style.backgroundColor = "rgb(200, 0, 0)";
        val.like.style.backgroundColor = "rgb(73, 104, 208)";
        conjuntos[index] = true;
        fetch('http://demo4415299.mockable.io/dislike')
            .then(responseStream => {
                responseStream.json().then(data => alert(data.msg))
            })
    }
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
        console.log(user);
        if(user.login != ""){
            var aux = document.getElementById("form");
            if(aux.log.value == user.login && aux.pass.value == user.senha){
                fetch('http://demo4415299.mockable.io/login', {
                    method: 'post'
                })
                .then(responseStream => {
                    responseStream.json().then(data => alert("Login para o " + form.log.value + " " + data.msg))
                })
            } else {
                alert("login ou senha digitado incorretamente");
            }
        } else {
            alert("nenhuma conta cadastrada");
        }
    }
}

function selecionado(inp){
    inp.style.borderColor = "rgb(0, 128, 0)";
}

function descelecionado(inp){
    inp.style.borderColor = "rgb(12, 12, 12)";
}

function mascara_cpf(){
    var cpf = document.getElementById("cpf");
    cpf.value = cpf.value.replace(/\D/g, "");
    if (cpf.value.length <= 11) {
        cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2")
        cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2")
        cpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    } else { 
        cpf.value = cpf.value.replace(/^(\d{2})(\d)/, "$1.$2")        
        cpf.value = cpf.value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")     
        cpf.value = cpf.value.replace(/\.(\d{3})(\d)/, ".$1/$2")       
        cpf.value = cpf.value.replace(/(\d{4})(\d)/, "$1-$2")
       
    }
}

function mascara_tel(){
    var num = document.getElementById("tel");
    num.value = num.value.replace(/\D/g, "");
    num.value = num.value.replace(/^(\d\d)(\d)/g,"($1) $2");//Coloca parênteses em volta dos dois primeiros dígitos
	if(num.value.length < 14){
        num.value = num.value.replace(/(\d{4})(\d)/,"$1-$2");//Número com 8 dígitos. Formato: (99) 9999-9999
    } else {
        num.value = num.value.replace(/(\d{5})(\d)/,"$1-$2");//Número com 9 dígitos. Formato: (99) 99999-9999
    }
}

function cad(){
    var aux = document.getElementById("formDD");
    if(aux.login.value != "" && aux.senha.value != ""){
        user.nome = aux.nome.value;
        user.login = aux.login.value;
        user.senha = aux.senha.value;
        user.cpf = aux.cpf.value;
        user.telefone = aux.telefone.value;
        fetch('http://demo4415299.mockable.io/cadastro', {
            method: 'post'
        })
        .then(responseStream => {
            responseStream.json().then(data => alert("Usuário cadastrado " + data.msg))
            .catch(error => alert(error));
        })
        //falta voltar para a pagina inicial
    } else {
        alert("usuário e senha precisam conter algum valor");
    }
}