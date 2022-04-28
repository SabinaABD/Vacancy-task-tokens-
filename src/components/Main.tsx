import { Outlet, Route, Routes } from "react-router-dom";
import { Content } from "./content/Content";
import { Sidebar } from "./sidebar/Sidebar";
import { Search } from "./Search";
import { ContentWrapper } from "./content/Content.style";
import { TokenPage } from "./TokenPage";

export const Main = () => {
  return(
    <Routes>
      <Route path='/' element={<Wrapper />}>
        <Route path='/' element={<Content />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/token/:name' element={<TokenPage />}/>
      </Route>
    </Routes>
  )
}

export const Wrapper = () => {
  return (
    <div className='app'>
        <Sidebar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
    </div>
  )
}