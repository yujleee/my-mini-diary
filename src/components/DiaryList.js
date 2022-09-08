import { useState } from 'react';
import DiaryItem from './DiaryItem';
import ControlMenu from './ControlMenu';

import '../style/snb.css';

const sortOptionList = [
  { name: '최신순', value: 'latest' },
  { name: '오래된 순', value: 'oldest' },
];

const filterOptionList = [
  { name: '모든 감정', value: 'all' },
  { name: '좋았을 때', value: 'good' },
  { name: '별로일 때', value: 'notGood' },
];

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');
  const totalDiary = diaryList.length;

  const getProcessedDiaryList = () => {
    const filterEmotion = (item) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList = filter === 'all' ? copyList : copyList.filter((it) => filterEmotion(it));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="diaryList">
      <div className="snb">
        <div className="total">현재 일기 {totalDiary}개</div>
        <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
        <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
      </div>
      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
