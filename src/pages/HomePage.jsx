import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyCard from "src/components/CompanyCard";
import FlexWrapper from "src/components/FlexWrapper";
import { fetchCompanies } from "src/remotes";

function HomePage() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetchCompanies()
      setCompanies(res)
    })()
  }, [])

  if (companies == null) {
    return <div>로딩중</div>
  }

  return (
    <FlexWrapper>
      {companies.map(company => (
        <CompanyCard key={company.id} onClick={() => { navigate(`/company/${company.name}`) }} company={company} />
      ))}
    </FlexWrapper>
  )
}

export default HomePage
