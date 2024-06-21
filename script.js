document.querySelectorAll(".reveal")
    .forEach(function(elem){
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");

        spanParent.classList.add("parent");
        spanChild.classList.add("child");

        spanChild.textContent = elem.textContent;
        spanParent.appendChild(spanChild);

        elem.innerHTML = "";
        elem.appendChild(spanParent);
    })