import { useNavigate } from "react-router-dom";
import CompanyCard from "src/components/CompanyCard";
import FlexWrapper from "src/components/FlexWrapper";
import { COMPANY_LIST } from "src/constants/COMPANY_LIST";

function HomePage() {
  const navigate = useNavigate();
  return (
    <FlexWrapper>
      {COMPANY_LIST.map(company => (
        <CompanyCard key={company.id} onClick={() => { navigate(`/company/${company.name}`) }} company={company} />
      ))}
    </FlexWrapper>
  )
}

export default HomePage
