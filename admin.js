(async function () {
  const content = document.querySelector('#adminContent');
  const signOut = document.querySelector('#adminSignOut');
  const { data: { user } } = await window.n9Supabase.auth.getUser();
  if (!user) { content.innerHTML = `<div class="admin-empty"><h1>กรุณาเข้าสู่ระบบก่อน</h1><p>เข้าสู่ระบบในหน้า N9 AI Academy ด้วยบัญชีผู้ดูแล แล้วกลับมาที่หน้านี้</p><a href="index.html" class="admin-link">กลับหน้าเว็บไซต์</a></div>`; return; }
  const { data: profile } = await window.n9Supabase.from('profiles').select('name,email,role').eq('id', user.id).maybeSingle();
  if (!profile || profile.role !== 'admin') { content.innerHTML = `<div class="admin-empty"><h1>ไม่มีสิทธิ์เข้าถึง</h1><p>บัญชี ${user.email} ยังไม่ได้เป็นผู้ดูแลระบบ</p><p class="admin-code">update public.profiles set role = 'admin' where email = '${user.email}';</p></div>`; return; }
  const [{ data: learners, error: learnerError }, { data: progress, error: progressError }] = await Promise.all([
    window.n9Supabase.from('profiles').select('id,name,email,role,created_at').order('created_at', { ascending: false }),
    window.n9Supabase.from('lesson_progress').select('user_id,lesson_index,completed_at')
  ]);
  if (learnerError || progressError) { content.innerHTML = `<div class="admin-empty"><h1>ยังไม่พบตารางข้อมูล</h1><p>กรุณารันไฟล์ <code>supabase-schema.sql</code> ใน Supabase SQL Editor ก่อน</p></div>`; return; }
  const progressByUser = new Map();
  progress.forEach(item => progressByUser.set(item.user_id, (progressByUser.get(item.user_id) || 0) + 1));
  const completed = progress.length;
  content.innerHTML = `<div class="admin-welcome"><div><div class="eyebrow">N9 ADMIN</div><h1>ภาพรวมผู้เรียน</h1><p>สวัสดี ${profile.name} · ข้อมูลอัปเดตจาก Supabase</p></div><a class="admin-link" href="index.html">ดูหน้าเว็บไซต์</a></div><section class="admin-stats"><article><span>ผู้เรียนทั้งหมด</span><b>${learners.length}</b></article><article><span>บทเรียนที่เรียนจบ</span><b>${completed}</b></article><article><span>ความคืบหน้าเฉลี่ย</span><b>${learners.length ? Math.round(completed / (learners.length * 6) * 100) : 0}%</b></article></section><section class="admin-table-wrap"><h2>รายชื่อผู้เรียน</h2><table><thead><tr><th>ผู้เรียน</th><th>อีเมล</th><th>ความคืบหน้า</th><th>สมัครเมื่อ</th></tr></thead><tbody>${learners.map(learner => `<tr><td>${learner.name}</td><td>${learner.email}</td><td><span class="admin-progress"><i style="width:${(progressByUser.get(learner.id) || 0) / 6 * 100}%"></i></span>${progressByUser.get(learner.id) || 0}/6</td><td>${new Intl.DateTimeFormat('th-TH',{dateStyle:'medium'}).format(new Date(learner.created_at))}</td></tr>`).join('')}</tbody></table></section>`;
  signOut.addEventListener('click', async () => { await window.n9Supabase.auth.signOut(); location.href = 'index.html'; });
})();
