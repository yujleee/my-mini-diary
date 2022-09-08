import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataStateContext } from '../App';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';

import '../style/home.css';

const Home = () => {
  const navigate = useNavigate();
  const diaryList = useContext(DataStateContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const title = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  const decreaseMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()));
  const increaseMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()));

  const goNew = () => {
    navigate('/new');
  };

  return (
    <div className="home">
      <Header
        left={<Buttons text={'<'} onClick={decreaseMonth} />}
        titleText={title}
        right={<Buttons text={'>'} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={diaryList} />
      <Buttons text={'새로운 일기 쓰기'} category={'primary'} onClick={goNew} />
    </div>
  );
};

export default Home;
