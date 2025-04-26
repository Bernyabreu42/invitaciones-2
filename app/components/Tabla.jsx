import React from "react";

export default function Tabla() {
  return (
    <table>
      <thead className="border ">
        <tr className="divide-x">
          <th className="p-2"></th>
          <th className="p-2">Mireya I. Valdez Batista</th>
          <th className="p-2">José A. Henríquez Cabral</th>
        </tr>
      </thead>
      <tbody className="border divide-y">
        <tr className="divide-x">
          <td className="p-2">Banco</td>
          <td className="p-2">Popular</td>
          <td className="p-2">Reservas</td>
        </tr>
        <tr className="divide-x">
          <td className="p-2">Cuenta</td>
          <td className="p-2">0826500662</td>
          <td className="p-2">9606320029</td>
        </tr>
        <tr className="divide-x">
          <td className="p-2">Cédula</td>
          <td className="p-2">40218386874</td>
          <td className="p-2">22500840297</td>
        </tr>
      </tbody>
    </table>
  );
}
