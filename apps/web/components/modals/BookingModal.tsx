"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import GuestsCounter from '@/app/protected/sports/components/GuestsCounter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay con animación de fade */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30"
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Modal con animación */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            className="z-50 w-full max-w-3xl rounded-lg bg-white p-6 shadow-xl"
          >
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Reserva tu espacio</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Layout de dos columnas */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Columna izquierda: Calendario */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Selecciona tu día</h3>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar 
                    disablePast
                    sx={{
                      '& .MuiPickersDay-root.Mui-selected': { 
                        backgroundColor: '#3b82f6',
                        color: 'white',
                      }
                    }}
                  />
                </LocalizationProvider>
              </div>

              {/* Columna derecha: Contador de invitados */}
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Invitados</h3>
                <p className="text-sm text-gray-500 mb-4">Selecciona el número de personas que asistirán</p>
                
                {/* Contador de invitados */}
                <div className="mt-2">
                  <GuestsCounter />
                </div>

                {/* Espaciador para alinear el botón al fondo */}
                <div className="flex-grow"></div>
                
                {/* Botones de acción */}
                <div className="mt-6 flex justify-end space-x-3">

                  <Button text = 'Cancelar'onClick={onClose}/>
                  <Button text = 'Reservar'/>
                  {/* <button
                    onClick={onClose}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Confirmar reserva
                  </button> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;