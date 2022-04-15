import React from 'react'
import heroBg from '../img/cpus.jpg';

const Categories = () => {
  return (
    <div className='categories flex justify-center items-center'>
        <div className='categories_content flex justify-center items-center'>
            <div className='categories_content_cpu mx-5 flex justify-center items-center'>
                <h2 className='categories_content_title'>Procesadores</h2>
            </div>
            <div className='categories_content_gpus mx-5 flex justify-center items-center'>
                <h2 className='categories_content_title'>Placas de video</h2>
            </div>
            <div className='categories_content_perifericos mx-5 flex justify-center items-center'>
                <h2 className='categories_content_title'>Perifericos</h2>
            </div>
        </div>
    </div>
  )
}

export default Categories