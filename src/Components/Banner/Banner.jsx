import React from 'react'
import "./Banner.css"
import Logobanner from '../../../public/imgs/Logobanner.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='wrapper-banner'>
            <div className='w-banner-txt'>
                <div className='main-txt-banner'>
                    <h1>R$ 0,00 por 3 meses de Premium</h1>
                </div>

                <div className='subtext-banner'>
                <h2>Curta músicas sem anúncios, ouça no modo offline e muito mais. Cancele quando quiser.</h2>
                </div>
                
                <div className='button-banner'>
                    <div>
                    <button className='experimente'>Experimente 3 meses Por R$ 0,00</button>
                    </div>
                    <div>
                    <button className='verPlanos'>Ver Planos</button>
                    </div>
                </div>

                <div className='footer-banner'>
                    <span>Somente no plano Individual. Depois, é só R$ 21,90/mês.<u> Sujeito a Termos e Condições</u>. Disponível apenas para quem nunca usou o Premium. A oferta termina em 12/09/2023.</span>
                </div>
                
               
            </div>

            <div className='w-banner-img'>
                <img src={Logobanner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner