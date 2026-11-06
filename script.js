    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 800px)').matches;

    const roles = [
      { name:'What If Stories', thai:'บทที่ 1 · ตั้งคำถามให้คนหยุดดู', person:'คลิป What If', initials:'?', accent:'#7b65d7', avatar:'linear-gradient(135deg,#fe9d98,#815ac4)', projects:'10', rating:'12', reviews:'3', price:'12 นาที', service:'เปลี่ยนคำถาม What If เป็นเรื่องสั้น', works:['#434362','#d8a170','#c97d9c'] },
      { name:'Zombie Apocalypse', thai:'บทที่ 2 · เล่าโลกหลังหายนะ', person:'คลิป Zombie Apocalypse', initials:'Z', accent:'#d26882', avatar:'linear-gradient(135deg,#ffccb6,#d06a80)', projects:'10', rating:'9', reviews:'4', price:'18 นาที', service:'วางฉากเอาตัวรอดและจุดพลิกเรื่อง', works:['#dd9170','#4e4155','#e7c5a5'] },
      { name:'Flat 2D Characters', thai:'บทที่ 3 · ออกแบบตัวละคร', person:'Flat 2D Character', initials:'2D', accent:'#4d9b94', avatar:'linear-gradient(135deg,#8edbd1,#4b7f9c)', projects:'6', rating:'8', reviews:'5', price:'15 นาที', service:'คุมหน้าตาตัวละครให้เหมือนเดิมทุกฉาก', works:['#284758','#f1a36f','#8f79cf'] },
      { name:'Prompt for Images', thai:'บทที่ 4 · เขียน Prompt สร้างภาพ', person:'Prompt Image Lab', initials:'✦', accent:'#dd8c4f', avatar:'linear-gradient(135deg,#ffc77a,#d85d75)', projects:'18', rating:'14', reviews:'6', price:'20 นาที', service:'เขียน Prompt ภาพแนวตั้ง 9:16 ใช้งานได้จริง', works:['#ed8a7a','#f3ca61','#755eb7'] },
      { name:'Thai Voice & Motion', thai:'บทที่ 5 · เสียงพากย์และ Animation', person:'Voice & Motion Lab', initials:'◉', accent:'#5885d4', avatar:'linear-gradient(135deg,#91c6ff,#5c5cbd)', projects:'8', rating:'11', reviews:'7', price:'16 นาที', service:'ทำเสียงพากย์ไทยและขยับภาพให้มีชีวิต', works:['#263d66','#5fa7cd','#7f73d9'] },
      { name:'Export Vertical MP4', thai:'บทที่ 6 · พร้อมโพสต์จริง', person:'Final Video Export', initials:'▶', accent:'#55a476', avatar:'linear-gradient(135deg,#9fe2ae,#4f8da2)', projects:'1', rating:'10', reviews:'8', price:'10 นาที', service:'ประกอบทุกอย่างและ Export 1080 × 1920', works:['#264e58','#c2a26b','#cf7083'] }
    ];

    const roleList = document.querySelector('#roleList');
    const profileCard = document.querySelector('#profileCard');
    const skeleton = document.querySelector('#profileSkeleton');
    let activeRole = -1;

    function roleTemplate(role) {
      return `<div class="profile-top"><div class="profile-avatar" style="background:${role.avatar}">${role.initials}</div><div><div class="profile-name">${role.person}</div><div class="profile-role">${role.thai} · เรียนตามได้ทันที</div></div><button class="profile-follow">เริ่มเรียน</button></div><div class="profile-stats"><div class="profile-stat"><b>${role.projects}</b><span>ตัวอย่าง</span></div><div class="profile-stat"><b>${role.rating}</b><span>ขั้นตอน</span></div><div class="profile-stat"><b>${role.reviews}</b><span>Prompt</span></div><div class="profile-stat"><b>9:16</b><span>สัดส่วน</span></div></div><div class="profile-tabs"><b>ตัวอย่าง</b><span>ขั้นตอน</span><span>Checklist</span></div><div class="work-grid"><div class="work" style="--work-a:linear-gradient(145deg,${role.works[0]},${role.works[1]})"></div><div class="work" style="--work-a:linear-gradient(145deg,${role.works[1]},${role.works[2]})"></div><div class="work" style="--work-a:linear-gradient(145deg,${role.works[2]},${role.works[0]})"></div></div><div class="profile-service"><div class="service-dot" style="--accent-card:${role.accent}"></div><div class="service-copy"><b>${role.service}</b><span>ทำตามทีละขั้น ไม่ต้องเดาเอง</span></div><div class="service-price">${role.price}</div></div>`;
    }

    roles.forEach((role, index) => {
      const button = document.createElement('button');
      button.className = 'role-item';
      button.textContent = role.name;
      button.addEventListener('click', () => setRole(index, false));
      roleList.appendChild(button);
    });

    function setRole(index, animate = true) {
      if (index === activeRole) return;
      activeRole = index;
      const role = roles[index];
      [...document.querySelectorAll('.role-item')].forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === index));
      if (!animate || reduceMotion || !window.gsap) { profileCard.innerHTML = roleTemplate(role); return; }
      gsap.killTweensOf([profileCard, skeleton]);
      gsap.timeline().to(profileCard, { opacity: 0, y: 16, scale: .985, duration: .16, ease: 'power2.in' }).to(skeleton, { opacity: 1, duration: .1 }, '<').call(() => { profileCard.innerHTML = roleTemplate(role); }).to(skeleton, { opacity: 0, duration: .14, delay: .04 }).to(profileCard, { opacity: 1, y: 0, scale: 1, duration: .42, ease: 'power3.out' }, '<');
    }

    setRole(0, false);

    const features = [
      { count:'01 / 04', title:'<span class="gradient-word">คิดไอเดีย เขียน Story</span><br>แบ่งเป็น 10 ฉาก', body:'เริ่มจากคำถาม What If แล้วแปลงเป็นเรื่องสั้นที่มีต้นเรื่อง จุดพลิก และตอนจบในเวลาไม่กี่นาที', type:'story' },
      { count:'02 / 04', title:'<span class="gradient-word">สร้างภาพ AI คุม</span><br>ตัวละครให้เหมือนเดิม', body:'ใช้ Prompt ที่มีโครงสร้างชัดเจน เพื่อให้ทุกฉากอยู่ในสไตล์เดียวกันและต่อเรื่องได้ลื่นไหล', type:'prompt' },
      { count:'03 / 04', title:'<span class="gradient-word">ทำเสียงพากย์ และ</span><br>Animation ให้มีชีวิต', body:'เตรียมสคริปต์ภาษาไทย สร้างเสียง แล้วใส่การเคลื่อนไหวที่พอดีกับจังหวะการเล่าเรื่อง', type:'motion' },
      { count:'04 / 04', title:'<span class="gradient-word">รวมทุกอย่างเป็น</span><br>MP4 พร้อมโพสต์', body:'ประกอบภาพ เสียง และซับไตเติล ตรวจคุณภาพ แล้ว Export 1080 × 1920 สำหรับ Shorts', type:'export' }
    ];
    const featureCopy = document.querySelector('#featureCopy');
    const featureCanvas = document.querySelector('#featureCanvas');
    const featureMobile = document.querySelector('#featureMobile');
    let activeFeature = -1;

    function featureUi(type) {
      if (type === 'story') return `<div class="feature-ui review-card"><div class="review-top"><i class="review-avatar"></i><div><b>WHAT IF: โลกหยุดหมุน 10 นาที</b><span>Story Outline · 45 วินาที</span></div><strong class="stars">01/10</strong></div><p>“เปิดด้วยคำถาม → ให้เหตุการณ์พลิก → จบด้วยประโยคที่ชวนคิด”</p><div class="mini-works"><i></i><i></i><i></i></div></div>`;
      if (type === 'prompt') return `<div class="feature-ui search-ui"><div class="search-field">✦ <b>Flat 2D Thai explorer, vertical 9:16</b><span class="typing">|</span></div><div class="search-results"><div class="search-result"><i></i><span></span></div><div class="search-result"><i></i><span></span></div><div class="search-result"><i></i><span></span></div></div></div>`;
      if (type === 'motion') return `<div class="feature-ui global-ui"><div class="shield">◉</div><div class="world-people"><i class="world-person"></i><i class="world-line"></i><i class="world-person"></i></div><div class="flags">♪  ◌  ▬  ▬  ▬  ✦</div></div>`;
      return `<div class="feature-ui orders-ui"><div class="order-head"><span>Final Timeline</span><span>00:43</span></div><div class="order"><div>ภาพ 10 ฉาก<br><small>พร้อม Animation</small></div><span class="badge">พร้อม</span></div><div class="order"><div>เสียงพากย์ภาษาไทย<br><small>ซิงก์กับภาพแล้ว</small></div><span class="badge">พร้อม</span></div><div class="invoice">MP4 <small>1080 × 1920</small></div></div>`;
    }
    function renderFeature(index, animate = true) {
      if (index === activeFeature) return;
      activeFeature = index;
      const feature = features[index];
      const dots = features.map((_,i)=>`<i class="${i===index?'active':''}"></i>`).join('');
      const copy = `<div class="feature-count">${feature.count}</div><h2>${feature.title}</h2><p>${feature.body}</p><div class="feature-dots">${dots}</div>`;
      if (!animate || reduceMotion || !window.gsap) { featureCopy.innerHTML = copy; featureCanvas.innerHTML = featureUi(feature.type); return; }
      gsap.killTweensOf([featureCopy, featureCanvas]);
      gsap.timeline().to([featureCopy,featureCanvas],{opacity:0,y:17,scale:.98,duration:.18,ease:'power2.in'}).call(()=>{featureCopy.innerHTML=copy;featureCanvas.innerHTML=featureUi(feature.type)}).to([featureCopy,featureCanvas],{opacity:1,y:0,scale:1,duration:.5,ease:'power3.out',stagger:.06});
    }
    renderFeature(0, false);
    featureMobile.innerHTML = features.map(feature=>`<article class="mobile-feature"><h3>${feature.title}</h3><p>${feature.body}</p><div class="feature-canvas">${featureUi(feature.type)}</div></article>`).join('');

    function setupCountdown() {
      const target = Date.now() + (9 * 86400 + 15 * 3600 + 5 * 60 + 31) * 1000;
      const ids = ['countDays','countHours','countMins','countSecs'];
      const pad = value => String(Math.max(0, value)).padStart(2, '0');
      function tick() { let seconds = Math.max(0, Math.floor((target - Date.now()) / 1000)); const values=[Math.floor(seconds/86400),Math.floor(seconds%86400/3600),Math.floor(seconds%3600/60),seconds%60]; values.forEach((value,index)=>document.getElementById(ids[index]).textContent=pad(value)); }
      tick(); setInterval(tick, 1000);
    }
    setupCountdown();

    if (window.gsap && window.ScrollTrigger && !reduceMotion) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set('#heroContent > :not(.hero-profile)', { autoAlpha: .3, filter: 'blur(20px)', y: 18 });
      gsap.set('#heroProfile', { autoAlpha: 0, y: 150, rotate: 2 });
      gsap.set('.floating-work', { autoAlpha: 0, scale: .72, xPercent: 0, yPercent: 0 });
      gsap.timeline({ defaults:{ease:'power3.out'} }).to('#heroContent > :not(.hero-profile)', { autoAlpha: 1, filter:'blur(0px)', y:0, duration:1.05, stagger:.09, delay:.18 }).to('#heroProfile',{autoAlpha:1,y:0,rotate:0,duration:.9}, '-=.55').to('.floating-work',{autoAlpha:1,scale:1,duration:.7,stagger:.08,ease:'back.out(1.25)'}, '-=.72');

      if (!mobile) {
        ScrollTrigger.create({ trigger:'#roles', start:'top top', end:'bottom bottom', onUpdate:self=>setRole(Math.min(roles.length-1, Math.floor(self.progress * roles.length)), true) });
        ScrollTrigger.create({ trigger:'#features', start:'top top', end:'bottom bottom', onUpdate:self=>renderFeature(Math.min(features.length-1, Math.floor(self.progress * features.length)), true) });
      }
      const nav = document.querySelector('#navbar');
      ScrollTrigger.create({ trigger:'#pain', start:'top 68%', onEnter:()=>nav.classList.add('is-dark'), onLeaveBack:()=>nav.classList.remove('is-dark') });
      ScrollTrigger.create({ trigger:'#final', start:'top 68%', onEnter:()=>nav.classList.add('is-dark'), onLeaveBack:()=>nav.classList.add('is-dark') });

      const notes = gsap.utils.toArray('.pain-note');
      gsap.set(notes,{autoAlpha:0,scale:.72,y:34});
      gsap.timeline({scrollTrigger:{trigger:'#pain',start:'top 62%',end:'center center',scrub:1}}).to(notes,{autoAlpha:1,scale:1,y:0,stagger:.14,ease:'back.out(1.45)'});

      const valueCard = document.querySelector('#valueCard');
      const underline = document.querySelector('#underLine');
      gsap.timeline({scrollTrigger:{trigger:'#value',start:'top bottom',end:'bottom bottom',scrub:1}}).to(valueCard,{y:0,scale:1,ease:'power3.out'},0).to(underline,{strokeDashoffset:0,duration:.4,ease:'power2.out'},.45);
      ScrollTrigger.create({trigger:'#value',start:'top bottom',end:'bottom bottom',scrub:true,onUpdate:self=>document.querySelector('#commission').textContent=`${Math.round(100*self.progress)}%`});
    } else {
      document.querySelector('#navbar').classList.remove('is-dark');
      document.querySelectorAll('.pain-note').forEach(note=>{note.style.opacity=1;note.style.visibility='visible'});
      document.querySelector('#valueCard').style.transform='none';
      document.querySelector('#underLine').style.strokeDashoffset=0;
    }
