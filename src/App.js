import React, { useReducer, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.data;

    case 'CREATE': {
      const new_date = new Date();

      const new_data = {
        ...action.data,
        date: new_date,
      };

      return [new_data, ...state];
    }

    case 'REMOVE':
      return state.filter((it) => it.id !== action.targetId);

    case 'EDIT':
      return state.map((it) => (it.id === action.targetId ? { ...it, content: action.newContent } : it));

    default:
      return state;
  }
};

const dummyData = [
  {
    id: 1,
    emotion: 4,
    date: 1659348577791,
    content: '이것은 첫번째 더미데이터 입니다.',
  },
  {
    id: 2,
    emotion: 3,
    date: 1659348577791,
    content: '이것은 두번째 더미데이터 입니다.',
  },
  {
    id: 3,
    emotion: 1,
    date: 1659348577791,
    content: '이것은 세번째 더미데이터 입니다.',
  },
  {
    id: 4,
    emotion: 5,
    date: 1659348577791,
    content: '이것은 네번째 더미데이터 입니다.',
  },
  {
    id: 5,
    emotion: 2,
    date: 1659348577791,
    content: '이것은 다섯번째 더미데이터 입니다.',
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const { content_id } = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        content,
        emotion,
        date: new Date(date).getTime(),
        id: content_id.curent,
      },
    });
    content_id.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId: targetId });
  };

  const onEdit = (targetId, newContent) => {
    dispatch({ type: 'EDIT', targetId, newContent });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
