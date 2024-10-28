
const d = document;

const $boton = d.querySelector("#agregar");
const $input = d.querySelector("#lista_tareas");
const $error = d.querySelector("#error");
const $ul = d.querySelector("ul");

localStorageImprimir();

d.addEventListener("click", e => {
    if(e.target.matches("#agregar")) {
        if($input.value === "") {
            $error.textContent = "Error, input vacio";
            console.log("Hola")
        } else {
            agregar();
        }
    }
})
check();
eliminarbtn();

function eliminarbtn() { 
    d.addEventListener("click", e => {
        if(e.target.matches(".eliminar")) {
            const item = e.target.parentElement;
            $ul.removeChild(item);
            localStorageGuardar();
        }
    })
}

function check() {
    document.addEventListener("change", e => {
        
        if (e.target.type === "checkbox") {
            const item = e.target.parentElement; 
            const $span = item.querySelector("span"); 

            if (e.target.checked) {
                $span.style.textDecoration = "line-through";
            } else {
                $span.style.textDecoration = "none";
            }
        }
    });
}

function localStorageGuardar() {
    const guardar = [];
    const tareas = document.querySelectorAll(".text");
    tareas.forEach(element => {
        
        guardar.push(element.textContent)
    });
    console.log(guardar)
    localStorage.setItem("Tareas",JSON.stringify(guardar));
}

function localStorageImprimir() {
    const tareas = JSON.parse(localStorage.getItem("Tareas"));
    if (tareas) {
        tareas.forEach(texto => {
            const text = texto;
            const li = d.createElement("li");
            li.className = "li";
            const span = d.createElement("span");
            span.textContent = text;
            span.className = "text";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            const btnDelete = d.createElement("button");
            btnDelete.textContent = "Eliminar";
            btnDelete.className = "eliminar";
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(btnDelete);
            $ul.appendChild(li);
        });
    }

}

function agregar() {
    $error.textContent = "";
    const text = $input.value;
    const li = d.createElement("li");
    li.className = "li";
    const span = d.createElement("span");
    span.textContent = text;
    span.className = "text";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const btnDelete = d.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.className = "eliminar";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnDelete);
    $ul.prepend(li);
    localStorageGuardar(); 
    $input.value = "";
}

