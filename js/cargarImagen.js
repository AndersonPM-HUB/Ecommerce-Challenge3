// Función para manejar el arrastre sobre el contenedor
function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

// Función para manejar el soltado de la imagen en el contenedor
function dropHandler(event) {
    event.preventDefault();
    var files = event.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }

// Función para manejar la selección de la imagen desde el input
function handleFileSelect(event) {
    var files = event.target.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }

// Función para procesar la imagen seleccionada o arrastrada
function handleFile(file) {
    document.querySelector(".text-imagen").textContent= file.name
    // Aquí puedes realizar acciones con la imagen, como mostrarla en una vista previa o subirla a un servidor
    console.log("Nombre del archivo: " + file.name);
    console.log("Tipo de archivo: " + file.type);
    console.log("Tamaño del archivo: " + file.size + " bytes");
  }
