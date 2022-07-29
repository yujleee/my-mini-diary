import { useParams } from 'react-router-dom';

const Diary = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div>
      <h2>diary</h2>
    </div>
  );
};

export default Diary;
