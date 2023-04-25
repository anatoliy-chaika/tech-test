import { CardContainer, HeroDiv } from 'components/userCard/userCard.stuled';
import { Logo } from 'components/userCard/logo';
import { DivLine } from './divLine';
import { Infouser } from './infoUser';

export const UserCard = ({ item }) => {
  return (
    <CardContainer>
      <Logo />
      <HeroDiv />
      <DivLine item={item} />
      <Infouser item={item} />
    </CardContainer>
  );
};
