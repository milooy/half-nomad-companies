import CompanyCard from "src/components/CompanyCard"
import FlexWrapper from "src/components/FlexWrapper"
import { COMPANY_LIST } from "src/constants/COMPANY_LIST"

function HomePage() {
  return (
    <FlexWrapper>
      {COMPANY_LIST.map(company => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </FlexWrapper>
  )
}

export default HomePage
