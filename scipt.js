/* ==========================================================================
   JavaScript for Kunasin's Code Sharing Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect (เปลี่ยนสีและเพิ่มเงาให้เมนูเมื่อเลื่อนจอลงมา)
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)'; // ปรับให้เข้มขึ้นและทึบขึ้นเมื่อสกรอลล์
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            navbar.style.padding = '10px 0'; // ลดขนาดความหนาของ Navbar ลงเล็กน้อยให้ดูเพรียวขึ้น
        } else {
            navbar.style.background = 'rgba(30, 41, 59, 0.8)'; // กลับเป็นค่าเริ่มต้น
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '16px 0';
        }
    });

    // 2. Scroll Reveal Animation (เอฟเฟกต์การ์ดผลงานค่อยๆ เลื่อนขึ้นเมื่อเลื่อนหน้าจอมาถึง)
    const projectCards = document.querySelectorAll('.project-card');
    
    const revealCardsOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4; // กำหนดระยะกระตุ้นแอนิเมชัน

        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // ตั้งค่าเริ่มต้นให้การ์ดโปรเจกต์ก่อนเริ่มแอนิเมชัน
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // เรียกใช้งานเมื่อมีการเลื่อนหน้าจอ และเรียกทันทีที่โหลดเว็บเสร็จ
    window.addEventListener('scroll', revealCardsOnScroll);
    revealCardsOnScroll();

    // 3. คลิกที่ Avatar เพื่อแสดงลูกเล่นทักทาย
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('click', () => {
            // สร้างเอฟเฟกต์เด้งเบาๆ ตอนคลิก
            avatar.style.transform = 'scale(1.1)';
            setTimeout(() => avatar.style.transform = 'scale(1)', 200);
            
            console.log("👋 ยินดีที่ได้รู้จักอย่างเป็นทางการครับ! - จาก คุณาสิน");
        });
    }

    // 4. Developer Easter Egg (ข้อความลับใน Console สำหรับสายตรวจโค้ด)
    console.log(
        "%cสวัสดีสายลับโปรแกรมเมอร์! 🕵️‍♂️ หลงเข้ามาตรวจโค้ดของผมใช่ไหมล่ะ?",
        "color: #6366f1; font-size: 16px; font-weight: bold; font-family: 'Kanit', sans-serif;"
    );
    console.log(
        "%cยินดีต้อนรับสู่คลังโค้ดของคุณาสิน หากคุณสนใจ Source Code ชิ้นไหน สามารถกดดูในปุ่ม GitHub บนหน้าเว็บได้เลย หรือถ้าอยากร่วมงานกัน ติดต่อผมมาได้เลยครับ! 🚀",
        "color: #06b6d4; font-size: 13px; font-family: 'Kanit', sans-serif;"
    );
});
