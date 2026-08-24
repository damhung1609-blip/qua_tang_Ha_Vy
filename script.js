// --- 1. MẬT KHẨU CÂU 1 & CÂU 2 ---
const correctPassword = "25/08/2008"; 
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const passInput = document.getElementById('pass-input');
const btnNext = document.getElementById('btn-next');
const errorMsg1 = document.getElementById('error-msg-1');

const lockScreen = document.getElementById('lock-screen');
const btnLockYes = document.getElementById('btn-lock-yes');
const btnLockNo = document.getElementById('btn-lock-no');
const errorMsg2 = document.getElementById('error-msg-2');

btnNext.addEventListener('click', checkDate);
passInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkDate();
});

function checkDate() {
    if (passInput.value.trim() === correctPassword) {
        step1.style.display = 'none';
        step2.style.display = 'block';
    } else {
        errorMsg1.style.display = 'block';
        passInput.value = '';
    }
}

btnLockNo.addEventListener('click', () => {
    errorMsg2.style.display = 'block';
});

btnLockYes.addEventListener('click', () => {
    lockScreen.style.opacity = '0';
    lockScreen.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        lockScreen.style.display = 'none';
    }, 500);
});

// --- 2. XỬ LÝ TRANG CHÍNH ---
const btnYes = document.getElementById('btn-main-yes');
const btnNo = document.getElementById('btn-no');
const message = document.getElementById('message');
const bgMusic = document.getElementById('bg-music');
const typingText = document.getElementById('typing-text');

// --- KỊCH BẢN MÁY ĐÁNH CHỮ CHO BỨC THƯ ---
const letterText = `Gửi Hà Vy ! 🎁💖
Vậy là Vy đã 18 tuổi rồi. Trước tiên chúc Hà Vy của Hùng tuổi mới lúc nào cũng xinh đẹp, vui vẻ! Nhớ lại lúc mới quen không có nghĩ là gắn bó được lâu lâu vậy đâu. Nhắn tin với Vy vui lắm, thích Vy lắm nhưng mà Hùng cũng không nghĩ sẽ có thể trở thành ny của Vy đâu 😭. Buồn ghê ăn nói thì vụng về, lại còn bị gọi là trẻ con nữa, thế mà may sao con người đáng iuu này vẫn chịu nhắn tin cùng huhuhu. lắm lúc cũng suy nghĩ nhiều thứ lắm, Vy hay giấu Hùng nhiều chuyện lắm đấy, chả thấy bao giờ chia sẻ với Hùng gì hỏi thì cũng hay bảo tùy Hùng, hư lắm 😭 . Trước tới giờ thấy Vy dễ thương và thật là đặc biệt thế nào á, mặc dù chỉ là thông qua những tin nhắn đó với những hình ảnh Vy gửi thôi. Cảm giác nhắn tin rất khác so với những người bình thường. Hùng thích Vy là thật đó, dành tình cảm cho Vy cũng là thật, hi vọng là Vy cũng thật lòng với Hùng, muốn xây dựng mối quan hệ này nghiêm túc lắm 🥺. Đôi lúc có thể không hiểu nhau, giận nhau nhưng mà Hùng mong rằng chúng ta có thể giãi bày cho nhau được biết và có thể đồng hành thật lâu và cùng cố gắng vì tình yêu này. Hùng xin lỗi vì những lần cư xử vụng về trong mối quan hệ này và cũng thật cảm ơn Vy vì đã xuất hiện trong cuộc đời Hùng. Đôi lúc nghĩ sẽ không hoàn thành được cái này vì những gián đoạn nhưng mà may sao vẫn có thể tới được tay Vy. Tóm lại thì hôm nay Chúc Vy snvv nhaaaaaaa, mãi iuuuuu <3.
Mong chúng ta sẽ sớm gặp được nhau trong năm nay!!!
Văn Hùng`;

let letterIndex = 0;
const typingLetterElement = document.getElementById('typing-letter');

function typeWriterLetter() {
    if (letterIndex < letterText.length) {
        typingLetterElement.innerHTML += letterText.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWriterLetter, 35); // Tốc độ chạy chữ (35 mili-giây)
    }
}



btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 50);
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    const icons = ['💖', '🌹', '😍', '💋', '👩‍❤️‍👨', '💌']; 
    heart.innerText = icons[Math.floor(Math.random() * icons.length)]; 
    heart.style.left = Math.random() * 200 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's'; 
    heart.style.fontSize = Math.random() * 25 + 15 + 'px'; 
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 10000);
}

btnYes.addEventListener('click', () => {
    message.style.display = 'none';
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
    
   try { 
        if(bgMusic) {
            bgMusic.src = 'nen.mp3'; // Tên file nhạc nền nhẹ nhàng của Hùng
            bgMusic.volume = 0.5; // Âm lượng vừa phải
            bgMusic.play(); // Tự động phát
        } 
    } catch(e) {}

    try {
        if(typeof confetti !== 'undefined') {
            confetti({ particleCount: 200, spread: 360, origin: { x: 0.5, y: 0.5 } });
            setTimeout(() => { confetti({ particleCount: 150, angle: 60, spread: 80, origin: { x: 0, y: 1 } }); }, 200);
            setTimeout(() => { confetti({ particleCount: 150, angle: 120, spread: 80, origin: { x: 1, y: 1 } }); }, 400);
        }
    } catch(e) {}

    setInterval(createHeart, 100);

    setTimeout(() => {
        const dashboard = document.getElementById('dashboard-menu');
        if(dashboard) { dashboard.style.display = 'block'; }
    }, 1000); 
});

// --- 3. MENU VÀ CÁC TÍNH NĂNG ---
const dashboardMenu = document.getElementById('dashboard-menu');
const subSections = document.querySelectorAll('.sub-section');

function openSection(sectionId) {
    dashboardMenu.style.display = 'none';
    subSections.forEach(sec => sec.style.display = 'none');
    
    const target = document.getElementById(sectionId);
    if(target) {
        target.style.display = 'block';
        
        
        if(sectionId === 'letter-section') {
            typingLetterElement.innerHTML = '';
            letterIndex = 0;
            typeWriterLetter();
        }
    }
}

function backToMenu() {
    subSections.forEach(sec => sec.style.display = 'none');
    dashboardMenu.style.display = 'block';
}

function changeMusic(songFileName) {
    bgMusic.pause();
    bgMusic.src = songFileName;
    bgMusic.play().catch(e => console.log("Lỗi phát nhạc"));
    alert("Đã đổi sang bài hát mới thành công! 🎶");
}

// --- MINIGAME BÌNH TRÁI TIM ĐO ĐỘ YÊU ---
let currentPercent = 0;
const lovePercentDisplay = document.getElementById('love-percent');
const heartContainer = document.getElementById('heart-container');
const flowerResult = document.getElementById('flower-result');

function pumpLove() {
    if (currentPercent < 100) {
        currentPercent += Math.floor(Math.random() * 6) + 3;
        
        if (currentPercent >= 100) {
            currentPercent = 100;
            lovePercentDisplay.innerText = currentPercent;
            
            heartContainer.style.display = 'none';
            flowerResult.style.display = 'block';
            
            try {
                if(typeof confetti !== 'undefined') {
                    confetti({ particleCount: 200, spread: 360, origin: { x: 0.5, y: 0.5 } });
                }
            } catch(e) {}
        } else {
            lovePercentDisplay.innerText = currentPercent;
            
            heartContainer.style.transform = 'scale(1.2)';
            setTimeout(() => {
                heartContainer.style.transform = 'scale(1)';
            }, 100);
            
            if (currentPercent > 70) {
                heartContainer.innerText = '💖';
            } else if (currentPercent > 40) {
                heartContainer.innerText = '💗';
            } else {
                heartContainer.innerText = '🩶';
            }
        }
    }
}

function resetLoveGame() {
    currentPercent = 0;
    lovePercentDisplay.innerText = '0';
    heartContainer.innerText = '🩶';
    heartContainer.style.display = 'inline-block';
    flowerResult.style.display = 'none';
}
const vinylDisc = document.getElementById('vinyl-container');
const vinylCover = document.getElementById('vinyl-cover');
const currentSongName = document.getElementById('current-song-name');

function changeMusic(songFileName, songTitle, coverImgUrl) {
    bgMusic.pause();
    bgMusic.src = songFileName;
    bgMusic.play();
    
    currentSongName.innerText = `Đang phát: ${songTitle}`;
    vinylCover.src = coverImgUrl; // Đổi ảnh bìa ở giữa đĩa
    
    vinylDisc.classList.add('playing'); // Làm đĩa quay
}

// Hàm Tạm dừng/Phát tiếp
function toggleMusic() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    if (bgMusic.paused) {
        bgMusic.play();
        vinylDisc.classList.add('playing'); // Cho đĩa quay tiếp
        playPauseBtn.innerText = '⏸ Tạm dừng';
    } else {
        bgMusic.pause();
        vinylDisc.classList.remove('playing'); // Dừng đĩa quay
        playPauseBtn.innerText = '▶ Phát tiếp';
    }
}

// hàm changeMusic để luôn hiện nút "Tạm dừng" khi đổi bài
function changeMusic(songFileName, songTitle, coverImgUrl) {
    bgMusic.pause();
    bgMusic.src = songFileName;
    bgMusic.play().catch(e => console.log("Cần tương tác"));
    
    currentSongName.innerText = `Đang phát: ${songTitle}`;
    vinylCover.src = coverImgUrl;
    
    vinylDisc.classList.add('playing');
    document.getElementById('play-pause-btn').innerText = '⏸ Tạm dừng'; // Reset nút về trạng thái tạm dừng
}

