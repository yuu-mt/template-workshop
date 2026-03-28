// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: "伊藤 裕亮",
  role: "システムエンジニア",
  bio: [
    "自然大好きエンジニアです。趣味はキャンプと素潜り！",
    "Python勉強中です💪よろしくお願いします。",
  ],
  avatarUrl: "", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "Python", level: "学習中" },
  { name: "vue.js", level: "学習中" },
  { name: "HTML", level: "学習中" },
  { name: "CSS", level: "学習中" },
  // 追加・削除してOK
];

export const projects = [
  {
    title: "Monster Study Tracker",
    description: [
      "学習時間や内容を記録するアプリです。",
      "たくさん勉強してモンスターを育てよう！",
    ],
    techStack: ["Django", "vue.js"],
    url: "https://study-app-seven-rho.vercel.app/login",
  },
  // 複数追加できます
];

export const contact = {
  github: "https://github.com/yuu-mt",
  email: "yuu.is3mt@gmail.com",
};
