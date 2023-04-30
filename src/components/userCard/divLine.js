import { Circle, Img, Line } from '../userCard/userCard.stuled';

export const DivLine = ({ item }) => {
  return (
    <>
      <Line></Line>
      <Circle>
        <Img src={`${item.avatar}`} alt="user image" />
      </Circle>
    </>
  );
};
