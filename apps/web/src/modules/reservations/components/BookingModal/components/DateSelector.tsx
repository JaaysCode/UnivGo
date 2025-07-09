"use client";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';


interface DateSelectorProps {
    selectedDate: dayjs.Dayjs | null;
    onDateChange: (date: dayjs.Dayjs | null) => void;
}

export const DateSelector = ({ selectedDate, onDateChange }: DateSelectorProps) => {
    return (
        <>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>
                Selecciona tu fecha de reserva
            </h3>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Selecciona tu día</h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    disablePast
                    value={selectedDate}
                    onChange={onDateChange}
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
        </>
    )
}