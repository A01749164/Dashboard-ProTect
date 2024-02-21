function Tabla() {
  // Datos de ejemplo
  const datos = [
    { id: 1, nombre: "Juan", edad: 30 },
    { id: 2, nombre: "María", edad: 25 },
    { id: 3, nombre: "Pedro", edad: 35 },
    
  ];

  return (
    <div className="container py-4">
      <h2>Tabla de Datos</h2>
      <table class="table table-success">
       
    
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.edad}</td>
             
            </tr>
          ))}
        </tbody>
    
      </table>
    </div>
  );
}

export default Tabla;
