const container = document.getElementById('ball-container');
const mainBall = document.getElementById('main-ball');
const resultBox = document.getElementById('result');
const drawBtn = document.getElementById('draw-btn');

const challenges = [
  "채소가 3가지 이상 포함된 식사 올리기", "단백질 음식 인증샷", "아침 식사 사진 올리기",
  "정제당 없는 하루 인증", "물 2L 마시기", "고구마 or 단호박 식사", "샐러드 챌린지",
  "자기 전 간식 안 먹기", "패스트푸드 대신 건강식", "하루 총 3끼 인증샷",
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
