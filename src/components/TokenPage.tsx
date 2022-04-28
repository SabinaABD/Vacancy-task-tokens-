import { Title, Typography } from "./content/Content.style";
import { useParams } from "react-router-dom";

export const TokenPage = () => {
  const {name} = useParams()
  return (
    <div>
      <Title>{name}</Title>
      <Typography color='#6347F5'>Тестовое задание не предусматривает реализацию контента здесь </Typography>
    </div>
  )
}