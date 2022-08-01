const DiaryList = ({ dataList }) => {
  return (
    <div>
      {dataList.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

export default DiaryList;
