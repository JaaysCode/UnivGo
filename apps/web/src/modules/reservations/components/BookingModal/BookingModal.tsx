"use client";
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-hot-toast';


import { Button } from '@/src/shared/components/ui/Button';
import { BookingConfirmation } from './components/BookingConfirmation';
import { DateSelector } from './components/DateSelector';
import { GuestIdentificationForm } from './components/GuestIdentificationForm';
import { GuestSelector } from './components/GuestSelector';
import { TimeSelector } from './components/TimeSelector';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  spaceName?: string;
  maxGuests?: number; // Añadido para límite de invitados
}

const BookingModal = ({ isOpen, onClose, spaceName = "espacio", maxGuests = 10 }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [guestCount, setGuestCount] = useState<number>(0);
  const [startTime, setStartTime] = useState<dayjs.Dayjs | null>(null);
  const [endTime, setEndTime] = useState<dayjs.Dayjs | null>(null);
  const [guestIdentifications, setGuestIdentifications] = useState<string[]>(Array(maxGuests).fill(''));

  dayjs.locale('es');

  const handleStartTimeChange = (newValue: dayjs.Dayjs | null) => {
    setStartTime(newValue);
    toast.error("La hora de salida no puede ser anterior a la hora de entrada.");
  };

  const handleGuestIdentificationChange = (identifications: string[]) => {
    setGuestIdentifications(identifications);
  }

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
                  <DateSelector
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                  />
                </div>

                {/* Columna derecha: Invitados y Hora */}
                <div className="flex-1 min-w-0 flex flex-col justify-start">
                  <GuestSelector
                    guestCount={guestCount}
                    maxGuests={maxGuests}
                    onGuestCountChange={setGuestCount}
                  />

                  <TimeSelector
                    startTime={startTime}
                    endTime={endTime}
                    onStartTimeChange={handleStartTimeChange}
                    onEndTimeChange={setEndTime}
                  />

                  <div className='flex-grow'></div>
                </div>
              </div>

              <BookingConfirmation
                spaceName={spaceName}
                selectedDate={selectedDate}
                guestCount={guestCount}
                startTime={startTime}
                endTime={endTime}
              />

              <GuestIdentificationForm
                guestCount={guestCount}
                guestIdentifications={guestIdentifications}
                onGuestIdentificationChange={handleGuestIdentificationChange}
              />
            </div>

            {/* Actions */}

            <div className='flex justify-center space-x-3 mt-4 shrink'>
              <Button text='Cancelar' onClick={onClose}></Button>
              <Button text='Reservar' ></Button>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default BookingModal;