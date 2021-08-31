<script language="javascript" type="text/javascript">
function validar() {
let nome = form1.nome.value;
let email = form1.email.value;
let senha = form1.senha.value;
let rep_senha = form1.rep_senha.value;
if (nome == "") {
alert('Preencha o campo com seu nome');
form1.nome.focus();
return false;
}
}
</script>
