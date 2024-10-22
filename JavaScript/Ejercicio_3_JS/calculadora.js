
//const $operaciones = document.querySelectorAll("button");

function $operaciones(PanelBoton,resultado) {
    let $cuadro = document.getElementById(resultado);
    const d = document;
    console.log($cuadro)
    d.addEventListener("click",e => {
        let texto = e.target.textContent;

        if (e.target.textContent === "C") {
            $cuadro.textContent = ""; 
        } else if (e.target.textContent === "+") {
            $cuadro.textContent = $cuadro.textContent + " " + texto + " ";
        } else if (e.target.textContent === "-") {
            $cuadro.textContent = $cuadro.textContent + " " + texto + " ";
        } else if (e.target.textContent === "*") {
            $cuadro.textContent = $cuadro.textContent + " " + texto + " ";
        } else if (e.target.textContent === "/") {
            $cuadro.textContent = $cuadro.textContent + " " + texto + " ";
        } else if (e.target.textContent === "=") {
            const $historial = d.getElementById("historial");
            const p = d.createElement("p");

            try {
                if((/\/\s*0/).test($cuadro.textContent)) {
                    alert("Hay un error en tu operacion vuelve a intentarlo");
                    $cuadro.textContent = "";
                }else {
                    p.textContent = $cuadro.textContent + " = " + eval($cuadro.textContent);
                    $historial.appendChild(p);
                    $cuadro.textContent = eval($cuadro.textContent);
                }
            } catch (error) {
                alert("Hay un error en tu operacion vuelve a intentarlo");
                $cuadro.textContent = "";
            }
        } else if (e.target.matches(PanelBoton)) {

            $cuadro.textContent = $cuadro.textContent + texto;

        }
    })
}

$operaciones(".boton-num","cuadro");


