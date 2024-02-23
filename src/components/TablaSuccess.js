import React, { useState } from "react";
import { Modal } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar los estilos de Bootstrap


function TablaSuccess() {
  // Datos de ejemplo
  const datos = [
    { id: 1, nombre: "Juan", edad: 30 },
    { id: 2, nombre: "María", edad: 25 },
    { id: 3, nombre: "Pedro", edad: 35 },
    
  ];

   // Estado para controlar la apertura y cierre del modal
   const [modalOpen, setModalOpen] = useState(false);
   // Estado para almacenar los datos del usuario seleccionado para mostrar en el modal
   const [selectedUser, setSelectedUser] = useState(null);
 
   // Función para abrir el modal y establecer los datos del usuario seleccionado
   const openModal = (user) => {
     setSelectedUser(user);
     setModalOpen(true);
   };

  return (
    <div className="container py-4">
      <h2>Personas que están a Salvo</h2>
      <table class="table table-success">
       
    
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Información</th>
          </tr>
        </thead>

        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.edad}</td>
              <td><button onClick={() => openModal(dato)}>Ver Detalles</button></td>
            </tr>
          ))} 
        </tbody>
        
      </table> 
      {/* Renderizar el Modal */}
      <div className="modal" tabIndex="-1" style={{ display: modalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detalles del Usuario</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={() => setModalOpen(false)}></button>
            </div>
            <div className="modal-body">
              {selectedUser && (
                <>
                  <p>ID: {selectedUser.id}</p>
                  <p>Nombre: {selectedUser.nombre}</p>
                  <p>Edad: {selectedUser.edad}</p>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setModalOpen(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default TablaSuccess;
