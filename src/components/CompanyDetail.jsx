
export default function CompanyHeading({ company }) {
  const handleApplyButtonClick = () => {
    window.open(company.applyLink)
  }

  return (
    <div className="py-6">

      <div className="flex justify-between">

        <h1 className="text-5xl font-extrabold">{company.name}</h1>
        <button onClick={handleApplyButtonClick} className="bg-lime-500 p-3 rounded hover:bg-lime-400 transition ease-in">채용공고 보기</button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300 text-lefts  mt-6" >
        <tbody>
          <TableItem header="원격근무">{company.remote}</TableItem>
          <TableItem header="자율출퇴근">{company.flexible}</TableItem>
        </tbody>
      </table>
    </div>
  )
}

const TableItem = ({ header, children }) => (
  <tr >
    <th className="p-2">{header}</th>
    <td>{children}</td>
  </tr>
)