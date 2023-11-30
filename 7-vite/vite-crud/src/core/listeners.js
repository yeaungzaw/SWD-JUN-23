import { courseFormHandler, rowGroupHandler } from "./handlers";
import { courseForm, rowGroup } from "./selectors";

const listeners = () => {
    courseForm.addEventListener("submit", courseFormHandler);
    rowGroup.addEventListener("click", rowGroupHandler);
}

export default listeners;