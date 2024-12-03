import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainContent ({ activeSection }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Llamar a la API cuando cambie la sección activa
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await axios.get(`/api/${activeSection}`);
    //             setData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     if (activeSection) {
    //         fetchData();
    //     }
    // }, [activeSection]);

    // return (
    //     <main className="main-content">
    //         <h1>{activeSection.toUpperCase()}</h1>
    //         {loading ? (
    //             <p>Cargando datos...</p>
    //         ) : (
    //             <div>
    //                 {data ? (
    //                     <p>{data}</p>
    //                 ) : (
    //                     <p>No hay datos disponibles.</p>
    //                 )}
    //             </div>
    //         )}
    //     </main>
    // );
};

export default MainContent;
