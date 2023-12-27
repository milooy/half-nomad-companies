import { COMPANY_LIST } from "src/constants/COMPANY_LIST"

function HomePage() {
  return (
    <main>
      <h1>Half nomad</h1>
      <h2>원격근무/자율출퇴근 회사 아카이브</h2>
      <ul>
        {COMPANY_LIST.map(company => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default HomePage
