const state= {
    tandartsen: [
        {
            id: '1',
            voornaam: 'Henk',
            achternaam: 'bla',
            emailadres: 'henk@gmail.com',
            telefoonnummer: '06-12345678',
            ziek: false
        },
        {
            id: '2',
            voornaam: 'Klaas',
            achternaam: 'bla',
            emailadres: 'klaas@gmail.com',
            telefoonnummer: '06-12345678',
            ziek: false
        }

    ]
}

//newState = makeDentistSick(stat, dentistId)
const maakTandartsZiek = (state, dentistId) => {
    const ZiekeTandartsIndex = state.tandartsen.findIndex(
        tandarts => tandarts.id == dentistId
    );

    // let tandarts = state.tandartsen.filter(
    //     tandarts => tandarts.id === dentistId
    // )[0];

    // const newTandarts = {...tandarts}
    
    newTandarts.ziek = ture;
    const newTandartsen = [...state.tandartsen];
    newTadartsen[ZiekeTandartsIndex] = newTandarts;
    const newState = {...state};
    newState.tandartsen = newTandartsen;
    return newState;
};
/////////////////////////////////////////////////////////////////////

const renderTandartsen = tandartsen => {
    const allemaalHTML = '<h1>Lijst van tan</h1>';
    return allemaalHTML;
};


const render = state => {
    const tandartsenHTML = renderTandartsen(state.tandartsen);
    const afsprakenHTML = renderAfspraken(state.afspraken);

    document.querySelector('body').innerHTML = tandartsenHTML + afsprakenHTML;
};


const startVoorbeeld = () => {
    //changeHandler
    const newState = maakTandartsZiek(state, "1");
    //functional component
    render(newState);
};
