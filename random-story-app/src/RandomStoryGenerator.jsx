import React, { useState } from 'react';

export default function RandomStoryGenerator() {
  const topics = ['모험', '판타지', 'SF', '로맨스', '스릴러'];
  const templates = {
    '모험': [
      '용감한 주인공이 미지의 섬에서 고대 유적을 발견한다.',
      '예상치 못한 폭풍 속에서 새로운 동료를 만난다.'
    ],
    '판타지': [
      '마법사가 잊힌 왕국의 봉인을 해제한다.',
      '드래곤과 인간 사이의 오래된 계약이 깨어진다.'
    ],
    'SF': [
      '우주 정거장에서 원인불명의 시간이 뒤틀린다.',
      'AI가 선택한 단 한 명의 생존자.'
    ],
    '로맨스': [
      '첫눈 내리던 날, 두 사람의 우연이 시작된다.',
      '서로를 오해했던 두 사람이 진심을 깨닫는다.'
    ],
    '스릴러': [
      '밀폐된 공간에서 벌어진 기억 조작 사건.',
      '사라진 단서를 되짚어 진범을 추적한다.'
    ]
  };

  const [topic, setTopic] = useState('');
  const [story, setStory] = useState('');

  const generateStory = () => {
    if (!topic) return;
    const arr = templates[topic];
    const pick = arr[Math.floor(Math.random() * arr.length)];
    setStory(pick);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>랜덤 스토리 생성기 (v5)</h1>
      <select value={topic} onChange={(e) => setTopic(e.target.value)}>
        <option value="">주제 선택</option>
        {topics.map(t => <option key={t}>{t}</option>)}
      </select>
      <button onClick={generateStory} style={{ marginLeft: '10px' }}>
        생성
      </button>

      {story && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          {story}
        </p>
      )}
    </div>
  );
}
