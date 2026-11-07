# N9 AI Academy

Landing page แบบ Scroll-driven storytelling สำหรับแพลตฟอร์มสอนสร้างวิดีโอ AI ภาษาไทย

เนื้อหาครอบคลุมการสร้างคลิปแนว:

- What If Stories
- Zombie Apocalypse
- Flat 2D Cartoon Shorts

## ฟีเจอร์

- Hero animation แบบ blur-to-focus
- Sticky scroll storytelling
- Role/workflow showcase แบบ pinned
- Pain points และ sticky notes
- Value card พร้อมตัวเลข progress
- Feature stage สำหรับ Story, Prompt, Motion และ Export
- Countdown จริง
- Responsive สำหรับ Desktop และ Mobile
- รองรับ `prefers-reduced-motion`
- ใช้ placeholder gradient ไม่พึ่งพารูปภาพภายนอก

## โครงสร้างไฟล์

```text
index.html   โครงสร้างหน้าเว็บ
style.css    ดีไซน์ responsive และ animation styles
script.js    GSAP, ScrollTrigger และ interaction logic
```

## วิธีเปิดใช้งาน

เปิดไฟล์ `index.html` ในเบราว์เซอร์ได้ทันที หรือใช้ Live Server สำหรับการพัฒนา

โปรเจกต์ใช้ GSAP และ ScrollTrigger จาก cdnjs จึงต้องเชื่อมต่ออินเทอร์เน็ตเพื่อโหลด animation library

## GitHub Pages

Repository: https://github.com/jikkhg/n9-ai-academy

เว็บไซต์: https://jikkhg.github.io/n9-ai-academy/

ตั้งค่าใน GitHub ที่ `Settings → Pages` แล้วเลือก `Deploy from a branch`, branch `main` และ folder `/ (root)`

## การปรับเนื้อหา

แก้ข้อความใน `index.html` และแก้ข้อมูล Role/Feature ใน array ภายใน `script.js` ได้โดยตรง

## ลิขสิทธิ์

เนื้อหาและโค้ดนี้จัดทำสำหรับโปรเจกต์ N9 AI Academy โปรดตรวจสอบสิทธิ์การใช้งาน asset และบริการภายนอกก่อนนำไปเผยแพร่เชิงพาณิชย์
