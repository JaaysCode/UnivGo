"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import Reservation, { ReservationProps } from "@/components/my-reservations/Reservation";
import { Button } from "@/components/Button";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<ReservationProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  // Simular carga de datos (cambiarlo despues por una llamada a la API)
  useEffect(() => {
    // Simular retraso en la carga
    const timer = setTimeout(() => {
      // Datos de ejemplo
      const mockReservations: ReservationProps[] = [
        {
          id: 8,
          qrCodeData: "8e3151df2c331f59",
          userId: 1,
          spaceId: 1,
          reservationDate: "2025-02-15",
          startTime: "14:00",
          endTime: "16:00",
          status: "pending",
          createdAt: "2025-07-05T19:18:21.176Z",
          updatedAt: "2025-07-05T19:18:21.176Z",
          guests: [
            {
              id: 2,
            },
          ],
        },
        {
          id: 7,
          qrCodeData: "7a2141ce1b221e48",
          userId: 1,
          spaceId: 2,
          reservationDate: "2025-02-20",
          startTime: "10:00",
          endTime: "12:00",
          status: "confirmed",
          createdAt: "2025-07-04T15:22:11.176Z",
          updatedAt: "2025-07-04T15:22:11.176Z",
          guests: [
            { id: 3 },
            { id: 4 },
            { id: 5 }
          ],
        },
        {
          id: 6,
          qrCodeData: "6b1131bd0a111d37",
          userId: 1,
          spaceId: 3,
          reservationDate: "2025-01-10",
          startTime: "16:00",
          endTime: "18:00",
          status: "completed",
          createdAt: "2025-06-30T11:45:21.176Z",
          updatedAt: "2025-06-30T11:45:21.176Z",
          guests: [],
        },
        {
          id: 5,
          qrCodeData: "5c0121ac9b001c26",
          userId: 1,
          spaceId: 1,
          reservationDate: "2024-12-05",
          startTime: "09:00",
          endTime: "11:00",
          status: "cancelled_by_user",
          createdAt: "2025-06-25T08:30:21.176Z",
          updatedAt: "2025-06-26T14:20:21.176Z",
          guests: [
            { id: 6 }
          ],
        }
      ];
      
      setReservations(mockReservations);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Función para cancelar reserva
  const handleCancelReservation = (id: number) => {
    // Cuando la API esté implementada, aquí se hace el llamado para cancelar la reserva
    if (confirm("¿Estás seguro de que deseas cancelar esta reserva?")) {
      setReservations(prevReservations => 
        prevReservations.map(res => 
          res.id === id ? {...res, status: 'cancelled_by_user' as const} : res
        )
      );
    }
  };

  // Filtrar reservaciones según el estado seleccionado
  const filteredReservations = reservations.filter(reservation => {
    if (filter === "all") return true;
    return reservation.status === filter;
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Mis Reservas</h1>
        <p className="mb-6 text-gray-600">Aquí puedes ver y gestionar tus reservas de espacios universitarios.</p>
        
        {/* Filtros */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium mr-2">Filtrar por:</span>
          {[
            { value: "all", label: "Todas" },
            { value: "pending", label: "Pendientes" },
            { value: "confirmed", label: "Confirmadas" },
            { value: "completed", label: "Completadas" },
            { value: "cancelled_by_user", label: "Canceladas" }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`px-3 py-1 text-sm rounded-full ${
                filter === option.value 
                  ? 'bg-[var(--primary-blue)] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
        ) : filteredReservations.length > 0 ? (
          // Lista de reservas
          <div>
            {filteredReservations.map(reservation => (
              <Reservation
                key={reservation.id}
                {...reservation}
                onCancel={handleCancelReservation}
              />
            ))}
          </div>
        ) : (
          // Mensaje cuando no hay reservas
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-medium mb-2">No tienes reservas {filter !== "all" && "con este estado"}</h3>
            <p className="text-gray-600 mb-6">
              {filter !== "all" 
                ? "Prueba seleccionando otro filtro o revisa más tarde."
                : "¿Por qué no reservas un espacio para tus actividades?"}
            </p>
            {filter === "all" && (
              <Button
                text="Reservar espacio"
                href="/protected/sports"
              />
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}