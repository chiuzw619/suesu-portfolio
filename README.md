# Sue Su Portfolio

依照 [原 Wix 作品集](https://halcyonforsue.wixsite.com/suesu) 的頁面配置與內容製作的靜態網站。使用 Vue 3 與 Vite。寬度 1000px 以上與原站桌面版相同（980px 欄位、元素依原站量測座標定位）；1000px 以下改為單欄 RWD 排版，色塊卡片隨文字延伸，圖表與拼貼區塊整體等比縮放。網站本身沒有 Wix 標籤或 Wix 執行程式。

## 頁面

| Topbar | 網址 | 圖片檔案 |
| --- | --- | --- |
| Home | `/` | `home-1.avif` |
| Project | `/project/` | `project-1.avif` ～ `project-7.avif` |
| Exhibition | `/exhibition/` | `exhibition-1.avif` ～ `exhibition-38.avif` |
| Illustration | `/illustration/` | `illustration-1.avif` ～ `illustration-34.avif` |
| Graphic Design | `/graphic-design/` | `graphic-design-1.avif` ～ `graphic-design-13.avif` |
| Contact | `/contact/` | `contact-1.avif` |

網站圖片依 topbar 類別放在 `public/images/home/`、`project/`、`exhibition/`、`illustration/`、`graphic-design/`、`contact/`，並依原頁面的出現順序命名。從「下載」整理的原始下載檔另外放在 `public/images/source/` 下相應分類，檔名同樣標示頁面與序號。Exhibition 的五個星球動畫目前以靜態預覽圖（`exhibition-5` ～ `exhibition-9`）呈現，YouTube 影片以連結封面呈現。日後如有缺少的圖片，依照同樣規則命名並放入所屬的 `public/images/分類/`；頁面已有對應的圖片位置。

## 本機執行

需要 Node.js 22 以上。

```bash
npm ci
npm run dev
```

執行 `npm run build` 產生可部署的 `dist/`，`npm run preview` 可檢查正式建置。每個 topbar 項目都有獨立 HTML 入口，按下連結會換頁。圖片、字型與程式都打包在本專案內，正式網站不依賴 Wix。

## 發布到 GitHub Pages

1. 在 GitHub 建立 repository，將此資料夾內容推送到 `main` 分支。
2. 在 repository 的 **Settings → Pages → Build and deployment**，將 Source 設為 **GitHub Actions**。
3. `.github/workflows/deploy.yml` 會自動建置並發布 `dist/`。

Vite 使用相對路徑 `base: './'`，支援 `https://使用者名稱.github.io/倉庫名稱/`。
