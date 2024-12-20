<!DOCTYPE html>
<html lang="Es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spectralook</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/fe8d3f6ced.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    </head>

    <body class="body">
        <?php 
            include_once 'layouts/header.php';
        ?>
        
        <main>
            <div class="box_main">
                <div class="ofertas_info">
                    <h2>Ofertas especiales</h2>
                    <p id="tamaño_de_letra">Aprovecha las ofertas excepcionales en nuestros mejores lentes para este regreso a clases.</p>
                    <a href=""><button class="button_info">Ver mas</button></a>
                    <img class="imagen_descuento" src="img/Imagen_rebajas.png" alt="Imagen de una etiqueta de descuento"> 
                </div>
                
                <div class="ofertas_info">
                    <div class="cuadro_decoracion"></div>
                    <img class="imagen_main" src="img/imagen_main.png" alt="Imagen Joven con lentes de sol">
                </div>
            </div>
        </main>
        
        <?php 
            include 'layouts/recomendaciones.php';
        ?>

        <div class="seccion_imagenes">
            <div class="bloque">
                <p class="texto">LENTES TRANSPARENTES GRADUADOS</p>
                <a href="#" class="button_base" id="button_info">Ver más</a>
            </div>
        
            <div class="bloque">
                <p class="texto">MÁS ÚNICOS QUE NUNCA</p>
                <a href="#" class="button_base" id="button_info">Ver más</a>
            </div>
        </div>

        <?php 
            include_once 'layouts/footer.php';
        ?>
        
    </body>
</html>