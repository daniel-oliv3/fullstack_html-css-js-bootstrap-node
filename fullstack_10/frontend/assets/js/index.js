/*JavaScript do index.html*/
window.onload = () => {
    // console.log("teste");

    get_username(1);
}

function get_username(id){

    fetch(`http://localhost:3000/user/${id}`)
    .then(response => {
        if(response.status === 200){
            console.log('Ok');
        } else {
            console.log("Nok");
        }
    });
}





























