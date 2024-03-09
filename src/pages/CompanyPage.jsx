import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyHeading from "src/components/CompanyDetail";
import { fetchCompany } from "src/remotes";

function CompanyPage() {
  const { companyName } = useParams()
  // const company = COMPANY_LIST.find(company => company.name === companyName);
  const [company, setCompany] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetchCompany(companyName)
      setCompany(res)
    })()
  }, [companyName])

  if (company == null) {
    return <div>로딩중</div>
  }

  return (
    <main>
      <CompanyHeading company={company} />
      <div className="styled-markdown">
        <Markdown>
          {company.detail}
        </Markdown>
      </div>
    </main>
  )
}

export default CompanyPage
