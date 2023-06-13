import { authOptions } from "@/utils/authOptions";
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
  //---------QUERYS CATEGORY CRABS--------------------------------------------------------
  const QUERY_AGE_BELOW10 =
    "SELECT count(AGE) as edad FROM CRABS WHERE AGE <= 10";
  const QUERY_AGE_ABOVE10 =
    "SELECT count(AGE) as edad FROM CRABS WHERE AGE > 10";
  const [B10, fields] = (await connection.query(QUERY_AGE_BELOW10)) as any;
  const [AB10, fields2] = (await connection.query(QUERY_AGE_ABOVE10)) as any;
  /*   console.log(B10[0].edad);
       console.log(AB10[0].edad); */
  const ageCategory = [B10[0].edad, AB10[0].edad];
  //--------------------------------------------------------------------------------------

  //---------QUERY FREQUENCY AGE CRABS----------------------------------------------------
  const QUERY_AGE_FREQUENCY =
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
  console.log(ageFreq);
  //--------------------------------------------------------------------------------------

  const session = await getServerSession(authOptions);
  //valida si es que el usuario esta logeado sino se le redirege al login
  if (!session) {
    redirect("/");
  }
  const data = "";
  return (
    <div className="w-full h-screen">
      <div>
        <AgeHistogram key={data} data={ageCategory} />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-5 ">
        <Graficoej />
      </div>
    </div>
  );
}
