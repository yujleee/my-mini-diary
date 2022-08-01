import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons';
import { faFaceGrinSquint } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceGrin } from '@fortawesome/free-solid-svg-icons';

import '../style/diaryItem.css';

const DiaryItem = ({ id, date, emotion, content }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const matchEmotion = (emotion) => {
    switch (emotion) {
      case 1:
        return faFaceGrinSquint;

      case 2:
        return faFaceGrin;

      case 3:
        return faFaceSmile;

      case 4:
        return faFaceFrownOpen;

      case 5:
        return faFaceFrown;

      case 6:
        return faFaceSadTear;

      default:
        return faFaceGrin;
    }
  };

  return (
    <div className="DiaryItem" key={id} onClick={goDetail}>
      <div className="emotion-wrap">
        <FontAwesomeIcon className={['emotion', `emotion-${emotion}`].join(' ')} icon={matchEmotion(emotion)} />
      </div>
      <div className="content-wrap">
        <p className="date">{new Date(date).toLocaleDateString()}</p>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default DiaryItem;
