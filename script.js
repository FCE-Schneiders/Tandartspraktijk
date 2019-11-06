const state = {

  dentists: [
    { id: 0, name: "Famke", surName: "Schneiders", phoneNr: "0612345678", email: "famke@tandartspraktijkbvt.nl", Ill: false },
    { id: 1, name: "Carla", surName: "Snepvangers", phoneNr: "0687654321", email: "carla@tandartspraktijkbvt.nl", Ill: false },
    { id: 2, name: "Marijn", surName: "Pijnenborg", phoneNr: "0624688642", email: "marijn@tandartspraktijkbvt.nl", Ill: false },
    { id: 3, name: "Ziba", surName: "Nabati", phoneNr: "0636985214", email: "ziba@tandartspraktijkbvt.nl", Ill: false },
  ],


  appointments: [
    { id: 5, dag: "1", start: "9:00", eind: "10:00" },
    { id: 6, dag: "1", start: "10:00", eind: "11:00" }

  ],

  assistants: [
    { id: 1, name: "Anita", surName: "Rockman", phoneNr: "0682345678", email: "anita@tandartspraktijkbvt.nl" },
    { id: 2, name: "Stefan", surName: "Goedzak", phoneNr: "0627654321", email: "stefan@tandartspraktijkbvt.nl" },
  ],


  patients: [
    { id: 1, name: "Arjan van", surName: "Vliet", birthYear: 1993, email: "arjan@live.nl", phoneNr: "0612345678" },
    { id: 2, name: "Femke", surName: "Meijer", birthYear: 1980, email: "Femke@live.nl", phoneNr: "0612345677" },
    { id: 3, name: "Lonneke", surname: "Sanders", birthYear: 2000, email: "lonneke@live.nl", phoneNr: "0612345676" },
    { id: 4, name: "Christien", surname: "Prins", birthYear: 1948, email: "Christien@live.nl", phoneNr: "0612345675" },
    { id: 5, name: "Mathijs", surname: "Mol", birthYear: 1982, email: "mathijs@live.nl", phoneNr: "0612345674" },
    { id: 6, name: "Carlijn", surname: "Bos", birthYear: 1980, email: "Carlijn@live.nl", phoneNr: "0612345673" },
    { id: 7, name: "Eelco van der", surname: "Meer", birthYear: 1978, email: "eelco@live.nl", phoneNr: "0612345672" },
    { id: 8, name: "Willemijn", surname: "Hofman", birthYear: 2001, email: "willemijn@live.nl", phoneNr: "0612345671"},
    { id: 9, name: "Reinout van der", surname: "Veen", birthYear: 1975, email: "reinout@live.nl", phoneNr: "0612345670"},
    { id: 10, name: "Lotte", surname: "Hoekstra", birthYear: 2000, email: "lotte@live.nl", phoneNr: "0612345669" },
    { id: 11, name: "Aart", surname: "Willems", birthYear: 1950, email: "aart@live.nl", phoneNr: "0612345668" },
    { id: 12, name: "Florus", surname: "Prins", birthYear: 2003, email: "Florus@live.nl", phoneNr: "0612345667"},
    { id: 13, name: "Valentijn", surname: "Gerritsen", birthYear: 1995, email: "Valentijn@live.nl", phoneNr: "0612345666"},
    { id: 14, name: "Paul de", surname: "Vos", birthYear: 1958, email: "Paul@live.nl", phoneNr: "0612345665" },
    { id: 15, name: "Henk", surname: "Postma", birthYear: 1988, email: "henk@live.nl", phoneNr: "0612345664" },
    { id: 16, name: "Willemijn van", surname: "Dijk", birthYear: 1990, email: "will@live.nl", phoneNr: "0612345663" },
    { id: 17, name: "Boudewijn van", surname: "Dijk", birthYear: 1948, email: "Christien@live.nl",
      phoneNr: "0612345662"
    },
    {
      id: 18, name: "Jaap de", surname: "Ruiter", birthYear: 1948,
      email: "Christien@live.nl",
      phoneNr: "0612345661"
    },
    {
      id: 19,
      name: "Floor van",
      surname: "Veen",
      birthYear: 1982,
      email: "floor@live.nl",
      phoneNr: "0612345660"
    },
    { id: 20, name: "Tom de", surname: "Leeuw", gender: "male", region: "Netherlands" },
    {
      id: 21,
      name: "Heleen van",
      surname: "Loon",
      birthYear: 1994,
      email: "heleen@live.nl",
      phoneNr: "0612345659"
    },
    {
      id: 22, name: "Luuk", surname: "Hermans", birthYear: 1998,
      email: "luki@live.nl",
      phoneNr: "0612345658"
    },
    {
      id: 23,
      name: "Huib van der",
      surname: "Veen",
      birthYear: 1967,
      email: "huib@live.nl",
      phoneNr: "0612345657"
    },
    {
      id: 24, name: "Jaap", surname: "Hoekstra", birthYear: 1989,
      email: "japie@live.nl",
      phoneNr: "0612345656"
    },
    {
      id: 25,
      name: "Mathijs van",
      surname: "Dijk",
      birthYear: 2003,
      email: "mathijsss@live.nl",
      phoneNr: "0612345655"
    },
    {
      id: 26,
      name: "Peter de",
      surname: "Koning",
      birthYear: 1956,
      email: "peter@live.nl",
      phoneNr: "0612345654"
    },
    {
      id: 27,
      name: "Maartje",
      surname: "Schouten",
      birthYear: 1999,
      email: "mari@live.nl",
      phoneNr: "0612345653"
    },
    {
      id: 28, name: "Thomas van", surname: "Dam", birthYear: 1996,
      email: "thom@live.nl",
      phoneNr: "0612345652"
    },
    {
      id: 29, name: "Huub", surname: "Verhoeven", birthYear: 1979,
      email: "Christien@live.nl",
      phoneNr: "0612345651"
    },
    {
      id: 30,
      name: "Ymke van",
      surname: "Dongen",
      birthYear: 1960,
      email: "Ymke@live.nl",
      phoneNr: "0612345649"
    },
    {
      id: 31,
      name: "Marja",
      surname: "Kremer",
      birthYear: 1950,
      email: "mar@live.nl",
      phoneNr: "0612345648"
    },
    {
      id: 32,
      name: "Willy van",
      surname: "pongen",
      birthYear: 1948,
      email: "wil@live.nl",
      phoneNr: "0612345647"
    },
    {
      id: 33,
      name: "Dirk",
      surname: "Mans",
      birthYear: 1979,
      email: "dirk@live.nl",
      phoneNr: "0612345646"
    },

    {
      id: 34, name: "Tommi", surname: "Kuisman", birthYear: 1998,
      email: "Tommi@live.nl",
      phoneNr: "0612345645"
    },
    {
      id: 35,
      name: "Dorien de",
      surname: "Tuijn",
      birthYear: 1988,
      email: "door@live.nl",
      phoneNr: "0612345644"
    },
    {
      id: 36,
      name: "Rein",
      surname: "Hoek",
      birthYear: 2001,
      email: "rein@live.nl",
      phoneNr: "0612345643"
    },
    {
      id: 37,
      name: "Vicde",
      surname: "Graaf",
      birthYear: 1983,
      email: "vic@live.nl",
      phoneNr: "0612345642"
    },
    {
      id: 38,
      name: "Ivo van", surname: "Luijs", birthYear: 1960,
      email: "Ivo@live.nl",
      phoneNr: "0612345641"
    },
    {
      id: 39,
      name: "Tijntje",
      surname: "Zevers",
      birthYear: 1989,
      email: "tijntje@live.nl",
      phoneNr: "0612345640"
    },
    {
      id: 40, name: "Imke", 
      surname: "Dansen", 
      birthYear: 1959,
      email: "imke@live.nl",
      phoneNr: "0612345639"
    },
    {
      id: 41,
      name: "Annemijn de",
      surname: "Lange",
      birthYear: 1980,
      email: "anne@live.nl",
      phoneNr: "0612345638"
    },
    {
      id: 42, name: "Lucky", 
      surname: "Smulder", 
      birthYear: 1993,
      email: "lucky@live.nl",
      phoneNr: "0612345637"
    },
    {
      id: 43,
      name: "Steff",
      surname: "Hendricks",
      birthYear: 1977,
      email: "steff@live.nl",
      phoneNr: "0612345636"
    },
    {
      id: 44,
      name: "Leentje",
      surname: "Schuiten",
      birthYear: 1971,
      email: "leen@live.nl",
      phoneNr: "0612345635"
    },

    {
      id: 45, name: "Petra ", 
      surname: "Wit", 
      birthYear: 1948,
      email: "petra@live.nl",
      phoneNr: "0612345634"
    },
    {
      id: 46, name: "Thea", 
      surname: "Kamer", 
      birthYear: 1973,
      email: "tea@live.nl",
      phoneNr: "0612345633"
    },
    {
      id: 47, name: "Ad", 
      surname: "King", 
      birthYear: 2000,
      email: "ad@live.nl",
      phoneNr: "0612345632"
    },
    {
      id: 48, name: "Onno", 
      surname: "Vlekker", 
      birthYear: 1979,
      email: "Onno@live.nl",
      phoneNr: "0612345631"
    },
    {
      id: 49, name: "Quintin", 
      surname: "Jonker", 
      birthYear: 1988,
      email: "Quintin@live.nl",
      phoneNr: "0612345630",
    },
    {
      id: 50, name: "Eline van de", 
      surname: "Velde", 
      birthYear: 1997,
      email: "eline@live.nl",
      phoneNr: "0612345629"
    },
  ]
};
let dubbelpunt = "  :::::::::   ";
let space = "   ";


const renderDentists = dentists => {
  let allHTML = "<div>All Dentists: </div>";

  for (let index = 0; index < state.dentists.length; index++) {
    allHTML += '<div>  ' + state.dentists[index].id +
      dubbelpunt + state.dentists[index].name + dubbelpunt + state.dentists[index].surName +
      dubbelpunt + state.dentists[index].phoneNr + dubbelpunt + state.dentists[index].email + dubbelpunt +
      state.dentists[index].Ill + 
      '<input class=knoppen type= button value= maakziek onclick= maakTandartsZiek(state,' + index.toString() + ') />'+ 
      '<input class=knoppen type= button value= maakgezond onclick= maakTandartsGezond(state,' + index.toString() + ') />'+  
      
      ' </div>';
  }

  return allHTML;
};

const render = stateHtml => {
  const dentistsHTML = renderDentists(state.dentists);
  const appointmentsHTML = renderAppointments(state.appointments);

  document.querySelector('.tandartsen').innerHTML = dentistsHTML;
  document.querySelector('.afspraken').innerHTML = appointmentsHTML;

};

const maakTandartsZiek = (state, dentistId) => {
  const ZiekeTandarts = state.dentists.findIndex(
    dentists => dentists.id === dentistId
  );

  let dentist = state.dentists[ZiekeTandarts]; //zieketandarts 

  dentist.Ill = true; // maak tandarts ziek
  const newDentists = [...state.dentists]; // geef me alle dentitst in state.dentists
  const newState = { ...state };// oude staat plus nieuwe staat

  render();

};

const maakTandartsGezond = (state, dentistId) => {
  const ZiekeTandarts = state.dentists.findIndex(
    dentists => dentists.id === dentistId
  );
  console.log(ZiekeTandarts);
  let dentist = state.dentists[ZiekeTandarts];
  console.log(dentist);
  dentist.Ill = false;
  const newDentists = [...state.dentists];
  newDentists[dentist] = newDentists;
  const newState = { ...state };
  newState.dentists = newDentists;
  render();
  return newState;
};
//newState = maakTandartsZiek(state, 0);


const addDentist = (event) => {
  let name = document.getElementById("firstName").value; 
  let lastname = document.getElementById("lastName").value;
  let phone = document.getElementById("phoneNr").value;
  let email = document.getElementById("email").value;
  let id = state.dentists.length;
  const newDentist2 = { id: id, name: name, surName: lastname, phoneNr: phone, email: email, Ill: false };
  //alert(name +lastname);
  state.dentists.push(newDentist2);
  console.log(state.dentists);
  render();
};

//const newDentist = { id: 4, name: "Toos", surName: "Trekker", phoneNr: "0612345678", email: "toos@tandartspraktijkbvt.nl", Ill: true };
//newState = addDentist(newDentist);






const renderAppointments = afspraken => {
  let allHTML = "<div>Alle Appointments: </div>";

  for (let index = 0; index < state.appointments.length; index++) {
    allHTML += '<div>  ' + state.appointments[index].id + state.appointments[index].dag + dubbelpunt +
      state.appointments[index].start + dubbelpunt + state.appointments[index].eind + ' </div>';
  }
  return allHTML;
};




const getRandomName = () => {
  const person = names[Math.floor(Math.random() * 250)];
  return `${person.name} ${person.surname}`;
};

const getRandomTime = () => {
  let goodTime = false;
  let hour;
  while (goodTime === false) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      goodTime = true;
    }
  }
  return `${hour}:00u`;
};

const createDayView = () => {
  const appointments = [];

  for (i = 0; i < 30; i++) {
    appointments.push(`<li class="appointment">
      <div class="time">${getRandomTime()}</div>
      <div class="patient">Patiënt: ${getRandomName()}</div>
      <div class="dentist">Tandarts: ${getRandomName()}</div>
      <div class="assistant">Assistent: ${getRandomName()}</div>
      </li>`);
  }
  document.querySelector(".dayview").innerHTML = appointments.join("");
};

const createDayOnCalendar = numAppointments => {
  const appointments = [];
  for (let i = 0; i < numAppointments; i++) {
    appointments.push(`
      <div class="appointment">
        <span class="time">${getRandomTime()}</span>
        <span class="patient">${getRandomName()}</span>
      </div>`);
  }
  return `<div class="day">${appointments.join("")}</div>`;
};

const createCalendarView = () => {
  const days = [];

  for (let i = 1; i < 28; i++) {
    if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
      continue;
    }
    days.push(createDayOnCalendar(5));
  }
  document.querySelector(".calendarview .table").innerHTML = days.join("");
};

const start = () => {
  //print html tandartsen en afspraken uit
  render();
  try {
    createDayView();
  } catch { }

  try {
    createCalendarView();
  } catch { }
};

document.addEventListener("DOMContentLoaded", start);
