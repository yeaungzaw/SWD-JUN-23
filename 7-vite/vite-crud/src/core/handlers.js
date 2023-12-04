import Swal from "sweetalert2";
import { rowRender, rowUi, toast, url } from "./functions";
import { courseEditForm, courseForm, editDrawer, rowGroup } from "./selectors";

export const courseFormHandler = (event) => {
    event.preventDefault();
    // console.log("submit");

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
                event.target.toggleAttribute("disabled");
                fetch(url("/courses/" + currentRowId), {
                    method: "DELETE",
                })
                    .then(res => {
                        event.target.toggleAttribute("disabled");

                        if (res.status == 204) {
                            toast("Course Deleted Successfully")
                            currentRow.remove();
                        }
                    })
            }
        });

    } else if (event.target.classList.contains("row-edit")) {
        const currentRow = event.target.closest("tr");
        const currentRowId = currentRow.getAttribute("course-id");

        event.target.toggleAttribute("disabled");

        // 1. retrieve old value
        fetch(url("/courses/" + currentRowId)).then(res => res.json()).then(json => {
            // 2. show old value
            editDrawer.show();
            courseEditForm.querySelector("#edit_course_id").value = json.id;
            courseEditForm.querySelector("#edit_course_title").value = json.title;
            courseEditForm.querySelector("#edit_short_name").value = json.short_name;
            courseEditForm.querySelector("#edit_course_fee").value = json.fee;
            event.target.toggleAttribute("disabled");
        })
        // 3. changes update
    }
}

export const courseEditFormHandler = (event) => {
    event.preventDefault();
    // url
    // method
    // id


    // header
    const myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");

    // body
    const formData = new FormData(courseEditForm);
    const currentId = formData.get("edit_course_id");
    const jsonData = JSON.stringify(
        {
            title: formData.get('edit_course_title'),
            short_name: formData.get('edit_short_name'),
            fee: formData.get('edit_course_fee')
        }
    )

    courseEditForm.querySelector("button").toggleAttribute("disabled");

    fetch(url("/courses/" + currentId), {
        method: "PUT",
        body: jsonData,
        headers: myHeader
    })
        .then(res => res.json())
        .then(json => {
            courseEditForm.querySelector("button").toggleAttribute("disabled");
            courseEditForm.reset();
            editDrawer.hide();

            const currentRow = rowGroup.querySelector(`tr[course-id='${json.id}']`);
            currentRow.querySelector(".row-title").innerText = json.title;
            currentRow.querySelector(".row-short").innerText = json.short_name;
            currentRow.querySelector(".row-fee").innerText = json.fee;
        });
};

export const editCellHandler = (event) => {
    if (event.target.classList.contains("cell-editable")) {
        const currentCell = event.target;
        const currentCellText = currentCell.innerText;
        const currentCellColName = currentCell.getAttribute("cell-col");
        const currentRow = currentCell.closest("tr");
        const currentRowId = currentRow.getAttribute("course-id");
        currentCell.innerText = "";

        const input = document.createElement("input");
        input.value = currentCellText;
        input.className =
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
        currentCell.append(input);
        input.focus();

        input.addEventListener("blur", () => {
            currentCell.innerText = input.value;

            const myHeader = new Headers();
            myHeader.append("Content-Type", "application/json");

            const update = {};
            update[currentCellColName] = currentCell.innerText;

            fetch(url("/courses/" + currentRowId), {
                method: "PATCH",
                headers: myHeader,
                body: JSON.stringify(update)
            })
                .then(res => res.json())
                .then(json => toast("Update Successfully!"))
        })
    }
}

export const searchInputHandler = (event) => {
    event.target.previousElementSibling.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" class="w-4 h-4 animate-spin">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
    `
    fetch(url("/courses?title[like]=" + event.target.value))
        .then(res => res.json())
        .then(json => {
            // console.log(json);
            event.target.previousElementSibling.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>`;

          if (json.length) {
            rowRender(json);
          } else {
            toast("Course Not Found");
            rowGroup.innerHTML = `
                <tr>
                    <td class="text-center px-6 py-3" colspan='5'>There is no course that you searched <a class="text-blue-500 underline text-sm" href="http://${location.host}">Browse all</a></td>
                </tr>
            `;
          }
        })
}