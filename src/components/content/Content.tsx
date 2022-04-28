import { ContentHeader, Title } from "./Content.style";
import { FlexBox } from "../sidebar/Sidebar.styles";
import { Filters } from "./filters/Filters";
import { Tokens } from "./tokens/Tokens";
import { useState } from "react";


export const Content = () => {
  const [filter, setFilter] = useState('all')

  const handleFilter = (name:string) => {
    setFilter(name)
  }

  return(
    <div>
      <ContentHeader>
        <FlexBox justify='space-between'>
          <Title>Токены Everscale</Title>
          <Filters handleFilter={handleFilter}/>
        </FlexBox>
      </ContentHeader>
      <Tokens filter={filter}/>
    </div>
  )
}
