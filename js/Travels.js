(() => {
  const inputs = {
    originInput: document.getElementById('originInput'),
    destinyInput: document.getElementById('destinyInput'),
  }

  const travelTags = {
    travelTitle: document.getElementById('travelTitle'),
    travelDescription: document.getElementById('travelDescription'),
    endDate: document.getElementById('endDate'),
    container: document.getElementById('resultsTravel'),
    notFound: document.getElementById('notFound'),
  }

  const travels = [
    {
      id: 1,
      title: 'Mexico, Monterrey.',
      description: 'Viaja a Monterrey de la mejor manera con nosotros.',
    },
    {
      id: 2,
      title: 'Venezuela, Caracas.',
      description: 'Llega a tu destino y viaja lo mas comodo posible con nosotros.',
    },
    {
      id: 3,
      title: 'Colombia, Medellin.',
      description: 'Necesitas este viaje, y nosotros podemos ayudarte, viaja a Medellin y disfruta tu viaje con nosotros.',
    },
  ];

  function getTravel(){
    const {travelTitle, travelDescription, endDate, container, notFound} = travelTags;
    const {originInput, destinyInput} = inputs;
    
    notFound.classList.add("d-none");
    container.classList.add('d-none');

    const travel = travels.find(t => t.title.includes(destinyInput.value));

    if(!travel?.id){
      notFound.classList.remove("d-none");
      return;
    }

    travelTitle.innerText = travel.title;
    travelDescription.innerText = travel.description;
    endDate.innerText = '25-12-2022';
    
    container.classList.remove('d-none');
  }

  document.getElementById("travelForm").addEventListener("submit", (ev) => {
    ev.preventDefault();
    getTravel();
  });

})();