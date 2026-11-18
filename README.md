# Jstudio — Make small apps for real life

靜態一頁式網站，無須安裝套件或建置。部署時保留完整 assets/ 資料夾。

## 預覽

Duo 使用 WebGL、ES module 與本地模型，請透過 HTTP 預覽或部署後查看動畫。
在本資料夾執行 `python3 -m http.server 8765`，瀏覽器開啟 http://127.0.0.1:8765/ 。
直接雙擊 index.html 仍可閱讀頁面；瀏覽器若不允許載入本地 3D 模組，會顯示雙頁靜態備援圖。

## 專案入口

每個專案只保留一個 CTA；封面為純展示。
- Passfolio — APP · iPHONE：介紹 https://jstudio-app.github.io/passforlio/index.html
- AStore Trip — WEB APP · PWA：介紹 https://astoretrip.com/
- Grandma KTV — WEB APP · PWA：使用 https://jerry0430.github.io/KTV/

## 動畫與素材

- Passfolio：沿用官方網站 assets/hero-three.js 的 Duo 3D 展開動畫。程式、模型與螢幕材質均保存於 assets/passfolio-duo/，保留原始 Three.js 與 fflate 授權資訊。來源：https://jstudio-app.github.io/passforlio/index.html （2026-11-18）。動畫離開可視區或背景分頁時停止繪製；減少動態偏好下顯示展開狀態。
- AStore Trip：使用提供的六張圖，每次兩張，依 9481+9482、9483+9484、9486+9487 輪播。
- Grandma KTV：提供的歌曲清單與播放畫面，以橫向平板呈現。
- 圖片輪播每 4.5 秒切換，附手動切換與暫停控制。
- Header：手機保留含 Threads Logo 的開發日常入口；桌面保留三個導覽。
- 個人連結：Threads 與「查看個人簡歷與作品」。

## 編輯

index.html 編輯文字及連結；styles.css 編輯版面；script.js 控制圖片輪播。頁首仍是暫用文字標誌。
