import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export default function ReservationsPage() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Mis Reservas</h1>
        <p className="mb-6">Aquí puedes ver y gestionar tus reservas de espacios deportivos.</p>
        {/* Aquí podrías agregar un componente para listar las reservas */}
      </div>
      <Footer />
    </>
  );
}