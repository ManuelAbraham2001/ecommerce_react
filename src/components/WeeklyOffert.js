import React from 'react'
// import ofertaImg from '../img/oferta.png'

const WeeklyOffert = () => {
  return (
    <div className= 'weekly_offert flex items-center'>
        <div className='weekly_offert_content flex justify-around items-center w-full'>

          <div className='weekly_offert_content_img'>
            <img src="../img/oferta.png"></img>
          </div>

          <div className='text-center flex flex-col items-center justify-around h-96'>
           
            <h2 className='mb-2 text-5xl text-white uppercase font-extrabold'><span className='text-red-700'>Oferta</span> <span className='text-black'>de</span> <span className='text-red-700'>la</span> <span className='text-black'>semana</span></h2>
            <h2 className='text-4xl text-white uppercase font-bold flex-end'><span className='text-red-700'>Nueva</span> <span className='text-black'>AMD</span> <span className='text-red-700'>Radeon</span> <span className='text-black'>RX</span> <span className='text-red-700'>6900</span> <span className='text-black'> XT</span></h2>

            <div className='weekly_offert_content_ul'>
              <ul>
                <li className='text-red-700'>12 Cuotas sin interes con todos los bancos</li>
                <li className='text-black'>Envio sin cargo a todo el pais</li>
                <li className='text-red-700'>Garantia de cambio directo</li>
                <li className='text-black'>Garantia de fabrica con la marca</li>
              </ul>
            </div>

            <a className='text-red-700 font-bold uppercase' href="#">Comprar ahora</a>
          </div>
        </div>
    </div>
  )
}

export default WeeklyOffert