const departamentos = {
    "Antioquia": ["Medellín", "Envigado", "Itagüí", "Bllo"],
    "Cundinamarca": ["Bogotá", "Soacha", "Zipaquirá", "Chiá"],
    "Valle del cauca": ["Cali", "Palmira", "Buga", "Tuluá"],
    "Tolima": ["Ibagué", "Espinal", "Melgar", "Honda", "Líbano"],
    "Atlántico": ["Barranquilla", "Soledad", "Malambo"],
    "Santander": ["Bucaramanga", "Floridablanca", "Girón"]
};

const selectDepto = document.getElementById("depto");
const selectCiudad = document.getElementById("ciudad");
const formColombia = document.getElementById("formColombia");

Object.keys(departamentos).forEach(depto => {
    const opt = document.createElement("option");
    opt.value = depto;
    opt.textContent = depto;
    selectDepto.appendChild(opt);
});

selectDepto.addEventListener("change", () =>{
    const depto = selectDepto.value;
    const ciudades = departamentos[depto] || [];
    selectCiudad.innerHTML = '<option value="">selecciona...</option>';
    selectCiudad.disable = ciudades.length === 0;

    ciudades.forEach(ciudad => {
        const opt = document.createElement("option");
        opt.value = ciudad;
        opt.textContent = ciudad;
        selectCiudad.appendChild(opt);
        
    });
})

formColombia.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const depto = selectDepto.value;
    const ciudad = selectCiudad.value;

    console.log(`${nombre} vive en ${ciudad}, ${depto}`);
})