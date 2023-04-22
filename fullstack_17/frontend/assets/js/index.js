/*JavaScript do index.html*/
let id_user = 1;

window.onload = () => {

    get_username(id_user);
    get_user_tasks(id_user);

}


/*------------------------------------------------------------*/
function get_username(id_user){

    fetch(`http://localhost:3000/user/${id_user}`)
    .then(response => {
        if(response.status === 200){
            return response.json();
        } else {
            console.log("Error!");
        }
    })
    .then(dados => {
        if(dados.length === 0){
            console.log('Erro!');
        } else {
            document.querySelector('#username').textContent = dados[0].username;
        }
    });
}


/*------------------------------------------------------------*/
function get_user_tasks(id_user){

    fetch(`http://localhost:3000/user/${id_user}/tasks`)
    .then(response => {
        if(response.status === 200){
            return response.json();
        } else {
            console.log("Erro!");
        }
    })
    .then(tarefas => {
        if(tarefas.length === 0){
            document.querySelector("#no_tasks").classList.remove("d-none");
            document.querySelector("#total_tasks").classList.add("d-none");
        } else {
            document.querySelector("#tasks_container").innerHTML = null;



            /* ------- bg-color ------- */
            let colors = [
                {
                    task_status: 'new',
                    select_bg_color: 'bg-white'
                },
                {
                    task_status: 'in progress',
                    select_bg_color: 'bg-info'
                },
                {
                    task_status: 'canceled',
                    select_bg_color: 'bg-danger'
                },
                {
                    task_status: 'done',
                    select_bg_color: 'bg-success'
                },
            ]



            tarefas.forEach(tarefa => {

                let color = colors.find(item => item.task_status == tarefa.task_status);
                // console.log(color);

                let html = `
                <div class="col-12 border border-secondary rounded p-3 shadow">
                    <div class="row align-items-center">
                        <div class="col-8">
                            <div class="d-flex align-items-center">
                                <h5 class="me-3 text-info"><i class="fa-solid fa-circle-chevron-right me-2"></i></h5>
                                <h5>${tarefa.task_text}</h5>
                            </div>
                        </div>
                        <div class="col-2">
                            <select id="task_status_${tarefa.id}" onchange="change_task_status(${tarefa.id})" class="form-select p-2 ${color.select_bg_color}">
                                <option value="new" ${tarefa.task_status == 'new' ? 'selected' : ''}>New</option>
                                <option value="in progress" ${tarefa.task_status == 'in progress' ? 'selected' : ''}>In progress</option>
                                <option value="canceled" ${tarefa.task_status == 'canceled' ? 'selected' : ''}>Canceled</option>
                                <option value="done" ${tarefa.task_status == 'done' ? 'selected' : ''}>Done</option>
                            </select>
                        </div>
                        <div class="col-1 text-end"><span class="edit_link" onclick="edit_task(${tarefa.id})"><i class="fa-regular fa-pen-to-square me-2"></i>Edit</span></div>
                        <div class="col-1 text-end"><span class="delete_link" onclick="delete_task(${tarefa.id})"><i class="fa-solid fa-trash-can  me-2"></i>Delete</span></div>
                    </div>
                </div>
                `;
                
                let new_task = document.createElement('div');
                new_task.classList.add('row', 'mb-3');               
                new_task.innerHTML = html;
                document.querySelector("#tasks_container").appendChild(new_task);
            });
            document.querySelector("#no_tasks").classList.add("d-none");
            document.querySelector("#total_tasks").classList.remove("d-none");
            document.querySelector("#total_tasks > div > h4 > span").textContent = tarefas.length;
        }
    });
}



/*------------------------------------------------------------*/
function edit_task(id_task){
    console.log(id_task);
}


/*------------------------------------------------------------*/
function delete_task(id_task){
    console.log(id_task);
}


/*------------------------------------------------------------*/
function change_task_status(id_task){   

    let status = document.querySelector("#task_status_" + id_task).value;

    fetch(`http://localhost:3000/user/${id_user}/tasks/update_status/`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body:JSON.stringify({id_user, id_task, status})
    })
    .then(response => {
        console.log(response);
    });
    
}















