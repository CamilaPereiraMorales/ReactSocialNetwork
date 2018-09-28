import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';


class Informacion extends Component {
  render() {
    const datosClinicas = [
      {
        nombre: 'Clínica veterinaria La Rotonda',
        lugar: 'Clínica veterinaria La Rotonda fue inaugurada el año 1981, siendo la primera en funcionar en la comuna de La Florida,hace 31 años, desde entonces está a cargo de los médicos veterinarios, Dres. Ramiro Soto Gómez y René Rojas Puebla. Titulados en la Universidad de Chile,quienes en el transcurso de este tiempo se han especializado en la atención y cuidado de sus animales de compañía, logrando algo importante: ofrecerles EXPERIENCIA PROFESIONAL,para la mejor atención de su mascota. Clínica Veterinaria La Rotonda se ocupa de las enfermedades de los animales, de su investigación, diagnóstico, tratamiento y prevención de ellos cubriendo las siguientes áreas: Cirugía - Vacunaciones perros y gatos - Exóticos - Oftalmología - Odontología - Ecografía Radiología - Endoscopía Laboratorio - Hospital - Tratamientos - Oxígeno terapia- Domicilios.',
        direccion: 'Vicuña Mackenna #8469, La Florida',
        telefono:'(2)22814656 - (2)22812934'
      },
    
      {
        nombre: 'Clínica Veterinaria San Lázaro',
        lugar: 'Clínica Veterinaria San Lázaro, Urgencias Veterinarias, Especialidad Caninos y Felinos. Atención a Animales Exóticos, Hospital, Exámenes, Radiología, Cirugía, Flores de Bach, Peluquería, Ecografías Caninas. Atención Domiciliaria en Independencia, Renca y Santiago Centro.',
        direccion: 'Salomón Sack #787, Independencia',
        telefono:'(2)27323027 - (2)27375377'
      },
    
      {
        nombre: 'Clínica Veterinaria San Ortega',
        lugar: 'Realización de consultas a domicilio a especies menores: Manejo preventivo (examen físico - clínico, vacunación, desparasitación). Implantación de microchip. Abordaje y seguimiento de tratamientos. Realización de exámenes sanguíneos. Orientación médico veterinario.',
        direccion: 'Sólo atención a domicilio',
        telefono:'(2)27323027 - (2)27375377'
      },
    
      {
        nombre: 'Clínica Veterinaria San Lázaro',
        lugar: 'Vacunaciones, tratamientos, cirugías, peluquería Canina, consulta Veterinarias disponible en El Bosque - San Bernardo - La Pintana - San Ramón - La Cisterna.',
        direccion: 'Sólo atención a domicilio',
        telefono:'(2)27323027'
      },
    
      {
        nombre: 'Rojas Magallanes',
        lugar: 'Rojas Magallanes es un Hospital Veterinario interdisciplinario con enfoque clínico, apoyo de variedad de exámenes complementarios, especialistas, pets y alimentos a disposición de su mascota y comodidad de nuestros clientes, con una ubicación de fácil acceso estacionamientos dedicados para su seguridad. Cuenta con consulta, Hospitalización, Cirugía, Anestesia Inhalatoria, Peluquería, Venta de Alimentos, Pet Shop, Exámenes complementarios (sangre, ecografías y radiografías).',
        direccion: 'Rojas Magallanes #3548, La Florida',
        telefono:'(2)27323027'
      },
    
      {
        nombre: 'Clínica Veterinaria San Lázaro',
        lugar: '>Con Años de experiencia en el rubro de las mascotas, contamos con un equipo de profesionales altamente calificados para poder brindar la mejor antencion y calidad en nuestro servicio. Otorgando la seguridad y tranquilidad que tu mascota necesita. Los servicios que ofrecemos son Atención Veterinaria, Cirugía, Hospitalización, Peluquería Canina.',
        direccion: 'Avenida Lucila Godoy #2240, Lo Espejo',
        telefono:'(2)27323027'
      },
    
      {
        nombre: 'Clínica Veterinaria California',
        lugar: 'Clínica Veterinaria California de la Dra. Angélica de la Maza, titulada de la Universidad de Chile. Ofrece: Atención Médica de Perros, gatos, aves, roedores, animales exóticos como conejos ,hurones, reptiles, erizos y otros. Además contamos con Peluquería Canina, Hotel de Animales Exóticos y una gran variedad de Alimentos para Perros, Gatos, Aves, Animales exóticos. Se realizan Cirugías y ventas de medicamentos.',
        direccion: 'Pedro de Valdivia #1783, Piso, 4, Loc. 189 - 191 Centro Comercial Madrid, Providencia',
        telefono:'(2)27323027'
      },
    
      {
        nombre: 'Clínica Veterinaria catVader',
        lugar: 'Servicios Veterinarios: Ecografías Veterinarias, Cirugías Veterinarias, Radiografía Digital para mascotas , Anestesia con Gases, Vacunas Veterinarias, Farmacia Veterinarias, Tratamientos Veterinarias, Visitas domiciliarias, Servicios de Peluquería canina, Baño Sanitario, Corte de pelo canino, Realce de color, Corte de uñas para mascotas, productos para su mascota, Capas para mascotas, correas para mascotas , gorros para mascotas, Peines para mascotas, Jaulas y bolsos de Transporte para mascotas, Shampoo para mascotas, Lociones para mascotas, Variados alimentos importados para mascotas, alimentos normales, alimentos Premiun, Alimento para Mascotas.',
        direccion: 'Avenida Gabriela Poniente #1863, Puente Alto',
        telefono:'(2)27323027'
      },
    
      {
        nombre: 'Clínica Veterinaria Macul',
        lugar: 'Clínica Veterinaria Macul fue fundada en el año 1988 por el Médico Veterinario Dr. Luis Godoy Oyarzún. Durante estos años hemos ido creciendo y estamos orgullosos de poder ofrecer servicios médicos de alta complejidad y óptima calidad. Tenemos un equipo de profesionales altamente capacitado y en permanente actualización para poder atender a nuestros pacientes.',
        direccion: 'Los Alerces #3135, Ñuñoa',
        telefono:'(2)27323027'
      },
    
      {
        nombre: 'El Hospital Veterinario Oriente',
        lugar: 'El Hospital Veterinario Oriente / HVO, corresponde a una institución dedicada a entregar un servicio veterinario de alta calidad para mantener y mejorar la salud de perros y gatos. Contamos con la infraestructura y equipamiento óptimo para ofrecer un servicio médico de vanguardia junto con comodidad y manejo sanitario específico manteniendo separación permanente entre pacientes con enfermedades infecciosas y pacientes con patologías no contagiosas. Además damos gran importancia a la diferencia entre especies, por lo cual contamos con un hospital para pacientes felinos, completamente separado de pacientes caninos para reducir al mínimo el estrés de su felino. Contamos también con médicos especialistas en medicina felina. Priorizamos el bienestar de su mascota brindándole a él y a usted un trato cercano y cariñoso, teniendo en cuenta que la comodidad y confianza juegan un rol fundamental en el éxito de cualquier terapia médica. Nos comprometemos a dar servicio médico las 24 horas, los 365 días del año para siempre atender las necesidades de su mascota y estar presentes ante cualquier eventualidad.',
        direccion: 'Padre Alfredo Arteaga #1660, Lo Barnechea',
        telefono:'(2)27323027'
      },
    
      {
        nombre: 'Clínica Veterinaria San Expedito',
        lugar: 'Urgencias veterinarias (fundada en 1996 ) medicina interna, cirugías, domicilios a diferentes comunas. Servicio de peluquería de lunes a sábado, farmacia, pet shop, alimentos super premiun y medicados. Servicio de peluquería de lunes a sábado, farmacia, pet shop, alimentos super premiun y medicados. Domicilios veterinarios, urgencias, hospitalización, cirugías, farmacia, hotel, vacunas, peluquería, alimentos medicados, Hill s, Eukanuba,Royal, Nutra Nuggetts, medicamentos, ecografías y radiografías (servicios externos).',
        direccion: 'Pirámide #514, San Miguel',
        telefono:'(2)27323027'
      },
      
      {
        nombre: 'Clínica Veterinaria Doña Sofía',
        lugar: 'Clínica Veterinaria Doña Sofía, cuenta con atención las 24 horas, para así darle temprana urgencia a cada dolencia o problema mayor de su mascota. Además contamos con un equipo profesional del más alto nivel. Brindamos atención en la comuna de Quilicura.',
        direccion: 'Antumalal 532, Quilicura',
        telefono:'(2)27323027'
      },
    
    ]
    return (
      <div>
          <div>
          <ul id="tabs-swipe-demo" class="tabs">
            <li class="tab col s3"><a href="#test-swipe-1">ATENCION A DOMICILIO</a></li>   
            <li class="tab col s3"><a href="#test-swipe-2">ATENCION DIA</a></li>
            <li class="tab col s3"><a href="#test-swipe-3">ATENCION 24 HORAS</a></li>
          </ul>
          </div>

          <div className = "TarjetaClinica">
          {datosClinicas.map(e => 
            <Collapsible>
              <CollapsibleItem header= {e.nombre} icon='local_hospital'>{e.lugar}
            </CollapsibleItem>
            <CollapsibleItem header='Ubicación' icon='place'>{e.direccion}
            </CollapsibleItem>
            <CollapsibleItem header='Telefono' icon='phone'>{e.telefono}
            </CollapsibleItem>
          </Collapsible>
          )}
        </div>
      </div>
    )
  }
};


export default Informacion;