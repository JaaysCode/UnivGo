"use client";

import GuestsCounter from "@/src/modules/spaces/components/GuestsCounter";

interface GuestSelectorProps {
    guestCount: number;
    maxGuests: number;
    onGuestCountChange: (value: number) => void;
}

export const GuestSelector = ({ guestCount, maxGuests, onGuestCountChange }: GuestSelectorProps) => {

    return (
        <>
            <h3 className="text-lg font-medium text-[var(--text)]">Invitados</h3>
            <p className="mb-3 text-sm text-[var(--text)]">Selecciona el número de personas que asistirán</p>

            <div className="overflow-visible">
                <GuestsCounter
                    value={guestCount}
                    onChange={onGuestCountChange}
                    maxValue={maxGuests}
                />
            </div>

        </>
    )
}