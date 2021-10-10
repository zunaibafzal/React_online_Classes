import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Components/Cards';
import PakCities from './Components/Card';

ReactDOM.render(
  <>
    <Cards
    imgsrc={PakCities[0].imgsrc}
    sName={PakCities[0].sName}
    title={PakCities[0].title}    
     />

    <Cards
    imgsrc={PakCities[1].imgsrc}
    sName={PakCities[1].sName}
    title={PakCities[1].title} />
    
    <Cards
    imgsrc={PakCities[2].imgsrc}
    sName={PakCities[2].sName}
    title={PakCities[2].title} />
    
    <Cards
    imgsrc={PakCities[3].imgsrc}
    sName={PakCities[3].sName}
    title={PakCities[3].title} />
  </>,
  document.getElementById('root')
);

