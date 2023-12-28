
const CompanyCard = ({ company }) => {
  return (
    <div className="border-solid border px-5 py-4 m-2 rounded-md border-gray-200 flex-grow cursor-pointer	hover:bg-sky-100 transition ease-in">
      <div className="text-lg font-bold	">{company.name}</div>
      <ul className="py-1 text-gray-600">
        <li>원격근무: {company.remote}</li>
        <li>자율출퇴근: {company.flexible}</li>
      </ul>
      <a href={company.applyLink} target="_blank" rel="noreferrer" className="text-blue-400 text-sm underline">채용공고</a>
    </div>
  )
}

export default CompanyCard