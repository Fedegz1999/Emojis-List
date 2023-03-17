import { LoadRemove } from '@/components/Loading';
import { Partidos } from '@/components/Tables/Partidos'
import { PartidosHoy } from '@/components/Tables/PartidosHoy';
import { PartidosVivo } from '@/components/Tables/PartidosVivo';
import { Partidosmañana } from '@/utils/client';
import axios from 'axios';
import React, { useEffect } from 'react'




export default function Home(props:any) {

  useEffect(()=>{
    LoadRemove()  
   })




  return (
    <>
    <div className='bg-cesped h-full w-full'>
<PartidosVivo vivo={props.vivo} />
<PartidosHoy hoy={props.hoy}/>
</div>
 </>   
  )
}




export const getStaticProps = async () => {
  const res = await fetch("https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=livedata&sport=soccer");
   const live = await res.json();

   const res3 = await fetch(`https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=predata&sport=soccer&day=today`)
   const today = await res3.json()
   
    return {
       props: {
          vivo: live, hoy: today
       },
       revalidate: 60
    };
 };


 //https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=predata&sport=soccer&day=