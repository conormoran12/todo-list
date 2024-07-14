import "./styles.css";
import Inbox from "./inbox.png";
import Today from "./calendar-today.png";
import ThisWeek from "./calendar-week.png";
import PlusBox from "./plus-box.png";
import WhitePlusBox from "./white-plus-box.png";
import DarkBlueEdit from "./dark-blue-notebook-edit-outline.png";
import DarkBlueInformation from "./dark-blue-information-outline.png";
import DarkBlueDelete from "./dark-blue-trash-can-outline.png";
import WhiteFolder from "./white-folder.png";
import WhiteCloseBox from "./white-close-box.png";
import WhitePlus from "./white-plus.png";
import WhiteNotebookAdd from "./white-notebook-plus-outline.png";
import WhiteInformation from "./white-information-outline.png";
import WhiteContentSaveAll from "./white-content-save-all-outline.png";
import WhiteNotebookEdit from "./white-notebook-edit-outline.png";

function addImage(element, image, className) {
    const newImage = new Image();
    newImage.src = image;
    if (className != "") {
        newImage.classList.add(className);
    }
    element.appendChild(newImage);
}

addImage(document.getElementsByClassName("task-button")[0], Inbox, "inbox");
addImage(document.getElementsByClassName("task-button")[1], Today, "today");
addImage(document.getElementsByClassName("task-button")[2], ThisWeek, "this-week");
addImage(document.getElementsByClassName("task-button")[3], PlusBox, "add-project");
//addImage(document.getElementsByClassName("task-button")[4], PlusBox, "add-project");
//addImage(document.getElementById("task_option_1"), DarkBlueEdit, "");
//addImage(document.getElementById("task_option_2"), DarkBlueInformation, "");
//addImage(document.getElementById("task_option_3"), DarkBlueDelete, "");
addImage(document.getElementById("add_project_close_button"), WhiteCloseBox, "");
addImage(document.getElementById("add_project_button_save"), WhitePlus, "");
addImage(document.getElementsByClassName("heading-container")[0], WhiteFolder, "");
addImage(document.getElementById("add_task_button_save"), WhitePlus, "");
addImage(document.getElementById("add_task_header_container"), WhiteNotebookAdd, "");
addImage(document.getElementById("add_task_close_button"), WhiteCloseBox, "");

addImage(document.getElementById("info_task_close_button"), WhiteCloseBox, "");
addImage(document.getElementById("info_task_header_container"), WhiteInformation, "");

addImage(document.getElementById("edit_task_button_save"), WhiteContentSaveAll, "");
addImage(document.getElementById("edit_task_header_container"), WhiteNotebookEdit, "");
addImage(document.getElementById("edit_task_close_button"), WhiteCloseBox, "");
