import Cookies from "js-cookie";
export interface ReservationData {
  identification: string;
  spaceName: string;
  startTime: string;
  endTime: string;
  reservationDate: string;
  guestsIdentifications?: string[];
}

export const createReservation = async (reservationData: ReservationData) => {
  const API_URL = "http://localhost:3001/api/reservations";

  const token = Cookies.get("token");

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(reservationData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error creating reservation: ${errorData.message}`);
  }

  return response.json();
};
