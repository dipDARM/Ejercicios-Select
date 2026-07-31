let productos = [
    { id: 1, nombre: " Teclado", precio: 80000, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 35000, stock: 12 },
    { id: 3, nombre: "Monitor", precio: 550000, stock: 3 }
];
let nextId = 4;

const tbody = document.getElementById("tbodyProductos");
const btnAgregar = document.getElementById("btnAgregar")

function renderTabla () {
    tbody.innerHTML = "";
    productos.forEach(p => {
        const fila = document.createElement("tr");
        fila.innerHTML = ` 
        <td>${p.nombre}</td>
        <td>$${p.precio.toLocaleString('es-CO')}</td>
        <td>${p.stock}</td>
        <td>
            <button class="btn btn-sm btn-outline-danger btn-restar" data-id="${p.id}">-</button>
            <button class="btn btn-sm btn-outline-success btn-sumar" data-id="${p.id}">+</button>
            <button class="btn btn-sm btn-outline-secondary btn-eliminar" data-id="${p.id}">Eliminar</button>
        </td>`
        tbody.appendChild(fila);
    });
}

tbody.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    if (btn.classList.contains("btn-sumar")) producto.stock++;
    else if (btn.classList.contains("btn-restar") && producto.stock > 0) producto.stock--;
    else if (btn.classList.contains("btn-eliminar")) productos = productos.filter(p => p.id !== id);

    renderTabla();
})

btnAgregar.addEventListener("click", () => {
    productos.push({ id: nextId++, nombre: "Nuevo producto", precio: 10000, stock: 1 });
    renderTabla();
})

renderTabla();