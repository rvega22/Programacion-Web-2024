
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
            localStorageGuardar()
        }
    });
}

function localStorageGuardar() {
    const guardar = [];
    const line_through = [];
    const tareas = document.querySelectorAll(".text");
    tareas.forEach(element => {
        guardar.push(element.textContent);
        line_through.push(element.style.textDecoration === "line-through");
    });
    localStorage.setItem("Tareas",JSON.stringify(guardar));
    localStorage.setItem("Subrayado",JSON.stringify(line_through));
}

function localStorageImprimir() {
    const tareas = JSON.parse(localStorage.getItem("Tareas"));
    const line_through = JSON.parse(localStorage.getItem("Subrayado"));

    if (tareas && line_through) {
        tareas.forEach((texto,index) => {
            const text = texto;
            const li = d.createElement("li");
            li.className = "li";
            const span = d.createElement("span");
            span.textContent = text;
            span.className = "text";
            
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            if (line_through[index]) {
                span.style.textDecoration = "line-through";
                checkbox.checked = true;
            }
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

