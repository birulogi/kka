/**
 * Permainan Tebak Gambar & Analisis Pola Visual
 * Dikembangkan untuk Media Pembelajaran Interaktif Murid
 * Hak Cipta: birulogi
 */

// MASTER DATA 40 GAMBAR SESUAI LINK GOOGLE DRIVE
const MASTER_DATA_40_GAMBAR = [
    { id: 1, name: "Anggur", type: "AI", category: "Buah", pattern: "Butiran anggur mengilap hiper-realistis tanpa lapisan bedak alami kulit anggur.", driveId: "1PIEEqNcR_qtOX9qkEPELMCYR0Tm-wa86" },
    { id: 2, name: "Anggur", type: "ASLI", category: "Buah", pattern: "Gugusan anggur dengan ukuran butiran bervariasi dan lapisan lilin tipis alami.", driveId: "1Kn3QPuRUJpZDNd760oW9GVZtmZ3EHN5v" },
    { id: 3, name: "Apel", type: "ASLI", category: "Buah", pattern: "Kulit buah memiliki serat gradasi warna tidak merata alami dan sedikit pudar.", driveId: "1RYgZWO4CCgZD2yfqLR1HZBzy8i4aQkGU" },
    { id: 4, name: "Apel", type: "AI", category: "Buah", pattern: "Tetesan air pada kulit apel berbentuk bulat sempurna yang berulang simetris.", driveId: "1NbJ_sJDPbLfKWU_yFrPoYl7BtmQaKNcq" },
    { id: 5, name: "Harimau", type: "AI", category: "Hewan", pattern: "", driveId: "13kIM91_hKBveD5PPa5BcXgjlstdsEucd" },
    { id: 6, name: "Harimau", type: "ASLI", category: "Hewan", pattern: "", driveId: "1mSpu3y8KzYmqunQZW4a_xS6XKmUMxBA7" },
    { id: 7, name: "Burung", type: "AI", category: "Hewan", pattern: "Helai bulu burung terlihat seperti lukisan digital halus bercahaya.", driveId: "1WaL_c3tlF_fM7Qj6DJYKBE8LTb1XB3FZ" },
    { id: 8, name: "Burung", type: "ASLI", category: "Hewan", pattern: "Bentuk paruh dan susunan bulu sayap alami khas satwa liar.", driveId: "1uMMIxXLO-PFhLmKBVxbUCzwQUREy5e-C" },
    { id: 9, name: "Gajah", type: "AI", category: "Hewan", pattern: "Tekstur kerutan kulit gajah tampak kaku dan pola gading terlalu berkilau.", driveId: "1_E8PDbuWYrUK0ChEiF_Bhr9YOdApe3XK" },
    { id: 10, name: "Gajah", type: "ASLI", category: "Hewan", pattern: "Proporsi telinga lebar, belalai berkerut alami, dan nuansa habitat nyata.", driveId: "1QWslcV7NRzwD17eqiR_TY_8RadS4zp3T" },
    { id: 11, name: "Ikan", type: "AI", category: "Hewan", pattern: "Sisik ikan bercahaya tidak realistis dengan bentuk sirip yang terpotong aneh.", driveId: "1afSf_nC2Od1M52FYA-Tt8DeEJHfT17z4" },
    { id: 12, name: "Ikan", type: "ASLI", category: "Hewan", pattern: "Proporsi tubuh ikan alami dengan sirip transparan khas biota air.", driveId: "1tp9QiAqBUxCcbHL3Pki6zvvFy9CLtksy" },
    { id: 13, name: "Jerapah", type: "AI", category: "Hewan", pattern: "Pola totol leher jerapah terlalu rapi berulang seperti wallpaper komputer.", driveId: "1X_4lJYg61DrFVBcO0_CVlzsXpAYdNuqR" },
    { id: 14, name: "Jerapah", type: "ASLI", category: "Hewan", pattern: "Proporsi leher panjang alami dengan bentuk totol kecokelatan acak tidak seragam.", driveId: "1mYrUZpuhgMHhNZ7utWIryATxHJi2BJzM" },
    { id: 15, name: "Jeruk", type: "AI", category: "Buah", pattern: "Pori-pori kulit jeruk terlalu rapi dan mengilap seperti berbahan plastik sintetis.", driveId: "1R0N4VLND6wvxIEN7i1d5V4G4xUqm3bwE" },
    { id: 16, name: "Jeruk", type: "ASLI", category: "Buah", pattern: "Pori kulit buah berdaging tidak beraturan dengan tangkai daun hijau segar.", driveId: "1gUt-yp0drUJ7tT1hau9dV4JWqswCsvGH" },
    { id: 17, name: "Kelinci", type: "AI", category: "Hewan", pattern: "Mata bulat bening seperti kelereng kaca dengan bulu halus buatan.", driveId: "1Rd7Iw5y2rumuGXxp4w97gJZ0OWjb5Iug" },
    { id: 18, name: "Kelinci", type: "ASLI", category: "Hewan", pattern: "Bentuk telinga panjang dengan pembuluh darah halus terlihat dan ekspresi alami.", driveId: "1LJLvVSB7Sws_OvSr0TZxONlj5wq8yVNs" },
    { id: 19, name: "Belah Ketupat", type: "AI", category: "Geometri", pattern: "Bentuk jajaran ketupat bersinar gradasi warna khusus.", driveId: "1a93pdcYYjwkamwannYZyYb0OGM1rJGMF" },
    { id: 20, name: "Belah Ketupat", type: "ASLI", category: "Geometri", pattern: "Bangun datar 4 sisi sama panjang dengan dua pasang sudut berhadapan sama besar.", driveId: "1Co2MYJVXo3CFnDXrS8duoEXxL9yB60Wk" },
    { id: 21, name: "Persegi", type: "AI", category: "Geometri", pattern: "Kotak bernuansa kustom 3D dengan efek bayangan melayang di ruang hampa.", driveId: "1VlzNao4VoIIbE53Agx951TpLGAJWjYLn" },
    { id: 22, name: "Persegi", type: "ASLI", category: "Geometri", pattern: "Bangun datar dengan 4 sisi sama panjang dan 4 sudut siku-siku 90 derajat.", driveId: "1BTrFCKnls0t6K1kwaRj_ABpHpTDg7T5N" },
    { id: 23, name: "Kucing", type: "AI", category: "Hewan", pattern: "Tekstur bulu terlalu halus berkilau, simetri mata sangat sempurna, khas sampel AI.", driveId: "1GTPLQkDM5buuVaI1cf14_zLqnKIwz0Hi" },
    { id: 24, name: "Kucing", type: "ASLI", category: "Hewan", pattern: "Pencahayaan alami, bulu tampak helai demi helai dengan tekstur acak.", driveId: "1dfhY5ppgP66n887M8xs55sjc66Tos-bv" },
    { id: 25, name: "Kupu-kupu", type: "AI", category: "Hewan", pattern: "Pola warna sayap simetris berlebihan dengan gradasi warna yang tidak ada di alam.", driveId: "1twRtxJyr3x6oKkDdagAB74Vp-xrO89OE" },
    { id: 26, name: "Kupu-kupu", type: "ASLI", category: "Hewan", pattern: "Serbuk sayap dan sungut antena tipis khas serangga alami.", driveId: "1jq-UkcGNff3kppuDErGrjb0D9K9cBkRe" },
    { id: 27, name: "Lingkaran", type: "AI", category: "Geometri", pattern: "Bentuk bulat bermotif futuristik dengan pantulan cahaya sintetis berkilau.", driveId: "1FwsgmSmnbaeTJt2Pe5x0ZiGLAqF41Gn2" },
    { id: 28, name: "Lingkaran", type: "ASLI", category: "Geometri", pattern: "Garis lengkung tertutup 360 derajat polos dengan jarak pusat ke tepi konsisten.", driveId: "18cgAqoYCBecW6ThJtL1x9vFD1LDv0yUJ" },
    { id: 29, name: "Mangga", type: "AI", category: "Buah", pattern: "Bentuk buah mengilap sempurna tanpa guratan atau kecacatan kulit alami.", driveId: "1YtgfIf6Lg4wJtlxIxpWgzyyltXs4-k40" },
    { id: 30, name: "Mangga", type: "ASLI", category: "Buah", pattern: "Bentuk sedikit asimetris khas buah mangga asli dengan tekstur kulit agak kesat.", driveId: "1DVuCuJx_4DOCyLXUDfbyhhjAuxO7_DAf" },
    { id: 31, name: "Oval / Elips", type: "AI", category: "Geometri", pattern: "Bentuk lonjong bersinar berlapis aura kustom digital.", driveId: "1H0ra4aP21cvnne_V9NqAbxVMI9q5Wvr1" },
    { id: 32, name: "Oval / Elips", type: "ASLI", category: "Geometri", pattern: "Garis melengkung tertutup mirip telur dengan dua sumbu simetri berbeda.", driveId: "1cRbU9xGpjxiES6LFbZG8JawWBfRZNue8" },
    { id: 33, name: "Pisang", type: "AI", category: "Buah", pattern: "Warna kuning menyala hiper-realistis tanpa sedikit pun bintik kecokelatan alami.", driveId: "1UOjag8FTT9JSjpp_vG0gxyT_qyfvDU8r" },
    { id: 34, name: "Pisang", type: "ASLI", category: "Buah", pattern: "Tekstur kulit buah pisang alami dengan bintik kecokelatan khas tingkat kematangan.", driveId: "1lQxqtxVOJG8jfm4tIXdeETqGR8qI6Srh" },
    { id: 35, name: "Segi Lima (Pentagon)", type: "AI", category: "Geometri", pattern: "Bangun 5 sisi bergaya kristal 3D sintetis berkilat.", driveId: "1nvYB1AAJLkUE5Py8-tIlFGSJd8p21WyF" },
    { id: 36, name: "Segi Lima (Pentagon)", type: "ASLI", category: "Geometri", pattern: "Geometri dengan 5 sisi lurus dan 5 sudut interior teratur.", driveId: "1J6L8IcWoJmQathMoA5ai6vZxXlPxQGSj" },
    { id: 37, name: "Segitiga", type: "AI", category: "Geometri", pattern: "Efek pencahayaan gradasi neon 3D dan bayangan magis tanpa tekstur fisik.", driveId: "1R8w3L25oRPCSyHZPSVeq27Pk42DTd-tr" },
    { id: 38, name: "Segitiga", type: "ASLI", category: "Geometri", pattern: "Garis bangun datar bersisi 3 lurus sederhana dengan warna solid.", driveId: "1j0ODP5XWtZQi5_adrEYlDPzRDIPof3-c" },
    { id: 39, name: "Semangka", type: "AI", category: "Buah", pattern: "Biji semangka tersebar terlalu rapi simetris pada daging buah berwarna merah menyala.", driveId: "1mOgyJcriyGH0G__Q3MQztC8i9bsti0YU" },
    { id: 40, name: "Semangka", type: "ASLI", category: "Buah", pattern: "Serat daging buah basah berpori dengan posisi biji tidak beraturan alami.", driveId: "1ZwQEnOJfeEFsUUIpDZ1D8qNabw5qRBIw" }
];

const NAMA_OBJEK_UNIK = [
    "Kucing", "Apel", "Segitiga", "Ikan", "Pisang", 
    "Lingkaran", "Burung", "Jeruk", "Persegi", "Bintang", 
    "Kupu-kupu", "Mangga", "Oval / Elips", "Gajah", "Semangka", 
    "Segi Lima (Pentagon)", "Kelinci", "Anggur", "Belah Ketupat", "Jerapah"
];

// State Variabel
let studentName = "";
let questionsList = [];
let activeQuestionIndex = 0;
let selectedObjectChoice = null;
let selectedPatternChoice = null;
let userAnswersHistory = [];
let selectedQuestionCount = 10;
let secretClickCounter = 0;
let secretClickTimer = null;

// Direct Drive Image Link
function getDriveImageUrl(driveId) {
    return `https://lh3.googleusercontent.com/d/${driveId}`;
}

window.onload = function() {
    renderPlainCatalog();
    renderAdminTable();
    setupAdminShortcut();
};

function applyTheme(themeClass) {
    document.getElementById('mainBody').className = `${themeClass} flex flex-col min-h-screen`;
}

// Navigasi Tab
function switchTab(tabName) {
    document.getElementById('screenWelcome').classList.add('hidden');
    document.getElementById('screenCatalog').classList.add('hidden');
    document.getElementById('screenQuiz').classList.add('hidden');
    document.getElementById('screenResult').classList.add('hidden');
    document.getElementById('screenAdmin').classList.add('hidden');

    const navMain = document.getElementById('navMainBtn');
    const navCat = document.getElementById('navCatalogBtn');

    if (tabName === 'welcome') {
        document.getElementById('screenWelcome').classList.remove('hidden');
        navMain.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-blue-600 text-white shadow";
        navCat.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all text-slate-300 hover:text-white hover:bg-slate-700";
    } else if (tabName === 'catalog') {
        document.getElementById('screenCatalog').classList.remove('hidden');
        navCat.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-blue-600 text-white shadow";
        navMain.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all text-slate-300 hover:text-white hover:bg-slate-700";
    }
}

// Render Katalog POLOS (Murid tidak dapat melihat bocoran nama/kategori/AI-ASLI)
function renderPlainCatalog() {
    const galleryContainer = document.getElementById('galleryContainer');
    galleryContainer.innerHTML = '';

    MASTER_DATA_40_GAMBAR.forEach((item, index) => {
        const imgUrl = getDriveImageUrl(item.driveId);
        const card = document.createElement('div');
        card.className = "gallery-card bg-slate-900 border border-slate-700/80 rounded-2xl p-2.5 flex flex-col items-center justify-center text-center relative overflow-hidden group";
        
        card.innerHTML = `
            <div class="relative w-full aspect-square bg-slate-950 rounded-xl overflow-hidden mb-2 border border-slate-800 flex items-center justify-center p-1">
                <img src="${imgUrl}" alt="Gambar Pembelajaran ${index + 1}" class="max-h-full max-w-full object-contain rounded-lg">
                <span class="absolute top-1.5 left-1.5 bg-slate-800/90 border border-slate-600 text-blue-400 text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                    #${index + 1}
                </span>
            </div>
            <p class="font-bold text-xs text-slate-300">Gambar #${index + 1}</p>
        `;
        galleryContainer.appendChild(card);
    });
}

// Set Jumlah Soal
function setQuestionCount(count) {
    selectedQuestionCount = count;
    document.querySelectorAll('.btn-qcount').forEach(btn => btn.classList.remove('active-qcount'));
    document.querySelector(`.btn-qcount[data-count="${count}"]`).classList.add('active-qcount');
    document.getElementById('customCountWrapper').classList.add('hidden');
}

function enableCustomCount() {
    selectedQuestionCount = 'custom';
    document.querySelectorAll('.btn-qcount').forEach(btn => btn.classList.remove('active-qcount'));
    document.querySelector('.btn-qcount[data-count="custom"]').classList.add('active-qcount');
    document.getElementById('customCountWrapper').classList.remove('hidden');
}

// Mulai Permainan
function startGame() {
    const inputName = document.getElementById('inputStudentName').value.trim();
    if (!inputName) {
        Swal.fire({
            icon: 'warning',
            title: 'Nama Murid Diperlukan',
            text: 'Silakan masukkan nama murid terlebih dahulu!',
            confirmButtonColor: '#3b82f6'
        });
        return;
    }

    let questionLimit = 10;
    if (selectedQuestionCount === 'custom') {
        const customVal = parseInt(document.getElementById('inputCustomQuestionCount').value);
        if (isNaN(customVal) || customVal < 1 || customVal > 40) {
            Swal.fire({
                icon: 'warning',
                title: 'Jumlah Soal Tidak Valid',
                text: 'Masukkan jumlah soal kustom antara 1 sampai 40!',
                confirmButtonColor: '#3b82f6'
            });
            return;
        }
        questionLimit = customVal;
    } else {
        questionLimit = selectedQuestionCount;
    }

    studentName = inputName;
    document.getElementById('studentBadgeName').innerText = studentName;

    questionsList = [...MASTER_DATA_40_GAMBAR].sort(() => Math.random() - 0.5).slice(0, questionLimit);
    activeQuestionIndex = 0;
    userAnswersHistory = [];

    document.getElementById('screenWelcome').classList.add('hidden');
    document.getElementById('screenCatalog').classList.add('hidden');
    document.getElementById('screenResult').classList.add('hidden');
    document.getElementById('screenAdmin').classList.add('hidden');
    document.getElementById('screenQuiz').classList.remove('hidden');

    loadCurrentQuestion();
}

function loadCurrentQuestion() {
    selectedObjectChoice = null;
    selectedPatternChoice = null;

    const q = questionsList[activeQuestionIndex];

    document.getElementById('quizStepText').innerText = `Soal ${activeQuestionIndex + 1} / ${questionsList.length}`;
    const percent = ((activeQuestionIndex + 1) / questionsList.length) * 100;
    document.getElementById('quizProgressBar').style.width = `${percent}%`;

    const currentTotalScore = Math.round(userAnswersHistory.reduce((sum, item) => sum + item.points, 0) * 10) / 10;
    document.getElementById('currentScoreDisplay').innerText = currentTotalScore;

    document.getElementById('imageQuestion').src = getDriveImageUrl(q.driveId);

    renderStage1Options(q.name);
    renderStage2Options(q.pattern);

    document.getElementById('wrapperStage2').classList.add('opacity-40', 'pointer-events-none');
    updateSubmitButtonState();
}

function renderStage1Options(correctName) {
    const container = document.getElementById('containerStage1Options');
    container.innerHTML = '';

    let distractors = NAMA_OBJEK_UNIK.filter(n => n !== correctName).sort(() => Math.random() - 0.5).slice(0, 4);
    let options = [correctName, ...distractors].sort(() => Math.random() - 0.5);
    const letters = ['A', 'B', 'C', 'D', 'E'];

    options.forEach((optText, index) => {
        const btn = document.createElement('div');
        btn.className = "option-card bg-slate-900 border border-slate-700/80 rounded-xl p-3 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-slate-200 select-none";
        btn.onclick = () => selectStage1Option(btn, optText);

        btn.innerHTML = `
            <div class="flex items-center gap-2.5">
                <span class="badge-letter w-6 h-6 rounded-lg bg-slate-800 border border-slate-600 text-blue-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ${letters[index]}
                </span>
                <span>${optText}</span>
            </div>
            <div class="radio-indicator w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-[10px] shrink-0">
                <i class="fa-solid fa-check opacity-0"></i>
            </div>
        `;
        container.appendChild(btn);
    });
}

function selectStage1Option(cardElement, selectedValue) {
    document.querySelectorAll('#containerStage1Options .option-card').forEach(c => {
        c.classList.remove('selected-option');
        c.querySelector('.radio-indicator i').classList.add('opacity-0');
    });

    cardElement.classList.add('selected-option');
    cardElement.querySelector('.radio-indicator i').classList.remove('opacity-0');
    selectedObjectChoice = selectedValue;

    document.getElementById('wrapperStage2').classList.remove('opacity-40', 'pointer-events-none');
    updateSubmitButtonState();
}

function renderStage2Options(correctPattern) {
    const container = document.getElementById('containerStage2Options');
    container.innerHTML = '';

    let otherPatterns = MASTER_DATA_40_GAMBAR.filter(m => m.pattern !== correctPattern).map(m => m.pattern);
    otherPatterns = [...new Set(otherPatterns)].sort(() => Math.random() - 0.5).slice(0, 4);

    let options = [correctPattern, ...otherPatterns].sort(() => Math.random() - 0.5);
    const letters = ['A', 'B', 'C', 'D', 'E'];

    options.forEach((patText, index) => {
        const btn = document.createElement('div');
        btn.className = "option-card bg-slate-900 border border-slate-700/80 rounded-xl p-3 flex items-start justify-between text-left text-xs sm:text-sm text-slate-300 select-none gap-2";
        btn.onclick = () => selectStage2Option(btn, patText);

        btn.innerHTML = `
            <div class="flex items-start gap-2.5">
                <span class="badge-letter w-6 h-6 rounded-lg bg-slate-800 border border-slate-600 text-indigo-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ${letters[index]}
                </span>
                <span class="leading-relaxed">${patText}</span>
            </div>
            <div class="radio-indicator w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                <i class="fa-solid fa-check opacity-0"></i>
            </div>
        `;
        container.appendChild(btn);
    });
}

function selectStage2Option(cardElement, selectedValue) {
    document.querySelectorAll('#containerStage2Options .option-card').forEach(c => {
        c.classList.remove('selected-option');
        c.querySelector('.radio-indicator i').classList.add('opacity-0');
    });

    cardElement.classList.add('selected-option');
    cardElement.querySelector('.radio-indicator i').classList.remove('opacity-0');
    selectedPatternChoice = selectedValue;

    updateSubmitButtonState();
}

function updateSubmitButtonState() {
    const btn = document.getElementById('btnSubmitQuestion');
    if (selectedObjectChoice && selectedPatternChoice) {
        btn.disabled = false;
        btn.className = "py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition cursor-pointer flex items-center gap-2 text-sm transform active:scale-95";
    } else {
        btn.disabled = true;
        btn.className = "py-3 px-6 bg-slate-700 text-slate-400 font-bold rounded-xl transition cursor-not-allowed flex items-center gap-2 text-sm";
    }
}

function processQuestionAnswer() {
    if (!selectedObjectChoice || !selectedPatternChoice) return;

    const currentQ = questionsList[activeQuestionIndex];
    const isObjectCorrect = (selectedObjectChoice === currentQ.name);
    const isPatternCorrect = (selectedPatternChoice === currentQ.pattern);
    const isPerfect = isObjectCorrect && isPatternCorrect;

    // Bobot Nilai Auto-scale ke 100 Poin
    const pointPerQuestion = 100 / questionsList.length;
    const pointsAwarded = isPerfect ? pointPerQuestion : 0;

    userAnswersHistory.push({
        questionId: currentQ.id,
        isPerfect: isPerfect,
        points: pointsAwarded
    });

    activeQuestionIndex++;

    if (activeQuestionIndex < questionsList.length) {
        loadCurrentQuestion();
    } else {
        finishGameAndShowResults();
    }
}

function finishGameAndShowResults() {
    document.getElementById('screenQuiz').classList.add('hidden');
    document.getElementById('screenResult').classList.remove('hidden');

    document.getElementById('resultStudentNameDisplay').innerText = `Nama Murid: ${studentName}`;

    const rawScore = userAnswersHistory.reduce((sum, item) => sum + item.points, 0);
    const finalScore = Math.round(rawScore);
    const perfectCount = userAnswersHistory.filter(item => item.isPerfect).length;
    const accuracyPercent = Math.round((perfectCount / questionsList.length) * 100);

    document.getElementById('finalScoreDisplay').innerText = finalScore;
    document.getElementById('finalPerfectCountDisplay').innerText = `${perfectCount} / ${questionsList.length}`;
    document.getElementById('finalAccuracyDisplay').innerText = `${accuracyPercent}%`;

    Swal.fire({
        icon: accuracyPercent >= 50 ? 'success' : 'info',
        title: 'Permainan Selesai!',
        text: `Selamat ${studentName}! Nilai akhir kamu adalah ${finalScore} Poin dari ${questionsList.length} soal.`,
        confirmButtonColor: '#3b82f6'
    });
}

// Secret Admin Access via Triple Click
function handleSecretBirulogiClick() {
    secretClickCounter++;
    if (secretClickCounter === 1) {
        secretClickTimer = setTimeout(() => {
            secretClickCounter = 0;
        }, 1000);
    } else if (secretClickCounter >= 3) {
        clearTimeout(secretClickTimer);
        secretClickCounter = 0;
        requestAdminAccess();
    }
}

function setupAdminShortcut() {
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
            e.preventDefault();
            requestAdminAccess();
        }
    });
}

function requestAdminAccess() {
    Swal.fire({
        title: 'Akses Khusus Admin',
        text: 'Masukkan PIN Kata Sandi Admin untuk melihat data rahasia 40 gambar:',
        input: 'password',
        inputPlaceholder: 'PIN (Default: 1234)',
        showCancelButton: true,
        confirmButtonText: 'Buka Admin',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#f59e0b',
        cancelButtonColor: '#64748b'
    }).then((result) => {
        if (result.isConfirmed) {
            if (result.value === '1234') {
                document.getElementById('screenWelcome').classList.add('hidden');
                document.getElementById('screenCatalog').classList.add('hidden');
                document.getElementById('screenQuiz').classList.add('hidden');
                document.getElementById('screenResult').classList.add('hidden');
                document.getElementById('screenAdmin').classList.remove('hidden');
                document.getElementById('badgeAdminMode').classList.remove('hidden');

                Swal.fire({
                    icon: 'success',
                    title: 'Akses Admin Diterima',
                    text: 'Tabel referensi data 40 gambar berhasil dibuka.',
                    timer: 1500,
                    showConfirmButton: false
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Akses Ditolak',
                    text: 'PIN Admin yang dimasukkan salah!',
                    confirmButtonColor: '#ef4444'
                });
            }
        }
    });
}

function renderAdminTable() {
    const tbody = document.getElementById('adminTableBody');
    tbody.innerHTML = '';

    MASTER_DATA_40_GAMBAR.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-700/40 transition-colors";
        const imgUrl = getDriveImageUrl(item.driveId);

        tr.innerHTML = `
            <td class="p-3 text-center font-bold text-slate-400">${idx + 1}</td>
            <td class="p-3">
                <img src="${imgUrl}" alt="${item.name}" class="w-12 h-12 object-contain rounded-lg bg-slate-950 border border-slate-700 p-1">
            </td>
            <td class="p-3 font-bold text-white">${item.name}</td>
            <td class="p-3">
                <span class="${item.type === 'AI' ? 'bg-blue-900/80 text-blue-300 border border-blue-600' : 'bg-emerald-900/80 text-emerald-300 border border-emerald-600'} text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ${item.type}
                </span>
            </td>
            <td class="p-3 text-slate-400">${item.category}</td>
            <td class="p-3 leading-relaxed text-slate-300">${item.pattern}</td>
        `;
        tbody.appendChild(tr);
    });
}
