/* ==========================================================================
   script.js for Patiphan's Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ระบบเลื่อนหน้าจออย่างนุ่มนวล (Smooth Scrolling)
    // เมื่อคลิกที่ลิงก์ใน Navigation Bar หน้าเว็บจะเลื่อนไปยังส่วนที่ต้องการอย่างนุ่มนวล
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // ดึงค่า href ของลิงก์ (เช่น #about, #projects, #contact)
            const targetId = link.getAttribute('href');
            
            // ตรวจสอบว่าเป็นลิงก์ภายในหน้าจอหรือไม่ (ขึ้นต้นด้วย #)
            if (targetId.startsWith('#')) {
                // ป้องกันไม่ให้เบราว์เซอร์เปิดหน้าใหม่
                e.preventDefault();
                
                // ดึง Element เป้าหมายตาม id
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // คำนวณตำแหน่งที่ต้องเลื่อนไป (ลบความสูงของ Navbar เพื่อไม่ให้โดนบัง)
                    const navbarHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    // สั่งให้หน้าจอเลื่อนไปยังตำแหน่งที่ต้องการอย่างนุ่มนวล
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. เอฟเฟกต์การ์ดโปรเจกต์ (Project Card Hover Effect)
    // เพิ่มเอฟเฟกต์เมื่อนำเมาส์ไปวางบนการ์ดโปรเจกต์ เพื่อให้ดูมีความน่าสนใจมากขึ้น
    const projectCards = document.querySelectorAll('#projects .bg-slate-800');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        });
    });

    // 3. ปรับแต่งข้อความทักทาย (Custom Welcome Message)
    // หากคุณต้องการเปลี่ยนข้อความทักทายใน Hero Section ก็สามารถทำได้ง่ายๆ
    const welcomeMessage = document.querySelector('header p');
    if (welcomeMessage) {
        // คุณสามารถเปลี่ยนข้อความเป็นภาษาอื่นหรือปรับเปลี่ยนตามความเหมาะสม
        // welcomeMessage.textContent = 'ยินดีต้อนรับสู่ Portfolio ของผม! ที่นี่คุณจะพบกับโปรเจกต์โค้ดที่น่าสนใจ';
    }

    // 4. แผงควบคุม Developer (Developer Control Panel)
    // หากคุณเป็นโปรแกรมเมอร์ที่ชอบการปรับแต่ง คุณสามารถสร้างแผงควบคุมง่ายๆ ในหน้า Console
    console.log(
        "%cสวัสดีสายลับโปรแกรมเมอร์! 🕵️‍♂️ มาตรวจโค้ดของผมใช่ไหมล่ะ?",
        "color: #6366f1; font-size: 16px; font-weight: bold; font-family: 'Kanit', sans-serif;"
    );
    console.log(
        "%cหากคุณสนใจซอร์สโค้ดของโปรเจกต์ไหน สามารถกดดูที่ปุ่ม GitHub บนหน้าเว็บได้เลยครับ! 🚀",
        "color: #06b6d4; font-size: 13px; font-family: 'Kanit', sans-serif;"
    );
});
