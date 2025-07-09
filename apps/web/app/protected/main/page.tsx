"use client";

import { Navbar } from "@/src/shared/components/layout/navbar/Navbar";
import OptionCard from "../../../src/shared/components/ui/OptionCard";
import ChoiceModal from "@/src/shared/components/ui/choice-modal/ChoiceModal";
import React, { useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { IoIosBasketball } from "react-icons/io";
import Footer from "@/src/shared/components/layout/footer/Footer";

export default function Main() {
  const [showChoiceModal, setShowChoiceModal] = useState(false);

  return (
    <>
      <Navbar />
      <OptionCard
        title="Reservar espacios"
        description="¿Necesitas un lugar para tu próximo partido, evento o reunión? Reserva nuestros espacios deportivos y áreas comunes con solo un clic. Disfruta de canchas de fútbol, baloncesto, salones multifuncionales y zonas al aire libre, equipadas con iluminación óptima y acceso seguro. Elige tu horario preferido, invita a tus compañeros y garantiza tu espacio sin complicaciones. ¡Gestionamos todo para que tú solo te preocupes por divertirte!"
        imageSrc="/imagen_coliseo.jpg"
        buttonPosition="right"
        buttonText="Reservar"
        buttonOnClick={() => setShowChoiceModal(true)}
      />
      <OptionCard
        title="Mi horario"
        description="Consulta toda tu información académica en un solo lugar. Revisa tu horario de clases, las materias inscritas, los grupos asignados y tu progreso con notas parciales y promedio acumulado. Todo organizado para que tengas claridad sobre tu semestre."
        imageSrc="/udemedellin_estudiantes.jpg"
        buttonPosition="left"
        buttonText="Consultar"
      />
      <Footer />

      <ChoiceModal
        open={showChoiceModal}
        onClose={() => setShowChoiceModal(false)}
        option1={{
          label: "Espacio deportivo",
          route: "/protected/sports",
          icon: IoIosBasketball,
        }}
        option2={{
          label: "Área común",
          route: "/protected/common",
          icon: FaBuilding,
        }}
      />
    </>
  );
}
