import {useState} from "react";

const ItemCount = (props) => {
    const [carro, setCarro ] = useState(1);

    const increment = () => {
       if (carro < props.max) setCarro(carro+1);
    }

    const decrement = () => {
        if (carro > 1) setCarro(carro-1);
     }

     const agregar = () => {
      console.log (`Has agregado ${carro} productos` )
     }


    return (
    <div>
   <button onClick={decrement}> - </button>
   {carro}
   <button onClick={increment}> + </button>
   <button onClick={agregar}> Agregar al carro </button>
   </div>
        );
 }

export default ItemCount;