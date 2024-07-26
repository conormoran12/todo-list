import WhitePlusBox from "./white-plus-box.png";
import DarkBlueNotebookEditOutline from "./dark-blue-notebook-edit-outline.png";
import DarkBlueInformationOutline from "./dark-blue-information-outline.png";
import DarkBlueTrashCanOutline from "./dark-blue-trash-can-outline.png";
import WhiteCheck from "./white-check.png";

Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
  var dayOfYear = ((today - onejan + 86400000) / 86400000);
  return Math.ceil(dayOfYear / 7)
};

const ProjectManager = {
  currentProject: undefined,
  isInbox: true,
  currentlyEditingTask: { key: undefined, value: undefined }
}

class Project {
  constructor(projectName, projectDescription) {
    this.name = projectName;
    this.description = projectDescription;
    this.tasks = {};
  }

  addTask(taskId, taskDetails, form) {
    if (form && form.checkValidity() == false) { return; }
    this.tasks[taskId] = taskDetails;
    this.saveProjectsToLocalStorage();
    this.addTaskToDom(this.tasks[taskId], false, taskId);
    console.log("saved");
    localStorage.setItem("projects", JSON.stringify(projects));
    console.log("Task added:", taskDetails);
  }

  addTaskToDom(taskObject, form, taskKey) {
    if (form) {
      if (form.checkValidity() == false) {
        if (addTask.nameField.value == "") {
          addTask.nameField.classList.add("invalid");
        }
        if (addTask.descriptionField.value == "") {
          addTask.descriptionField.classList.add("invalid");
        }
        if (addTask.dueDateField.value == "") {
          addTask.dueDateField.classList.add("invalid");
        }
        if (addTask.difficultyField.selectedIndex == 0) {
          addTask.difficultyField.classList.add("invalid");
        }
        return;
      }
    }

    const task_content = document.createElement("div");
    const left_side = document.createElement("div");
    const right_side = document.createElement("div");
    const check_mark = document.createElement("button");
    const task_name = document.createElement("div");
    const due_date = document.createElement("div");
    const option_container = document.createElement("div");
    const edit = document.createElement("button");
    const information = document.createElement("button");
    const del = document.createElement("button");

    task_name.textContent = taskObject.name.toUpperCase();
    due_date.textContent = taskObject.dueDate;

    task_content.classList.add("task");
    left_side.classList.add("left-side");
    right_side.classList.add("right-side");
    check_mark.classList.add("checkMark", taskObject.difficulty);
    task_name.classList.add("name");
    due_date.classList.add("due-date");
    option_container.classList.add("option-container");

    edit.id = "task_option_1";
    information.id = "task_option_2";
    del.id = "task_option_3";

    if (taskObject.complete) {
      check_mark.classList.add(`${taskObject.difficulty}-complete`);
      addImage(check_mark, WhiteCheck, "");
    }

    addImage(edit, DarkBlueNotebookEditOutline, "");
    addImage(information, DarkBlueInformationOutline, "");
    addImage(del, DarkBlueTrashCanOutline, "");

    document.getElementById("project_tasks_area").appendChild(task_content);
    task_content.appendChild(left_side);
    task_content.appendChild(right_side);
    left_side.appendChild(check_mark);
    left_side.appendChild(task_name);
    right_side.appendChild(due_date);
    right_side.appendChild(option_container);
    option_container.appendChild(edit);
    option_container.appendChild(information);
    option_container.appendChild(del);

    check_mark.addEventListener("mouseup", () => {
      taskObject.complete = !taskObject.complete;
      check_mark.replaceChildren();
      if (taskObject.complete) {
        check_mark.classList.add(`${taskObject.difficulty}-complete`);
        addImage(check_mark, WhiteCheck, "");
      } else {
        check_mark.classList.remove(`${taskObject.difficulty}-complete`);
      }
      this.saveProjectsToLocalStorage();
    });

    del.addEventListener("mouseup", () => {
      task_content.remove();
      this.removeTask(taskKey);
    });

    information.addEventListener("mouseup", () => {
      infoTask.modal.open = true;
      infoTask.nameField.value = taskObject.name;
      infoTask.descriptionField.value = taskObject.description;
      infoTask.dueDateField.value = taskObject.dueDate;
      infoTask.difficultyField.value = toTitleCase(taskObject.difficulty);
    });

    edit.addEventListener("mouseup", () => {
      const taskKeys = Object.keys(ProjectManager.currentProject.tasks)
      const taskEntries = Object.entries(ProjectManager.currentProject.tasks);
      for (let i = 0; i < taskKeys.length; i++) {
        if (ProjectManager.currentProject.tasks[taskKeys[i]] == taskObject) {
          ProjectManager.currentlyEditingTask.key = taskKeys[i];
        }
      }
      ProjectManager.currentlyEditingTask.value = taskObject;
      editTask.modal.open = true;
      editTask.resetFields();
      editTask.nameField.value = taskObject.name;
      editTask.descriptionField.value = taskObject.description;
      editTask.dueDateField.value = taskObject.dueDate;
      editTask.difficultyField.value = taskObject.difficulty;
    });

    addTask.resetFields();
    addTask.modal.open = false;
  }

  editTaskInDom(taskObj, updatedDetails) {
    const taskElements = document.getElementById("project_tasks_area").children;
    for (let i = 0; i < taskElements.length; i++) {
      const taskElement = taskElements[i];
      const nameElement = taskElement.querySelector('.left-side .name');
      if (nameElement.textContent.toLowerCase() === taskObj.name.toLowerCase()) {
        const dueDateElement = taskElement.querySelector('.right-side .due-date');
        const checkmarkElement = taskElement.querySelector('.left-side .checkMark');
        Object.assign(taskObj, updatedDetails);
        nameElement.textContent = taskObj.name.toUpperCase();
        dueDateElement.textContent = taskObj.dueDate;

        checkmarkElement.replaceChildren();
        if (!checkmarkElement.classList.contains(taskObj.difficulty)) {
          if (checkmarkElement.classList.contains("easy")) {
            checkmarkElement.classList.remove("easy");
            checkmarkElement.classList.remove("easy-complete");
          } else if (checkmarkElement.classList.contains("medium")) {
            checkmarkElement.classList.remove("medium");
            checkmarkElement.classList.remove("medium-complete");
          } else if (checkmarkElement.classList.contains("hard")) {
            checkmarkElement.classList.remove("hard");
            checkmarkElement.classList.remove("hard-complete");
          }

          checkmarkElement.classList.add(taskObj.difficulty);

        }
        if (taskObj.complete == true) {
          checkmarkElement.classList.add(`${taskObj.difficulty}-complete`);
          addImage(checkmarkElement, WhiteCheck, "");
          console.log("Add check mark");
        }
      }
    }
  }

  editTask(taskId, updatedDetails) {
    if (this.tasks[taskId]) {
      const task = this.tasks[taskId];
      this.editTaskInDom(task, updatedDetails);
      this.saveProjectsToLocalStorage();
      console.log(`Task ${taskId} updated:`, task);
    } else {
      console.error(`Task ${taskId} does not exist.`);
    }
  }

  findTasks() {
    const taskArea = document.getElementById("project_tasks_area");
    taskArea.replaceChildren();
    console.log("Loading tasks...");
    for (const taskId in this.tasks) {
      this.addTaskToDom(this.tasks[taskId], false, taskId);
    }
  }

  removeTask(taskId) {
    delete this.tasks[taskId];
    this.saveProjectsToLocalStorage();
    console.log(`Task ${taskId} removed.`);
  }

  saveProjectsToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}


function globalAddTaskToDom(taskObject, form, taskKey) {
  console.log(taskObject)
  const task_content = document.createElement("div");

  const left_side = document.createElement("div");
  const right_side = document.createElement("div");

  const check_mark = document.createElement("button");
  const task_name = document.createElement("div");
  const due_date = document.createElement("div");

  const option_container = document.createElement("div");

  const edit = document.createElement("button");
  const information = document.createElement("button");
  const del = document.createElement("button");

  task_name.textContent = taskObject.name.toUpperCase();
  due_date.textContent = taskObject.dueDate;

  task_content.classList.add("task");

  left_side.classList.add("left-side");
  right_side.classList.add("right-side");

  check_mark.classList.add("checkMark", taskObject.difficulty);
  task_name.classList.add("name");
  due_date.classList.add("due-date");

  option_container.classList.add("option-container");

  edit.id = "task_option_1";
  information.id = "task_option_2";
  del.id = "task_option_3";

  if (taskObject.complete == true) {
    check_mark.classList.add(`${taskObject.difficulty}-complete`);
    addImage(check_mark, WhiteCheck, "");
    console.log("Added check mark");
  }

  addImage(edit, DarkBlueNotebookEditOutline, "");
  addImage(information, DarkBlueInformationOutline, "");
  addImage(del, DarkBlueTrashCanOutline, "");

  document.getElementById("project_tasks_area").appendChild(task_content);
  task_content.appendChild(left_side);
  task_content.appendChild(right_side);

  left_side.appendChild(check_mark);
  left_side.appendChild(task_name);
  right_side.appendChild(due_date);
  right_side.appendChild(option_container);

  //option_container.appendChild(edit);
  option_container.appendChild(information);
  // option_container.appendChild(del);

  check_mark.addEventListener("mouseup", () => {
    console.log("clicked");
    if (taskObject.complete == true) {
      taskObject.complete = false;
      check_mark.replaceChildren();
      if (check_mark.classList.contains(`${taskObject.difficulty}-complete`)) {
        check_mark.classList.remove(`${taskObject.difficulty}-complete`);
      }
    } else {
      taskObject.complete = true;

      check_mark.classList.add(`${taskObject.difficulty}-complete`);
      addImage(check_mark, WhiteCheck, "");
    }
  })


  del.addEventListener("mouseup", () => {
    task_content.remove();
    ProjectManager.removeTask(taskKey);
  })

  information.addEventListener("mouseup", () => {
    infoTask.modal.open = true;

    infoTask.nameField.value = taskObject.name;
    infoTask.descriptionField.value = taskObject.description;

    infoTask.dueDateField.value = taskObject.dueDate;
    // //     // const dt = new Date(projects[ProjectManager.currentProject].tasks[name].dueDate);
    // //     // const day = ("0" + dt.getDate()).slice(-2);
    // //     // const month = ("0" + (dt.getMonth() + 1)).slice(-2);
    // //     // const date = dt.getFullYear() + "-" + month + "-" + day;
    // //     // infoTask.dueDateField.value = date

    infoTask.difficultyField.value = toTitleCase(taskObject.difficulty);
  })

  edit.addEventListener("mouseup", () => {
    const taskKeys = Object.keys(ProjectManager.currentProject.tasks)
    const taskEntries = Object.entries(ProjectManager.currentProject.tasks[taskKeys[i]]);
    console.log(taskKeys);
    for (let i = 0; i < taskKeys.length; i++) {
      if (ProjectManager.currentProject.tasks[taskKeys[i]] == taskObject) {
        ProjectManager.currentlyEditingTask.key = taskKeys[i];
      }
    }
    ProjectManager.currentlyEditingTask.value = taskObject;
    editTask.modal.open = true;

    editTask.resetFields();
    //console.log(`Current Project on Edit button: ${ProjectTemplates.currentProject.name}`);

    editTask.nameField.value = taskObject.name;
    console.log(`Description: ${taskObject.description}`);
    editTask.descriptionField.value = taskObject.description;

    editTask.dueDateField.value = taskObject.dueDate;
    editTask.difficultyField.value = taskObject.difficulty;

    console.log("Added all ");
  }, { once: true })
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function renameKey(obj, oldKey, newKey) {
  if (oldKey !== newKey) {
    Object.defineProperty(obj, newKey, Object.getOwnPropertyDescriptor(obj, oldKey));
    delete obj[oldKey];
  }
}


function addImage(element, image, className) {
  const newImage = new Image();
  newImage.src = image;
  if (className != "") {
    newImage.classList.add(className);
  }
  element.appendChild(newImage);
}


const ProjectTemplates = {

  sideBarTemplate: function (name, description, project) {
    const sidebar = document.getElementById("project_tab_container");

    const projectTab = document.createElement("button");
    projectTab.textContent = name;
    projectTab.id = "project_tab";

    projectTab.addEventListener("mouseup", (e) => {
      if (ProjectManager.currentProject != project) {
        console.log(project.name);
        ProjectManager.currentProject = project;
        this.projectTaskContainer.add(name, description);
        projects[name].findTasks();
        console.log("found tasks");
      }
    })

    sidebar.appendChild(projectTab);
  },
  projectTaskContainer: {
    header: function (name, description) {
      const project_task_header_container = document.createElement("div");

      const title = document.createElement("div");
      const divider = document.createElement("div");
      const desc = document.createElement("div");

      title.textContent = name.toUpperCase();
      desc.textContent = description;

      project_task_header_container.classList.add("project-task-header-container");



      title.classList.add("title");
      divider.classList.add("divider");
      desc.classList.add("description");

      document.getElementsByClassName("project-task-container")[0].insertBefore(project_task_header_container, document.getElementsByClassName("project-task-container")[0].firstChild);

      project_task_header_container.appendChild(title);
      project_task_header_container.appendChild(divider);
      project_task_header_container.appendChild(desc);
    },
    button: function () {
      const button_container = document.createElement("div");
      const button = document.createElement("button");
      const button_text = document.createElement("div");
      const divider = document.createElement("div");

      button_text.textContent = "Add Task";

      button.id = "add_task_button";
      button_container.classList.add("add-task-button-container");
      button.classList.add("task-button", "add-task");
      button_text.classList.add("add-task-text", "task-button-name");
      divider.classList.add("divider");

      document.getElementsByClassName("project-task-container")[0].insertBefore(button_container, document.getElementsByClassName("project-task-container")[0].children[1]);

      button.addEventListener("mouseup", (e) => {
        addTask.modal.open = true;
      })

      button_container.appendChild(button);
      button_container.appendChild(divider);

      button.appendChild(button_text);

      addImage(button, WhitePlusBox, "add-project");
    },
    taskContainer: function () {
      const task_container = document.createElement("div");

      task_container.classList.add("project-tasks-area");
      task_container.id = "project_tasks_area";

      document.getElementsByClassName("project-task-container")[0].appendChild(task_container);

      //this.findTasks(ProjectManager.currentProject);
    },

    add: function (name, description, dueDate, difficulty) {
      this.clear();
      this.header(name, description);
      this.button();
      //this.taskContainer();
    },
    clear: function () {
      document.getElementsByClassName("project-task-container")[0].replaceChildren(document.getElementById("project_tasks_area"));
    },
    findTasks: function (project) {

      console.log(project);

      document.getElementById("project_tasks_area").replaceChildren();
      for (let i = 0; i < Object.keys(project.tasks).length; i++) {
        console.log("iteration");

        const entries = Object.entries(project.tasks);

        const task = Object.entries(entries[i][1]);

        const name = task[0][1];
        const dueDate = task[2][1];
        const difficulty = task[3][1];
        const complete = task[4][1];

        console.log(name);
        console.log(dueDate);
        console.log(difficulty);
        console.log(complete)

        console.log(project.tasks[Object.keys(project.tasks)[i]]);

        let taskObj = Object.keys(project.tasks)[i];

        console.log(taskObj);

        this.task(name, dueDate, difficulty, complete, project, taskObj);
      }
    },
  },
}

const infoTask = {
  closeButton: document.getElementById("info_task_close_button"),
  modal: document.getElementById("info_task_modal"),

  nameField: document.getElementById("info_task_name"),
  descriptionField: document.getElementById("info_task_description"),
  dueDateField: document.getElementById("info_task_due_date"),
  difficultyField: document.getElementById("info_task_difficulty"),
  resetFields: function () {
    this.nameField.value = "";
    this.descriptionField.value = "";
    this.dueDateField.value = "";
    this.difficultyField.value = "";
  }
}

const projects = {};



const editTask = {
  closeButton: document.getElementById("edit_task_close_button"),
  saveButton: document.getElementById("edit_task_button_save"),
  modal: document.getElementById("edit_task_modal"),
  form: document.getElementById("edit_task_modal").getElementsByClassName("modal-container")[0].getElementsByTagName("form")[0],
  nameField: document.getElementById("edit_task_name"),
  descriptionField: document.getElementById("edit_task_description"),
  dueDateField: document.getElementById("edit_task_due_date"),
  difficultyField: document.getElementById("edit_task_difficulty"),
  resetFields: function () {
    console.log("reseted fields");
    this.nameField.value = "";
    this.descriptionField.value = "";
    this.dueDateField.value = "";
    this.difficultyField.value = "";
  }
}

const addTask = {
  promptButton: document.getElementById("add_task_button"),
  closeButton: document.getElementById("add_task_close_button"),
  addButton: document.getElementById("add_task_button_save"),
  modal: document.getElementById("add_task_modal"),
  form: document.getElementById("add_task_modal").getElementsByClassName("modal-container")[0].getElementsByTagName("form")[0],
  nameField: document.getElementById("add_task_name"),
  descriptionField: document.getElementById("add_task_description"),
  dueDateField: document.getElementById("add_task_due_date"),
  difficultyField: document.getElementById("add_task_difficulty"),
  resetFields: function () {
    this.nameField.value = "";
    this.descriptionField.value = "";
    this.dueDateField.value = "";
    this.difficultyField.selectedIndex = 0;
  }
}

const addProject = {
  promptButton: document.getElementById("add_project_button"),
  closeButton: document.getElementById("add_project_close_button"),
  addButton: document.getElementById("add_project_button_save"),
  modal: document.getElementById("add_project_modal"),
  form: document.getElementById("add_project_modal").getElementsByClassName("modal-container")[0].getElementsByTagName("form")[0],
  nameField: document.getElementById("add_project_name"),
  descriptionField: document.getElementById("add_project_description"),
  resetFields: function () {
    this.nameField.value = "";
    this.descriptionField.value = "";
  }
}


addProject.promptButton.addEventListener("mouseup", (e) => {
  addProject.modal.open = true;
})

addProject.closeButton.addEventListener("mouseup", (e) => {
  addProject.modal.open = false;
})

addProject.addButton.addEventListener("mouseup", (e) => {
  if (addProject.form) {
    if (addProject.form.checkValidity() == false) {
      if (addTask.nameField.value == "") {
        addTask.nameField.classList.add("invalid");
      }
      if (addTask.descriptionField.value == "") {
        addTask.descriptionField.classList.add("invalid");
      }
      if (addTask.dueDateField.value == "") {
        addTask.dueDateField.classList.add("invalid");
      }
      if (addTask.difficultyField.selectedIndex == 0) {
        addTask.difficultyField.classList.add("invalid");
      }
      return;
    }
  }
  const project = new Project(addProject.nameField.value, addProject.descriptionField.value);

  const projectName = project.name;

  projects[project.name] = project;

  ProjectTemplates.sideBarTemplate(project.name, project.description, project);
  ProjectTemplates.projectTaskContainer.findTasks(project);
  ProjectManager.currentProject = project;
  ProjectTemplates.projectTaskContainer.add(project.name, project.description);
  console.log("saved")
  console.log(projects);
  localStorage.setItem("projects", JSON.stringify(projects));
  addProject.modal.open = false;

  addProject.resetFields();
})

addTask.closeButton.addEventListener("mouseup", (e) => {
  addTask.modal.open = false;
  addTask.resetFields();
})

addTask.addButton.addEventListener("mouseup", (e) => {
  //ProjectManager.currentProject.tasks[addTask.nameField.value] = { name: addTask.nameField.value, description: addTask.descriptionField.value, dueDate: addTask.dueDateField.value, difficulty: addTask.difficultyField.value, complete: false };

  //const newTask = new TaskTemplates(ProjectManager.currentProject, ProjectManager.currentProject.tasks[addTask.nameField.value]);

  ProjectManager.currentProject.addTask(addTask.nameField.value, { name: addTask.nameField.value, description: addTask.descriptionField.value, dueDate: addTask.dueDateField.value, difficulty: addTask.difficultyField.value, complete: false }, document.getElementById("add_task_modal").getElementsByClassName("modal-container")[0].getElementsByTagName("form")[0])
  //ProjectTemplates.projectTaskContainer.task(addTask.nameField.value, addTask.dueDateField.value, addTask.difficultyField.value, false, ProjectManager.currentProject, addTask.nameField.value);
  console.log("saved");
  localStorage.setItem("projects", JSON.stringify(projects));
  console.log(addTask.form);
  console.log(projects);
  //addTask.resetFields();
})

editTask.saveButton.addEventListener("mouseup", () => {
  if (editTask.form && editTask.form.checkValidity() == false) {
    if (editTask.nameField.value == "") {
      editTask.nameField.classList.add("invalid");
    }
    if (editTask.descriptionField.value == "") {
      editTask.descriptionField.classList.add("invalid");
    }
    if (editTask.dueDateField.value == "") {
      editTask.dueDateField.classList.add("invalid");
    }
    if (editTask.difficultyField.selectedIndex == 0) {
      editTask.difficultyField.classList.add("invalid");
    }
    return;
  }

  editTask.modal.open = false;
  const updatedTask = {
    name: editTask.nameField.value,
    description: editTask.descriptionField.value,
    dueDate: editTask.dueDateField.value,
    difficulty: editTask.difficultyField.value,
    complete: ProjectManager.currentlyEditingTask.value.complete
  };

  const taskEntries = Object.entries(ProjectManager.currentProject.tasks)
  console.log(ProjectManager.currentlyEditingTask.key);
  ProjectManager.currentProject.editTask(ProjectManager.currentlyEditingTask.key, updatedTask);
  ProjectManager.currentlyEditingTask.key = undefined;
  ProjectManager.currentlyEditingTask.value = undefined;
});

infoTask.closeButton.addEventListener("mouseup", (e) => {
  infoTask.modal.open = false;
  infoTask.resetFields();
})

editTask.closeButton.addEventListener("mouseup", (e) => {
  editTask.modal.open = false;
  editTask.resetFields();
})

document.getElementById("inbox").addEventListener("mouseup", () => {
  ProjectManager.currentProject = "";
  const AllTasks = [];
  const projectKeys = Object.keys(projects);


  document.getElementById("project_tasks_area").replaceChildren();
  ProjectTemplates.projectTaskContainer.clear();
  ProjectTemplates.projectTaskContainer.header("Inbox", "");

  for (let i = 0; i < projectKeys.length; i++) {
    const taskEntries = Object.entries(projects[projectKeys[i]].tasks);
    //AllTasks.push(taskEntries);
    for (let j = 0; j < taskEntries.length; j++) {
      AllTasks.push(taskEntries[j]);
    }
    //console.log(taskEntries[0][1]["dueDate"]);
  }

  console.log("All tasks:");
  console.log(AllTasks);

  AllTasks.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b[1]["dueDate"]).getTime() - new Date(a[1]["dueDate"]).getTime();
  });
  //AllTasks.filter((task) = task[0][1]["dueDate"])
  console.log("All tasks after date filter");
  console.log(AllTasks);


  for (let i = 0; i < Object.entries(AllTasks).length; i++) {
    console.log(Object.entries(AllTasks)[i]);
    //console.log(Object.entries(AllTasks)[i][1][0]);
    console.log("ran");
    console.log("Project Keys:");
    console.log(projectKeys);
    for (let j = 0; j < projectKeys.length; j++) {
      const taskEntries = Object.entries(projects[projectKeys[j]].tasks);
      console.log("ran again");
      if (projects[projectKeys[j]].tasks[Object.entries(AllTasks)[i][1][0]]) {
        console.log("equals");
        globalAddTaskToDom(projects[projectKeys[j]].tasks[Object.entries(AllTasks)[i][1][0]],);
      }
      //AllTasks.push(taskEntries);
      //console.log(taskEntries[0][1]["dueDate"]);
    }
  }
})

document.getElementById("this_week").addEventListener("mouseup", () => {
  ProjectManager.currentProject = "";
  const AllTasks = [];
  const projectKeys = Object.keys(projects);


  document.getElementById("project_tasks_area").replaceChildren();
  ProjectTemplates.projectTaskContainer.clear();
  ProjectTemplates.projectTaskContainer.header("This Week", "");

  for (let i = 0; i < projectKeys.length; i++) {
    console.log(projects[projectKeys[i]]);
    const taskEntries = Object.entries(projects[projectKeys[i]].tasks);
    //AllTasks.push(taskEntries);
    for (let j = 0; j < taskEntries.length; j++) {
      AllTasks.push(taskEntries[j]);
    }
    //console.log(taskEntries[0][1]["dueDate"]);
  }


  // AllTasks.sort(function (a, b) {
  //   // Turn your strings into dates, and then subtract them
  //   // to get a value that is either negative, positive, or zero.
  //   return new Date(b[1]["dueDate"]).getTime() - new Date(a[1]["dueDate"]).getTime();
  // });
  //console.log(AllTasks[0][1]["dueDate"])
  const weekFiltered = AllTasks.filter((task) => new Date(task[1]["dueDate"]).getWeek() && new Date().getFullYear())
  const filteredTasks = weekFiltered.filter((task) => new Date(task[1]["dueDate"]).getFullYear() == new Date().getFullYear())
  console.log(filteredTasks);


  for (let i = 0; i < Object.entries(filteredTasks).length; i++) {
    console.log(Object.entries(filteredTasks)[i]);
    //console.log(Object.entries(AllTasks)[i][1][0]);
    console.log("ran");
    for (let j = 0; j < projectKeys.length; j++) {
      const taskEntries = Object.entries(projects[projectKeys[j]].tasks);
      console.log("ran again");
      if (projects[projectKeys[j]].tasks[Object.entries(filteredTasks)[i][1][0]]) {
        console.log("equals");
        globalAddTaskToDom(projects[projectKeys[j]].tasks[Object.entries(filteredTasks)[i][1][0]]);
      }
      //AllTasks.push(taskEntries);
      //console.log(taskEntries[0][1]["dueDate"]);
    }
  }
})

document.getElementById("today").addEventListener("mouseup", () => {
  ProjectManager.currentProject = "";
  const AllTasks = [];
  const projectKeys = Object.keys(projects);


  document.getElementById("project_tasks_area").replaceChildren();
  ProjectTemplates.projectTaskContainer.clear();
  ProjectTemplates.projectTaskContainer.header("Today", "");

  for (let i = 0; i < projectKeys.length; i++) {
    const taskEntries = Object.entries(projects[projectKeys[i]].tasks);
    //AllTasks.push(taskEntries);
    for (let j = 0; j < taskEntries.length; j++) {
      AllTasks.push(taskEntries[j]);
    }
    //console.log(taskEntries[0][1]["dueDate"]);
  }


  // AllTasks.sort(function (a, b) {
  //   // Turn your strings into dates, and then subtract them
  //   // to get a value that is either negative, positive, or zero.
  //   return new Date(b[1]["dueDate"]).getTime() - new Date(a[1]["dueDate"]).getTime();
  // });
  //console.log(AllTasks[0][1]["dueDate"])
  const filteredTasks = AllTasks.filter((task) => new Date(task[1]["dueDate"]).toDateString() === new Date().toDateString())
  console.log(filteredTasks);


  for (let i = 0; i < Object.entries(filteredTasks).length; i++) {
    console.log(Object.entries(filteredTasks)[i]);
    //console.log(Object.entries(AllTasks)[i][1][0]);
    console.log("ran");
    for (let j = 0; j < projectKeys.length; j++) {
      const taskEntries = Object.entries(projects[projectKeys[i]].tasks);
      console.log("ran again");
      if (projects[projectKeys[j]].tasks[Object.entries(filteredTasks)[i][1][0]]) {
        console.log("equals");
        globalAddTaskToDom(projects[projectKeys[j]].tasks[Object.entries(filteredTasks)[i][1][0]]);
      }
      //AllTasks.push(taskEntries);
      //console.log(taskEntries[0][1]["dueDate"]);
    }
  }
})

const add_task_form = document.getElementById("add_task_modal").getElementsByClassName("modal-container")[0].getElementsByTagName("form")[0];
const edit_task_form = document.getElementById("edit_task_modal").getElementsByClassName("modal-container")[0].getElementsByTagName("form")[0];
console.log(add_task_form)
function submitForm(event) {

  //Preventing page refresh
  event.preventDefault();
  //event.stopPropagation();
}

//Calling a function during form submission.
add_task_form.addEventListener('submit', submitForm);
edit_task_form.addEventListener('submit', submitForm);

if (localStorage.getItem("projects")) {
  //const projects = JSON.parse(localStorage.projects);
  //console.log(`Projects: ${projects}`);
  console.log("Project Objects:");
  const savedProjs = Object.entries(JSON.parse(localStorage.projects));
  console.log(savedProjs);
  for (let i = 0; i < savedProjs.length; i++) {
    console.log(`No of Projects: ${savedProjs.length}`);
    let project = new Project(savedProjs[i][1].name, savedProjs[i][1].description);
    console.log("ran local");
    //let projectName = project.name;

    projects[project.name] = project;

    ProjectTemplates.sideBarTemplate(project.name, project.description, project);
    ProjectTemplates.projectTaskContainer.findTasks(project);
    ProjectManager.currentProject = project;
    ProjectTemplates.projectTaskContainer.add(project.name, project.description);
    //localStorage.setItem("projects", JSON.stringify(projects));
    console.log(JSON.parse(localStorage.projects));
    console.log(Object.entries(savedProjs[i][1].tasks));
    for (let j = 0; j < Object.entries(savedProjs[i][1].tasks).length; j++) {
      const task = Object.entries(savedProjs[i][1].tasks)[j];
      project.addTask(task[0], { name: task[1].name, description: task[1].description, dueDate: task[1].dueDate, difficulty: task[1].difficulty, complete: task[1].complete });
    }
  }

} else {

}