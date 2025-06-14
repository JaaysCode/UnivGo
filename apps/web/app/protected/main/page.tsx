import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import OptionCard from "@/components/main/OptionCard";

export default function Main() {
  return (
    <>
      <Navbar/>
      <OptionCard
      title="Reservar espacios"
      description="¿Necesitas un lugar para tu próximo partido, evento o reunión? Reserva nuestros espacios deportivos y áreas comunes con solo un clic. Disfruta de canchas de fútbol, baloncesto, salones multifuncionales y zonas al aire libre, equipadas con iluminación óptima y acceso seguro. Elige tu horario preferido, invita a tus compañeros y garantiza tu espacio sin complicaciones. ¡Gestionamos todo para que tú solo te preocupes por divertirte!"
      imageSrc="/imagen_coliseo.jpg"
      buttonPosition="right"
      buttonText="Reservar"
      />
      <OptionCard
      title="Mi horario"
      description="Consulta toda tu información académica en un solo lugar. Revisa tu horario de clases, las materias inscritas, los grupos asignados y tu progreso con notas parciales y promedio acumulado. Todo organizado para que tengas claridad sobre tu semestre."
      imageSrc="/udemedellin_estudiantes.jpg"
      buttonPosition="left"
      buttonText="Reservar"
      />
      <Footer/>
    </>

  );
}
