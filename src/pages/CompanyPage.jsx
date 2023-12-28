import CompanyHeading from "src/components/CompanyDetail"
import { COMPANY_LIST } from "src/constants/COMPANY_LIST"

function CompanyPage() {
  const company = COMPANY_LIST[0];

  return (
    <main>
      <CompanyHeading company={company} />
      <div>
        {company.detail}
      </div>
    </main>
  )
}

export default CompanyPage
