let input = document.querySelector("input");
let list = document.querySelector(".List");
// let btn=document.querySelector(".btn1");
// let newEl=document.querySelector(".Listing")
let button = document.querySelector(".btn");


button.addEventListener("click", () => {

    if (input.value === "") {
        alert("Please Enter the Tasks");
    } else {
        let newEl = document.createElement("div");
        newEl.setAttribute("class", "Listing");
        let par = document.createElement("p");
        par.setAttribute("class", "p")
        let btn = document.createElement("button");
        btn.innerHTML = "x";
        btn.setAttribute("class", "btn1");
        btn.style.display = "block";
        par = input.value;
        newEl.append(par)
        newEl.append(btn)
        list.prepend(newEl);
        input.value = "";

        btn.addEventListener("click", (e) => {
            newEl.remove();
        })


    }
})



