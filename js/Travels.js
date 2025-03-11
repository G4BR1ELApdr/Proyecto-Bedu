(() => {
  const inputs = {
      originInput: document.getElementById('originInput'),
      destinyInput: document.getElementById('destinyInput'),
  };

  const travelTags = {
      travelTitle: document.getElementById('travelTitle'),
      travelDescription: document.getElementById('travelDescription'),
      endDate: document.getElementById('endDate'),
      container: document.getElementById('resultsTravel'),
      notFound: document.getElementById('notFound'),
  };

  const travels = [
      {
          id: 1,
          title: 'Monterrey',
          description: '¡Reserva tu vuelo a Monterrey y vive la experiencia con Aeroméxico!',
          airline: 'Aerolinea: Aeroméxico',
          departureTime: 'Hora de salida: 10:30 AM',
          departureAirport: 'Aeropuerto Internacional de la Ciudad de México (CDMX)',
      },
      {
          id: 2,
          title: 'Caracas',
          description: 'Vuela cómodo con Conviasa. ¡No te lo puedes perder!',
          airline: 'Aerolinea: Conviasa',
          departureTime: 'Hora de salida: 03:15 PM',
          departureAirport: 'Aeropuerto Internacional Simón Bolívar',
      },
      {
          id: 3,
          title: 'Medellín',
          description: 'Disfruta de la comodidad de Avianca en tu vuelo a Medellín.',
          airline: 'Aerolinea: Avianca',
          departureTime: 'Hora de salida: 06:45 AM',
          departureAirport: 'Aeropuerto Internacional José María Córdova',
      },
      {
          id: 4,
          title: 'Buenos Aires',
          description: 'Viaja cómodo con Aerolíneas Argentinas, vuelo directo a Buenos Aires.',
          airline: 'Aerolinea: Aerolíneas Argentinas',
          departureTime: 'Hora de salida: 09:00 PM',
          departureAirport: 'Aeropuerto Internacional Ministro Pistarini (Ezeiza)',
      },
      {
          id: 5,
          title: 'Santiago',
          description: 'Vuela con LATAM Airlines, cómodo y rápido a Santiago.',
          airline: 'Aerolinea: LATAM Airlines',
          departureTime: 'Hora de salida: 12:45 PM',
          departureAirport: 'Aeropuerto Internacional Comodoro Arturo Merino Benítez',
      },
      {
          id: 6,
          title: 'Madrid',
          description: 'Con Iberia, disfruta de tu vuelo directo a Madrid.',
          airline: 'Aerolinea: Iberia',
          departureTime: 'Hora de salida: 07:00 PM',
          departureAirport: 'Aeropuerto Adolfo Suárez Madrid-Barajas',
      },
      {
          id: 7,
          title: 'Río de Janeiro',
          description: 'Disfruta de la comodidad de Gol Linhas Aéreas.',
          airline: 'Aerolinea: Gol Linhas Aéreas',
          departureTime: 'Hora de salida: 01:30 PM',
          departureAirport: 'Aeropuerto Internacional de Galeão',
      },
      {
          id: 8,
          title: 'Lima',
          description: 'Vuelo directo con LATAM Airlines a Lima, Perú.',
          airline: 'Aerolinea: LATAM Airlines',
          departureTime: 'Hora de salida: 11:20 AM',
          departureAirport: 'Aeropuerto Internacional Jorge Chávez',
      },
      {
          id: 9,
          title: 'Quito',
          description: 'Viaja con TAME EP, vuelo directo a Quito.',
          airline: 'Aerolinea: TAME EP',
          departureTime: 'Hora de salida: 02:00 PM',
          departureAirport: 'Aeropuerto Internacional Mariscal Sucre',
      },
      {
          id: 10,
          title: 'Nueva York',
          description: 'Viaja con American Airlines a Nueva York, vuelo directo.',
          airline: 'Aerolinea: American Airlines',
          departureTime: 'Hora de salida: 08:10 PM',
          departureAirport: 'Aeropuerto Internacional John F. Kennedy',
      },
  ];

  function getCurrentDate() {
      const today = new Date();
      return today.toLocaleDateString('es-ES'); // Formato DD/MM/YYYY
  }

  function getTravel() {
      const { travelTitle, travelDescription, endDate, container, notFound } = travelTags;
      const { destinyInput } = inputs;

      notFound.classList.add("d-none");
      container.classList.add('d-none');

      // Filtrar los viajes por ciudad de destino
      const travel = travels.filter(t => {
          return t.title.toLowerCase() === destinyInput.value.toLowerCase();
      });

      // Si no se encuentran resultados
      if (travel.length === 0) {
          notFound.classList.remove("d-none");
          return;
      }

      // Mostrar el primer resultado encontrado
      const firstTravel = travel[0];
      travelTitle.innerText = `${firstTravel.title}`;
      travelDescription.innerHTML = `${firstTravel.description}<br><strong>${firstTravel.airline}</strong><br>${firstTravel.departureTime}<br><strong>Desde:</strong> ${firstTravel.departureAirport}`;
      endDate.innerText = `Fecha máxima de estancia: ${getCurrentDate()}`;
      
      container.classList.remove('d-none');
  }

  document.getElementById("travelForm").addEventListener("submit", (ev) => {
      ev.preventDefault();
      getTravel();
  });
})();