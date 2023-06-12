import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Graficoej from "../mlPage/components/Graficoej";
import HistoricFalls from "../mlPage/components/HistoricFalls";
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
  const QUERY_STRING = "SELECT count(AGE) as edad FROM CRABS WHERE AGE <= 10";
  const QUERY_STRING2 = "SELECT count(AGE) as edad FROM CRABS WHERE AGE > 10";
  const [rows, fields] = (await connection.query(QUERY_STRING)) as any;
  const [rows2, fields2] = (await connection.query(QUERY_STRING2)) as any;
  console.log(rows[0].edad);
  console.log(rows2[0].edad);
  const arraysito = [rows[0].edad, rows2[0].edad];
  const session = await getServerSession(authOptions);
  //valida si es que el usuario esta logeado sino se le redirege al login
  if (!session) {
    redirect("/");
  }
  const data = "";
  return (
    <div className="w-full h-screen">
      <HistoricFalls key={data} data={arraysito} />
    </div>
  );
}
