const container = document.getElementById('ball-container');
const mainBall = document.getElementById('main-ball');
const resultBox = document.getElementById('result');
const drawBtn = document.getElementById('draw-btn');

const challenges = [
  "📸 오늘 아침 식사 사진 올리기",
  "📸 점심 식단 인증샷 올리기",
  "📸 저녁 건강식 인증샷 올리기",
  "🥗 샐러드 한 끼 사진 올리기",
  "🍚 현미밥 또는 잡곡밥 사진 찍기",
  "🍳 계란 요리 사진 찍어 공유하기",
  "🍠 고구마 or 단호박 포함 식사 사진",
  "🍗 닭가슴살 요리 인증샷",
  "🍶 단백질 쉐이크 마신 사진",
  "🫑 채소 3가지 이상 식단 사진",
  "🍙 반찬 3가지 이하 구성 사진",
  "🥜 견과류 간식 사진 인증",
  "🥛 무가당 두유 마신 사진",
  "🥒 생채소(오이/당근 등) 간식 인증",
  "🥤 탄산 대신 물 마신 컵 인증",
  "🍓 과일 1회 섭취 인증샷",
  "🍱 직접 만든 도시락 사진",
  "🛒 마트에서 장 본 건강 식재료 사진",
  "🍴 식사 전 전체 샷 인증",
  "🥄 식사 후 비워진 접시 사진",
  "🚫 야식 안 먹고 빈 식탁 사진",
  "🍳 달걀 프라이 or 삶은 달걀 인증",
  "🍞 빵 대신 다른 탄수화물 식사 인증",
  "🌮 밀가루 없는 식사 인증샷",
  "🍜 곤약면/두부면 요리 사진",
  "🥘 국/찌개 없는 담백식 인증샷",
  "🌯 김밥 or 롤 형태의 건강식 인증",
  "🥤 하루 물 2L 이상 마신 병 사진",
  "📷 하루 3끼 전부 인증샷 모아서 올리기",
  "🍛 볶거나 튀기지 않은 조리 사진",
  "🥑 아보카도 포함 식사 인증샷",
  "🍲 된장국 또는 미역국 포함 식사",
  "🥗 같은 재료로 구성 다른 느낌 식판",
  "🧊 냉동식품 없이 만든 식사 사진",
  "🧺 냉장고 털이 식사 인증샷",
  "🧂 소금 없는 조리 식사 인증",
  "🍖 고기 없이 만든 한 끼 사진",
  "🌶️ 고추장/간장 없이 만든 식사",
  "🍋 소스 없는 생야채/샐러드 인증",
  "🌰 군고구마 or 찐고구마 사진",
  "🍳 후라이팬 안 쓰고 만든 식사",
  "🥬 쌈 채소와 함께 먹은 식사 사진",
  "🍚 밥 대신 고구마 or 두부로 대체한 식사",
  "🧊 냉동 닭가슴살 활용 요리 인증",
  "🧀 치즈 없이 만든 식사 사진",
  "🧄 마늘/양파 포함 식사 사진",
  "🍽️ 식판이나 도시락통에 담은 식사",
  "🧃 물 대신 아무것도 안 마신 컵 사진",
  "🫗 레몬 물 or 해독수 사진",
  "📸 가장 예쁘게 플레이팅한 식사 사진",
  "👨‍👩‍👧 가족과 함께 먹은 식사 인증샷",
  "🍲 국 없이 밥 반찬만 있는 식사",
  "🍖 삼겹살 대신 채소+단백질 식사",
  "🍯 설탕 안 넣은 조리 사진",
  "🥗 같은 샐러드 재료로 만든 다른 메뉴",
  "🥄 간식 없이 끼니만 먹은 인증 사진",
  "🍴 식사 시간 지킨 건강식 사진",
  "📱 칼로리 앱 인증 화면 캡처",
  "📷 다 먹기 전 음식 전경 사진",
  "📷 다 먹고 깨끗한 접시 사진",
  "📷 한 끼 식단 구성 전체샷",
  "🍽️ 작은 접시에 덜어먹은 인증샷",
  "🧊 얼음 대신 물 마신 컵 사진",
  "🥚 삶은 달걀 2개 이상 인증",
  "🍜 국물 없이 건더기 위주 식사 사진",
  "🍳 한 가지 재료로 만든 식사 사진",
  "🍫 디저트 대신 과일 사진",
  "🥛 하루 마지막 컵 물 인증",
  "🧊 냉장고 속 야채 활용 식사 사진",
  "🍽️ 조미료 없이 조리된 식사 인증",
  "🍘 김 없이 만든 밥반찬 식사",
  "🥗 정해진 플레이트에 맞춘 식사",
  "🥘 뚝배기 없이 만든 국 대신 대체식",
  "🍵 보리차나 현미차 마신 컵 사진",
  "🥣 국물 없이 김치+밥 구성 인증",
  "🍎 껍질째 먹는 과일 인증샷",
  "🍠 껍질 벗기지 않은 고구마 사진",
  "🍽️ 식탁 정리 후 식사 시작 전 사진",
  "🥗 나물 반찬 2가지 이상 인증",
  "🍶 미지근한 물로 시작한 하루 컵 사진",
  "🍘 김자반 없이 밥 먹은 사진",
  "🧊 투명 물병에 물 채운 인증",
  "🍞 식빵 없이 만든 샌드위치 사진",
  "🥗 채소 위주 + 단백질 조합 사진",
  "🍚 밥을 반공기만 먹은 인증 사진",
  "🍵 커피 대신 물 마신 인증 컵",
  "🍱 작은 도시락통에 담은 식사 인증",
  "🍽️ 눈대중 없이 저울로 계량 후 조리 사진",
  "🥗 편의점에서 고른 건강식 인증샷",
  "🧀 치즈 대신 달걀로 단백질 보충 식사",
  "📸 가장 잘 먹었다 싶은 한 끼 공유 사진",
  "🍽️ 오늘의 NO 간식 선언 + 식사 인증샷",
  "📸 하루 식사 중 가장 예쁜 샷 하나 인증",
  "🍚 밥 대신 채소와 단백질만 담은 식사",
  "📸 나만의 건강 식단 플레이팅 샷"
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
