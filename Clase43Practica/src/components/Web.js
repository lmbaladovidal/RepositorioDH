import React from 'react';
import Encabezado from './Encabezado';
import Banner from './Banner';
import Producto from './Producto';
import Footer from './Footer';
function Web(){
  return (
    <div className="container">
      <Encabezado/>
      <Banner/>
      <h1>Bienvenido a nuestro primer proyecto en React</h1>
      <Producto/>
      <Footer/>     
    </div>
  )

}
export default Web;