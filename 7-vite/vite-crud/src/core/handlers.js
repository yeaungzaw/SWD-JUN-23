import Swal from "sweetalert2";
import { rowRender, rowUi, toast, url } from "./functions";
import { courseForm, rowGroup } from "./selectors";

export const courseFormHandler = (event) => {
    event.preventDefault();
    console.log("submit");

    const formData = new FormData(courseForm);
    const json = JSON.stringify(
        {
            title: formData.get('course_title'),
            short_name: formData.get('short_name'),
            fee: formData.get('course_fee')
        }
    )

    const myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");

    courseForm.querySelector("button").toggleAttribute("disabled");

    fetch(url("/courses"), {
        method: "POST",
        headers: myHeader,
        body: json
    })
        .then(res => res.json())
        .then(json => {
            courseForm.querySelector("button").toggleAttribute("disabled");
            rowGroup.append(rowUi(json));
            courseForm.reset();
            toast("Course Create Successfully");
        });
}

export const rowGroupHandler = (event) => {
    if (event.target.classList.contains("row-del")) {
        const currentRow = event.target.closest("tr");
        const currentRowId = currentRow.getAttribute("course-id");

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url("/courses/" + currentRowId), {
                    method: "DELETE",
                })
                    .then(res => {
                        if (res.status == 204) {
                            toast("Course Deleted Successfully")
                            currentRow.remove();
                        }
                    })
            }
        });
        
    }
}