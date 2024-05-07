// Declaración de una variable global slideIndex y se inicializa en 0
let slideIndex = 0;

// Función para mostrar los slides
function showSlides() {
  // Selecciona todos los elementos HTML con la clase 'carousel-content' y dentro de ellos, los elementos 'img'
  const slides = document.querySelectorAll('.carousel-content img');
  
  // Itera sobre todos los slides y remueve la clase 'active' para ocultarlos
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  // Incrementa el índice del slide actual
  slideIndex++;
  
  // Si slideIndex es mayor que la cantidad de slides, vuelve al primer slide
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  // Agrega la clase 'active' al slide actual para mostrarlo
  slides[slideIndex - 1].classList.add('active');

  // Establece un temporizador para llamar a la función showSlides() cada 2000 milisegundos (2 segundos)
  setTimeout(showSlides, 2000); 
}

// Inicia el carrusel llamando a la función showSlides()
showSlides();
