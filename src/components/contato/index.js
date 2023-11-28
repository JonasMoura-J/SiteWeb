var iptEmail = document.querySelector('input#cemail');
var iptAssunto = document.querySelector('input#cassunto');
var iptWhatsapp = document.querySelector('input#cwhatsapp');
var iptMensagem = document.querySelector('input#cmensagem');

function alerta() {

    alert('Guardamos suas informações logo te enviaremos notícias!');

    localStorage.setItem("@TERE:email", iptEmail.value);
    localStorage.setItem("@TERE:assunto", iptAssunto.value);
    localStorage.setItem("@TERE:whatsapp", iptWhatsapp.value);
    localStorage.setItem("@TERE:mensagem", iptMensagem.value);

}