import { FiltersItem, FiltersStyle } from "../Content.style";
import { FlexBox } from "../../sidebar/Sidebar.styles";
import { categories } from "../../../tokens";
import { useState } from "react";

export const Filters = ({handleFilter}:any) => {
  const [active, setActive] = useState('all')

  const handleClick = (name:any) => {
    setActive(name)
    handleFilter(name)
  }



  return (
    <FiltersStyle>
      <FlexBox gap='4px'>
        {categories.map(elem =>
          <FiltersItem key={elem.id} onClick={() => handleClick(elem.id)} color={active === elem.id ? active : undefined}>
                {elem.title}
          </FiltersItem>)}
      </FlexBox>
    </FiltersStyle>
  )
}