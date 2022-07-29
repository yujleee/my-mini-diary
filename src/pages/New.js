import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Buttons from '../components/Buttons';

const New = () => {
  const navigate = useNavigate();

  return (
    <div className="new">
      <Header left={<Buttons text={'<'} onClick={() => navigate(-1)} />} titleText={'새 일기 작성'} />
    </div>
  );
};

export default New;
