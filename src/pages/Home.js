import { useContext, useState } from 'react';
import { DataStateContext } from '../App';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';

const Home = () => {
  const diaryList = useContext(DataStateContext);
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
      <DiaryList diaryList={diaryList} />
    </div>
  );
};

export default Home;
