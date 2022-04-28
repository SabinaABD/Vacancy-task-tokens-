import { SidebarNavLink, SidebarLogo } from "./Sidebar.styles";
import Logo from '../../images/Logo.svg'
import TokensButton from '../../images/list.svg'
import SearchButton from '../../images/search.svg'

export const SidebarContent = () => {

  return (
    <div>
      <SidebarLogo>
        <img src={Logo} alt="sidebar logo" />
      </SidebarLogo>
      <SidebarNavLink to='/' >
        <img src={TokensButton} alt="token img" />
        Токены
      </SidebarNavLink>
      <SidebarNavLink to='/search' >
        <img src={SearchButton} alt="search button logo" />
        Поиск
      </SidebarNavLink>
    </div>
  )
}
