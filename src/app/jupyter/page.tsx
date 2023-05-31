import { NextApiRequest, NextApiResponse } from "next";

export default async function page() {
  const response = await fetch(
    "http://localhost:8888/api/contents/1.2.2_Estadistica_Descriptiva_I.ipynb"
  );
  const responseData = await response.json();
  const plotOutputs = responseData.content.cells
    .filter((cell: any) => cell.cell_type === "code")
    .flatMap((cell: any) => cell.outputs)
    .filter(
      (output: any) =>
        output.output_type === "display_data" && output.data["image/png"]
    )
    .map((output: any) => output.data["image/png"]);
  // console.log(responseData.content.cells[30]);
  const content = (
    <section>
      {/*       <div>
        {plotImages[1] && (
          <img src={`data:image/png;base64,${plotImages[1]}`} alt="Plot" />
        )}
      </div>
 */}
      <div>
        {plotOutputs.map((plotImage: any, index: any) => (
          <img
            key={index}
            src={`data:image/png;base64,${plotOutputs[index]}`}
            alt={`Plot ${index}`}
          />
        ))}
      </div>
    </section>
  );

  return content;
}
