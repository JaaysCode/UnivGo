"use client";
import Reservation from "@/src/modules/reservations/components/my-reservations/Reservation";
import { useUserReservations } from "@/src/modules/reservations/hooks/useUserReservations";
import { useCancelReservation } from "@/src/modules/reservations/hooks/useCancelReservation";
import Footer from "@/src/shared/components/layout/footer/Footer";
import { Navbar } from "@/src/shared/components/layout/navbar/Navbar";
import { Button } from "@/src/shared/components/ui/Button";
import { useState } from "react";

export default function ReservationsPage() {
  const { reservations, loading, error, refetch } = useUserReservations();
  const { cancelReservation } = useCancelReservation();
  const [filter, setFilter] = useState<string>("all");

  // Función para cancelar reserva
  const handleCancelReservation = async (id: number) => {
    const success = await cancelReservation(id);
    if (success) {
      refetch(); // Refrescar la lista de reservas después de cancelar
    }
  };

  // Filtrar reservaciones según el estado seleccionado
  const filteredReservations = reservations.filter((reservation) => {
    if (filter === "all") return true;
    return reservation.status === filter;
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Mis Reservas</h1>
        <p className="mb-6 text-gray-600">
          Aquí puedes ver y gestionar tus reservas de espacios universitarios.
        </p>

        {/* Filtros */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium mr-2">Filtrar por:</span>
          {[
            { value: "all", label: "Todas" },
            { value: "pending", label: "Pendientes" },
            { value: "confirmed", label: "Confirmadas" },
            { value: "completed", label: "Completadas" },
            { value: "cancelled_by_user", label: "Canceladas" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`px-3 py-1 text-sm rounded-full ${
                filter === option.value
                  ? "bg-[var(--primary-blue)] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Estado de carga */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-red)]"></div>
          </div>
        ) : error ? (
          // Mensaje de error
          <div className="bg-red-50 rounded-lg border border-red-200 p-8 text-center">
            <h3 className="text-xl font-medium text-red-800 mb-2">
              Error al cargar las reservas
            </h3>
            <p className="text-red-600 mb-6">{error}</p>
            <Button text="Intentar de nuevo" onClick={refetch} />
          </div>
        ) : filteredReservations.length > 0 ? (
          // Lista de reservas
          <div>
            {filteredReservations.map((reservation) => (
              <Reservation
                key={reservation.id}
                id={reservation.id}
                qrCodeData={reservation.qrCodeData}
                space={reservation.space}
                reservationDate={reservation.reservationDate}
                startTime={reservation.startTime}
                endTime={reservation.endTime}
                status={reservation.status}
                guests={reservation.guests}
                onCancel={handleCancelReservation}
              />
            ))}
          </div>
        ) : (
          // Mensaje cuando no hay reservas
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-medium mb-2">
              No tienes reservas {filter !== "all" && "con este estado"}
            </h3>
            <p className="text-gray-600 mb-6">
              {filter !== "all"
                ? "Prueba seleccionando otro filtro o revisa más tarde."
                : "¿Por qué no reservas un espacio para tus actividades?"}
            </p>
            {filter === "all" && (
              <Button text="Reservar espacio" href="/protected/sports" />
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
