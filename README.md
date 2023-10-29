# seat-service
Port 3001
## How to start
1. copy .env.example มาสร้าง .env แล้วเปลี่ยน DATABASE_URL ตาม mySQL
2. Run command
```
npm i
```
ให้ prisma สร้าง table ใน db
```
npx prisma migrate dev --name init 
```
ให้ prisma ใส่ข้อมูล seat ใน db
```
npx prisma db seed 
```
```
npm run dev
```