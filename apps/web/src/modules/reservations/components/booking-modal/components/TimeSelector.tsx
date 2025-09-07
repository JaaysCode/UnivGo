"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

interface TimeSelectorProps {
    startTime: dayjs.Dayjs | null;
    endTime: dayjs.Dayjs | null;
    onStartTimeChange: (time: dayjs.Dayjs | null) => void;
    onEndTimeChange: (time: dayjs.Dayjs | null) => void;
}

const timePickerStyles = {
    width: '100%',
    '& .MuiOutlinedInput-root': {
        borderColor: 'var(--primary-gray)',
        fontSize: { xs: '0.875rem', sm: '1rem' },
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
        padding: { xs: '8px 10px', sm: '10px 14px' },
        fontSize: { xs: '0.875rem', sm: '1rem' },
        '&.Mui-disabled': {
            color: 'var(--primary-gray)',
        },
    },
    '& .MuiSvgIcon-root': {
        color: 'var(--primary-blue)',
        fontSize: { xs: '1.25rem', sm: '1.5rem' },
        '&.Mui-disabled': {
            color: 'var(--primary-gray)',
        },
    },
    '& .MuiClock-pin': {
        backgroundColor: 'var(--primary-red)',
    },
    '& .MuiClock-hand': {
        backgroundColor: 'var(--primary-red)',
    },
    '& .MuiClockNumber-root.Mui-selected': {
        backgroundColor: 'var(--primary-red)',
    },
    // Responsivo para el popup del reloj
    '& .MuiDialog-paper': {
        margin: { xs: '16px', sm: '32px' },
        maxWidth: { xs: '280px', sm: '400px' },
    },
};

export const TimeSelector = ({ startTime, endTime, onStartTimeChange, onEndTimeChange }: TimeSelectorProps) => {
    return (
        <div className="w-full">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="flex flex-col space-y-3 sm:space-y-4">
                    {/* Selector de hora de entrada */}
                    <div>
                        <p className="text-xs sm:text-sm font-medium text-[var(--text)] mb-1">Hora de entrada</p>
                        <TimePicker
                            value={startTime}
                            onChange={onStartTimeChange}
                            sx={timePickerStyles}
                        />
                    </div>

                    {/* Selector de hora de salida */}
                    <div>
                        <p className="text-xs sm:text-sm font-medium text-[var(--text)] mb-1">Hora de salida</p>
                        <TimePicker
                            value={endTime}
                            onChange={onEndTimeChange}
                            minTime={startTime || undefined}
                            disabled={!startTime}
                            sx={timePickerStyles}
                        />
                    </div>
                </div>
            </LocalizationProvider>
        </div>
    )
}