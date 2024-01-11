let form = document.getElementById("form");
let title = document.getElementById("title");
let dueDate = document.getElementById("dueDate");
let description = document.getElementById("description");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let errorMsg = document.getElementById("errorMsg");


// After the click of submit btn we prevent the refresh of the page.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

// Here in formValidation function User can't be submit blank text input.
let formValidation = () => {
    if (title.value === "") { // Show failure msg
        console.log("Failure");
        errorMsg.innerHTML = "Task cannot be blank.";
    }

    else { // Show success msg
        console.log("Success");
        errorMsg.innerHTML = "";
        acceptData();
        // IIFE (Immediately Invoke Functional Expression)
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
};

// Creating an object to store the data.
// let data = {};

// Creating an Array to store the data.
let data = [];


// Create an acceptData function to store the user input value in the data object.(kays title, dueDate, description)
let acceptData = () => {

    // data["title"] = title.value;
    // data["dueDate"] = dueDate.value;
    // data["description"] = description.value;

    data.push({
        title: title.value,
        dueDate: dueDate.value,
        description: description.value,
    });

    localStorage

    console.log(data);
    // console.log(`Our data object is ${data}`);
    createTasks();
};


// Create the createTasks function in which we get data from the object(data) and shows in the UI part.
let createTasks = () => {
    tasks.innerHTML += `
    <div>
        <span class="fw-bold">${data.title}</span>
        <span class="small text-secondary">${data.dueDate}</span>
        <p>${data.description}</p>
        <span class="options">
            <i onclick="editTask(this)" class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#form"></i>
            <i onclick="deleteTask(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>`;
    resetForm();
};


// Reset the all input field when the form will submitted.
let resetForm = () => {
    title.value = "";
    dueDate.value = "";
    description.value = "";
};


// Delete the selected todo element.
let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
};


// Edit the selected todo element.
let editTask = (e) => {

    let selectedTask = e.parentElement.parentElement;

    title.value = selectedTask.children[0].innerHTML;
    dueDate.value = selectedTask.children[1].innerHTML;
    description.value = selectedTask.children[2].innerHTML;

    selectedTask.remove();
};
