import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList }) => {
  return (
    <div>
      {diaryList.map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
