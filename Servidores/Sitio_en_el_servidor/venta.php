<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/fe8d3f6ced.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body class="body">
    <?php 
        include_once 'layouts/header.php';
    ?>

    <main class="contenedor_principal">
        <section>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="img/Imagen_venta_1.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="img/Imagen_venta_2.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="img/Imagen_venta_3.png" class="d-block w-100" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </section>

        <div class="overflow-y-auto contenedor_info">
            <div class="contenedor_info">
                <h2>SPECTRA ROAD METAL</h2>
            </div>

            <div class="contenedor_info">
                <h4>Tamaño</h4>
                <p>S(50-22)</p>
            </div>

            <div class="contenedor_info">
                <a href="#" class="button_base" id="button_info">Micas</a>
                <a href="#" class="button_base" id="button_info">Armazon</a>
                <a href="#" class="button_base" id="button_info">Estuche</a>
            </div>

            <div class="contenedor_info">
                <h4 class="titulos_espacio">Micas</h4>
                <label for="exampleColorInput" class="form-label titulos_espacio">Color picker</label>
                <input type="color" class="form-control form-control-color" id="exampleColorInput button_info" value="#563d7c" title="Choose your color">
            </div>
    
            <div class="contenedor_info">
                <h4 class="titulos_espacio">Armazon</h4>
                <label for="exampleColorInput" class="form-label titulos_espacio margin">Frente</label>
                <input type="color" class="form-control form-control-color" id="exampleColorInput button_info" value="#70262a" title="Choose your color">

                <label for="exampleColorInput" class="form-label titulos_espacio margin">Varilla</label>
                <input type="color" class="form-control form-control-color" id="exampleColorInput button_info" value="#bbaf3f" title="Choose your color">
            </div>
    
            <div class="contenedor_info">
                <h4 class="titulos_espacio">Estuche</h4>
                <div>
                    <img class="imagen_estuche" src="img/Estuche_Lentes.jpg" alt="Estuche de Lentes">
                    <h6>Coffe</h6>
                    <label for="exampleColorInput" class="form-label titulos_espacio">Incluidos</label>
                </div>
            </div>

            <div class="contenedor_info">
                <h4 class="titulos_espacio">Precio</h4>
                <div class="info_precio">
                    <p class="alinear_texto">$ 4200</p>
                    <a href="#" class="button_base" id="button_info">Añadir al carrito</a>

                </div>
            </div>
    
        </div>
    </main>

    <nav class="centrar_nav">
        <h3 class="titulos_espacio letra_recomendaciones">Recomendaciones</h3>

        <div class="target">
            <a href="">
                <img class="target_img centrar_img" src="img/Imagen_lentes_3.png" alt="Imagen de lentes" width="100%">
                <h2 class="letra" id="tamanio">LOOK BASE-HOT</h2>
                <p class="alinear_texto">$ 3200</p>
            </a>
        </div>
    
        <div class="target">
            <a href="">
                <img class="target_img centrar_img" src="img/Imagen_lentes_4.png" alt="Imagen de lentes" width="100%">
                <h2 class="letra" id="tamanio">X8 SPECTRA MODERN</h2>
                <p class="alinear_texto">$ 2299</p>
            </a>
        </div>
    
        <div class="target">
            <a href="">
                <img class="target_img centrar_img" src="img/Imagen_lentes_5.png" alt="Imagen de lentes" width="100%">
                <h2 class="letra" id="tamanio">WAYFARER ONE</h2>
                <p class="alinear_texto">$ 4499</p>
            </a>
        </div>
    
        <div class="target">
            <a href="">
                <img class="target_img centrar_img" src="img/Imagen_lentes_3.png" alt="Imagen de lentes" width="100%">
                <h2 class="letra" id="tamanio">LOOK BASE-HOT</h2>
                <p class="alinear_texto">$ 3200</p>
            </a>
        </div>
    
        <div class="target">
            <a href="">
                <img class="target_img centrar_img" src="img/Imagen_lentes_4.png" alt="Imagen de lentes" width="100%">
                <h2 class="letra" id="tamanio">X8 SPECTRA MODERN</h2>
                <p class="alinear_texto">$ 2299</p>
            </a>
        </div>
    </nav>
    <?php 
        include_once 'layouts/footer.php';
    ?>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</html>