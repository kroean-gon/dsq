const container = document.getElementById('ball-container');
const mainBall = document.getElementById('main-ball');
const resultBox = document.getElementById('result');
const drawBtn = document.getElementById('draw-btn');

const challenges = [
  "채소 3가지 이상 포함된 식사 인증",
  "아침 식사 사진 올리기",
  "단백질 30g 이상 포함된 식사 인증",
  "오늘 먹은 물의 양 인증 (2L 이상)",
  "정제당 없는 하루 인증",
  "직접 만든 샐러드 인증",
  "저탄수 고단백 식사 인증",
  "외식 대신 집밥 인증",
  "현미밥 or 오트밀 인증",
  "아보카도 포함 식사 인증",
  "고구마 or 단호박 포함 식사 인증",
  "야식 안 먹은 밤 인증",
  "오늘의 간식 대체 식사 인증",
  "식사 전후 사진 비교 인증",
  "간식 없이 하루 보내기",
  "단백질 쉐이크 인증샷",
  "계란요리 포함 식사 인증",
  "나물 2가지 이상 포함 식사 인증",
  "채소 위주의 저염 식사 인증",
  "칼로리 계산 앱 스크린샷 인증",
  "탄산 대신 물 마신 인증",
  "아침 공복 운동 후 식사 인증",
  "당류 적은 간식 인증",
  "탄수-단백-지방 균형 맞춘 식사 인증",
  "마트에서 건강식 장본 인증",
  "식사 속도 15분 이상 인증",
  "한식 위주 식사 인증",
  "패스트푸드 NO 하루 인증",
  "오늘의 가장 건강한 한 끼 인증",
  "냉동식품 없이 만든 식사 인증",
  "반찬 3가지 이하 식사 인증",
  "견과류 간식 인증",
  "자기 전 식사 NO 인증",
  "채소 프리픽스 플레이트 인증",
  "식사 후 산책 인증",
  "건강 간식으로 하루 마무리 인증",
  "식사 시간 지킨 인증",
  "하루 3식 인증샷 모아 올리기",
  "탄수화물 줄인 저녁 인증",
  "정해진 용기에 담은 식사 인증",
  "음식 이름과 영양정보 함께 기록하기",
  "하루 먹은 음식 텍스트 정리 인증",
  "단백질바 대신 진짜 식사 인증",
  "밀가루 없는 하루 인증",
  "물병 옆 식사 인증샷",
  "다이어트 도시락 직접 구성 인증",
  "오이, 방울토마토 등 생채소 인증",
  "내가 참은 유혹 음식 사진 인증",
  "하루 최소 5가지 채소 인증",
  "아침 공복 커피 대신 물 마시기 인증",
  "자신만의 다이어트 식판 인증",
  "자기 전 간식 대체 방법 공유",
  "오늘 하루 가장 건강했던 한 끼 공유",
  "오늘 먹은 음식 점수 매기기",
  "식사 후 배부름 정도(1~5) 표시하기",
  "음식 전량 다 먹은 인증",
  "음식 남긴 이유 기록하기",
  "탄수화물 줄이고 포만감 느낀 인증",
  "자신만의 다이어트 팁 공유",
  "아보카도 or 견과류 포함 식사 인증",
  "비타민 포함된 식단 인증",
  "오늘의 식단 다짐 한 줄 공유",
  "당류 적은 간식 인증샷",
  "하루 먹은 당류 총량 계산 인증",
  "자기 전 식사 유혹 참은 인증",
  "내가 만든 건강 도시락 인증",
  "자연식 위주 식사 인증",
  "지방 줄인 식사 인증",
  "단백질 80g 도전 인증",
  "단백질 포함 간식 인증",
  "하루 총 식사 조합 기록 인증",
  "공복 시간 12시간 이상 유지 인증",
  "과일 1회 이상 섭취 인증",
  "채소 위주 볶지 않은 식사 인증",
  "마늘/양파 포함 식사 인증",
  "하루 가장 참기 힘들었던 음식 기록",
  "오늘의 식사 전 다짐 인증",
  "오늘 먹은 음식 중 베스트픽 공유",
  "오늘 식사 평가와 피드백 쓰기",
  "탄산음료 대신 물 마신 횟수 기록",
  "냉장고 속 재료로 만든 식사 인증",
  "건강한 소식(小食) 한 끼 인증",
  "나의 식사 스타일 정리하기",
  "자신만의 식단 규칙 공유",
  "식사 전후 감정 상태 기록",
  "혼자 먹지 않고 함께 먹은 식사 인증",
  "하루 먹은 음식 리마인드 정리",
  "식사 시간 리듬 맞춘 하루 인증",
  "오늘 내가 고른 건강한 재료 인증",
  "주방 or 식탁 정리 후 인증",
  "하루 한 끼는 요리해 먹은 인증",
  "음식 조리법 함께 공유하기",
  "건강 간식 바꾸기 도전 인증",
  "물 8잔 이상 마시기 인증",
  "칼로리 라벨 확인 후 선택한 음식 인증",
  "식단 일기장 한 컷 인증",
  "건강 간식 사진 + 이유 설명 인증",
  "식사 중 휴대폰 보지 않기 인증",
  "식사 중 대화하며 먹은 인증",
  "아침 챙겨 먹은 식단 인증"
];

let balls = [];
let isDrawn = false;

function createBall(i) {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.innerText = i + 1;
  ball.style.left = Math.random() * (window.innerWidth - 60) + 'px';
  ball.style.top = Math.random() * (window.innerHeight * 0.6 - 60) + 'px';
  container.appendChild(ball);
  balls.push(ball);
}

function clearBalls() {
  balls.forEach(ball => container.removeChild(ball));
  balls = [];
}

function startLotto() {
  if (isDrawn) return;
  isDrawn = true;

  clearBalls();
  mainBall.classList.remove('show');
  resultBox.innerHTML = '';

  for (let i = 0; i < 20; i++) {
    createBall(i);
  }

  setTimeout(() => {
    clearBalls();
    const index = Math.floor(Math.random() * challenges.length);
    const text = challenges[index];
    mainBall.innerText = text;
    mainBall.classList.add('show');
    resultBox.innerHTML = `<strong>🌿 오늘의 챌린지:</strong><br>“${text}”`;

    drawBtn.disabled = true;
    drawBtn.innerText = '✅ 추첨 완료!';
  }, 1500);
}
