/* eslint-disable react/prop-types */

const LOGO = "https://github.com/milooy/half-nomad/assets/3839771/7215caed-3fcd-4779-bc41-8774754bdde5"

export const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between p-6">
        <div className="flex">
          <img src={LOGO} className="w-8 h-8" alt="Half Nomad Logo" />
          <span className="self-center px-2 text-2xl font-extrabold dark:text-white">HALF__NOMAD</span>
          <span className="self-center text-s italic font-normal text-gray-500">원격근무/자율출퇴근 회사 아카이브</span>
        </div>

        <ul>
          <NavMenu>로그인</NavMenu>
        </ul>
      </div>
    </nav>

  )
}
function NavMenu({ children }) {
  return (
    <li>
      <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{children}</a>
    </li>
  )
}

