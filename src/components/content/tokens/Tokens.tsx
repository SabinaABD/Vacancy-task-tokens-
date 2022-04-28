import { TokenItem } from "./TokenItem";
import { tokens } from "../../../tokens"

export const Tokens = ({filter}:any) => {
  return (
    <div>
      {filter === "all"
        ? tokens.map(elem =><TokenItem elem={elem}/> )
        : tokens.filter(elem => elem.categories.includes(`${filter}`)).map(elem =><TokenItem elem={elem}/> ) }
    </div>
  )
}
