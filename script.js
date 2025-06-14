import * as THREE from 'https://cdn.skypack.dev/three';
import { OrbitControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;

camera.position.set(0, 5, 15);
controls.update();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xf06292 });

const balls = [];
for (let i = 0; i < 30; i++) {
  const ball = new THREE.Mesh(geometry, material);
  ball.position.set(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 10
  );
  scene.add(ball);
  balls.push(ball);
}

function animate() {
  requestAnimationFrame(animate);
  balls.forEach(b => {
    b.rotation.x += 0.01;
    b.rotation.y += 0.01;
    b.position.x += (Math.random() - 0.5) * 0.05;
    b.position.y += (Math.random() - 0.5) * 0.05;
    b.position.z += (Math.random() - 0.5) * 0.05;
  });
  controls.update();
  renderer.render(scene, camera);
}
animate();

const challenges = [
  "단백질 음식 인증샷 올리기", "물 2L 마시기", "야식 안 먹기", "정제당 없는 하루 보내기",
  "아침 식사 챙겨 먹기", "채소 3가지 이상 포함 식사", "외식 대신 집밥", "밀가루 없는 하루",
  "직접 요리한 식사 공유", "탄수화물 제한 식단", "계란 요리 포함 식사", "1일 3식 인증"
];

const drawBtn = document.getElementById('drawBtn');
const challengeBox = document.getElementById('challengeBox');

drawBtn.onclick = () => {
  const selected = challenges[Math.floor(Math.random() * challenges.length)];
  challengeBox.innerText = `🎯 오늘의 챌린지\n“${selected}”`;
  challengeBox.style.display = 'block';
};
