// const obj = {
//     a: "aaa",
//     b: "bbb",
//     c: "ccc"
// }

const arr = ["aaa", "bbb", "ccc"]

// const json1 = JSON.stringify(obj);
// const json2 = JSON.stringify(arr);

// console.log(json1);
// console.log(json2);

const fetchBtn = document.querySelector("#fetchBtn");
const myForm = document.querySelector("#myForm");
const storeBtn = document.querySelector("#storeBtn");

// myForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formDate = new FormData(myForm);

//     fetch("https://localhost:9000/server.php", {
//         method: "POST",
//         body: "formData"
//     })
//     .then(res => res.text())
//     .then(text => console.log(text))
// })



// fetchBtn.addEventListener("click", () => {
    // data fetch
    // url - end point, http method,
    // fetch("https://fakestoreapi.com/products")
    // .then(res => res.text())
    // .then(text => console.log(JSON.parse(text)))

    // fetch("https://fakestoreapi.com/products")
    // .then(res => res.json())
    // .then(json => console.log(json))

    // var xhr = new XMLHttpRequest();

    // // Configure it: specify the type of request and the URL you want to send the request to
    // xhr.open('GET', 'https://fakestoreapi.com/products', true);

    // // Set up a callback function to handle the response
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         // The request is complete, and the response is successfully received
    //         console.log(JSON.parse(xhr.responseText));
    //     }
    // };

    // // Send the request
    // xhr.send();

// })

storeBtn.addEventListener("click", () => {

    // localStorage.setItem("myName", "ye aung zaw");
    // sessionStorage.setItem("myName", "ye aung zaw");

    // localStorage.setItem("skills", ["developer", "singer", "footballer"]);

    // localStorage.setItem("obj", JSON.stringify({a: "aaa", b: "bbb", c: "ccc"}));

    // document.cookie = "name=ye aung zaw";
    // document.cookie = "age=29; expires=Sat Nov 25 2023 22:00:00 GMT";

})