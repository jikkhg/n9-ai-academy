# คู่มืออัปโหลด N9 AI Academy ขึ้น GitHub

ไฟล์นี้ใช้สำหรับอัปเดตเว็บไซต์จากเครื่องของเราไปที่ GitHub และให้ Vercel Deploy ต่ออัตโนมัติ

## 1. เปิดโฟลเดอร์โปรเจกต์

เปิด PowerShell แล้วรัน:

```powershell
cd "C:\Users\User\Desktop\naa"
```

## 2. ตรวจไฟล์ที่เปลี่ยน

```powershell
git status
```

## 3. เพิ่มไฟล์ทั้งหมดเข้า Git

```powershell
git add .
```

ถ้าต้องการเพิ่มเฉพาะไฟล์:

```powershell
git add index.html style.css script.js
```

## 4. บันทึกการเปลี่ยนแปลง

```powershell
git commit -m "อธิบายสิ่งที่แก้ไข"
```

ตัวอย่าง:

```powershell
git commit -m "Update learner auth and admin dashboard"
```

## 5. อัปโหลดขึ้น GitHub

```powershell
git push origin main
```

จากนั้นรอ Vercel Deploy ประมาณ 1–3 นาที

เว็บไซต์:

https://n9-ai-academy.vercel.app/

Repository:

https://github.com/jikkhg/n9-ai-academy

## ถ้า Git ขอรหัสผ่าน

GitHub ไม่รับ Password แบบเดิมแล้ว ให้ใช้ **Personal Access Token (PAT)** แทน

สร้าง Token ได้ที่:

https://github.com/settings/tokens

แนะนำให้สร้าง Fine-grained token แล้วกำหนด:

- Repository access: เลือก `jikkhg/n9-ai-academy`
- Repository permissions: เปิด `Contents` เป็น `Read and write`

ตอน Git ถาม:

```text
Username: ชื่อ GitHub ของคุณ
Password: วาง Token ตรงนี้
```

หมายเหตุ: ตอนวาง Token ใน PowerShell จะไม่แสดงตัวอักษร เป็นเรื่องปกติ ให้กด Enter ได้เลย

## ถ้า Token หมดอายุหรือใช้ไม่ได้

1. สร้าง Token ใหม่จากลิงก์ด้านบน
2. อย่าใส่ช่องว่างหรือขึ้นบรรทัดใหม่ตอน Copy
3. ถ้าเครื่องจำ Token เก่าไว้ ให้ลบข้อมูล GitHub ใน Windows Credential Manager
4. เปิด `Control Panel > Credential Manager > Windows Credentials`
5. ลบรายการที่เกี่ยวกับ `github.com`
6. รันคำสั่งนี้ใหม่:

```powershell
git push origin main
```

## คำสั่งตรวจสอบที่ใช้บ่อย

ดู Remote:

```powershell
git remote -v
```

ดูประวัติ Commit:

```powershell
git log --oneline -5
```

ดูว่าไฟล์ไหนยังไม่ได้ส่ง:

```powershell
git status
```

## สำคัญมาก: ห้ามอัปโหลด Secret

ห้ามใส่สิ่งเหล่านี้ลงในไฟล์ที่ Push ขึ้น GitHub:

- Supabase `service_role` key
- Google Client Secret
- Password
- Personal Access Token
- API key ที่มีสิทธิ์เขียนหรือลบข้อมูล

ไฟล์หน้าเว็บใช้ได้เฉพาะ Supabase Publishable Key เท่านั้น ส่วน Secret ต้องเก็บใน Vercel Environment Variables หรือระบบหลังบ้าน

## Workflow สั้นที่สุดทุกครั้งที่แก้เว็บ

```powershell
cd "C:\Users\User\Desktop\naa"
git add .
git commit -m "อธิบายสิ่งที่แก้"
git push origin main
```

