import { Link } from "react-router-dom"
import CompanyCard from "src/components/CompanyCard"
import FlexWrapper from "src/components/FlexWrapper"
import { COMPANY_LIST } from "src/constants/COMPANY_LIST"

function HomePage() {
  return (
    <FlexWrapper>
      {COMPANY_LIST.map(company => (
        <Link to={`/company/${company.name}`} key={company.id}>
          <CompanyCard company={company} />
        </Link>
      ))}
    </FlexWrapper>
  )
}

export default HomePage
