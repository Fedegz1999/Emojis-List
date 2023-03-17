import axios from "axios";

export default function arregladora(equipo:string) {
if(equipo === "Man City")equipo="M. City"
if(equipo === "Nottm Forest")equipo="Nott'm Forest"
if(equipo === "Aston Villa")equipo="A Villa"
if(equipo === "Wolverhampton")equipo="Wolves"
if(equipo === "Man Utd")equipo="M. United"
if(equipo === "Real Madrid")equipo="R. Madrid"
if(equipo === "Atletico Madrid")equipo="Atlético"
if(equipo === "Real Betis")equipo="Betis"
if(equipo === "Rayo Vallecano")equipo="Rayo"
if(equipo === "Athletic Bilbao")equipo="Athletic"
if(equipo === "Celta Vigo")equipo="Celta"
if(equipo === "Mainz")equipo="Mainz 05"
if(equipo === "Eintracht Frankfurt")equipo="Eintracht"
if(equipo === "Cologne")equipo="Colonia"
if(equipo === "Wolfsburg")equipo="Wolfsburgo"
if(equipo === "Augsburg")equipo="Augsburgo"
if(equipo === "Bochum")equipo="VfL Bochum 1848"
if(equipo === "Schalke")equipo="Schalke 04"
if(equipo === "Bayern Munich")equipo="Bayern Múnich"
if(equipo === "Lyon")equipo="O. Lyon"
if(equipo === "AC Ajaccio")equipo="Ajaccio"
if(equipo === "Clermont Foot")equipo="Clermont"
if(equipo === "Nice")equipo="Niza"
if(equipo === "Marseille")equipo="O. Marsella"
if(equipo === "PSG")equipo="Paris Saint-Germain"
if(equipo === "Gimnasia LP")equipo="Gimnasia"
if(equipo === "Racing Club")equipo="Racing"
if(equipo === "Central Cordoba")equipo="Central Córdoba de Santiago del Estero"
if(equipo === "Argentinos Jrs")equipo="Argentinos"
if(equipo === "Union Santa Fe")equipo="Unión"
if(equipo === "Estudiantes LP")equipo="Estudiantes"
if(equipo === "Rosario Central")equipo="Central"
if(equipo === "Colon")equipo="Colón"
if(equipo === "Lanus")equipo="Lanús"
if(equipo === "River Plate")equipo="River"
if(equipo === "Atlético Tucumán")equipo="Atl. Tucumán"
if(equipo === "CA Independiente")equipo="Independiente"
if(equipo === "Instituto AC Cordoba")equipo="Instituto"
if(equipo === "Huracan")equipo="Huracán"
if(equipo === "CA Talleres de Córdoba")equipo="Talleres"
if(equipo === "Velez Sarsfield")equipo="Vélez"
if(equipo === "CA Tigre")equipo="Tigre"
if(equipo === "Arsenal de Sarandi")equipo="Arsenal"
if(equipo === "Defensa y Justicia")equipo="Defensa"
if(equipo === "Boca Juniors")equipo="Boca"
if(equipo === "Cremonese")equipo="U.S. Cremonese"
if(equipo === "Bologna")equipo="Bolonia"
if(equipo === "AC Milan")equipo="Milan"
if(equipo === "Verona")equipo="Hellas Verona"
if(equipo === "Lecce")equipo="US Lecce"
if(equipo === "Napoli")equipo="Nápoles"
if(equipo === "Inter Milan")equipo="Inter Milán"
if(equipo === "")equipo=""
if(equipo === "")equipo=""
if(equipo === "")equipo=""
if(equipo === "")equipo=""

return equipo
}


export function Partidosmañana(){
    var fecha = new Date();
    let pr = fecha.getMonth()+1
    let p2 = fecha.getDate()+1
    let a = fecha.getFullYear()
    return(`${a}${pr > 9 ? "" : "0"}${pr}${p2 > 9 ? "" : "0"}${p2}`);
    // 2023 03 07
  }

  export const fecha = (unixTimestamp:number) => {
    var date = new Date(unixTimestamp*1000);
    return(date.getHours()+":"+date.getMinutes());
    }







//{"status":"error","data":"Request validation failed: Parameter (site) is not an allowable value (2, 8, 19, 20, 22, 23, 24, 25): 3"}
//154 bra (paulista),155 bra(serie A) 152 arg, 146 hol, 156 col, 159 mex, 162 uru, 164 MLS, 165 libertadores, 
//166 sudamericana, 190 eliminatorias sud, 186 copa oro, 183 Champions League Femenina, 177 chile, 
//0195, nation league, 101 liga española, 102 LaLiga B, 103 champions, 104 europa league, 106 premier, 107 serie A
//108 bundesliga, 109 liga francesa, 110 liga portugal, 117 mundial, 118 euro, 119 copa america, 120 clasif euro, 122
//https://api.unidadeditorial.es/sports/v1/classifications/current/?site=25&type=10&tournament=0152


//Goleadores    ASISTENTES                                                  {aca va la liga}
//https://api.unidadeditorial.es/sports/v1/player-total-rank/sport/01/tournament/0101/sort/goals/current/?site=2&mn=100
                                                                                //{aca va tmbn asssists}


/*https://api.unidadeditorial.es/sports/v1/events/%s/full?site=2&timezoneOffset=%s&language=esES
https://api.unidadeditorial.es/sports/v1/events/count?site=%s&status=1&timezoneOffset=%s&date=%s&tournament=%s
https://api.unidadeditorial.es/sports/v1/events/list?timezoneOffset=%s&site=2&eventsIds=%s
https://api.unidadeditorial.es/sports/v1/events?site=%s&fields=sport,tournament,sportEvent,score,tv,bets,editorialInfo&timezoneOffset=%s&date=%s&tournament=%s*/ 




//https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=livedata&&sport=soccer

//12784-OhJLY5mb3BSOx0O
//94 premier

//https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=tabledata&league=220
//ayna

//Proximos partidos
//https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=predatapage&sport=soccer&league=94&p=%201

//https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=predatapage&sport=soccer&league=1040&p=1 CHAMPIONS

//https://spoyer.com/api/en/get.php?login=ayna&token=12784-OhJLY5mb3BSOx0O&task=tabledata&league=220 Liga arg tabla

//document.getElementById("__NEXT_DATA__").text

//26549