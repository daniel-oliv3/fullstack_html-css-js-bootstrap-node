/*JavaScript do index.html*/
window.onload = () => {

    let id = 1;

    get_username(id);
    get_user_tasks(id);

}


/*------------------------------------------------------------*/
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


/*------------------------------------------------------------*/
function get_user_tasks(id){

    fetch(`http://localhost:3000/user/${id}/tasks`)
    .then(response => {
        if(response.status === 200){
            return response.json();
        } else {
            console.log("Erro!");
        }
    })
    .then(dados => {
        if(dados.length === 0){
            // console.log('Não existem tasks!');
            document.querySelector("#no_tasks").classList.remove("d-none");
        } else {
            console.log(dados);
        }
    });
}


























