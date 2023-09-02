import avisos from '../json/avisos.json' assert {type: 'json'}

function message() {
    avisos.avisos.forEach(element => {
        document.getElementById('noticias').innerHTML += JSON.stringify(element.message) + '<br><hr>';
    });
}

export { message };
