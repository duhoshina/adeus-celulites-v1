import Image from 'next/image'
import { GiAtom } from 'react-icons/gi'

import zoomCelulite from '../../public/zoom-celulite.webp'
import selos from '../../public/selos-otimizado.webp'
import resultadoUm from '../../public/resultado-1.webp'
import resultadoDois from '../../public/resultado-2.webp'
import fotoUm from "../../public/profile-picture-1-min.webp"
import fotoDois from "../../public/profile-picture-2-min.webp"

export default function Home() {

  const listProvaSocial = [
    { sourceMedia: resultadoUm, nomePessoa: 'Tatiane Rodrigues', descricaoPessoa: 'Amei o resultado, deu super certo, estou seguindo o protocolo a 17 dias e melhorou muito a celulite na perna direita', imagemPessoa: fotoUm },
    { sourceMedia: resultadoDois, nomePessoa: 'Fabrine Goulart', descricaoPessoa: 'Já fiz vários tratamentos antes, mas esse realmente vi que era o melhor, pois elimina a causa raiz da celulite, estou fazendo há 2 semanas', imagemPessoa: fotoDois },
  ]

  const listItems = [
    { icon: GiAtom, tituloItem: 'Redução Visível em 14 dias', descricaoItem: 'A fórmula biológica da erva irlandesa possui propriedades que vão reduzir a aparência da sua celulite de forma visível.' },
    { icon: GiAtom, tituloItem: 'Fluidez de Eritrócitos H.', descricaoItem: 'Você vai sentir uma fluidez maior na retenção de líquidos e no inchaço associado às suas celulites' },
    { icon: GiAtom, tituloItem: '+142% Ação Anti-Oxidante', descricaoItem: 'Seu corpo vai começar a combater os radicais livres danificadores das células que contribuem para a aparência da celulite.' },
  ]

  return (
    <main className='bg-slate-100 flex flex-col items-center justify-center gap-5 p-6'>
      <h1 className='text-3xl font-bold text-center capitalize'>
        descoberto como médicos estão usando um <span className='text-purple-600'>estranho truque</span> para reduzir celulites nos seus pacientes em <span className='text-purple-600'>21 dias</span>
      </h1>
      <h2 className='text-center text-md font-medium'>Aprenda a eliminar todas as toxinas e inflamações que causam o surgimento das celulites.</h2>
      <section className='block w-full'>
        <iframe className='m-auto' src="https://www.youtube.com/embed/Yzm1CLh1-Gg?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </section>

      <p className='text-center'>Apenas<br></br> <span className='text-2xl'>12x de <span className='font-bold'>R$28,94</span></span></p>

      <a href='https://pay.hotmart.com/X79200136Q?off=sk7q0bz6&checkoutMode=10&bid=1676398600375' className='text-slate-100  uppercase block font-bold p-5 bg-purple-500 rounded-md w-full text-center'>remover celulites agora</a>

      <Image src={selos} alt='selos digitais' />

      <h2 className='text-center text-3xl font-bold capitalize mt-10'>Oque este <span className='text-purple-600'>truque</span> vai te proporcionar?</h2>

      <ul>
        {listItems.map((item, index) => (
          <li className='flex gap-5 items-center justify-around px-3 border py-5 rounded-md bg-slate-50 drop-shadow-lg bg-opacity-60 backdrop-blur-sm mb-5'>
            <div className='p-3 rounded-full flex justify-center aligm-center border bg-purple-500'>
              {<item.icon fill='#f3f3f3' width='60px' height='60px' />}
            </div>
            <div>
              <p className='font-bold text-purple-500 mb-3 capitalize'>{item.tituloItem}</p>
              <p className='font-medium text-sm'>{item.descricaoItem}</p>
            </div>
          </li>
        ))}
      </ul>


      <h2 className='text-center text-3xl font-bold capitalize'>apenas <span className='text-purple-600'>21 dias</span> para ter esses resultados no seu corpo 👇</h2>

      {listProvaSocial.map((item) => (
        <div className='w-full flex flex-col items-center -mb-14'>
          <div className='w-full'>
            <Image src={item.sourceMedia} alt='selos digitais' className='rounded-xl m-auto' />
          </div>
          <div className='relative -top-14 left-1 bg-white p-6 bg-opacity-60 backdrop-blur-sm rounded-xl drop-shadow-lg border-white right-10 space-y-3 max-w-sm'>
            <div className="flex gap-2">
              <div className='w-10'>
                <Image src={item.imagemPessoa} alt="foto um" className='rounded-full w-20' />
              </div>
              <div>
                <p className='text-sm bg-purple-600 px-4 py-2 text-slate-50 rounded-md w-max'>{item.nomePessoa}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className='text-slate-800 rounded-md text-sm font-medium'>{item.descricaoPessoa}</p>
            </div>
          </div>
        </div>
      ))}

      <h2 className='text-center text-3xl font-bold'>O que é o <span className='text-purple-600'>Adeus Celulites</span> e por que ele é tão poderoso pela ciência?</h2>

    </main>
  )
}
