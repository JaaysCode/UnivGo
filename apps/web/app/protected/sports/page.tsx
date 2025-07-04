'use client';

import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import OptionCard from "@/components/OptionCard";
import BookingModal from "@/components/modals/BookingModal";

import React, { useState } from "react";

export default function SportsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <OptionCard
            title="Gimnasio"
            description="¡Actívate en nuestro gimnasio universitario! Tu lugar para desconectarte, recargar y poner tu cuerpo en movimiento. ¡Te esperamos para que te sientas genial!"
            buttonText="Reservar"
            buttonPosition="left"
            buttonOnClick={handleOpenModal}
            imageSrc="/udemgym.jpg"
          />          <OptionCard
            title="Coliseo"
            description="Tu epicentro para arte, música, teatro y eventos inolvidables. ¡Ven a vivir la cultura universitaria!"
            buttonText="Reservar"
            buttonPosition="right"
            buttonOnClick={handleOpenModal}
            imageSrc="/Coliseo_UdeM.jpg"
          />
          <OptionCard
            title="Cancha de grama sintética fútbol 11"
            description="¡Siente la pasión del fútbol en nuestra cancha de grama sintética! Tu lugar para goles, jugadas épicas y la emoción del fútbol 11. ¡A rodar el balón!"
            buttonText="Reservar"
            buttonPosition="left"
            buttonOnClick={handleOpenModal}
            imageSrc="/cancha-fut11.jpg"
          />
          <OptionCard
            title="Cancha de grama sintética fútbol 7"
            description="El lugar perfecto para partidos rápidos, goles espectaculares y momentos inolvidables con tus amigos. ¡La cancha te espera!"
            buttonText="Reservar"
            buttonPosition="right"
            buttonOnClick={handleOpenModal}
            imageSrc="/cancha-fut7.jpg"
          />
          <div className="">
            <OptionCard
            title="Canchas de tenis"
            description="Perfecciona tu saque, domina tu revés y vive la emoción de cada punto. ¡Es hora de jugar!"
            buttonText="Reservar"
            buttonPosition="left"
            buttonOnClick={handleOpenModal}
            imageSrc="/campo-tenis-generico.jpg"
            />
          </div>
        </div>
      </div>
        {/* Modal de reserva */}
      <BookingModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
      />
      
      <Footer />
    </>
  );
}
