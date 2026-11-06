    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 800px)').matches;

    const roles = [
      { name:'01 · คิดไอเดีย What If', thai:'เริ่มจากคำถามที่คนอยากรู้คำตอบ', person:'ตั้งต้นไอเดียคลิป', initials:'01', accent:'#7b65d7', avatar:'linear-gradient(135deg,#fe9d98,#815ac4)', projects:'1', rating:'3', reviews:'What If', price:'10 นาที', service:'ของคุ้นเคย + ความผิดปกติ + ผลลัพธ์', works:['#434362','#d8a170','#c97d9c'], teach:'เลือกสิ่งที่คนคุ้นเคย แล้วถามว่า “ถ้ามันอยู่ผิดที่ผิดทางจะเกิดอะไรขึ้น?”', prompt:'ช่วยคิดไอเดีย What If จาก “ตลาดนัดไทย” 5 ไอเดีย แต่ละไอเดียต้องมีปัญหา ตัวละคร และจุดจบใน 1 ประโยค', output:'ได้ไอเดีย 1 ประโยคที่เห็นภาพทันที' },
      { name:'02 · เขียน Story 10 ฉาก', thai:'เปลี่ยนไอเดียให้เป็นเรื่องที่เล่าจบ', person:'วางโครงเรื่อง', initials:'02', accent:'#d26882', avatar:'linear-gradient(135deg,#ffccb6,#d06a80)', projects:'10', rating:'45 วิ', reviews:'Story', price:'15 นาที', service:'Hook → ปัญหา → จุดพลิก → CTA', works:['#dd9170','#4e4155','#e7c5a5'], teach:'แบ่งเรื่องเป็น 10 ฉาก ฉากละ 3–6 วินาที และกำหนดบทพูดให้พอดีกับเวลา', prompt:'เปลี่ยนไอเดีย “ตลาดนัดอยู่บนอวกาศ” เป็นสคริปต์ไทย 45 วินาที แบ่ง 10 ฉาก ระบุภาพ บทพูด และเสียงเอฟเฟกต์', output:'ได้ Script และ Shot list พร้อมสร้างภาพ' },
      { name:'03 · ออกแบบ Flat 2D', thai:'ทำให้ตัวละครเหมือนเดิมทุกฉาก', person:'สร้าง Character Sheet', initials:'2D', accent:'#4d9b94', avatar:'linear-gradient(135deg,#8edbd1,#4b7f9c)', projects:'3', rating:'9:16', reviews:'Style', price:'15 นาที', service:'คุมสี เสื้อผ้า ใบหน้า และมุมมอง', works:['#284758','#f1a36f','#8f79cf'], teach:'ล็อกลักษณะตัวละครด้วย Character sheet: ด้านหน้า ด้านข้าง ด้านหลัง และ close-up', prompt:'Flat 2D cartoon character sheet, Thai food vendor in orange space suit, round glasses, front side back views, clean bold outline, flat colors, white background', output:'ได้ภาพอ้างอิงที่นำไปใช้ซ้ำได้' },
      { name:'04 · สร้างภาพ 9:16', thai:'เปลี่ยน Shot list เป็นภาพพร้อมขยับ', person:'สร้างภาพแต่ละฉาก', initials:'04', accent:'#dd8c4f', avatar:'linear-gradient(135deg,#ffc77a,#d85d75)', projects:'10', rating:'9:16', reviews:'Prompt', price:'20 นาที', service:'ใส่ตัวละคร ฉาก แสง กล้อง และอารมณ์', works:['#ed8a7a','#f3ca61','#755eb7'], teach:'นำ Character sheet ไปต่อท้าย Prompt ของทุกฉาก แล้วกำหนดการกระทำและมุมกล้องให้ชัด', prompt:'Vertical 9:16 flat 2D cartoon, the same Thai food vendor in orange space suit, floating night market in galaxy, customers drifting, cinematic lighting, no text', output:'ได้ภาพครบ 10 ฉากในสไตล์เดียวกัน' },
      { name:'05 · ทำเสียงและ Animation', thai:'ทำให้ภาพนิ่งเล่าเรื่องได้', person:'ใส่เสียงและการเคลื่อนไหว', initials:'05', accent:'#5885d4', avatar:'linear-gradient(135deg,#91c6ff,#5c5cbd)', projects:'45 วิ', rating:'3', reviews:'Audio', price:'16 นาที', service:'เสียงพากย์ + Camera move + Subtitle', works:['#263d66','#5fa7cd','#7f73d9'], teach:'สร้างเสียงพากย์ไทยตาม Script แล้วขยับภาพด้วย parallax, zoom หรือ pan เบา ๆ', prompt:'เขียนบทพากย์ไทย 45 วินาที น้ำเสียงสนุก กระชับ มีจังหวะหยุด และแบ่งบรรทัดสำหรับใส่ซับ', output:'ได้ Timeline ที่ภาพ เสียง และซับตรงกัน' },
      { name:'06 · Export MP4', thai:'ตรวจงานและเตรียมโพสต์', person:'ประกอบเป็นคลิปจริง', initials:'06', accent:'#55a476', avatar:'linear-gradient(135deg,#9fe2ae,#4f8da2)', projects:'1', rating:'1080p', reviews:'MP4', price:'10 นาที', service:'ตรวจ Safe area และ Export 1080 × 1920', works:['#264e58','#c2a26b','#cf7083'], teach:'เช็กเสียง ซับ ลิขสิทธิ์ และสัดส่วนแนวตั้ง ก่อน Export เป็น MP4', prompt:'สร้างเช็กลิสต์ตรวจคลิป Shorts ก่อน Export: 1080x1920, H.264 MP4, เสียงตรงภาพ, ซับ, safe area, ลิขสิทธิ์', output:'ได้คลิป AI พร้อมโพสต์' }
    ];

    const workflowLessons = [
      { title:'สร้างคำถามที่คนอยากหยุดดู', intro:'เริ่มด้วยสิ่งใกล้ตัว แล้วบิดกติกาเพียงหนึ่งอย่าง เพื่อให้คนดูนึกภาพออกในทันที', steps:['เขียนของคุ้นเคย 3 อย่าง เช่น ตลาดนัด รถไฟฟ้า หรือข้าวมันไก่','เติมคำว่า What if แล้วเปลี่ยนสถานที่ กฎ หรือเวลาให้ผิดจากความจริง','เลือกไอเดียที่ตอบต่อได้ว่า ใครเจอปัญหาอะไร และจบอย่างไร'], check:['ไอเดียอธิบายได้ในหนึ่งประโยค','มีภาพแรกที่ทำให้คนหยุดดูได้','มีปัญหาที่พาเรื่องไปต่อ'] },
      { title:'ทำ Storyboard 10 ฉาก', intro:'เปลี่ยนไอเดียเดียวให้กลายเป็นคลิปที่มีจุดเริ่ม จุดพีค และตอนจบใน 45 วินาที', steps:['ฉาก 1 คือ Hook ความยาว 3–5 วินาที','ฉาก 2–8 อธิบายโลกใหม่และเพิ่มปัญหาทีละนิด','ฉาก 9–10 ให้จุดพลิกและประโยคชวนคอมเมนต์'], check:['แต่ละฉากยาว 3–6 วินาที','มีคำบรรยายและภาพที่เห็นชัด','เหตุการณ์ต่อกันโดยไม่กระโดด'] },
      { title:'ล็อกหน้าตาตัวละคร', intro:'ทำ Character sheet ก่อนสร้างฉาก เพื่อให้ AI ไม่เปลี่ยนหน้า เสื้อผ้า หรือสีหลักของตัวละคร', steps:['ระบุอายุ ทรงผม เสื้อผ้า สี และพร็อพชิ้นสำคัญ','สร้างภาพด้านหน้า ด้านข้าง ด้านหลัง และ close-up','บันทึกคำอธิบายตัวละครชุดเดียวไว้ใช้ในทุก Prompt'], check:['มีภาพอ้างอิงอย่างน้อย 3 มุม','สีและเครื่องแต่งกายระบุชัด','ไม่มีข้อความหรือโลโก้ในภาพ'] },
      { title:'สร้างภาพแนวตั้งทีละฉาก', intro:'ใช้ Shot list เป็นตัวนำ ไม่สร้างภาพจากคำกว้าง ๆ เพื่อให้ทุกเฟรมเล่าเรื่องเดียวกัน', steps:['เริ่ม Prompt ด้วยสไตล์และอัตราส่วน vertical 9:16','ใส่ตัวละครเดิม สถานที่ การกระทำ มุมกล้อง และแสง','ตรวจภาพทีละฉาก แล้วเลือก 1 ภาพที่ต่อกับฉากก่อนหน้าได้'], check:['ได้ภาพครบ 10 ฉาก','องค์ประกอบไม่ชนพื้นที่ซับ','สไตล์และตัวละครเหมือนกันทุกฉาก'] },
      { title:'ใส่เสียงและขยับภาพ', intro:'ภาพนิ่งจะน่าดูขึ้นเมื่อเสียงพากย์ชัด และการขยับกล้องพอดีกับอารมณ์ของฉาก', steps:['ตัดบทพากย์เป็นประโยคสั้น อ่านได้ฉากละ 3–6 วินาที','สร้างเสียงที่มีสิทธิ์ใช้งานและฟังออกชัดเจน','ใช้ zoom, pan หรือ parallax เบา ๆ โดยไม่ทำให้ภาพสั่น'], check:['เสียงพากย์จบในเวลาของฉาก','มีซับตัวใหญ่ อ่านง่าย','เพลงและเสียงเอฟเฟกต์ไม่กลบคำพูด'] },
      { title:'ตรวจและ Export พร้อมโพสต์', intro:'ตรวจคลิปให้ครบก่อนส่งออก เพื่อให้ภาพไม่โดนครอป เสียงไม่หลุด และใช้บน Shorts ได้ทันที', steps:['ดูคลิปเต็มหนึ่งรอบพร้อมเปิดเสียงและอ่านซับ','ตรวจ Safe area ด้านบนและล่างของทุกฉาก','Export เป็น H.264 MP4 ขนาด 1080 × 1920 แล้วทดสอบบนมือถือ'], check:['ไฟล์เป็น MP4 แนวตั้ง 1080 × 1920','ภาพ เสียง และซับซิงก์กัน','ตรวจลิขสิทธิ์ภาพ เสียง และเพลงแล้ว'] }
    ];

    const roleList = document.querySelector('#roleList');
    const profileCard = document.querySelector('#profileCard');
    const skeleton = document.querySelector('#profileSkeleton');
    let activeRole = -1;

    function roleTemplate(role) {
      return `<div class="profile-top"><div class="profile-avatar" style="background:${role.avatar}">${role.initials}</div><div><div class="profile-name">${role.person}</div><div class="profile-role">${role.thai}</div></div><button class="profile-follow open-workflow" type="button" data-workflow-index="${activeRole}">เปิดบทเรียน</button></div><div class="profile-stats"><div class="profile-stat"><b>${role.projects}</b><span>ผลลัพธ์</span></div><div class="profile-stat"><b>${role.rating}</b><span>สเปก</span></div><div class="profile-stat"><b>${role.reviews}</b><span>สิ่งที่ใช้</span></div><div class="profile-stat"><b>STEP</b><span>${role.initials}</span></div></div><div class="workflow-teach"><div class="workflow-label">ทำอะไรในขั้นนี้</div><p>${role.teach}</p><div class="workflow-output"><b>ผลลัพธ์</b><span>${role.output}</span></div></div><div class="profile-tabs"><b>Prompt พร้อมใช้</b><span>ทำตามทีละขั้น</span></div><div class="workflow-prompt">${role.prompt}</div><button class="copy-workflow" data-workflow-prompt="${role.prompt.replace(/"/g,'&quot;')}">คัดลอก Prompt</button><div class="profile-service"><div class="service-dot" style="--accent-card:${role.accent}"></div><div class="service-copy"><b>${role.service}</b><span>ทำเสร็จแล้วไปขั้นถัดไป</span></div><div class="service-price">${role.price}</div></div>`;
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
      gsap.timeline().to(profileCard, { opacity: 0, y: 22, scale: .975, duration: .22, ease: 'power2.in', force3D:true }).to(skeleton, { opacity: 1, duration: .16, ease:'power1.out' }, '<').call(() => { profileCard.innerHTML = roleTemplate(role); }).to(skeleton, { opacity: 0, duration: .2, delay: .05, ease:'power1.inOut' }).to(profileCard, { opacity: 1, y: 0, scale: 1, duration: .64, ease: 'power4.out', force3D:true }, '<');
    }

    setRole(0, false);
    profileCard.addEventListener('click', event => { const opener=event.target.closest('.open-workflow'); if(opener){openWorkflowLesson(Number(opener.dataset.workflowIndex));return;} const button=event.target.closest('.copy-workflow'); if(!button) return; navigator.clipboard?.writeText(button.dataset.workflowPrompt); button.textContent='คัดลอกแล้ว ✓'; button.classList.add('done'); setTimeout(()=>{button.textContent='คัดลอก Prompt';button.classList.remove('done')},1400); });
    const rolesSection = document.querySelector('#roles');
    const roleFromProgress = progress => Math.min(roles.length - 1, Math.floor(Math.min(.999999, Math.max(0, progress)) * roles.length));
    function syncRoleWithScroll(){
      if (mobile || reduceMotion) return;
      const rect = rolesSection.getBoundingClientRect();
      const travel = Math.max(1, rolesSection.offsetHeight - window.innerHeight);
      setRole(roleFromProgress(-rect.top / travel), true);
    }
    if (!mobile && !reduceMotion) {
      let roleScrollFrame = 0;
      const requestRoleSync = () => { if (!roleScrollFrame) roleScrollFrame = requestAnimationFrame(() => { roleScrollFrame = 0; syncRoleWithScroll(); }); };
      window.addEventListener('scroll', requestRoleSync, { passive:true });
      window.addEventListener('resize', requestRoleSync);
      requestRoleSync();
    }

    const workflowOverlay = document.querySelector('#workflowOverlay');
    const workflowFocus = document.querySelector('#workflowFocus');
    const workflowFocusContent = document.querySelector('#workflowFocusContent');
    const workflowClose = document.querySelector('#workflowClose');
    let openedWorkflowIndex = 0;
    let workflowAdvanceTimer = 0;

    function workflowFocusTemplate(index) {
      const role = roles[index];
      const lesson = workflowLessons[index];
      const next = index + 1;
      const nextLabel = next < roles.length ? `ไปขั้น ${String(next + 1).padStart(2,'0')}` : 'จบเส้นทางการเรียน';
      return `<div class="focus-lesson" style="--focus-accent:${role.accent}"><div class="focus-progress"><span>WORKFLOW ${String(index + 1).padStart(2,'0')} / ${String(roles.length).padStart(2,'0')}</span><i><em style="width:${(index + 1) / roles.length * 100}%"></em></i></div><div class="focus-hero"><span class="focus-number">${String(index + 1).padStart(2,'0')}</span><div><div class="eyebrow">AI VIDEO WORKSHOP · ${role.price}</div><h2>${lesson.title}</h2><p>${lesson.intro}</p></div></div><section class="focus-section"><div class="focus-section-label">ทำตามทีละขั้น</div><div class="focus-steps">${lesson.steps.map((step,stepIndex)=>`<article><b>${String(stepIndex + 1).padStart(2,'0')}</b><p>${step}</p></article>`).join('')}</div></section><section class="focus-section"><div class="focus-section-label">PROMPT พร้อมใช้</div><code class="focus-prompt">${role.prompt}</code><button class="focus-copy" type="button" data-focus-prompt="${role.prompt.replace(/"/g,'&quot;')}">คัดลอก Prompt</button></section><section class="focus-section focus-result"><div><div class="focus-section-label">เมื่อทำเสร็จ คุณจะได้</div><h3>${role.output}</h3></div><ul>${lesson.check.map(item=>`<li>${item}</li>`).join('')}</ul></section><div class="focus-scroll-end" id="focusScrollEnd"><span>เลื่อนอ่านจนสุดเพื่อไปขั้นถัดไป</span><button class="focus-next" type="button" data-next-index="${next}">${nextLabel} →</button></div></div>`;
    }

    function openWorkflowLesson(index) {
      openedWorkflowIndex = Math.max(0, Math.min(roles.length - 1, index));
      workflowFocusContent.innerHTML = workflowFocusTemplate(openedWorkflowIndex);
      workflowFocus.scrollTop = 0;
      workflowOverlay.setAttribute('aria-hidden','false');
      document.body.classList.add('workflow-open');
      requestAnimationFrame(() => { workflowOverlay.classList.add('is-open'); workflowFocus.focus({preventScroll:true}); });
    }

    function closeWorkflowLesson() {
      clearTimeout(workflowAdvanceTimer);
      workflowOverlay.classList.remove('is-open');
      workflowOverlay.setAttribute('aria-hidden','true');
      document.body.classList.remove('workflow-open');
    }

    function advanceWorkflow(nextIndex) {
      if (nextIndex >= roles.length) { closeWorkflowLesson(); return; }
      setRole(nextIndex, true);
      if (mobile) { openWorkflowLesson(nextIndex); return; }
      closeWorkflowLesson();
      const journey = rolesSection.offsetHeight - window.innerHeight;
      const target = window.scrollY + rolesSection.getBoundingClientRect().top + journey * Math.min(.999, nextIndex / roles.length + .002);
      window.setTimeout(() => window.scrollTo({ top:target, behavior:reduceMotion?'auto':'smooth' }), reduceMotion ? 0 : 220);
    }

    workflowFocus.addEventListener('click', event => {
      const copy = event.target.closest('.focus-copy');
      if (copy) { navigator.clipboard?.writeText(copy.dataset.focusPrompt); copy.textContent='คัดลอกแล้ว ✓'; setTimeout(()=>{copy.textContent='คัดลอก Prompt'},1400); return; }
      const next = event.target.closest('.focus-next');
      if (next) advanceWorkflow(Number(next.dataset.nextIndex));
    });
    workflowFocus.addEventListener('scroll', () => {
      const reachedEnd = workflowFocus.scrollTop + workflowFocus.clientHeight >= workflowFocus.scrollHeight - 18;
      if (!reachedEnd) { clearTimeout(workflowAdvanceTimer); workflowAdvanceTimer = 0; document.querySelector('#focusScrollEnd')?.classList.remove('is-ready'); return; }
      if (workflowAdvanceTimer || openedWorkflowIndex >= roles.length - 1) return;
      const endMessage = document.querySelector('#focusScrollEnd');
      endMessage?.classList.add('is-ready');
      workflowAdvanceTimer = window.setTimeout(() => { workflowAdvanceTimer = 0; advanceWorkflow(openedWorkflowIndex + 1); }, reduceMotion ? 0 : 700);
    }, {passive:true});
    workflowClose.addEventListener('click', closeWorkflowLesson);
    workflowOverlay.addEventListener('click', event => { if (event.target === workflowOverlay) closeWorkflowLesson(); });
    window.addEventListener('keydown', event => { if (event.key === 'Escape' && workflowOverlay.classList.contains('is-open')) closeWorkflowLesson(); });

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

    const lessons = [
      { no:'01', title:'รู้จักคลิป AI แนว What If', summary:'เปลี่ยนคำถามสั้น ๆ ให้กลายเป็นไอเดียคลิปที่คนอยากดูต่อ', steps:['เลือกคำถาม What If ที่เห็นภาพใน 1 ประโยค','กำหนดตัวละคร สถานที่ และกติกาของโลกใหม่','เขียน Hook 3 วินาทีแรกให้ชวนหยุดดู'], prompt:'What if the sun disappeared for 24 hours? Write a short Thai story with a surprising ending, 10 scenes, vertical short-video pacing.', resource:'ผลลัพธ์: ไอเดียหลัก + Story outline 10 ฉาก', guide:`<div class="deep-guide"><h4>ลงมือทำจริง: คลิป “ตลาดนัดบนอวกาศ” 45 วินาที</h4><p class="guide-lead">ทำตามลำดับนี้แล้วคุณจะได้โครงคลิปพร้อมนำไปสร้างภาพ เสียง และตัดต่อ ไม่ใช่แค่มีไอเดียลอย ๆ</p><div class="guide-grid"><div><b>01 · เลือกของคุ้นเคย</b><span>ตลาดนัด, รถไฟฟ้า หรือข้าวมันไก่ เลือก 1 อย่างที่คนเห็นภาพทันที</span></div><div><b>02 · ใส่ความผิดปกติ</b><span>เติม “What if...” แล้วเปลี่ยนสถานที่ กฎ หรือขนาดให้เหนือความคาดหมาย</span></div><div><b>03 · ถามต่อให้เกิดเรื่อง</b><span>ถามว่าใครเดือดร้อน? ต้องแก้ปัญหาอะไร? และจบด้วยภาพแบบไหน?</span></div></div><h5>โครงสคริปต์ 45 วินาที</h5><div class="timeline-script"><div><b>0–5 วิ · HOOK</b><p>“วิดีโอ AI ที่คนดูจนจบ ไม่ได้เริ่มจากเครื่องมือเก่ง แต่เริ่มจากคำถามเดียวคือ What if...”<br><small>ภาพ: แมวเดินบนดาวอังคาร ตัดเร็ว แล้วหันหน้าตรงกล้อง</small></p></div><div><b>5–15 วิ · ขั้น 1</b><p>“เลือกของที่คนไทยเห็นทุกวัน เช่น ตลาดนัด รถไฟฟ้า หรือข้าวมันไก่ ยิ่งคุ้นตา คนยิ่งเชื่อมโยง”<br><small>ภาพ: ตลาดนัดจริง → ป้ายคำว่า 1. ของคุ้นเคย</small></p></div><div><b>15–27 วิ · ขั้น 2</b><p>“เติม What if แล้วบิดให้ผิดที่ผิดทาง เช่น ถ้าตลาดนัดไปเปิดบนอวกาศล่ะ? ยิ่งขัดกับความจริง ยิ่งน่าดู”<br><small>ภาพ: ตลาดนัดลอยกลางกาแล็กซี</small></p></div><div><b>27–37 วิ · ขั้น 3</b><p>“ถามต่อว่า แล้วเกิดอะไรขึ้น? แม่ค้าทำยังไง ลูกค้าเจออะไร จะได้เป็นเรื่องราว ไม่ใช่แค่ภาพสวย ๆ”<br><small>ภาพ: แม่ค้าชุดอวกาศ → ลูกค้าลอยหยิบของ → หมูปิ้งลอยหนี</small></p></div><div><b>37–45 วิ · CTA</b><p>“เลือกของใกล้ตัว 1 อย่าง เติม What if แล้วคอมเมนต์ไอเดียของคุณไว้ด้านล่าง”<br><small>ข้อความจอ: ของคุ้นเคย + ความผิดปกติ + แล้วเกิดอะไรขึ้น</small></p></div></div><h5>Prompt พร้อมใช้ 3 ชุด</h5><div class="guide-prompts"><code>ช่วยคิดไอเดีย What If จาก “ตลาดนัดไทย” จำนวน 5 ไอเดีย แต่ละไอเดียต้องมีความผิดปกติที่เห็นภาพ ตัวละครหลัก ปัญหา และจุดจบใน 1 ประโยค</code><code>เปลี่ยนไอเดีย “ตลาดนัดอยู่บนอวกาศ” เป็นสคริปต์ภาษาไทยยาว 45 วินาที แบ่ง 10 ฉาก ระบุเวลา ภาพที่เห็น บทพูด และเสียงเอฟเฟกต์</code><code>สร้างคำสั่งภาพแนว Flat 2D cartoon สำหรับฉาก “ตลาดนัดไทยลอยกลางกาแล็กซี” อัตราส่วน 9:16 สีสด เส้นหนา ตัวละครและพร็อพคงที่ ไม่มีตัวหนังสือในภาพ</code></div><h5>เช็กลิสต์ก่อน Export</h5><ul class="guide-checklist"><li>Hook เข้าใจได้ภายใน 3 วินาที</li><li>ทุกฉากมีภาพที่สร้างได้จริง ไม่ใช้คำกว้างเกินไป</li><li>เสียงพากย์อ่านจบตามเวลาของแต่ละฉาก</li><li>ใส่ซับตัวใหญ่และเว้น Safe area บน–ล่าง</li><li>Export เป็น MP4 แนวตั้ง 1080 × 1920</li></ul></div>` },
      { no:'02', title:'คิดไอเดียและเขียน Story', summary:'วางโครงเรื่องให้มีต้นเรื่อง จุดเปลี่ยน และตอนจบก่อนเริ่มสร้างภาพ', steps:['เขียน Setup ให้คนเข้าใจโลกใน 1–2 ประโยค','ใส่ปัญหาหรือความขัดแย้งให้ตัวละครต้องตัดสินใจ','จบด้วยภาพหรือประโยคที่ทำให้คนอยากคอมเมนต์'], prompt:'Create a 45-second Thai script about a teenager surviving the first night of a zombie apocalypse. Divide it into 10 scenes with narration and visual direction.', resource:'ผลลัพธ์: Script พร้อมคำบรรยายและภาพที่ต้องสร้าง' },
      { no:'03', title:'แบ่งเรื่องเป็น 10 ฉาก', summary:'ทำ Shot list เพื่อให้ภาพ เสียง และ Animation ต่อกันได้ไม่หลุดธีม', steps:['กำหนดเวลาแต่ละฉาก 3–6 วินาที','เขียน camera angle, action และ mood ของฉาก','ตรวจ continuity ของตัวละครและพร็อพทุกฉาก'], prompt:'Turn this story into a 10-shot list. For each shot include duration, camera angle, character action, background, lighting, and Thai narration.', resource:'ผลลัพธ์: Shot list ที่ใช้สร้างภาพได้ทันที' },
      { no:'04', title:'ออกแบบตัวละคร Flat 2D', summary:'สร้าง Character sheet และ Prompt ที่คุมหน้าตา เสื้อผ้า และสีให้คงที่', steps:['กำหนดรูปร่าง สีผม เสื้อผ้า และ accessory หลัก','สร้างภาพ reference เต็มตัวและ close-up','ใส่คำสั่ง clean bold outline, flat color และ no text'], prompt:'Flat 2D cartoon character sheet, young Thai explorer, orange hoodie, teal backpack, round glasses, front side back views, clean bold outlines, simple flat colors, white background.', resource:'ผลลัพธ์: ตัวละครที่ใช้ซ้ำได้ครบทุกฉาก' },
      { no:'05', title:'สร้างภาพและเสียงพากย์ไทย', summary:'ทำภาพแนวตั้ง 9:16 และเตรียมเสียงให้เข้าจังหวะการเล่าเรื่อง', steps:['เติมรายละเอียดฉากลงใน Prompt โดยยึด Character sheet','เขียนสคริปต์พากย์ให้พูดจบในเวลาของฉาก','ตรวจสิทธิ์เสียงและเพลงก่อนใช้เชิงพาณิชย์'], prompt:'Create a Thai voiceover script with natural pauses and emotional direction for a 45-second vertical AI short. Keep each line under 12 words.', resource:'คำเตือน: ใช้เสียงที่มีสิทธิ์ใช้งาน และตรวจเงื่อนไขของเครื่องมือทุกครั้ง' },
      { no:'06', title:'ทำ Animation และ Export MP4', summary:'รวมภาพ เสียง และการเคลื่อนไหวเป็นคลิป 1080 × 1920 พร้อมโพสต์', steps:['ทำ parallax หรือขยับกล้องเบา ๆ ด้วย Canvas/Editor','Sync เสียงพากย์กับภาพและใส่ซับอ่านง่าย','Export H.264 MP4, 1080×1920 แล้วดูซ้ำก่อนโพสต์'], prompt:'Create a final export checklist for a vertical AI short: 1080x1920, H.264 MP4, voice sync, subtitles, safe margins, copyright review.', resource:'ผลลัพธ์: คลิป MP4 แนวตั้งที่พร้อมเผยแพร่' }
    ];
    const lessonMenu = document.querySelector('#lessonMenu');
    const lessonDetail = document.querySelector('#lessonDetail');
    const completedLessons = new Set(JSON.parse(localStorage.getItem('n9-completed-lessons') || '[]'));
    let activeLesson = 0;
    function renderLessonMenu(){ lessonMenu.innerHTML=lessons.map((lesson,index)=>`<button class="lesson-button ${index===activeLesson?'active':''}" data-lesson="${index}"><b>${lesson.no} ${completedLessons.has(index)?'· ✓':''}</b><strong>${lesson.title}</strong></button>`).join(''); }
    function renderLesson(){ const lesson=lessons[activeLesson]; lessonDetail.innerHTML=`<div class="eyebrow">บทเรียน ${lesson.no} / ${lessons.length}</div><h3>${lesson.title}</h3><p>${lesson.summary}</p><div class="lesson-steps">${lesson.steps.map((step,index)=>`<div class="lesson-step"><b>STEP ${index+1}</b><p>${step}</p></div>`).join('')}</div>${lesson.guide||''}<div class="prompt-box"><header><span>PROMPT พร้อมใช้</span><span>ภาษาอังกฤษเพื่อผลลัพธ์ภาพที่สม่ำเสมอ</span></header><code id="lessonPrompt">${lesson.prompt}</code><button class="copy-prompt" id="copyPrompt">คัดลอก Prompt</button><button class="complete-lesson ${completedLessons.has(activeLesson)?'completed':''}" id="completeLesson">${completedLessons.has(activeLesson)?'เรียนจบแล้ว ✓':'ทำเครื่องหมายว่าเรียนจบ'}</button></div><div class="lesson-resource">${lesson.resource}</div>`; updateLessonProgress(); }
    function updateLessonProgress(){const percent=Math.round(completedLessons.size/lessons.length*100);document.querySelector('#lessonPercent').textContent=percent+'%';document.querySelector('#lessonProgress').style.width=percent+'%';}
    lessonMenu.addEventListener('click',event=>{const button=event.target.closest('[data-lesson]');if(!button)return;activeLesson=Number(button.dataset.lesson);renderLessonMenu();renderLesson();lessonDetail.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'center'});});
    lessonDetail.addEventListener('click',event=>{if(event.target.id==='copyPrompt'){navigator.clipboard?.writeText(document.querySelector('#lessonPrompt').textContent);event.target.textContent='คัดลอกแล้ว ✓';event.target.classList.add('done');setTimeout(()=>{event.target.textContent='คัดลอก Prompt';event.target.classList.remove('done')},1400)}if(event.target.id==='completeLesson'){completedLessons.has(activeLesson)?completedLessons.delete(activeLesson):completedLessons.add(activeLesson);localStorage.setItem('n9-completed-lessons',JSON.stringify([...completedLessons]));renderLessonMenu();renderLesson();}});
    renderLessonMenu(); renderLesson();

    const teachingScripts = [
      { tag:'WHAT IF · 45 วินาที', title:'สอนคิดไอเดีย What If', desc:'สอนผู้ชมเปลี่ยนคำถามธรรมดาให้กลายเป็น Hook ของคลิป AI', flow:['Hook: ถ้าพรุ่งนี้ไม่มีพระอาทิตย์ล่ะ?','สาธิต: ให้ AI แตกไอเดียเป็น 10 ฉาก','สรุป: เลือกไอเดียที่เห็นภาพและมีจุดพลิก'], prompt:'เขียนสคริปต์คลิปสอนภาษาไทย 45 วินาที อธิบายวิธีคิดไอเดีย What If สำหรับวิดีโอ AI โดยมี Hook, สาธิต 3 ขั้นตอน และ CTA ให้ผู้ชมลองทำตาม' },
      { tag:'FLAT 2D · 60 วินาที', title:'สอนสร้างตัวละคร Flat 2D', desc:'สอนการเขียน Prompt ให้ตัวละครคงหน้าตาเดิมทุกฉาก', flow:['Hook: ทำไมตัวละคร AI เปลี่ยนหน้าทุกฉาก?','สาธิต: ทำ Character sheet + reference','สรุป: ใส่สี เสื้อผ้า และมุมมองให้ครบ'], prompt:'เขียนสคริปต์คลิปสอนภาษาไทย 60 วินาที สอนสร้างตัวละคร Flat 2D ให้คงที่ด้วย Character sheet และ Prompt พร้อมตัวอย่างก่อนและหลัง' },
      { tag:'ZOMBIE · 50 วินาที', title:'สอนทำคลิป Zombie Apocalypse', desc:'สอน workflow ตั้งแต่ Story, ภาพ, เสียง จน Export เป็น Shorts', flow:['Hook: ถ้าเมืองของคุณโดนซอมบี้บุกคืนนี้?','สาธิต: แบ่งเรื่อง 10 ฉากและสร้างภาพ 9:16','สรุป: ใส่เสียงพากย์แล้ว Export MP4'], prompt:'เขียนสคริปต์คลิปสอนภาษาไทย 50 วินาที สอนทำวิดีโอ Zombie Apocalypse ด้วย AI ตั้งแต่คิด Story แบ่ง 10 ฉาก สร้างภาพ ใส่เสียง และ Export 1080x1920' }
    ];
    const scriptGrid=document.querySelector('#scriptGrid');
    scriptGrid.innerHTML=teachingScripts.map((item,index)=>`<article class="script-card"><span class="script-tag">${item.tag}</span><h3>${item.title}</h3><p>${item.desc}</p><div class="script-flow">${item.flow.map((step,stepIndex)=>`<span><b>${stepIndex+1}</b>${step}</span>`).join('')}</div><button class="copy-script" data-script="${index}">คัดลอก Prompt สคริปต์</button><textarea class="script-source" aria-hidden="true">${item.prompt}</textarea></article>`).join('');
    scriptGrid.addEventListener('click',event=>{const button=event.target.closest('[data-script]');if(!button)return;const source=button.parentElement.querySelector('.script-source').value;navigator.clipboard?.writeText(source);button.textContent='คัดลอกแล้ว ✓';button.classList.add('done');setTimeout(()=>{button.textContent='คัดลอก Prompt สคริปต์';button.classList.remove('done')},1400)});

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
        ScrollTrigger.create({ trigger:'#roles', start:'top top', end:'bottom bottom', onUpdate:self=>setRole(roleFromProgress(self.progress), true), onRefresh:syncRoleWithScroll });
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
