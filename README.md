# Sue Su Portfolio

Wei-Chu Su（Sue）的個人作品集，收錄研究專案、AR 互動展覽、插畫與平面設計作品。

線上網站：https://chiuzw619.github.io/suesu-portfolio/

作品集原本架在 [Wix](https://halcyonforsue.wixsite.com/suesu) 上，現在改寫成不依賴 Wix 的前端網站，並另外在 Figma 重建一份可編輯的設計稿。在保留原本版面的前提下，新增了瀏覽與互動體驗。

## 從 Wix 到前端與 Figma

### 前端網站

- 使用 **Vue 3 + Vite**。每個 topbar 頁面是獨立的 HTML 入口，不需要路由，可以直接放在 GitHub Pages。
- **桌面版（1000px 以上）**：重現原 Wix 版面。內容放在 980px 的欄位中，每個元素依照從原站量到的座標絕對定位，座標都寫在 `src/pages/*.vue` 裡。
- **手機版（1000px 以下）**：改成單欄 RWD 排版。色塊卡片會隨文字延伸，圖表和拼貼區塊整體等比縮放。
- 圖片、字型（Cinzel、Almarai、Inter，透過 `@fontsource`）和程式都打包在專案內，正式網站沒有任何 Wix 標籤或 Wix 執行程式。

### Figma 設計稿

Figma 檔裡有 6 個 1280px 寬的桌面版 frame（Home、Project、Exhibition、Illustration、Graphic Design、Contact），每個圖層都可以編輯。轉換流程：

1. 用無頭 Chrome（Chrome DevTools Protocol）載入線上網站，讀出每個圖片、文字區塊、色塊、線條和圖示的實際位置、尺寸與文字樣式（字型、字級、行高、顏色、粗體、斜體、底線）。
2. 把這些資料轉成 Figma Plugin API 腳本，透過 Figma MCP 在 Figma 中逐頁建立圖層。文字保留段落內的混合樣式。
3. 把網站的 AVIF 圖片轉成 PNG 上傳，填入對應的圖層。

Figma 中沒有的字型以接近的字型替代：Times New Roman → Tinos、Helvetica Neue → Arimo、中文 → Noto Sans TC / Noto Serif TC。

## 新增的 UX 與 UI 互動

| 互動 | 位置 | 說明 |
| --- | --- | --- |
| 區塊索引列 | 除 Home 外每頁左下角 | 依各區塊標題自動產生，點擊後平滑捲動到該區塊，並標示目前閱讀到的區塊。寬度不足時收合成「Index」按鈕。 |
| 固定的 Top 按鈕 | 除 Home 外每頁右下角 | 往下捲 400px 後出現，點擊平滑回到頂部。 |
| 目前頁面底線 | Topbar | 目前所在頁面的選項下方有細線，滑鼠移到其他選項時細線會由左往右畫出。 |
| 夜色下雨效果 | Home 插圖 | 滑鼠移到插圖上（手機點擊），背景漸變為 #252320，白色細線像雨一樣落下，呼應插圖的線條感。 |
| 沉浸式捲動 | Exhibition 的 Core Concept 到 Interaction Process | 捲動進入時漸漸變暗、開始下雨，接近 Usability Testing 時漸漸恢復。 |
| 頁內影片播放 | Exhibition 的 Our Story | 點擊縮圖直接在頁面上播放 YouTube 影片，不會離開作品集；播放時切換到夜色下雨效果，暫停或播完即恢復。 |
| 流程線動畫 | Exhibition 的 Our Story | 捲動到流程線時，線條由左往右畫出，節點與文字依序出現，之後有紅點沿線移動，表示依序進行的流程。 |
| 圖片放大檢視 | 所有頁面的重要圖片 | 情境圖、圖表、流程圖與作品圖可點擊放大，可用箭頭或鍵盤 ← → 切換，點空白處、× 或 Esc 關閉。Logo、參考小圖與大頭照不放大（加上 `no-zoom` class）。 |
| 自訂游標 | 全站（滑鼠與觸控板） | 細線風格的圓點與跟隨圓圈，移到連結時放大，移到可放大的圖片上顯示「VIEW」。 |
| 手機版區塊分隔 | 1000px 以下 | 每個區塊以分隔線和紅色編號（01、02…）開頭，標題放在內容最前面。 |
| 頁尾留白 | 除 Home 外每頁 | 頁面高度依實際內容計算，底部固定留 160px，不再有大片空白。 |

有動態效果的互動，都會在系統開啟「減少動態效果」時改為靜態呈現。

## 專案結構

- `src/pages/*.vue`：各頁內容與桌面版座標。每個區塊包在 `<section class="blk">` 中，索引列與手機版分隔都依此判斷。
- `src/components/`：Topbar、區塊索引列、圖片放大、自訂游標。
- `src/rain.js`：Home 與 Exhibition 共用的夜色下雨效果。
- `src/style.css`：全站樣式，包含 RWD 規則。

## 圖片

| Topbar | 網址 | 圖片檔案 |
| --- | --- | --- |
| Home | `/` | `home-1.avif`（頁面使用去背版 `home-1-cutout.webp`） |
| Project | `/project/` | `project-1.avif` ～ `project-7.avif` |
| Exhibition | `/exhibition/` | `exhibition-1.avif` ～ `exhibition-38.avif` |
| Illustration | `/illustration/` | `illustration-1.avif` ～ `illustration-34.avif` |
| Graphic Design | `/graphic-design/` | `graphic-design-1.avif` ～ `graphic-design-13.avif` |
| Contact | `/contact/` | `contact-1.avif` |

圖片依 topbar 類別放在 `public/images/<類別>/`，並依原頁面的出現順序命名。從 Wix 下載的原始檔放在 `public/images/source/`。要更換圖片時，用同樣的檔名取代對應檔案即可。目前的圖片解析度與頁面顯示尺寸相同，換成更高解析度的版本，放大檢視時會更清楚。

## 本機執行

需要 Node.js 22 以上。

```bash
npm ci
npm run dev
```

執行 `npm run build` 產生可部署的 `dist/`，`npm run preview` 可檢查正式建置。

## 發布到 GitHub Pages

網站由 `gh-pages` 分支提供。修改內容後執行：

```bash
npm run deploy
```

會重新建置並把 `dist/` 推送到 `gh-pages`，約一分鐘後網站更新。原始碼請另外 commit 並 push 到 `main`。

Vite 使用相對路徑 `base: './'`，支援 `https://使用者名稱.github.io/倉庫名稱/` 這種子路徑。
