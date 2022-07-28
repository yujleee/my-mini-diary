import './App.css';
import Buttons from './components/Buttons';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Buttons category={'primary'} text={'오늘의 일기 작성하기'} />
      <Buttons category={'secondary'} text={'삭제하기'} />
      <Buttons text={'뒤로가기'} />
      <Header left={<Buttons text={'<'} />} titleText={'홈'} right={<Buttons text={'>'} />} />
      <Header titleText={'일기 작성'} left={<Buttons text={'<'} />} />
    </div>
  );
}

export default App;
