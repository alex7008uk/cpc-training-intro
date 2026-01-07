// ==================== 教師經歷資料 ====================
const experiences = [
  {
    title: "資深程式設計講師",
    period: "2020 - 至今",
    description:
      "專注於教授現代網頁開發技術,包括 HTML、CSS、JavaScript 及各種前端框架。曾指導超過 500 名學生成功轉職成為軟體工程師。",
  },
  {
    title: "全端工程師",
    period: "2015 - 2020",
    description:
      "在知名科技公司擔任全端工程師,負責大型專案的前後端開發,累積豐富的實戰經驗。參與多個企業級應用程式的開發與維護。",
  },
  {
    title: "技術顧問",
    period: "2018 - 至今",
    description:
      "為多家新創公司提供技術諮詢服務,協助制定技術架構、進行程式碼審查,並提供團隊培訓。成功輔導 20+ 專案上線。",
  },
  {
    title: "開源專案貢獻者",
    period: "2013 - 至今",
    description:
      "活躍於開源社群,為多個知名專案貢獻程式碼。定期參與技術研討會並分享最新的技術趨勢與實踐經驗。",
  },
];

// ==================== 課程資料 ====================
// 領導經營系列課程推薦
const leadershipCourses = [
  {
    title: "MTP企業管理者才能發展培訓",
    url: "https://reurl.cc/qK44vN",
    image: "images/領導經營系列/MTP企業管理者才能發展培訓.jpg",
  },
  {
    title: "TWI 基層幹部管理能力發展培訓班",
    url: "https://reurl.cc/MMLL6k",
    image: "images/領導經營系列/TWI 基層幹部管理能力發展培訓班.jpg",
  },
  {
    title: "問題分析與決策(PSDM)能力提昇技巧",
    url: "https://reurl.cc/vK44QN",
    image: "images/領導經營系列/問題分析與決策(PSDM)能力提昇技巧.jpg",
  },
  {
    title: "跨領域專案管理與AI協作實務班",
    url: "https://reurl.cc/xK4435",
    image: "images/領導經營系列/跨領域專案管理與AI協作實務班.jpg",
  },
  {
    title: "AI 革命：把 SOP 從紙上談兵變成企業戰鬥力",
    url: "https://reurl.cc/xK44aL",
    image: "images/領導經營系列/AI 革命：把 SOP 從紙上談兵變成企業戰鬥力.jpg",
  },
  {
    title: "企業績效管理實務",
    url: "https://reurl.cc/vK44pN",
    image: "images/領導經營系列/企業績效管理實務.jpg",
  },
  {
    title: "教練式領導與團隊帶領：帶人帶心的高效對話與行動術",
    url: "https://reurl.cc/W8MMOx",
    image: "images/領導經營系列/教練式領導與團隊帶領：帶人帶心的高效對話與行動術.jpg",
  },
  {
    title: "風險分析與危機管理培訓",
    url: "https://reurl.cc/LQLLa7",
    image: "images/領導經營系列/風險分析與危機管理培訓.jpg",
  },
  {
    title: "簡報技巧與口才訓練",
    url: "https://reurl.cc/nl44yn",
    image: "images/領導經營系列/簡報技巧與口才訓練.jpg",
  },
];

// 生品管系列課程推薦
const qualityCourses = [
  {
    title: "IATF 16949 六大核心工具應用實務研習班",
    url: "https://reurl.cc/DbE1Lj",
    image: "images/生品管系列/IATF 16949 六大核心工具應用實務研習班.jpg",
  },
  {
    title: "ISO9001及IATF 16949 量測儀器校正管理實務",
    url: "https://reurl.cc/zKEyLy",
    image: "images/生品管系列/ISO9001及IATF 16949 量測儀器校正管理實務.jpg",
  },
  {
    title: "ISO文件管理及標準化建立技巧研習班",
    url: "https://reurl.cc/DbE17E",
    image: "images/生品管系列/ISO文件管理及標準化建立技巧研習班.jpg",
  },
  {
    title: "ISO 9001:2015 內部稽核實務",
    url: "https://reurl.cc/oKADAq",
    image: "images/生品管系列/ISO 90012015 內部稽核實務.jpg",
  },
  {
    title: "IATF 16949:2016 內部稽核員培訓",
    url: "https://reurl.cc/zKEyEy",
    image: "images/生品管系列/IATF 169492016 內部稽核員培訓.jpg",
  },
  {
    title: "VDA 6.3:2023製程稽核人員訓練",
    url: "https://reurl.cc/QVxpo9",
    image: "images/生品管系列/VDA 6.32023製程稽核人員訓練.jpg",
  },
  {
    title: "企業流程標準化(SOP)建立與改善實務",
    url: "https://reurl.cc/LQq1oy",
    image: "images/生品管系列/企業流程標準化(SOP)建立與改善實務.jpg",
  },
  {
    title: "精實生產管理-7大浪費鑑別與改善",
    url: "https://reurl.cc/dqArbg",
    image: "images/生品管系列/精實生產管理-7大浪費鑑別與改善.jpg",
  },
  {
    title: "DOE實驗設計",
    url: "https://reurl.cc/k8g5Qx",
    image: "images/生品管系列/DOE實驗設計.jpg",
  },
  {
    title: "如何做好現場管理與改善",
    url: "https://reurl.cc/xKADbL",
    image: "images/生品管系列/如何做好現場管理與改善.jpg",
  },
  {
    title: "豐田式生產管理",
    url: "https://reurl.cc/XayXr7",
    image: "images/生品管系列/豐田式生產管理.jpg",
  },
  {
    title: "7S管理實務(5S+安全+節約)",
    url: "https://reurl.cc/gn1vEQ",
    image: "images/生品管系列/7S管理實務(5S+安全+節約).jpg",
  },
  {
    title: "六標準差綠帶訓練",
    url: "https://reurl.cc/aMAlDZ",
    image: "images/生品管系列/六標準差綠帶訓練.jpg",
  },
];

// ==================== 生成經歷區塊 ====================
function renderExperiences() {
  const aboutContent = document.getElementById("aboutContent");

  experiences.forEach((exp, index) => {
    const expItem = document.createElement("div");
    expItem.className = "experience-item";
    expItem.style.animationDelay = `${index * 0.1}s`;

    expItem.innerHTML = `
            <h3 class="experience-title">${exp.title}</h3>
            <p class="experience-period">${exp.period}</p>
            <p class="experience-description">${exp.description}</p>
        `;

    aboutContent.appendChild(expItem);
  });
}

// ==================== 生成課程卡片 ====================
function renderCourses() {
  const coursesGrid = document.getElementById("coursesGrid");

  // 生成領導經營系列課程區塊
  const leadershipSection = document.createElement("div");
  leadershipSection.className = "course-section";
  leadershipSection.innerHTML = `
    <h3 class="course-category-title">領導經營系列課程推薦</h3>
    <div class="course-list">
      ${leadershipCourses
        .map(
          (course) => `
        <div class="course-item">
          <a href="${course.url}" target="_blank" class="course-link">
            <div class="course-image">
              <img src="${course.image}" alt="${course.title}" />
            </div>
            <div class="course-title-text">${course.title}</div>
          </a>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  coursesGrid.appendChild(leadershipSection);

  // 生成生品管系列課程區塊
  const qualitySection = document.createElement("div");
  qualitySection.className = "course-section";
  qualitySection.innerHTML = `
    <h3 class="course-category-title">生品管系列課程推薦</h3>
    <div class="course-list">
      ${qualityCourses
        .map(
          (course) => `
        <div class="course-item">
          <a href="${course.url}" target="_blank" class="course-link">
            <div class="course-image">
              <img src="${course.image}" alt="${course.title}" />
            </div>
            <div class="course-title-text">${course.title}</div>
          </a>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  coursesGrid.appendChild(qualitySection);
}

// ==================== 平滑滾動效果 ====================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ==================== 滾動動畫效果 ====================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // 觀察所有需要動畫的元素
  const animatedElements = document.querySelectorAll(
    ".experience-item, .course-section"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// ==================== 導航列滾動效果 ====================
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    }

    lastScroll = currentScroll;
  });
}

// ==================== 初始化所有功能 ====================
document.addEventListener("DOMContentLoaded", () => {
  // 生成內容
  // renderExperiences(); // 已改為直接在 HTML 中顯示講師介紹
  renderCourses();

  // 初始化功能
  initSmoothScroll();
  initNavbarScroll();

  // 延遲初始化滾動動畫,確保元素已渲染
  setTimeout(() => {
    initScrollAnimations();
  }, 100);

  console.log("✅ 網站已成功載入!");
  console.log(`📚 共載入 ${experiences.length} 項經歷`);
  console.log(`🎓 領導經營系列課程: ${leadershipCourses.length} 門`);
  console.log(`🎓 生品管系列課程: ${qualityCourses.length} 門`);
});
