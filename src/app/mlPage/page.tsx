import React from "react";
import { authOptions } from "@/app/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Graficoej from "../mlPage/components/Graficoej";
import AgeHistogram from "./components/AgeHistogram";
import connection from "../../../lib/database/database";

//--------------------------------------------------------------------------
/* async function fetchCrabs() {
  console.log("||| ||| fetchCrabs corriedo ||| |||");
  connection.query(
    "SELECT * FROM `crabs` LIMIT 2",
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
    }
  );
  }                                                                      */
//--------------------------------------------------------------------------
//sin promise
/*   const fetchData = () => {
    try {
      connection.query(
        "SELECT * FROM `crabs` LIMIT 2",
        function (err, results, fields) {
          if (err) {
            console.log(err);
          } else {
            console.log(results); // results contains rows returned by server
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }; */

export default async function page() {
  /*///////// OCUPAR ESTE FORMATO DE SCRIPT ////////////////////////////////////////////////////////////////////////////////////*/

  //BLACKBOARD
  const QUERY_STATS_REGISTRY =
    "SELECT COUNT(IDREGISTRO) AS CANTIDAD, MAX(IDREGISTRO) AS MAXIMO,MIN(IDREGISTRO) AS MINIMO , AVG(IDREGISTRO) AS PROMEDIO from `blackboard_hora`;";
  const [RSTAT] = (await connection.query(QUERY_STATS_REGISTRY)) as any;
  /* console.log(
    `\nCANTIDAD: ${RSTAT[0].CANTIDAD}\nMAXIMO: ${RSTAT[0].MAXIMO}\nMINIMO: ${RSTAT[0].MINIMO}\n`
  );
 */
  const RSTAT_SET = [
    RSTAT[0].CANTIDAD,
    RSTAT[0].MAXIMO,
    RSTAT[0].MINIMO,
    RSTAT[0].PROMEDIO,
  ];

  const QUERY_RUNTIME_REGISTRY =
    "SELECT SUBSTR(FECHA_HORA,1,10) AS FH, `FECHA_HORA(RAW)` AS FHRAW  from `blackboard_hora` GROUP BY FECHA_HORA,`FECHA_HORA(RAW)`;";
  const [RTIME] = (await connection.query(QUERY_RUNTIME_REGISTRY)) as any;
  console.log(
    `\nFECHA_HORA: ${RTIME[0].FH}\nFECHA_HORA_RAW: ${RTIME[0].FHRAW}}\n`
  );
  const RTIME_SET = [RTIME[0].CANTIDAD, RTIME[0].FHRAW];
  var RTIME_SET_FH = new Array();
  var RTIME_SET_FHRAW = new Array();
  for (let index = 0; index < RTIME.length; index++) {
    const element = RTIME[index];
    //console.log(`${element.FH} / ${element.FHRAW}`);
    RTIME_SET_FH.push(element.FH);
    RTIME_SET_FHRAW.push(element.FHRAW);
  }
  //console.log(RTIME_SET_FH);
  //console.log(RTIME_SET_FHRAW);

  /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

  /* Solucion es7+ estandar */
  //---------QUERYS CATEGORY CRABS--------------------------------------------------------
  //const QUERY_AGE_BELOW10 =
  //  "SELECT count(AGE) as edad FROM CRABS WHERE AGE <= 10";
  //const QUERY_AGE_ABOVE10 =
  //  "SELECT count(AGE) as edad FROM CRABS WHERE AGE > 10";
  // const [B10, fields] = (await connection.query(QUERY_AGE_BELOW10)) as any;
  // const [AB10, fields2] = (await connection.query(QUERY_AGE_ABOVE10)) as any;
  /*   console.log(B10[0].edad);
       console.log(AB10[0].edad); */
  // const ageCategory = [B10[0].edad, AB10[0].edad];
  //--------------------------------------------------------------------------------------

  /* No ocupar este diseño, complejidad procesado muy alto */
  //---------QUERY FREQUENCY AGE CRABS----------------------------------------------------
  /* const QUERY_AGE_FREQUENCY =
    "SELECT AGE AS EDAD,COUNT(AGE) AS FRECUENCIA FROM CRABS GROUP BY AGE";
  const [FREQUENCY, fields3] = (await connection.query(
    QUERY_AGE_FREQUENCY
  )) as any;
  const ageIndex = [];
  const ageFreq = [];
  for (let index = 0; index < FREQUENCY.length; index++) {
    const element = FREQUENCY[index];
    //console.log(`EDAD: ${element.EDAD} FRECUENCIA: ${element.FRECUENCIA}`);
    ageIndex.push(element.EDAD);
    ageFreq.push(element.FRECUENCIA);
  }
  console.log(ageIndex);
  console.log(ageFreq); */
  //--------------------------------------------------------------------------------------

  const session = await getServerSession(authOptions);
  console.log(session);
  //valida si es que el usuario esta logeado sino se le redirege al login
  if (!session) {
    redirect("/");
  }
  const data = "";
  const taim = [RTIME_SET_FH, RTIME_SET_FHRAW];
  const taimraw = "";
  return (
    <div className="w-full h-screen">
      <div>
        <p>BLACKBOARD</p>
        <h1>Total de Registros: {RSTAT[0].CANTIDAD}</h1>
        <h1>Maximo Id del Registro: {RSTAT[0].MAXIMO}</h1>
        <h1>Minimo Id del Registro: {RSTAT[0].MINIMO}</h1>
        <h1>Minimo Id del Registro: {RSTAT[0].PROMEDIO}</h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-5 ">
        <AgeHistogram key={data} data={RSTAT_SET} />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-5 ">
        <Graficoej
          key={taim}
          {...taim.map((taim, index) => ({ [`data${index + 1}`]: taim }))}
        />
      </div>
    </div>
  );
}
