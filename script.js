const container = document.getElementById('ball-container');
const mainBall = document.getElementById('main-ball');
const resultBox = document.getElementById('result');
const drawBtn = document.getElementById('draw-btn');

const challenges = [
  "오늘 먹은 단백질 음식 인증샷 올리기", "아침 식사 사진 올리기", "채소가 3가지 이상 포함된 식사 올리기",
  "탄수화물 없이 한 끼 먹기", "정제당 없는 하루 인증", "오늘의 물 2L 완료 인증",
  "직접 요리한 식단 사진 올리기", "외식 대신 집밥 인증", "하루 총 3끼 인증샷 모아 올리기",
  "고구마 or 단호박으로 식사 인증", "샐러드 먹은 사진 올리기", "반찬 3가지 이하로 구성한 식단",
  "단백질 80g 채우기 인증", "냉장고 털이 식단 공유하기", "오늘 먹은 견과류 인증",
  "무가당 두유 or 콩물 마신 사진", "16시간 공복 후 첫 끼 사진", "오늘의 다이어트 도시락 인증",
  "물 500ml 마신 타이밍마다 사진", "밀가루 없는 하루 인증", "아보카도 or 좋은 지방 포함 식사",
  "야식 안 먹은 밤 시간 인증", "한 끼는 생식 or 자연식으로 인증", "볶음/튀김 없이 조리한 식사",
  "마늘 or 양파 포함 식사 사진", "계란 요리 한 가지 공유하기", "채소 비중 높은 식사 인증",
  "하루 먹은 식단 3컷 모아 올리기", "냉동식품 없는 하루 인증", "먹기 전 식사 전경 예쁘게 찍기"
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
  mainBall.style.opacity = '0';
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
    resultBox.innerHTML = `<strong>🍀 오늘의 챌린지:</strong><br>“${text}”`;

    drawBtn.disabled = true;
    drawBtn.innerText = '✅ 추첨 완료!';
  }, 1500);
}
