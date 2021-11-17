import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BodyMain from './Main';
import Bodyfooter from './Footer';
import React from "react";
import foto from './logo1.jpg'
import ItemCount from './ItemCount'
import customFetch from './customFetch'

function App() {
const [datos, setDatos] = useState([]);

useEffect(() => {
    customFetch()
    .then(result => setDatos(result))
    .catch( err => console.log(err))
}, []); 

return (
    <> <Header/>
    <img src={foto}/>
    <hr/>
    <BodyMain/>
    <hr/>
    <ol>
    {
        datos.map((dato) => <li key={dato.id}>{dato.name} </li>)
    }
    </ol>
    <BodyFooter/>
    <ItemCount max= {10} initial= {1} />
    </>
);
}
