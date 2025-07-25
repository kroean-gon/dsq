let balls = [];
let isDrawn = false;

function createBall(i) {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.innerText = i + 1;
  ball.style.left = Math.random() * (window.innerWidth - 60) + 'px';
  ball.style.top = Math.random() * (container.offsetHeight - 60) + 'px';
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

  mainBall.innerText = "?";
  resultBox.innerHTML = "";

  // 숫자 공 20개 생성
  for (let i = 0; i < 20; i++) {
    createBall(i);
  }

  // 1.5초 후 결과 표시
  setTimeout(() => {
    clearBalls(); // 공 제거
    const index = Math.floor(Math.random() * challenges.length);
    const text = challenges[index];
    mainBall.innerText = text;
    resultBox.innerHTML = `
      <strong>🌿 오늘의 챌린지:</strong><br>
      “${text}”<br><br>
      📸 <strong>이 화면을 캡처해서 단톡방에 올려주세요!</strong>
    `;
    drawBtn.disabled = true;
    drawBtn.innerText = '✅ 추첨 완료!';
  }, 1500);
}

drawBtn.addEventListener("click", startLotto);
