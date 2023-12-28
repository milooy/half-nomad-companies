import { useParams } from "react-router-dom";
import CompanyHeading from "src/components/CompanyDetail"
import { COMPANY_LIST } from "src/constants/COMPANY_LIST"

function CompanyPage() {
  const { companyName } = useParams()
  const company = COMPANY_LIST.find(company => company.name === companyName);

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
