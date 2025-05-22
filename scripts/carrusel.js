document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById('colorSelector');
  const carouselItems = document.querySelectorAll('#carouselExampleAutoplaying .carousel-item img');

  const imageSets = {
    blanco: ['imagenes/blanco1.png', 'imagenes/blanco2.png', 'imagenes/blanco3.png'],
    rojo: ['imagenes/rojo1.png', 'imagenes/rojo2.png', 'imagenes/rojo3.png'],
    negro: ['imagenes/negro1.png', 'imagenes/negro2.png', 'imagenes/negro3.png']
  };

  selector.addEventListener('change', () => {
    const selectedColor = selector.value;
    const selectedImages = imageSets[selectedColor];

    carouselItems.forEach((img, index) => {
      img.src = selectedImages[index];
    });
  });
});