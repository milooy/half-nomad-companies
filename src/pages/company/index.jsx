import { COMPANY_LIST } from "src/constants/COMPANY_LIST"

function CompanyPage() {
  const company = COMPANY_LIST[0]
  return (
    <main>
      <h1>{company.name}</h1>

      <ul>
        <li>자율출퇴근: {company.flexible}</li>
        <li>리모트: {company.remote}</li>
      </ul>

      <div>
        {company.detail}
      </div>
    </main>
  )
}

export default CompanyPage
