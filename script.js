body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to bottom, #f0fff0, #ffffff);
  overflow: hidden;
  text-align: center;
}

h1 {
  margin-top: 30px;
  font-size: 2rem;
  color: #2e7d32;
}

#ball-container {
  position: relative;
  width: 100vw;
  height: 60vh;
  overflow: hidden;
}

.ball {
  width: 60px;
  height: 60px;
  background-color: #4caf50;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  animation: float 10s linear infinite;
}

@keyframes float {
  0% { transform: translate(0, 0); }
  100% { transform: translate(300px, 500px); }
}

#main-ball {
  position: fixed;
  left: 50%;
  bottom: -200px;
  transform: translateX(-50%) scale(0.5);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #2e7d32;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  line-height: 1.3;
  word-break: keep-all;
  opacity: 0;
  transition: bottom 0.8s ease-out, transform 0.8s ease-out, opacity 0.3s ease-in;
  z-index: 10;
}

#main-ball.show {
  bottom: 40%;
  transform: translateX(-50%) scale(1.2);
  opacity: 1;
}

button {
  padding: 12px 24px;
  font-size: 1.2rem;
  background: #388e3c;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
}

button:disabled {
  background: #cccccc;
  color: #666666;
  cursor: not-allowed;
}

button:hover:enabled {
  background: #1b5e20;
}

#result {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #1b5e20;
}
