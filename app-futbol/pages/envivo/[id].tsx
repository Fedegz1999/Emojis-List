import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { PlantelEnVivo } from '@/components/Tables/PlantelEnVivo'
import { LoadRemove, LoadStart } from '@/components/Loading'
import { useEffect, useState } from 'react'



export default function enVivo (props:any) {

    useEffect(()=>{
        LoadRemove()  
       })
       
    return (
        <>
        <div className='py-3 bg-cesped'>

        {props.vivo.results ? props.vivo.results.map((a:any) => {
            return (
<div key={a.id} className="w-full rounded-xl border-solid border-2 border-gray-300 shadow-xl shadow-black md:w-3/6 md:ml-80 bg-cyan-900">
  
<div className='py-2 flex items-center justify-center'>
    <h1 className='text-2xl font-mono  text-blue-300'>{a.league.name}</h1>
</div>

<div className='flex items-center justify-center '>
<h1 className='absolute mt-10 px-3 rounded flex justify-center font-light text-white border-solid border-2 border-cyan-700 bg-cyan-800 text-xl '>{a.timer? a.timer.tm + "'" : "Finalizado"} {a.timer ? a.timer.ta.length ? "+" + a.timer.ta : null : null}</h1>
</div>

<div className='flex gap-10 items-center pb-4 justify-center '>
<img src={`https://spoyer.com/api/team_img/soccer/${a.home.id}.png`}></img>
<div className='pt-6'>
<h1 className='w-20 flex shadow-sm shadow-black justify-center font-black text-white border-solid border-2 border-cyan-600 bg-cyan-700 text-2xl center'>{a.ss}</h1>
</div>
<img src={`https://spoyer.com/api/team_img/soccer/${a.away.id}.png`}></img>
</div>

{a.stats ? 
<div className='border-solid border-2 border-blue-900  shadow-black shadow-md rounded-xl bg-sky-800'> 

<div className='flex items-center py-2 justify-center  '>
<h3 className='font-black text-white text-xl font-mono '>Estadisticas del partido</h3>
</div>

<div className='flex justify-center items-center bg-teal-700 border-b-2 border-teal-900'>

    <div className='flex items-start justify-start w-full'>
    <h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl ml-3'>{a.stats.possession_rt ? a.stats.possession_rt[0] + "%" : "-"}</h1>
    </div>

<h1 className='py-2 font-mono text-lg'>Posesión</h1>

<div className='flex items-end justify-end  w-full'>
<h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl mr-3'>{a.stats.possession_rt ? a.stats.possession_rt[1] + "%" : "-"}</h1>
</div>
</div>



<div className='flex py-2 justify-center items-center bg-teal-600 border-b-2 border-teal-900'>

    <div className='flex items-start justify-start w-full'>
    <h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl ml-3'>{a.stats.goalattempts ? a.stats.goalattempts[0] : "-"}</h1>
    </div>

<h1 className='py-2 font-mono text-lg flex absolute text-left'>Tiros al arco</h1>

<div className='flex items-end justify-end  w-full'>
<h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl mr-3'>{a.stats.goalattempts ? a.stats.goalattempts[1] : "-"}</h1>
</div>
</div>


<div className='flex justify-center items-center py-2 bg-teal-700 border-b-2 border-teal-900'>

    <div className='flex items-start justify-start w-full'>
    <h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl ml-3'>{a.stats.shots_blocked ? a.stats.shots_blocked[0] : "-"}</h1>
    </div>

<h1 className='py-2 font-mono text-lg flex absolute text-left'>Tiros bloqueados</h1>

<div className='flex items-end justify-end  w-full'>
<h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl mr-3'>{a.stats.shots_blocked ? a.stats.shots_blocked[1] : "-"}</h1>
</div>
</div>


<div className='flex justify-center items-center py-2 bg-teal-600 border-b-2 border-teal-900'>

    <div className='flex items-start justify-start w-full'>
    <h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl ml-3'>{a.stats.penalties ? a.stats.penalties[0] : "-"}</h1>
    </div>

<h1 className='py-2 font-mono text-lg flex absolute text-left'>Penales</h1>

<div className='flex items-end justify-end  w-full'>
<h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl mr-3'>{a.stats.penalties ? a.stats.penalties[1] : "-"}</h1>
</div>
</div>


<div className='flex justify-center items-center py-2 bg-teal-700 border-b-2 border-teal-900'>

    <div className='flex items-start justify-start w-full'>
    <h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl ml-3'>{a.stats.fouls ? a.stats.fouls[0] : "-"}</h1>
    </div>

<h1 className='py-2 font-mono text-lg flex absolute text-left'>Fouls cometidos</h1>

<div className='flex items-end justify-end  w-full'>
<h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl mr-3'>{a.stats.fouls ? a.stats.fouls[1] : "-"}</h1>
</div>
</div>

<div className='flex justify-center items-center py-2 bg-teal-600 border-b-2 border-teal-900'>

    <div className='flex items-start justify-start w-full'>
    <h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl ml-3'>{a.stats.yellowcards ? a.stats.yellowcards[0] : "-"}</h1>
    </div>

<h1 className='py-2 font-mono text-lg flex absolute text-left'>Tarjetas amarillas</h1>

<div className='flex items-end justify-end  w-full'>
<h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl mr-3'>{a.stats.yellowcards ? a.stats.yellowcards[1] : "-"}</h1>
</div>
</div>

<div className='flex justify-center items-center py-2 bg-teal-700 border-b-2 border-teal-900'>

    <div className='flex items-start justify-start w-full'>
    <h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl ml-3'>{a.stats.redcards ? a.stats.redcards[0] : "-"}</h1>
    </div>

<h1 className='py-2 font-mono text-lg flex absolute text-left'>Tarjetas rojas</h1>

<div className='flex items-end justify-end  w-full'>
<h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl mr-3'>{a.stats.redcards ? a.stats.redcards[1] : "-"}</h1>
</div>
</div>

<div className='flex justify-center items-center py-2 bg-teal-600'>

    <div className='flex items-start justify-start w-full'>
    <h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl ml-3'>{a.stats.corners ? a.stats.corners[0] : "-"}</h1>
    </div>

<h1 className='py-2 font-mono text-lg flex absolute text-left'>Corners</h1>

<div className='flex items-end justify-end  w-full'>
<h1 className='border-solid border-2 border-cyan-900 rounded bg-blue-600 px-2 text-2xl mr-3'>{a.stats.corners ? a.stats.corners[1] : "-"}</h1>
</div>
</div>
</div>: null}
</div>
       )}): null}

       {props.equipos.results.home ?
<PlantelEnVivo data={props}/>
 :null }




<div>

        </div>
        </div>


</>
    )
}






export async function getServerSideProps(ctx:any) {
    
    // Call an external API endpoint to get posts
    var id = ctx.params;

    // You can use any data fetching library
    const res = await fetch("https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=eventdata&game_id=" + Object.values(id));
    const partido = await res.json();

    const res2 = await fetch("https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=lineupdata&game_id=" + Object.values(id));
    const alineaciones = await res2.json();


   

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        vivo: partido, equipos: alineaciones
      },
    };
  }

 


