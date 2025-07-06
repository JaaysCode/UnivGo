"use client";
import React, { useState } from 'react';  // Añadido useState
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import GuestsCounter from '@/app/protected/sports/components/GuestsCounter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';  // Añadido dayjs
import 'dayjs/locale/es'; // Importa el locale español

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  spaceName?: string;  // Añadido para recibir el nombre del espacio
}

const BookingModal = ({ isOpen, onClose, spaceName = "espacio" }: BookingModalProps) => {
  // Añadidas variables de estado
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [guestCount, setGuestCount] = useState<number>(0);
  
  // Establece español como locale predeterminado
  dayjs.locale('es');

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
            className="z-50 w-full max-w-4xl rounded-lg bg-white p-6 shadow-xl overflow-hidden"
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

            {/* Layout de dos columnas - CORREGIDO */}
            <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
              {/* Columna izquierda: Calendario */}
              <div className="flex-1 min-w-0 max-w-full"> {/* Añadido min-w-0 y max-w-full */}
                <h3 className="text-lg font-medium text-gray-700 mb-2">Selecciona tu día</h3>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    disablePast
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    sx={{
                      // Asegurando tamaño máximo para el calendario
                      width: '100%',
                      maxWidth: '100%',
                      overflowX: 'hidden',
                      // Día seleccionado
                      '& .MuiPickersDay-root.Mui-selected': { 
                        backgroundColor: 'var(--primary-red)',
                        color: 'white',
                        '&:hover, &:focus': {
                          backgroundColor: 'var(--secondary-red)',
                        },
                      },
                      // Día seleccionado al pasar el mouse
                      '& .MuiPickersDay-root.Mui-selected:hover': {
                        backgroundColor: 'var(--secondary-dark-red)',
                      },
                      // Día actual
                      '& .MuiPickersDay-root.MuiPickersDay-today': {
                        borderColor: 'var(--primary-blue)',
                        color: 'var(--primary-dark-blue)',
                        fontWeight: 'bold',
                      },
                      // Día al pasar el mouse
                      '& .MuiPickersDay-root:hover': {
                        backgroundColor: 'var(--primary-blue)',
                        color: 'var(--background)',
                      },
                      // Encabezado del mes y año
                      '& .MuiPickersCalendarHeader-label': {
                        color: 'var(--text)',
                        fontWeight: 700,
                      },
                      // Flechas de navegación
                      '& .MuiPickersArrowSwitcher-button': {
                        color: 'var(--primary-dark-blue)',
                        '&:hover': {
                          backgroundColor: 'var(--gray-light)',
                        }
                      },
                      // Días de la semana (L, M, X...)
                      '& .MuiDayCalendar-weekDayLabel': {
                        color: 'var(--text-light)',
                        fontWeight: 500,
                      },
                      // Días deshabilitados
                      '& .MuiPickersDay-root.Mui-disabled': {
                        color: 'var(--primary-gray)',
                        backgroundColor: 'transparent',
                      },
                      // Fondo del calendario
                      backgroundColor: 'var(--background-color)',
                      borderRadius: 2,
                      boxShadow: 'none',
                      // Borde del calendario
                      border: '1px solid var(--primary-gray)',
                      padding: 1,
                    }}
                  />
                </LocalizationProvider>
              </div>

              {/* Columna derecha: Contador de invitados */}
              <div className="flex-1 min-w-0 flex flex-col justify-start"> {/* Añadido min-w-0 */}
                <h3 className="text-lg font-medium text-gray-700 mb-2">Invitados</h3>
                <p className="text-sm text-gray-500 mb-4">Selecciona el número de personas que asistirán</p>
                
                {/* Contador de invitados */}
                <div className="mt-2 mb-4 overflow-visible"> {/* Añadido overflow-visible */}
                  <GuestsCounter value={guestCount} onChange={setGuestCount} />
                </div>
                
                {/* Mensaje de confirmación */}
                {(selectedDate || guestCount > 0) && (
                  <div className="mt-2 mb-6 p-4 bg-[var(--background-color)] border border-[var(--primary-gray)] rounded-lg text-center max-w-full"> {/* Añadido max-w-full */}
                    <p className="text-[var(--text)] text-sm break-words"> {/* Añadido break-words */}
                      Su reserva del <span className="font-medium text-[var(--primary-red)]">{spaceName}</span> para{' '}
                      <span className="font-medium text-[var(--primary-red)]">
                        {guestCount}
                      </span>{' '}
                      {guestCount === 1 ? 'persona' : 'personas'} será realizada para el día{' '}
                      <span className="font-medium text-[var(--primary-blue)]">
                        {selectedDate 
                          ? selectedDate.locale('es').format('dddd D [de] MMMM [de] YYYY')
                          : 'seleccionado'}
                      </span>
                    </p>
                  </div>
                )}

                {/* Espaciador para alinear el botón al fondo */}
                <div className="flex-grow"></div>
                
                {/* Botones de acción */}
                <div className="mt-6 flex justify-end space-x-3">
                  <Button text='Cancelar' onClick={onClose}/>
                  <Button text='Reservar'/>
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