"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker'; // Añadir este import
import GuestsCounter from '@/app/protected/sports/components/GuestsCounter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { Button } from '@/src/shared/components/ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  spaceName?: string;
  maxGuests?: number; // Añadido para límite de invitados
}

const BookingModal = ({ isOpen, onClose, spaceName = "espacio", maxGuests = 10 }: BookingModalProps) => {
  // Variables de estado
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [guestCount, setGuestCount] = useState<number>(0);
  // Nuevos estados para la hora de entrada y salida
  const [startTime, setStartTime] = useState<dayjs.Dayjs | null>(null);
  const [endTime, setEndTime] = useState<dayjs.Dayjs | null>(null);
  const [guestIdentifications, setGuestIdentifications] = useState<string[]>(Array(maxGuests).fill(''));

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
            className="z-50 w-full max-w-4xl max-h-[90vh] rounded-lg bg-white p-6 shadow-xl overflow-hidden flex flex-col"
          >
            {/* Encabezado del modal - siempre visible */}
            <div className="mb-4 flex justify-between items-center shrink-0">
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

            {/* Contenedor con scroll para el contenido principal */}
            <div className="overflow-y-auto flex-grow">
              {/* Layout de dos columnas */}
              <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
                {/* Columna izquierda: Calendario */}
                <div className="flex-1 min-w-0 max-w-full">
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

                {/* Columna derecha: Invitados y Hora */}
                <div className="flex-1 min-w-0 flex flex-col justify-start">
                  {/* Sección de invitados */}
                  <h3 className="text-lg font-medium text-gray-700">Invitados</h3>
                  <p className="mb-3 text-sm text-gray-500">Selecciona el número de personas que asistirán</p>
                  
                  <div className="overflow-visible">
                    <GuestsCounter value={guestCount} onChange={setGuestCount} maxValue={maxGuests} />
                  </div>
                  
                  {/* Nueva sección de selección de hora */}
                  <h3 className="text-lg font-medium text-gray-700 mt-4">Horario</h3>
                  <p className="text-sm text-gray-500 mb-3">Selecciona la hora de entrada y salida</p>
                  
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="flex flex-col space-y-4 mb-4">
                      {/* Selector de hora de entrada */}
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Hora de entrada</p>
                        <TimePicker
                          value={startTime}
                          onChange={(newValue) => {
                            setStartTime(newValue);
                            // Si la hora de salida es anterior a la nueva hora de entrada, ajustarla
                            if (endTime && newValue && endTime.isBefore(newValue)) {
                              setEndTime(newValue.add(1, 'hour'));
                            }
                          }}
                          sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                              borderColor: 'var(--primary-gray)',
                              '&:hover fieldset, &.Mui-focused fieldset': {
                                borderColor: 'var(--primary-red) !important',
                              },
                            },
                            '& .MuiInputBase-input': {
                              color: 'var(--text)',
                              padding: '10px 14px',
                            },
                            '& .MuiSvgIcon-root': {
                              color: 'var(--primary-blue)',
                            },
                            // Estilo para el popover del selector de tiempo
                            '& .MuiClock-pin': {
                              backgroundColor: 'var(--primary-red)',
                            },
                            '& .MuiClock-hand': {
                              backgroundColor: 'var(--primary-red)',
                            },
                            '& .MuiClockNumber-root.Mui-selected': {
                              backgroundColor: 'var(--primary-red)',
                            },
                          }}
                        />
                      </div>
                      
                      {/* Selector de hora de salida */}
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Hora de salida</p>
                        <TimePicker
                          value={endTime}
                          onChange={setEndTime}
                          // Deshabilitar horas anteriores a la hora de entrada
                          minTime={startTime || undefined}
                          disabled={!startTime} // Deshabilitar si no hay hora de entrada
                          sx={{
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                              borderColor: 'var(--primary-gray)',
                              '&:hover fieldset, &.Mui-focused fieldset': {
                                borderColor: 'var(--primary-red) !important',
                              },
                              '&.Mui-disabled': {
                                backgroundColor: 'var(--gray-light)',
                                opacity: 0.7,
                              },
                            },
                            '& .MuiInputBase-input': {
                              color: 'var(--text)',
                              padding: '10px 14px',
                              '&.Mui-disabled': {
                                color: 'var(--primary-gray)',
                              },
                            },
                            '& .MuiSvgIcon-root': {
                              color: 'var(--primary-blue)',
                              '&.Mui-disabled': {
                                color: 'var(--primary-gray)',
                              },
                            },
                            // Estilo para el popover del selector de tiempo
                            '& .MuiClock-pin': {
                              backgroundColor: 'var(--primary-red)',
                            },
                            '& .MuiClock-hand': {
                              backgroundColor: 'var(--primary-red)',
                            },
                            '& .MuiClockNumber-root.Mui-selected': {
                              backgroundColor: 'var(--primary-red)',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </LocalizationProvider>
                  {/* Espaciador para alinear el botón al fondo */}
                  <div className="flex-grow"></div>
                </div>
              </div>
              
              {/* Mensaje de confirmación actualizado con horas */}
              {(selectedDate || guestCount >= 0 || startTime || endTime) && (
                <div className="mt-2 mb-6 p-4 bg-[var(--background-color)] border border-[var(--primary-gray)] rounded-lg text-center max-w-full">
                  <p className="text-[var(--text)] text-sm break-words">
                    Su reserva del <span className="font-medium text-[var(--primary-red)]">{spaceName}</span> para{' '}
                    <span className="font-medium text-[var(--primary-red)]">
                      {guestCount + 1} {/* +1 para incluirte a ti */}
                    </span>{' '}
                    {guestCount + 1 === 1 ? 'persona' : 'personas'} será realizada para el día{' '}
                    <span className="font-medium text-[var(--primary-blue)]">
                      {selectedDate 
                        ? selectedDate.locale('es').format('dddd D [de] MMMM [de] YYYY')
                        : 'seleccionado'}
                    </span>
                    {(startTime && endTime) && (
                      <span>
                        {' '}desde las <span className="font-medium text-[var(--primary-blue)]">
                          {startTime.format('HH:mm')}
                        </span> hasta las <span className="font-medium text-[var(--primary-blue)]">
                          {endTime.format('HH:mm')}
                        </span>
                      </span>
                    )}
                  </p>
                </div>
              )}

              {/* Sección de cédulas de invitados */}
              {guestCount > 0 && ( // Solo mostrar si hay invitados adicionales
                <div className="mt-4 border border-[var(--primary-gray)] rounded-lg p-4 bg-[var(--background-color)]">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Información de invitados</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Ingresa las cédulas de los invitados adicionales
                  </p>
                  
                  <div className="max-h-[200px] overflow-y-auto pr-2">
                    {/* Campos dinámicos para invitados adicionales */}
                    {Array.from({ length: guestCount }).map((_, index) => (
                      <div key={index} className="mb-3 flex items-center">
                        <div className="flex-grow">
                          <p className="text-sm font-medium text-gray-600">
                            Invitado {index + 1}
                          </p>
                          <input
                            type="text"
                            placeholder={`Cédula del invitado ${index + 1}`}
                            className="w-full p-2 border border-[var(--primary-gray)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary-red)]"
                            onChange={(e) => {
                              const newGuests = [...guestIdentifications];
                              newGuests[index] = e.target.value;
                              setGuestIdentifications(newGuests);
                            }}
                            value={guestIdentifications[index] || ''}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Botones de acción */}
            <div className="flex justify-center space-x-3 mt-4 shrink-0">
              <Button text='Cancelar' onClick={onClose}/>
              <Button text='Reservar'/>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;