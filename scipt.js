// เปลี่ยนสไตล์ของ Navbar เมื่อเลื่อนหน้าจอ
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// แสดงข้อความต้อนรับใน Console (สำหรับนักพัฒนา)
console.log("ยินดีต้อนรับสู่แฟ้มสะสมผลงานของ คุณาสิน จันทร์คำยา!");
