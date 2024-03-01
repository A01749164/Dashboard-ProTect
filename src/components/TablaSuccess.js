import React, { useState, useEffect } from "react";
import { Modal } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar los estilos de Bootstrap
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet/dist/images/marker-icon.png';
import customMarkerIcon from './location-pin.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

function TablaSuccess() {
   // Datos de ejemplo
   const [datos, setDatos] = useState([]);
   // Estado para controlar la apertura y cierre del modal
   const [modalOpen, setModalOpen] = useState(false);
   // Estado para almacenar los datos del usuario seleccionado para mostrar en el modal
   const [selectedUser, setSelectedUser] = useState(null);
 
   // Función para abrir el modal y establecer los datos del usuario seleccionado
   const openModal = (user) => {
     setSelectedUser(user);
     setModalOpen(true);
   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://protect.vicmr.com/dashboard/safe/info");
        if (response.ok) {
          const data = await response.json();
          setDatos(data);
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container py-4">
      <h2>Personas que están a Salvo</h2>
      <table class="table table-success">
       
    
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Lugar</th>
            <th>Información</th>
          </tr>
        </thead>

        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.detalles}</td>
              <td>{dato.nombre}</td>
              <td>{dato.lugar}</td>
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
                  <p>ID: {selectedUser.detalles}</p>
                  <p>Nombre: {selectedUser.nombre}</p>
                  <p>Lugar: {selectedUser.lugar}</p>
                  <p>Latitud: {selectedUser.latitud}</p>
                  <p>Longitud: {selectedUser.longitud}</p>
                  <MapContainer
                    center={[selectedUser.latitud, selectedUser.longitud]}
                    zoom={17}
                    style={{ height: "400px" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                      position={[selectedUser.latitud, selectedUser.longitud]}
                        icon={L.icon({
                        iconUrl: customMarkerIcon,
                        iconSize: [40, 40],
                        //iconAnchor: [12, 41],
                        popupAnchor: [1, -10],
                        //tooltipAnchor: [16, -28],
                      })}
                    >
                      <Popup>
                        {selectedUser.nombre}'s location
                      </Popup>
                    </Marker>
                  </MapContainer>
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
