/*JavaScript do index.html*/
window.onload = () => {

    // get_username(10);
    get_username(1);
}

function get_username(id){

    fetch(`http://localhost:3000/user/${id}`)
    .then(response => {
        if(response.status === 200){
            // console.log('Ok');
            // console.log(response);
            // console.log(response.json());
            return response.json();
        } else {
            console.log("Error!");
        }
    })
    .then(dados => {
        // console.log(dados);
        // console.log(dados[0]);
        if(dados.length === 0){
            console.log('Erro!');
        } else {
            // console.log(dados);
            document.querySelector('#username').textContent = dados[0].username;
        }
    });
}





























