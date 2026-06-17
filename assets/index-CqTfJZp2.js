(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();const q=[{date:"No 01",title:"初一运动会",note:"",photos:[{src:"./assets/images/timeline/1.初一运动会.jpg",caption:"初一运动会",alt:"初一运动会 照片"}]},{date:"No 02",title:"三星堆研学",note:"",photos:[{src:"./assets/images/timeline/2.三星堆研学.png",caption:"三星堆研学",alt:"三星堆研学 照片"}]},{date:"No 03",title:"初一合唱",note:"日出又日落~",photos:[{src:"./assets/images/timeline/3.初一合唱.jpg",caption:"初一合唱",alt:"初一合唱 照片"}]},{date:"No 04",title:"初一篮球赛",note:"666，第一轮抽到冠军了",photos:[{src:"./assets/images/timeline/4.初一篮球赛.jpg",caption:"初一篮球赛",alt:"初一篮球赛 照片"}]},{date:"No 05",title:"初一游园会",note:"",photos:[{src:"./assets/images/timeline/5.初一游园会.png",caption:"初一游园会",alt:"初一游园会 照片"}]},{date:"No 06",title:"旭阳生日",note:"",photos:[{src:"./assets/images/timeline/6.旭阳生日.jpg",caption:"旭阳生日",alt:"旭阳生日 照片"}]},{date:"No 07",title:"初二运动会",note:"消失在弯道处",photos:[{src:"./assets/images/timeline/7.初二运动会.jpg",caption:"初二运动会",alt:"初二运动会 照片"}]},{date:"No 08",title:"初二合唱",note:"我是如此相信~",photos:[{src:"./assets/images/timeline/8.初二合唱.jpg",caption:"初二合唱",alt:"初二合唱 照片"}]},{date:"No 09",title:"初二研学",note:"初一初二研学的大合照我实在是找不到了QAQ",photos:[{src:"./assets/images/timeline/9.初二研学 (2).jpg",caption:"初二研学",alt:"初二研学 照片"},{src:"./assets/images/timeline/9.初二研学.jpg",caption:"初二研学",alt:"初二研学 照片"}]},{date:"No 10",title:"初三运动会",note:"我们初三的时候好像没拍大合照",photos:[{src:"./assets/images/timeline/10.初三运动会 (2).jpg",caption:"初三运动会",alt:"初三运动会 照片"},{src:"./assets/images/timeline/10.初三运动会 (3).jpg",caption:"初三运动会",alt:"初三运动会 照片"},{src:"./assets/images/timeline/10.初三运动会.jpg",caption:"初三运动会",alt:"初三运动会 照片"}]},{date:"No 11",title:"流感幸存者",note:"坚挺",photos:[{src:"./assets/images/timeline/11.流感幸存者.png",caption:"流感幸存者",alt:"流感幸存者 照片"}]},{date:"No 12",title:"初三合唱",note:"找不到大合照了WAW",photos:[{src:"./assets/images/timeline/12.初三合唱.jpg",caption:"初三合唱",alt:"初三合唱 照片"}]},{date:"No 13",title:"三班黑涩会",note:"你是真没见过黑涩会啊",photos:[{src:"./assets/images/timeline/13.三班黑涩会.jpg",caption:"三班黑涩会",alt:"三班黑涩会 照片"}]},{date:"No 14",title:"毕业壮行路",note:"同学我们没有下学期了，毕业快乐，加油",photos:[{src:"./assets/images/timeline/14.毕业壮行路.jpg",caption:"毕业壮行路",alt:"毕业壮行路 照片"}]}],L=[{photo:"./assets/images/interviews/Mr. Wayne.jpg",content:"（牢Wayne QAQ）",author:"Mr. Wayne"},{photo:"./assets/images/interviews/吴枢炜.jpg",content:"逃过课，厕所吃过饭，扣皮子，挂马子...还是很开心的",author:"吴枢炜"},{photo:"./assets/images/interviews/吴韩（吴桑）.jpg",content:"人活着就是为了樱岛麻衣",author:"吴韩（吴桑）"},{photo:"./assets/images/interviews/周峻宇（峻峻）.JPG",content:"这个是无敌战神啊，六指操作",author:"周峻宇（峻峻）"},{photo:"./assets/images/interviews/周显二.jpg",content:"没给ZWC表白啊",author:"周显二"},{photo:"./assets/images/interviews/孙灏洋（孙笑川258）.JPG",content:"我是你们的爷爷",author:"孙灏洋（孙笑川258）"},{photo:"./assets/images/interviews/张涵雨.jpg",content:"感觉白活了三年",author:"张涵雨"},{photo:"./assets/images/interviews/徐梓桐（老徐）.jpg",content:"我是你们的爸爸",author:"徐梓桐（老徐）"},{photo:"./assets/images/interviews/晓昱.jpg",content:"湖人总冠军",author:"晓昱"},{photo:"./assets/images/interviews/李云铮（铮铮）.jpg",content:"我要拿下小猫娘",author:"李云铮（铮铮）"},{photo:"./assets/images/interviews/李娅萱.jpg",content:"这三年啊？过得好快啊",author:"李娅萱"},{photo:"./assets/images/interviews/杨子怡.JPG",content:"（小小的老子脾气爆）",author:"杨子怡"},{photo:"./assets/images/interviews/祝之皓（叫叫）.png",content:"我是台下的爸爸",author:"祝之皓（叫叫）"},{photo:"./assets/images/interviews/老但班长.JPG",content:"我是树德实验最屌的",author:"老但班长"},{photo:"./assets/images/interviews/老廖（浩然同学）.jpg",content:"轩轩牛逼",author:"老廖（浩然同学）"},{photo:"./assets/images/interviews/谢鸣轩（轩轩）.jpg",content:"树德实验拉瓦锡",author:"谢鸣轩（轩轩）"},{photo:"./assets/images/interviews/赵記霆.jpg",content:"资本主义是狗",author:"赵記霆"},{photo:"./assets/images/interviews/陈俊铭.JPG",content:"我要考七中林荫，少考一分吃一坨",author:"陈俊铭"},{photo:"./assets/images/interviews/马老师及其爱徒们.JPG",content:"薛薛，可可，小马马",author:"马老师及其爱徒们"},{photo:"./assets/images/interviews/龙老师.jpg",content:"（这是真恩师）",author:"龙老师"}],S=[{name:"叫叫",photo:"./assets/images/people/叫叫.png",role:"三班人物志",bio:"关于叫叫的高光时刻，留在这一本纪念册里",achievement:"化学课代表/我要打上海Major",quote:"",tags:["三班","高光","青春"]},{name:"小姨夫",photo:"./assets/images/people/小姨夫.jpg",role:"三班人物志",bio:"关于小姨夫的高光时刻，留在这一本纪念册里",achievement:"打碎过篮板的男人（没有小姨夫的采访QAQ）",quote:"",tags:["三班","高光","青春"]},{name:"晓昱",photo:"./assets/images/people/晓昱.jpg",role:"三班人物志",bio:"关于晓昱的高光时刻，留在这一本纪念册里",achievement:"传奇数学课代表",quote:"",tags:["三班","高光","青春"]},{name:"杨子怡",photo:"./assets/images/people/杨子怡.jpg",role:"三班人物志",bio:"关于杨子怡的高光时刻，留在这一本纪念册里",achievement:"英语课代表",quote:"",tags:["三班","高光","青春"]},{name:"笑然",photo:"./assets/images/people/笑然.jpg",role:"三班人物志",bio:"关于笑然的高光时刻，留在这一本纪念册里",achievement:"足球小将/天才摄影师/班长",quote:"",tags:["三班","高光","青春"]},{name:"老但",photo:"./assets/images/people/老但.jpg",role:"三班人物志",bio:"关于老但的高光时刻，留在这一本纪念册里",achievement:"人民的班长",quote:"",tags:["三班","高光","青春"]},{name:"老廖",photo:"./assets/images/people/老廖.jpg",role:"三班人物志",bio:"关于老廖的高光时刻，留在这一本纪念册里",achievement:"800米第一个弯道全校第一/名誉数学课代表",quote:"",tags:["三班","高光","青春"]},{name:"轩轩",photo:"./assets/images/people/轩轩.jpg",role:"三班人物志",bio:"关于轩轩的高光时刻，留在这一本纪念册里",achievement:"树德实验拉瓦锡/伽利略/舍勒",quote:"",tags:["三班","高光","青春"]},{name:"陈俊铭",photo:"./assets/images/people/陈俊铭.jpg",role:"三班人物志",bio:"关于陈俊铭的高光时刻，留在这一本纪念册里",achievement:"传奇电报员",quote:"",tags:["三班","高光","青春"]}],y={title:"轩轩有一些话想说",paragraphs:["毕业这件事，发生得比所有人预料的都要平淡。","三年时间，总让人产生一种错觉，觉得日子长得看不到头，觉得一切都还可以慢慢来。等弄懂一道题，等认清一个人，等某一天自己突然脱胎换骨。但时间是不讲道理的，它从不管你有没有准备好，有没有留下遗憾。期限一到，它就把所有人推向出口。","人们总以为，散场的时候会有很多话要说，会有几场轰轰烈烈的告别。其实没有。黑板上的倒计时被擦干净后，三年就成了一个空壳。那些没解开的误会，没敢说出口的话，还有那些发誓要永远记住的承诺，最后都没有带走。它们全都被留在了空荡荡的教室里，随着粉笔灰一起落到了地上。","青春的散场不需要什么仪式。门一关，锁一落，一群人就这样散了。后来大概才会明白，所谓毕业，不过就是时间往前走了一步，把原本聚在一起的人，默不作声地分开了。什么都没改变，只是明天不用再见了。"]},k=document.querySelector("#app"),h={musicReady:!1,musicPlaying:!1};function s(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function A(e){const o=`
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#d9f6f1"/>
          <stop offset="46%" stop-color="#fff3fa"/>
          <stop offset="100%" stop-color="#eadfff"/>
        </linearGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#8fd4cb"/>
          <stop offset="100%" stop-color="#c4a7df"/>
        </linearGradient>
      </defs>
      <rect width="900" height="1200" rx="44" fill="url(#bg)"/>
      <rect x="84" y="92" width="732" height="1016" rx="36" fill="none" stroke="#ffffff" stroke-width="8" opacity=".72"/>
      <path d="M180 710 C305 610 430 795 590 690 C650 650 690 635 740 640" fill="none" stroke="url(#line)" stroke-width="14" stroke-linecap="round" opacity=".72"/>
      <text x="450" y="555" text-anchor="middle" font-family="Arial, Microsoft YaHei, sans-serif" font-size="46" fill="#61706e">${s(e).slice(0,12)}</text>
      <text x="450" y="628" text-anchor="middle" font-family="Arial, Microsoft YaHei, sans-serif" font-size="28" fill="#8b7f99">替换为你的照片</text>
    </svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(o)}`}function C(e,t){return typeof e=="string"?{src:e,caption:"",alt:t}:{src:e.src,caption:e.caption||"",alt:e.alt||e.caption||t}}function v(e,t,o=""){return`
    <button class="photo ${o}" type="button" data-preview="${s(e)}" aria-label="放大图片：${s(t)}">
      <img src="${s(e)}" alt="${s(t)}" data-fallback-alt="${s(t)}" loading="lazy" />
    </button>
  `}function l(e,t,o=""){return`
    <div class="section-heading reveal">
      <span>${s(e)}</span>
      <h2>${s(t)}</h2>
      ${o?`<p>${s(o)}</p>`:""}
    </div>
  `}function p(e){return`
    <div class="section-bridge reveal" aria-hidden="true">
      <span>${s(e)}</span>
    </div>
  `}function N(e){return e.map((t,o)=>{const c=t.photos||[];return`
      <article class="timeline-item reveal">
        <div class="timeline-line" aria-hidden="true"></div>
        <div class="timeline-dot">${String(o+1).padStart(2,"0")}</div>
        <div class="timeline-card">
          <div class="photo-grid photo-count-${Math.min(c.length,4)}">
            ${c.map((a,i)=>{const n=C(a,`${t.title} 照片 ${i+1}`);return`
                <figure class="memory-photo ${i===0?"memory-photo-large":""}">
                  ${v(n.src,n.alt,i===0?"photo-large":"")}
                  ${n.caption?`<figcaption>${s(n.caption)}</figcaption>`:""}
                </figure>
              `}).join("")}
          </div>
          <div class="caption">
            <strong>${s(t.date||`No ${String(o+1).padStart(2,"0")}`)}</strong>
            <span>${s(t.title||"三班回忆")}</span>
          </div>
          ${t.note?`<p>${s(t.note)}</p>`:""}
        </div>
      </article>
    `}).join("")}function M(){return L.map((e,t)=>`
    <article class="interview-card reveal">
      <div class="interview-photo">
        ${v(e.photo,`${e.author} 采访照片`,"")}
      </div>
      <div class="quote-mark" aria-hidden="true">“</div>
      <p>${s(e.content)}</p>
      <footer>
        <span>Interview ${String(t+1).padStart(2,"0")}</span>
        <strong>${s(e.author)}</strong>
      </footer>
    </article>
  `).join("")}function T(){return S.map((e,t)=>`
    <article class="person-card reveal">
      <div class="spotlight-number">${String(t+1).padStart(2,"0")}</div>
      ${v(e.photo,`${e.name} 个人照片`,"portrait")}
      <div class="person-content">
        <div class="person-title">
          <h3>${s(e.name)}</h3>
          <span>${s(e.role)}</span>
        </div>
        <p>${s(e.bio)}</p>
        ${e.quote?`<blockquote>${s(e.quote)}</blockquote>`:""}
        <div class="achievement">${s(e.achievement)}</div>
        <div class="tags">
          ${(e.tags||[]).map(o=>`<span>${s(o)}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("")}function P(){return y.paragraphs.map(e=>`<p>${s(e)}</p>`).join("")}k.innerHTML=`
  <audio id="bgMusic" preload="auto" loop playsinline webkit-playsinline src="./assets/audio/起风了.mp4"></audio>

  <main class="page-shell">
    <button class="music-button" id="musicButton" type="button" aria-label="播放或暂停背景音乐">
      <span class="music-icon">♪</span>
      <span class="music-text">播放</span>
    </button>

    <section class="hero section-block">
      <div class="book-cover reveal">
        <p class="eyebrow">Class Three · 2026</p>
        <h1>2023年8月29日，梦的开始</h1>
        <p>Welcome to ShuDe Experimental Middle School</p>
        <div class="cover-stamp">毕业纪念册</div>
      </div>
      <div class="scroll-hint" aria-hidden="true">向下翻阅</div>
    </section>

    ${p("Chapter 01")}
    <section class="section-block timeline-section">
      ${l("Chapter 01","梦的开始","像翻开相册一样，把最初的相遇、热闹的活动、并肩走过的日子放进时间里")}
      <div class="timeline">
        ${N(q)}
      </div>
      <div class="last-class reveal">2026年6月12日，最后一课结束</div>
    </section>

    ${p("Chapter 02")}
    <section class="section-block interview-section">
      ${l("Chapter 02","年少时曾虔诚发过的誓","采访摘录像一面留言墙，把毕业前想留住的声音一条条贴好")}
      <div class="interview-list">
        ${M()}
      </div>
    </section>

    ${p("Chapter 03")}
    <section class="section-block people-section">
      ${l("Chapter 03","风流人物还看今朝","给每一个闪闪发光的人，留一束专属的追光")}
      <div class="people-list">
        ${T()}
      </div>
    </section>

    ${p("Chapter 04")}
    <section class="section-block article-section">
      ${l("Chapter 04","闲笔","轩轩有一些话想说")}
      <article class="article-card reveal">
        <span class="article-label">Xuanxuan</span>
        <h3>${s(y.title)}</h3>
        ${P()}
      </article>
    </section>

    <section class="ending section-block">
      <div class="ending-card reveal">
        <span>Class Three · 2026</span>
        <p>毕业快乐</p>
        <h2>2026届三班永远与你们同在</h2>
      </div>
    </section>
  </main>

  <div class="tap-layer" id="tapLayer">
    <div>
      <strong>轻触开启纪念册</strong>
      <span id="tapLayerText">音乐会在点击后尝试播放</span>
    </div>
  </div>

  <div class="lightbox" id="lightbox" aria-hidden="true">
    <button type="button" aria-label="关闭图片预览">×</button>
    <img src="" alt="放大的纪念照片" />
  </div>

  <div class="toast" id="toast" role="status" aria-live="polite"></div>
`;const f=document.querySelector("#bgMusic"),d=document.querySelector("#musicButton"),E=document.querySelector(".music-text"),b=document.querySelector("#tapLayer"),B=document.querySelector("#tapLayerText"),r=document.querySelector("#lightbox"),$=r.querySelector("img"),u=document.querySelector("#toast");function g(e){u.textContent=e,u.classList.add("is-visible"),window.clearTimeout(g.timer),g.timer=window.setTimeout(()=>{u.classList.remove("is-visible")},2600)}function m(e){h.musicPlaying=e,d.classList.toggle("is-playing",e),d.classList.toggle("has-warning",!1),E.textContent=e?"播放中":"播放"}async function w(){try{await f.play(),h.musicReady=!0,m(!0)}catch{m(!1),d.classList.add("has-warning"),B.textContent="微信里需要先轻触页面，再点音乐按钮",g("音乐暂时没有播放，请轻触页面后再试一次")}}function G(){f.pause(),m(!1)}function j(){b.classList.add("is-hidden"),h.musicReady||w()}function O(e=document){e.querySelectorAll("img[data-fallback-alt]").forEach(t=>{t.dataset.fallbackBound||(t.dataset.fallbackBound="true",t.addEventListener("error",()=>{t.src=A(t.dataset.fallbackAlt||"纪念照片")},{once:!0}))})}function W(e=document){e.querySelectorAll(".reveal").forEach(t=>{t.dataset.revealBound||(t.dataset.revealBound="true",x.observe(t))})}d.addEventListener("click",e=>{e.stopPropagation(),f.paused?w():G()});b.addEventListener("click",j);document.addEventListener("click",()=>{b.classList.contains("is-hidden")||j()},{once:!0});document.addEventListener("click",e=>{const t=e.target.closest("[data-preview]");t&&(e.stopPropagation(),$.src=t.querySelector("img").src,r.classList.add("is-open"),r.setAttribute("aria-hidden","false"))});r.addEventListener("click",()=>{r.classList.remove("is-open"),r.setAttribute("aria-hidden","true"),$.src=""});const x=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),x.unobserve(t.target))})},{threshold:.18,rootMargin:"0px 0px -40px"});O();W();
