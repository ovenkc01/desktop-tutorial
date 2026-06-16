<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>คุณาสิน | Developer Portfolio & Code Sharing</title>
    <!-- เรียกใช้ Tailwind CSS และ Font Awesome สำหรับไอคอน -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-gray-900 text-gray-100 font-sans antialiased">

    <!-- 🔥 Navigation Bar -->
    <nav class="bg-gray-800 sticky top-0 z-50 shadow-md">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" class="text-xl font-bold tracking-wider text-indigo-400"><i class="fa-solid fa-code mr-2"></i>Kunasin.Dev</a>
            <div class="space-x-6">
                <a href="#about" class="hover:text-indigo-400 transition">เกี่ยวกับฉัน</a>
                <a href="#projects" class="hover:text-indigo-400 transition">ผลงาน & โค้ด</a>
                <a href="#contact" class="hover:text-indigo-400 transition">ติดต่อ</a>
            </div>
        </div>
    </nav>

    <!-- 🚀 Hero Section -->
    <header id="about" class="max-w-4xl mx-auto text-center py-20 px-4">
        <div class="w-32 h-32 bg-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold shadow-lg shadow-indigo-500/30">
            👨‍💻
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">สวัสดีครับ ผมชื่อ <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">คุณาสิน</span></h1>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            ยินดีต้อนรับสู่คลังโค้ดของผม! ผมเป็นนักพัฒนาซอฟต์แวร์ที่หลงใหลในการเขียนโค้ด การสร้างสรรค์เทคโนโลยี และการแบ่งปัน Open-source สู่ชุมชน
        </p>
        
        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap justify-center gap-3 mb-8">
            <span class="bg-gray-800 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-500/20"><i class="fa-brands fa-html5 mr-1 text-orange-500"></i> HTML/CSS</span>
            <span class="bg-gray-800 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-500/20"><i class="fa-brands fa-js mr-1 text-yellow-400"></i> JavaScript</span>
            <span class="bg-gray-800 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-500/20"><i class="fa-brands fa-react mr-1 text-cyan-400"></i> React</span>
            <span class="bg-gray-800 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-500/20"><i class="fa-brands fa-python mr-1 text-blue-400"></i> Python</span>
        </div>

        <a href="https://github.com/YOUR-USERNAME" target="_blank" class="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition inline-flex items-center gap-2">
            <i class="fa-brands fa-github text-xl"></i> ดู GitHub ของคุณาสิน
        </a>
    </header>

    <!-- 🛠️ Projects Section (Code Sharing Showcase) -->
    <section id="projects" class="bg-gray-800/50 py-16 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-2">ผลงานและคลังโค้ดเด่น (Featured Projects)</h2>
                <p class="text-gray-400">คลิกเข้าไปดู Demo หรือตรวจสอบ Source Code ของแต่ละโปรเจกต์ได้เลยครับ</p>
            </div>

            <!-- Grid ของโปรเจกต์ -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- การ์ดโปรเจกต์ที่ 1 -->
                <div class="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition duration-300 flex flex-col justify-between">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold uppercase tracking-wider text-indigo-400">Web Application</span>
                            <span class="text-xs bg-indigo-900 text-indigo-200 px-2 py-1 rounded">React</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-white">E-Commerce Web App</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-4">
                            ระบบร้านค้าออนไลน์จำลอง มีระบบตะกร้าสินค้า ค้นหา และหน้าชำระเงินที่สมบูรณ์แบบ
                        </p>
                    </div>
                    <div class="p-6 pt-0 flex gap-4">
                        <a href="https://your-demo-link.com" target="_blank" class="flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2 px-4 rounded transition">
                            <i class="fa-solid fa-rocket mr-1"></i> Live Demo
                        </a>
                        <a href="https://github.com/YOUR-USERNAME/YOUR-REPO" target="_blank" class="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-semibold py-2 px-4 rounded border border-gray-600 transition">
                            <i class="fa-brands fa-github mr-1"></i> Source Code
                        </a>
                    </div>
                </div>

                <!-- การ์ดโปรเจกต์ที่ 2 -->
                <div class="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition duration-300 flex flex-col justify-between">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">Automation</span>
                            <span class="text-xs bg-cyan-900 text-cyan-200 px-2 py-1 rounded">Python</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-white">Web Scraping Bot</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-4">
                            บอทดึงข้อมูลราคาสินค้าจากเว็บต่างๆ แบบอัตโนมัติ พร้อมส่งแจ้งเตือนเข้า Line Notify
                        </p>
                    </div>
                    <div class="p-6 pt-0 flex gap-4">
                        <span class="flex-1 text-center bg-gray-900 text-gray-500 text-sm font-semibold py-2 px-4 rounded cursor-not-allowed">
                            <i class="fa-solid fa-lock mr-1"></i> No Demo
                        </span>
                        <a href="https://github.com/YOUR-USERNAME/YOUR-REPO" target="_blank" class="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-semibold py-2 px-4 rounded border border-gray-600 transition">
                            <i class="fa-brands fa-github mr-1"></i> Source Code
                        </a>
                    </div>
                </div>

                <!-- การ์ดโปรเจกต์ที่ 3 -->
                <div class="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition duration-300 flex flex-col justify-between">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold uppercase tracking-wider text-amber-400">API Service</span>
                            <span class="text-xs bg-amber-900 text-amber-200 px-2 py-1 rounded">Node.js</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-white">Task Management API</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-4">
                            RESTful API สำหรับระบบจัดการงาน (CRUD) มีระบบ Authentication ด้วย JWT
                        </p>
                    </div>
                    <div class="p-6 pt-0 flex gap-4">
                        <a href="https://your-api-doc.com" target="_blank" class="flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2 px-4 rounded transition">
                            <i class="fa-solid fa-file-code mr-1"></i> API Doc
                        </a>
                        <a href="https://github.com/YOUR-USERNAME/YOUR-REPO" target="_blank" class="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm font-semibold py-2 px-4 rounded border border-gray-600 transition">
                            <i class="fa-brands fa-github mr-1"></i> Source Code
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- 📨 Contact Section -->
    <section id="contact" class="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 class="text-2xl font-bold mb-2">สนใจร่วมงานหรือร่วมแชร์ไอเดียกับคุณาสิน?</h2>
        <p class="text-gray-400 mb-6">คุณสามารถติดต่อผมได้ตามช่องทางด้านล่างนี้เลยครับ</p>
        <div class="flex justify-center gap-6 text-2xl">
            <a href="mailto:your-email@example.com" class="text-gray-400 hover:text-red-400 transition"><i class="fa-solid fa-envelope"></i></a>
            <a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank" class="text-gray-400 hover:text-blue-400 transition"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/YOUR-USERNAME" target="_blank" class="text-gray-400 hover:text-white transition"><i class="fa-brands fa-github"></i></a>
        </div>
    </section>

    <!-- 📝 Footer -->
    <footer class="bg-gray-900 text-center py-6 border-t border-gray-800 text-sm text-gray-500">
        &copy; 2026 Kunasin. All rights reserved. Crafted with ❤️ and GitHub Pages.
    </footer>

</body>
</html>
