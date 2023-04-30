import { CardContainer, HeroDiv } from 'components/userCard/userCard.stuled';
import { Logo } from 'components/userCard/logo';
import { DivLine } from './divLine';
import { InfoUser } from './infoUser';

export const UserCard = ({ users, item }) => {
  return (
    <CardContainer>
      <Logo />
      <HeroDiv />
      <DivLine item={item} />
      <InfoUser item={item} users={users} />
    </CardContainer>
  );
};
