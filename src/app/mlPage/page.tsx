import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
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
  const QUERY_STRING = "SELECT * FROM CRABS LIMIT 2";
  const [rows, fields] = (await connection.query(QUERY_STRING)) as any;
  console.log(rows);

  const session = await getServerSession(authOptions);
  //valida si es que el usuario esta logeado sino se le redirege al login
  if (!session) {
    redirect("/");
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>aquí van los gráficos de ML ༼ つ ◕_◕ ༽つ</div>
      <div>xx</div>
    </div>
  );
}
