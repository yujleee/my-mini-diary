import { useState } from 'react';
import Buttons from '../components/Buttons';
import Header from '../components/Header';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const title = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  const decreaseMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()));
  const increaseMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()));

  return (
    <div>
      <Header
        left={<Buttons text={'<'} onClick={decreaseMonth} />}
        titleText={title}
        right={<Buttons text={'>'} onClick={increaseMonth} />}
      />
    </div>
  );
};

export default Home;
