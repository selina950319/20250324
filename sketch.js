let button1, button2;
let iframe;
let sprite1, sprite2;
let sprite1Frames = [];
let sprite2Frames = [];
let currentFrame1 = 0;
let currentFrame2 = 0;
let isHovered1 = false;
let isHovered2 = false;

function preload() {
  // 載入圖片精靈
  sprite1 = loadImage('動作一全部.png');
  sprite2 = loadImage('動作二全部.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // 創建第一個按鈕，左側
  button1 = createButton('自我介紹');
  button1.position(250, 50);
  button1.size(600, 50);
  button1.style('font-size', '20px');
  button1.mousePressed(showIframe1);

  // 創建第二個按鈕，右側
  button2 = createButton('作品簡介');
  button2.position(180, 50);
  button2.size(150, 50);
  button2.style('font-size', '20px');
  button2.mousePressed(showIframe2);

  button3 = createButton('筆記說明');
  button3.position(320, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mousePressed(showIframe1);
  
  // 設置畫面更新的速度
  frameRate(10);  // 可以調整這個數字來控制動畫速度（越小越慢）
  
  // 初始化圖片精靈框架
  for (let i = 0; i < 8; i++) {
    sprite1Frames.push(sprite1.get(i * 124, 0, 124, 87));
  }
  
  for (let i = 0; i < 5; i++) {
    sprite2Frames.push(sprite2.get(i * 85, 0, 85, 124));
  }
  
}

function draw() {
  background(220);
  
  // 檢查滑鼠是否在按鈕上，並顯示對應的圖片精靈
  if (isHovered1) {
    image(sprite1Frames[currentFrame1], 50, 50);
    currentFrame1 = (currentFrame1 + 1) % sprite1Frames.length;
  } else if (isHovered2) {
    image(sprite2Frames[currentFrame2], 50, 50);
    currentFrame2 = (currentFrame2 + 1) % sprite2Frames.length;
  }
}

function showIframe1() {
  if (iframe) {
    iframe.remove();
  }
  iframe = createElement('iframe');
  iframe.attribute('src', 'https://www.et.tku.edu.tw/');
  iframe.position(windowWidth * 0.2-150, windowHeight * 0.1+50);
  iframe.size(windowWidth * 0.8, windowHeight * 0.6);
}

function showIframe2() {
  if (iframe) {
    iframe.remove();
  }
  iframe = createElement('iframe');
  iframe.attribute('src', 'https://selina950319.github.io/20250317/');
  iframe.position(windowWidth * 0.2-150, windowHeight * 0.1+50);
  iframe.size(windowWidth * 0.8, windowHeight * 0.6);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (iframe) {
    iframe.position(windowWidth * 0.2, windowHeight * 0.1);
    iframe.size(windowWidth * 0.6, windowHeight * 0.8);
  }
}

// 檢查滑鼠是否在按鈕上
function mouseMoved() {
  if (isMouseInButton(button1)) {
    isHovered1 = true;
    isHovered2 = false;
  } else if (isMouseInButton(button2)) {
    isHovered1 = false;
    isHovered2 = true;
  } else {
    isHovered1 = false;
    isHovered2 = false;
  }
}

// 判斷滑鼠是否在按鈕範圍內
function isMouseInButton(button) {
  let rect = button.elt.getBoundingClientRect();
  return mouseX > rect.left && mouseX < rect.right && mouseY > rect.top && mouseY < rect.bottom;
}
