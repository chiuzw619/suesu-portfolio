<script setup>
import { ref } from 'vue'
import { image } from '../site'

// The video plays in place: clicking the poster swaps in the YouTube player.
// Links inside the player (the YouTube logo, "Watch on YouTube") open a new tab.
const VIDEO = 'cRp-Kp4mrC0'
const playing = ref(false)
</script>

<template>
  <div class="page wix-exhibition">
<section class="blk">
<div class="a c" style="left: -7px; top: 290px; width: 980px">
<h1 style="margin: 0; font-size: 45px; line-height: 72px; font-weight: 400">The Echo of Lodestar</h1>
<p class="al" style="font-size: 25px; line-height: 40px">AR互動視覺展覽專案</p>
</div>
<p class="a c red" style="left: 168px; top: 415px; width: 630px; font-family: 'Times New Roman', Times, serif; font-size: 17px; line-height: 23.8px">Immersive Visual Exhibition | Augmented Reality | Journey of Self-Resonance</p>
<div class="a c awards" style="left: 57px; top: 558px; width: 851px; font-size: 15px; line-height: 21px">
<p>作品榮獲</p>
<p><a href="https://isarch.org/2023-isarch-digital-award-student/">ISARCH 2023 Digital Award — Exhibition Winner</a>（國際競賽展覽類winner獎）</p>
<p><a href="https://dna.paris/social/zoom.php?eid=71-90619-23&amp;mibextid=Zxz2cZ">2023 DNA Paris Design Awards Interactive Design Honorable Mention</a></p>
<p><a href="https://www.moe-idc.org/Works/Content/2033">台灣IDC設計戰國策 113年度教育部國際競賽計畫 二等獎</a>及Yahoo新聞等多家媒體報導</p>
</div>
<img class="a" :src="image('exhibition', 1)" alt="The Echo of Lodestar exhibition key visual" style="left: -7px; top: 671px; width: 980px; height: 383px; object-fit: cover">
</section>

<section class="blk">
<h2 class="a h2" style="top: 1176px">Research Background</h2>
<img class="a" :src="image('exhibition', 2)" alt="Demian book cover" style="left: 43px; top: 1296px; width: 120px; height: 192px; object-fit: cover">
<div class="a s16" style="left: 220px; top: 1334px; width: 753px">
<p class="red" style="font-size: 18px">文獻研究：以心理學文本作為概念原型</p>
<p>&nbsp;</p>
<p>隨著自我探索與心理成長議題逐漸受到關注，人們渴望以更具共鳴感的方式，重新理解自己在成長歷程中所經歷的心理轉折。以心理學文本作為概念原型，團隊在最初的主題選定階段，以優先鎖定與團隊自身經驗高度相關的命題：成長歷程中的心理轉折（如迷惘、孤獨、自我覺察等情緒狀態）</p>
<p>基於團隊對心理學領域的興趣，選定赫塞《德米安：徬徨少年時》作為核心概念，將書中對自我意識覺醒歷程的描寫，作為展覽敘事結構與五個心境階段的概念原型，以此進行主題的具象化轉譯。</p>
</div>
<img class="a" :src="image('exhibition', 3)" alt="Research background flowchart" style="left: -75px; top: 1550px; width: 1117px; height: 391px; object-fit: cover">
<div class="a s16" style="left: -7px; top: 1965px; width: 753px">
<p>&nbsp;</p>
<p class="red" style="font-size: 18px">案例研究：The Art of Bloom</p>
<p>&nbsp;</p>
<p>目前多數展覽仍以靜態陳列或單向敘事呈現，觀展者往往只是被動接收訊息，難以在過程中真正產生自我連結。因此我們希望將抽象的心理狀態轉化為可被感知、可被參與的沉浸式體驗。</p>
<p>&nbsp;</p>
<p>在體驗形式的研究上，團隊以The Art of Bloom為參考，希望打造出多重感官沉浸式展覽作為指標案例。該案例聚焦人與自然的共生關係，透過裝置藝術結合AR技術，形成開放式的體驗結構。在這樣的形式下訪客能夠以在既定框架內，自行發展出個人化的互動路徑與詮釋方式。此開放詮釋、鼓勵自發性互動的設計原則，是The Echo of Lodestar在展場動線規劃、AR互動觸發機制設計上的重要參考依據，也影響後續在觀展者主動探索、產出個人化星球圖鑑方面的核心體驗邏輯。</p>
</div>
<img class="a" :src="image('exhibition', 4)" alt="The Art of Bloom exhibition reference" style="left: 793px; top: 2003px; width: 235px; height: 159px; object-fit: cover">
</section>

<section class="blk">
<h2 class="a h2" style="top: 2291px; left: -9px">Our Story</h2>
<div class="a s16" style="left: 65px; top: 2418px; width: 832px">
<p class="c red s18">How might we help people recognize and resonate with their own psychological journey of growth, through an immersive AR exhibition experience?</p>
<p class="s18">&nbsp;</p>
<p class="s18">以拉丁格言 Per aspera ad astra 與赫塞《德米安：徬徨少年時》為靈感啟發，延伸出 Born、Desire、Sink、Lonesome、Reflection 五個星球主題，描繪人生不同階段所面臨的心境與自我成長歷程。</p>
<div class="fig" style="position: relative; width: 832px; height: 201.6px">
<p class="a c" style="left: 6px; top: 83px; width: 97px; font-size: 17px; line-height: 23.8px">哲學思考</p>
<p class="a c" style="left: 180px; top: 83px; width: 103px; font-size: 17px; line-height: 23.8px">實體空間設計</p>
<p class="a c" style="left: 365px; top: 83px; width: 97px; font-size: 17px; line-height: 23.8px">動態視覺</p>
<p class="a c" style="left: 549px; top: 83px; width: 97px; font-size: 17px; line-height: 23.8px">AR擴增實境</p>
<p class="a c" style="left: 722px; top: 83px; width: 103px; font-size: 17px; line-height: 23.8px">主題網頁</p>
<div class="a" style="left: 65px; top: 139px; width: 706px; height: 3px; background: #000000"></div>
<div class="a" style="left: 44px; top: 129px; width: 21px; height: 21px; border-radius: 50%; background: #000000"></div>
<div class="a" style="left: 221px; top: 129px; width: 21px; height: 21px; border-radius: 50%; background: #000000"></div>
<div class="a" style="left: 403px; top: 129px; width: 21px; height: 21px; border-radius: 50%; background: #000000"></div>
<div class="a" style="left: 587px; top: 129px; width: 21px; height: 21px; border-radius: 50%; background: #000000"></div>
<div class="a" style="left: 763px; top: 129px; width: 21px; height: 21px; border-radius: 50%; background: #000000"></div>
</div>
<p class="c">展覽融合哲學思考、實體空間設計、動態視覺與 AR（擴增實境）互動技術，</p>
<p class="c">觀展者可透過平板設備掃描展場視覺內容，在沉浸式展覽氛圍中展開互動體驗，</p>
<p class="c">從五個主題星球探索自我、反思生命歷程，並在體驗中找到屬於自己的情感共鳴。</p>
<p>&nbsp;</p>
<p class="c">除了實體AR展覽外，專案也包含主題網站開發、線上虛擬展覽空間及客製化個人圖鑑測驗互動功能，</p>
<p class="c">並結合後續行銷推廣規劃，打造完整的線上線下整合體驗，提升展覽的延續性與參與者的互動深度。</p>
</div>
<div class="a yt" style="left: 164px; top: 2957px; width: 638px; height: 357px; overflow: hidden; background: #111111">
<iframe v-if="playing" :src="`https://www.youtube-nocookie.com/embed/${VIDEO}?autoplay=1&rel=0`" title="The Echo of Lodestar" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0"></iframe>
<button v-else type="button" class="yt-poster" aria-label="Play video: The Echo of Lodestar" @click="playing = true">
<img :src="image('exhibition', 1)" alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.55">
<span style="position: absolute; left: 20px; top: 16px; color: #ffffff; font-size: 18px">The Echo of Lodestar</span>
<svg style="position: relative" width="68" height="48" viewBox="0 0 68 48" aria-hidden="true"><rect width="68" height="48" rx="12" fill="#ff0000"></rect><path d="M27 15v18l16-9z" fill="#ffffff"></path></svg>
</button>
</div>
</section>

<section class="blk">
<h2 class="a h2" style="top: 3465px">Core<br>Concept</h2>
<img class="a" :src="image('exhibition', 5)" alt="Born AR animation" style="left: 105px; top: 3632px; width: 197px; height: 198px; object-fit: cover">
<p class="a c s16" style="left: 88px; top: 3846px; width: 232px">突破 Born<br><br>互動效果：點擊蛋殼<br>飛鳥破殼而出</p>
<img class="a" :src="image('exhibition', 6)" alt="Desire AR animation" style="left: 643px; top: 3760px; width: 197px; height: 198px; object-fit: cover">
<p class="a c s16" style="left: 561px; top: 3973px; width: 363px">慾望 Desire<br><br>互動效果：點擊花叢<br>花朵逐一消散，剩下空殼</p>
<img class="a" :src="image('exhibition', 7)" alt="Reflection AR animation" style="left: 280px; top: 4156px; width: 197px; height: 198px; object-fit: cover">
<p class="a c s16" style="left: 212px; top: 4370px; width: 335px">自我投射 Reflection<br><br>互動效果：點擊鏡面湖倒映出的自己，<br>兩個世界，實則是同一個自我</p>
<img class="a" :src="image('exhibition', 8)" alt="Lonesome AR animation" style="left: 656px; top: 4399px; width: 197px; height: 198px; object-fit: cover">
<p class="a c s16" style="left: 618px; top: 4611px; width: 274px">孤獨 Lonesome<br><br>互動效果：點擊雲霧<br>黑暗逐漸吞噬一切</p>
<img class="a" :src="image('exhibition', 9)" alt="Sink AR animation" style="left: 94px; top: 4546px; width: 197px; height: 198px; object-fit: cover">
<p class="a c s16" style="left: 62px; top: 4760px; width: 263px">沉淪 Sink<br><br>互動效果：點擊黑洞深淵<br>黑暗逐漸吞噬一切</p>
</section>

<section class="blk">
<h2 class="a h2" style="top: 4998px; left: -6px">Interaction Process</h2>
<p class="a c s16 al" style="left: -9px; top: 5146px; width: 163px">領取平板<br>進入展場</p>
<img class="a" :src="image('exhibition', 10)" alt="Visitor collects a tablet" style="left: -6px; top: 5245px; width: 156px; height: 162px; object-fit: cover">
<p class="a c s16 al" style="left: 194px; top: 5146px; width: 154px">互動操作提示以<br>文字顯示於設備</p>
<img class="a" :src="image('exhibition', 11)" alt="Interaction hints on the device" style="left: 192px; top: 5245px; width: 156px; height: 162px; object-fit: cover">
<p class="a c s16 al" style="left: 403px; top: 5147px; width: 154px">使用平板掃描展牆上的星球並互動</p>
<img class="a" :src="image('exhibition', 12)" alt="Scanning a planet on the exhibition wall" style="left: 399px; top: 5245px; width: 161px; height: 162px; object-fit: cover">
<p class="a c s16 al" style="left: 607px; top: 5147px; width: 163px">體驗後用自己手機進行個人客製化星球問答</p>
<img class="a" :src="image('exhibition', 13)" alt="Personalised planet quiz on a phone" style="left: 609px; top: 5245px; width: 161px; height: 162px; object-fit: cover">
<p class="a c s16 al" style="left: 812px; top: 5146px; width: 163px">使用IG濾鏡與<br>周邊明信片進行互動</p>
<img class="a" :src="image('exhibition', 14)" alt="Instagram filter and postcards" style="left: 815px; top: 5245px; width: 157px; height: 162px; object-fit: cover">
<svg class="a desk" style="left: 163px; top: 5160px" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#242323" stroke-width="1.2" aria-hidden="true"><path d="M1 9h15M11 4l5 5-5 5"></path></svg>
<svg class="a desk" style="left: 364px; top: 5160px" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#242323" stroke-width="1.2" aria-hidden="true"><path d="M1 9h15M11 4l5 5-5 5"></path></svg>
<svg class="a desk" style="left: 575px; top: 5160px" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#242323" stroke-width="1.2" aria-hidden="true"><path d="M1 9h15M11 4l5 5-5 5"></path></svg>
<svg class="a desk" style="left: 785px; top: 5160px" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#242323" stroke-width="1.2" aria-hidden="true"><path d="M1 9h15M11 4l5 5-5 5"></path></svg>
</section>

<section class="blk">
<h2 class="a h2" style="top: 5546px; left: -10px">Usability Testing of the Process</h2>
<div class="a fig" style="left: -7px; top: 5690px; width: 980px; height: 388px"><div style="position: absolute; left: 7px; top: -5690px; width: 1100px">
<p class="a c s18 al" style="left: 23px; top: 5690px; width: 163px">測試必要性</p>
<p class="a c s18 al" style="left: 779px; top: 5690px; width: 163px">測試目標</p>
<img class="a" :src="image('exhibition', 15)" alt="Usability testing flowchart" style="left: -7px; top: 5747px; width: 980px; height: 331px; object-fit: cover">
</div></div>
<img class="a" :src="image('exhibition', 16)" alt="Usability test with a tablet" style="left: 584px; top: 6180px; width: 389px; height: 218px; object-fit: cover">
<div class="a s16 al" style="left: -7px; top: 6199px; width: 546px">
<p class="red s18">測試對象與方法</p>
<p>&nbsp;</p>
<p>測試對象共6人，皆為首次接觸本展覽者，且對AR技術不熟悉，同時對自我探索或成長主題有興趣，藉此確保測試結果貼近真實觀展者的第一次體驗情境。</p>
<p>&nbsp;</p>
<p>測試方法採觀察法＋即時口述法，請受測者在體驗過程中同步說出當下的操作想法與疑惑，並於體驗結束後進行簡短訪談，回顧整體感受與操作困難點，同時也記錄網頁測評完成率，作為體驗流暢度的重要量化參考依據。</p>
</div>
</section>

<section class="blk">
<h2 class="a h2" style="top: 6585px">Exhibition Design</h2>
<img class="a" :src="image('exhibition', 17)" alt="Early exhibition space design" style="left: -7px; top: 6806px; width: 323px; height: 254px; object-fit: cover">
<div class="a s16 al" style="left: 359px; top: 6766px; width: 614px">
<p class="red s18">初期展場設計</p>
<p>&nbsp;</p>
<p>最初設想以開放式的空間設計為主，牆面獨立懸掛畫框，以純畫展的形式呈現作品。</p>
<p>中央懸掛透明紗布去豐富觀展體驗，並搭配擺放視覺主題立牌，作為主題補充說明。</p>
<p>此階段的設計偏向傳統畫展的展示，缺少更緊密的視覺與敘事連結。</p>
<p>因此團隊在後續討論中，重新檢視了初期構想中的限制：</p>
<p>&nbsp;</p>
<ul>
<li>色調：初期採深灰色調展牆，戲劇性強但和純粹、沉靜的自我探索主題有落差，因此改採統一全白基調降低視覺干擾。</li>
<li>氛圍：初期紗布僅作空間裝置；定案將畫作直接印製於長條透明布幔，將紗布從氛圍營造改為敘事載體，讓觀展者可穿梭其間如置身畫作之中，並搭配投影效果。</li>
<li>整合：初期畫框與說明立牌各自獨立陳列，團體改將畫作、手稿與文字整合於同一動線牆面，希望強調牆面即敘事的動線設計，也更加直觀。</li>
</ul>
</div>
<div class="a fig" style="left: -12px; top: 7136px; width: 352px; height: 288px"><div style="position: absolute; left: 12px; top: -7136px; width: 1100px">
<img class="a" :src="image('exhibition', 18)" alt="Final spatial structure plan" style="left: 6px; top: 7136px; width: 334px; height: 288px; object-fit: cover">
<p class="a c s16" style="left: -12px; top: 7363px; width: 55px">Left</p>
<p class="a c s16" style="left: 278px; top: 7392px; width: 55px">Right</p>
</div></div>
<div class="a s16 al" style="left: 359px; top: 7245px; width: 614px">
<p class="red s18">空間結構規劃最終定案</p>
<p>&nbsp;</p>
<p>展場整體尺寸以長 300 × 寬300 × 高244 cm，頂部天花板漆白，並搭配白色簾幕結構作為入口界定，頂部中央懸掛的投影機在密閉的空間使用以達到良好的效果，並標示插座位置以利平板、電腦等設備充電規劃。</p>
<p>&nbsp;</p>
<p>動線規劃：從左側進入，右側出來，投影機與櫃檯放置在中間</p>
<p>觀展流程：領取平板→進入展間→用平板掃描畫→自由活動→離開展間→歸還平板</p>
</div>
<img class="a" :src="image('exhibition', 19)" alt="Final exhibition design render" style="left: 2px; top: 7503px; width: 323px; height: 257px; object-fit: cover">
<div class="a s16 al" style="left: 359px; top: 7558px; width: 614px">
<p class="red s18">展場設計最終定案</p>
<p>&nbsp;</p>
<p>實體空間主要以全白設計，排除雜亂干擾，目標營造純粹質感的沉浸式觀展體驗。</p>
<p>畫框改採直立摺頁式透明布條，將畫作直接印製於長條布幔上，並與手稿、說明文字整合於同一動線，讓觀展者行走於空間之中，穿梭於一幅幅畫布之間。</p>
<p>&nbsp;</p>
<p>三面牆面結合畫作、美術手稿、星球小圖與文字（新詩、說明），頂部中央設置一台投影機，於密閉展間內投映光影變化與水波倒映效果，讓光影穿透並映照在透明布條與畫作之上，使整體展場氛圍隨光影流動而產生層次變化，把視覺與文本融入展場。</p>
</div>
</section>

<section class="blk">
<h2 class="a h2" style="top: 7913px">AR &amp; Motion Design</h2>
<img class="a" :src="image('exhibition', 20)" alt="After Effects motion design" style="left: -7px; top: 8069px; width: 600px; height: 270px; object-fit: cover">
<img class="a keep" :src="image('exhibition', 21)" alt="Procreate logo" style="left: 827px; top: 8195px; width: 56px; height: 55px; object-fit: cover">
<img class="a keep" :src="image('exhibition', 22)" alt="After Effects logo" style="left: 903px; top: 8195px; width: 56px; height: 55px; object-fit: cover">
<div class="a s16 al" style="left: 626px; top: 8223px; width: 347px">
<p class="red s18">動態效果製作</p>
<p>&nbsp;</p>
<p>原畫以及逐格動畫透過Procreate繪製完成後，使用After Effects進行動態製作，其中包含物件的移動、消散與融合的效果。</p>
</div>
<img class="a" :src="image('exhibition', 23)" alt="Born Spark AR program screenshot" style="left: 9px; top: 8468px; width: 567px; height: 309px; object-fit: cover">
<img class="a keep" :src="image('exhibition', 24)" alt="Spark AR logo" style="left: 769px; top: 8552px; width: 59px; height: 70px; object-fit: cover">
<img class="a keep" :src="image('exhibition', 25)" alt="Unity logo" style="left: 834px; top: 8561px; width: 62px; height: 61px; object-fit: cover">
<img class="a keep" :src="image('exhibition', 26)" alt="Vuforia logo" style="left: 907px; top: 8561px; width: 53px; height: 61px; object-fit: cover">
<div class="a s16 al" style="left: 620px; top: 8598px; width: 353px">
<p class="red s18">AR動態效果</p>
<p>&nbsp;</p>
<p>使用Unity搭配Vuforia套件製作用於平板的完整版體驗，同時還有使用Spark AR製作IG 濾鏡，可應用在周邊上，也可直接用手機觀賞簡短版的動畫。</p>
<p>&nbsp;</p>
<p>（Born Spark AR程式截圖）</p>
</div>
</section>

<section class="blk">
<h2 class="a h2" style="top: 8948px">Immersive Multisensory Experience</h2>
<img class="a" :src="image('exhibition', 28)" alt="Exhibition space with projection and banners" style="left: 572px; top: 9105px; width: 401px; height: 566px; object-fit: cover">
<div class="a s16" style="left: 18px; top: 9108px; width: 503px">
<p class="red s18">沉浸式五感體驗</p>
<div class="spacer" style="position: relative; height: 201.6px"><img :src="image('exhibition', 27)" alt="Hearing, feeling, sight and touch icons" style="position: absolute; left: 0; top: 34px; width: 503px; height: 118px; object-fit: cover"></div>
<p class="red">以五感沉浸作為核心策略，透過AR互動、投影光影與客製化產出，將抽象的心理狀態轉譯為可視、可聽、可觸的具體體驗。</p>
<p>&nbsp;</p>
<p>Sight：牆面陳列主題視覺圖與手稿，搭配投影機投映光影與水波倒映效果，光影穿透並映在透明布條與畫作上，使畫作隨光影流動產生變化。</p>
<p>&nbsp;</p>
<p>Hearing：平板掃描畫作時觸發專屬星球音效（Desire花朵消散聲、Reflection水流聲），與展場背景音樂相互搭配。</p>
<p>&nbsp;</p>
<p>Touch：觀展者手持平板掃描畫作，並依各畫作設計不同的操作手勢：點擊、長按、滑動並透過身體的實際互動觸發動態效果。</p>
<p>&nbsp;</p>
<p>Feeling：觀展後透過網頁進行心理測驗，觀展者的選擇生成客製化星球圖鑑，並可查看與自己產生共鳴的同星球居民人數，讓情感共鳴從個人體驗延伸為群體連結的心理感受。</p>
</div>
</section>

<section class="blk">
<h2 class="a h2" style="top: 9930px">Technology Overview</h2>
<div class="a s16" style="left: 33px; top: 10072px; width: 436px">
<p class="red s18">AR技術應用</p>
<p>&nbsp;</p>
<p>以Unity作為遊戲引擎，加上Vuforia Augmented Reality SDK進行影像辨識及擴增實境，應用於平板體驗。</p>
<p>&nbsp;</p>
<p>同時使用Spark AR（Meta擴增實境製作工具）製作Instagram濾鏡，發布至Facebook及Instagram平台，讓周邊商品也能透過手機直接掃描觀賞動畫。</p>
</div>
<div class="a fig" style="left: 73px; top: 10354px; width: 331px; height: 130px"><div style="position: absolute; left: -73px; top: -10354px; width: 1100px">
<img class="a" :src="image('exhibition', 30)" alt="Spark AR logo" style="left: 73px; top: 10354px; width: 83px; height: 98px; object-fit: cover">
<img class="a" :src="image('exhibition', 31)" alt="Unity logo" style="left: 201px; top: 10360px; width: 87px; height: 86px; object-fit: cover">
<img class="a" :src="image('exhibition', 32)" alt="Vuforia logo" style="left: 330px; top: 10360px; width: 74px; height: 86px; object-fit: cover">
<p class="a s18" style="left: 73px; top: 10459px">Spark AR</p>
<p class="a s18" style="left: 221px; top: 10459px">Unity</p>
<p class="a s18" style="left: 336px; top: 10459px">Vuforia</p>
</div></div>
<img class="a" :src="image('exhibition', 29)" alt="Unity AR scene thumbnails" style="left: 511px; top: 10089px; width: 461px; height: 110px; object-fit: cover">
<p class="a s16 al" style="left: 511px; top: 10206px">Unity AR Scene</p>
<img class="a" :src="image('exhibition', 33)" alt="Born Unity code" style="left: 511px; top: 10271px; width: 461px; height: 292px; object-fit: cover">
<p class="a s16 al" style="left: 511px; top: 10574px; width: 399px">Born Unity Code : 擊蛋殼 → 蛋殼破碎 → 鳥從中飛出</p>
<div class="a s16 al" style="left: 22px; top: 10700px; width: 490px">
<p class="red s18">網頁設計應用</p>
<p>&nbsp;</p>
<p>運用Ruby on Rails框架開發，並利用Render雲平台部署網站。</p>
<p>&nbsp;</p>
<p>透過網頁專屬星球圖片的測試，讓觀展者聯想到自身經歷，也加深對於畫作的印象，深 入思考其中的含義，並與之產生共鳴。也可查看主題內容和各個星球的深度意涵，以 及展場和團隊介紹等。</p>
</div>
<div class="a fig" style="left: 544px; top: 10743px; width: 400px; height: 100px"><div style="position: absolute; left: -544px; top: -10743px; width: 1100px">
<img class="a" :src="image('exhibition', 34)" alt="Render logo" style="left: 544px; top: 10743px; width: 195px; height: 74px; object-fit: cover">
<img class="a" :src="image('exhibition', 35)" alt="Ruby on Rails logo" style="left: 780px; top: 10743px; width: 164px; height: 62px; object-fit: cover">
<p class="a s18" style="left: 580px; top: 10817px">Render 雲平台</p>
<p class="a s18" style="left: 800px; top: 10817px">Ruby on Rails</p>
</div></div>
<p class="a s16 al" style="left: 419px; top: 10963px">網頁架構圖</p>
<img class="a" :src="image('exhibition', 36)" alt="Website architecture diagram" style="left: 76px; top: 10995px; width: 813px; height: 340px; object-fit: cover">
<div class="a c s16 al" style="left: 152px; top: 11446px; width: 685px">
<p>網頁功能為六題性格測驗，回答結束後生成專屬星球圖片，使用者可保存圖片、查看元素含義，並能觀看每顆星球的居民人數統計，讓使用者感受到與自己產生共鳴的同類並不孤單。</p>
<p>&nbsp;</p>
<p>網頁另涵蓋主題概念詳細介紹、團隊介紹、展場製作過程分享。</p>
</div>
<img class="a" :src="image('exhibition', 37)" alt="Website screens" style="left: 170px; top: 11565px; width: 648px; height: 381px; object-fit: cover">
<p class="a c s18 red" style="left: 198px; top: 12101px; width: 569px">How might we give observers something that is truly their own to<br>take away, without forcing them to promote the exhibition?</p>
<div class="a s16" style="left: -7px; top: 12282px; width: 412px">
<p class="red s18">專屬星球圖片：個人化的觀展紀念</p>
<p>&nbsp;</p>
<p>Function:</p>
<p>觀展結束後，參觀者進行六題測驗，網站將生成專屬星球圖片。圖片可保存留念，也可查看圖鑑中各元素含義，探索自己的性格與觀念。其中透過詢問最有共鳴的星球，選擇後即歸屬為該星球「居民」，也可查看各星球居民人數。</p>
<p>&nbsp;</p>
<p>Insight:</p>
<p>在人人追求獨特性的時代，觀展者更渴望擁有一份專屬於自己的體驗成果。這也呼應了展覽本身探討自我覺察與個人成長的核心主題，我們希望觀展者離開展場後，能帶走一些真正屬於自己的東西。</p>
<p>&nbsp;</p>
<p>Strategy:</p>
<p>不希望以強迫打卡的方式要求觀眾宣傳展覽，因此設計讓每一張星球圖片都兼具美感與個人代表性。希望讓觀展者自然願意主動分享至社群媒體。行銷擴散因此成為體驗設計的自然結果，而非額外施加的任務。</p>
</div>
<img class="a" :src="image('exhibition', 38)" alt="Personalised planet picture screens" style="left: 428px; top: 12373px; width: 545px; height: 332px; object-fit: cover">
</section>
  </div>
</template>
