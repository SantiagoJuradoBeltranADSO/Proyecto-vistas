const data = [
  "Dato 1", "Dato 2", "Dato 3", "Dato 4", "Dato 5",
  "Dato 6", "Dato 7", "Dato 8", "Dato 9", "Dato 10",
  "Dato 11", "Dato 12", "Dato 13", "Dato 14", "Dato 15",
  "Dato 16", "Dato 17", "Dato 18", "Dato 19", "Dato 20",
  "Dato 21", "Dato 22", "Dato 23", "Dato 24", "Dato 25",
  "Dato 26", "Dato 27", "Dato 28", "Dato 29", "Dato 30", "Dato 31", "Dato 32", "Dato 33", "Dato 34", "Dato 35", "Dato 36", "Dato 37", "Dato 38", "Dato 39", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40", "Dato 40"
];

let currentIndex = 0;
let itemsPerPage = 25; // Valor predeterminado

document.addEventListener('DOMContentLoaded', init);

function init() {
  // Inicializar la cuadrícula
  loadGrid();

  // Agregar event listeners a los botones de navegación
  document.getElementById('prevBtn').addEventListener('click', prevPage);
  document.getElementById('nextBtn').addEventListener('click', nextPage);
  document.getElementById('saveBtn').addEventListener('click', saveData);

  // Actualizar itemsPerPage si la pantalla es pequeña (móvil)
  updateItemsPerPage();
  window.addEventListener('resize', updateItemsPerPage);
}

function updateItemsPerPage() {
  // Si la pantalla es pequeña (ancho <= 480px), establecer itemsPerPage en 25
  itemsPerPage = window.innerWidth <= 480 ? 10 : 40;
  // Recargar la cuadrícula con el nuevo número de elementos por página
  loadGrid();
}

function prevPage() {
  if (currentIndex > 0) {
    currentIndex -= itemsPerPage;
    loadGrid();
  }
}

function nextPage() {
  if (currentIndex + itemsPerPage < data.length) {
    currentIndex += itemsPerPage;
    loadGrid();
  }
}

function loadGrid() {
  const container = document.getElementById('grid-container_inv');
  container.innerHTML = '';

  for (let i = currentIndex; i < currentIndex + itemsPerPage; i++) {
    const item = document.createElement('div');
    item.classList.add('grid-item_inv');

    const input = document.createElement('input');
    input.type = 'text';
    input.value = i < data.length ? data[i] : ''; // Evitar error si i es mayor que la longitud de data

    item.appendChild(input);
    container.appendChild(item);
  }
}

function saveData() {
  // Aquí puedes implementar la lógica para guardar los datos
  console.log('Guardando datos...');
}