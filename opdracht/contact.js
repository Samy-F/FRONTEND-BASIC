const verstuur = () => {
    let vnaam = document.getElementById('vnaam').value || undefined;
    let anaam = document.getElementById('anaam').value || undefined;
    let email = document.getElementById('email').value || undefined;
    let onderwerp = document.getElementById('onderwerp').value || undefined;
    let conf;

    if(vnaam != undefined && anaam != undefined && email != undefined && onderwerp != undefined) {
        conf = confirm("weet je zeker dat je dit contact formulier wilt verzenden?")
    }

    if(conf){
        console.log('succes')
        alert(`Bedankt voor je contact aanvraag ${vnaam} ${anaam}. Er wordt zo snel mogelijk contact met u opgenomen!`)
    } else {
        console.log('fail')
        console.log(conf)
    }
}