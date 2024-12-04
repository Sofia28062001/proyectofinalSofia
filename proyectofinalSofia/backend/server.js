const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simulación de datos
const citas = [
  { id: 1, fecha: '2024-12-05', hora: '10:00 AM', doctor: 'Dr. Pérez' },
  { id: 2, fecha: '2024-12-10', hora: '12:00 PM', doctor: 'Dr. García' },
];


const medicamentos = [
  { id: 1, nombre: 'Paracetamol', dosis: '500mg', frecuencia: 'Cada 8 horas' },
  { id: 2, nombre: 'Ibuprofeno', dosis: '200mg', frecuencia: 'Cada 12 horas' },
];

const recetas = [
  { 
    id: 1, 
    descripcion: 'Receta para el tratamiento de dolor moderado a severo con analgésicos opioides, incluye instrucciones para su uso y dosis diaria recomendada.', 
    fecha: '2024-12-01' 
  },
  { 
    id: 2, 
    descripcion: 'Receta para tratamiento antibiótico de infecciones bacterianas comunes como la neumonía, incluye pautas sobre la duración del tratamiento y posibles efectos secundarios.', 
    fecha: '2024-12-03' 
  },
];

const especialidades = [
  'Cardiología',
  'Pediatría',
  'Dermatología',
  'Neurología',
  'Oftalmología',
  'Gastroenterología'
];

// Endpoints
app.get('/api/citas', (req, res) => res.json(citas));
app.get('/api/medicamentos', (req, res) => res.json(medicamentos));
app.get('/api/recetas', (req, res) => res.json(recetas));
app.get('/api/especialidades', (req, res) => res.json(especialidades));
// Endpoints
app.get('/api/citas', (req, res) => res.json(citas));
app.get('/api/medicamentos', (req, res) => res.json(medicamentos));
app.get('/api/recetas', (req, res) => res.json(recetas));

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

