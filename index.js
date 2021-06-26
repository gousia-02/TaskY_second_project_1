const taskContainer = document.querySelector(".task__container");


const saveChanges = () => {
const taskData = {
id: `${Date.now()}`,
imageUrl: document.getElementById("imageurl").value,
taskTitle: document.getElementById("tasktitle").value,
taskType: document.getElementById("tasktype").value,
taskDescription: document.getElementById("taskdescription").value,
};

const newCard=`
 <div class="col-md-6 col-lg-4 " id=$(taskData.id)>
                    <div class="card ">
                        <div class="card-header d-flex justify-content-end gap-2 ">
                            <button type="button " class="btn btn-outline-success "><i class="fas fa-edit "></i></button>

                            <button type="button " class="btn btn-outline-danger "><i class="fas fa-trash-alt "></i></button>
                        </div>
                        <img src=${taskData.imageUrl}
                        <div class="card-body ">
                            <h5 class="card-title ">${taskData.taskTitle}</h5>
                            <p class="card-text ">${taskData.taskDescription}</p>
                            <a href="# " class="btn btn-dark " style="background-color: #340143; ">${taskData.taskType}</a>
                        </div>
                        <div class="card-footer ">
                            <button type="button " class="btn btn-dark float-end " style="background-color: #340143; ">Open Task</button>
                        </div>

                    </div>`

taskContainer.insertAdjacentHTML("beforeend", newCard);

};


