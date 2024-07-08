const logos = document.querySelectorAll('#logo');
const toggleSwitch = document.querySelector('#switch');

// تحديد مسارات الصور الخاصة بالوضع العادي والوضع الليلي
const lightLogo = 'assets/images/logo.svg';
const darkLogo = 'assets/images/logo-light.svg';

// استرجاع حالة الوضع من localStorage
const currentTheme = localStorage.getItem('theme');

// تعيين الوضع الافتراضي إذا لم يكن محفوظًا
if (currentTheme) {
document.documentElement.classList.add(currentTheme);

// تحديد حالة التبديل إذا كان الوضع الحالي داكنًا
if (currentTheme === 'dark') {
 toggleSwitch.checked = true;
}
} else {
// إذا لم يكن هناك وضع محفوظ، استخدم الوضع الافتراضي (في هذه الحالة: النهاري)
localStorage.setItem('theme', 'light');
}

// ضبط الـ src الخاص باللوجو بناءً على الوضع الحالي
function updateLogos() {
logos.forEach(logo => {
 if (document.documentElement.classList.contains('dark')) {
     logo.src = darkLogo;
 } else {
     logo.src = lightLogo;
 }
});
}

// استدعاء الدالة عند تحميل الصفحة
updateLogos();

// تحديث الشعار عند تغيير الوضع
toggleSwitch.addEventListener('change', () => {
document.documentElement.classList.toggle('dark');
updateLogos();

// حفظ الوضع الجديد في localStorage
if (toggleSwitch.checked) {
 localStorage.setItem('theme', 'dark');
} else {
 localStorage.setItem('theme', 'light');
}
});





 // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        
        // GSAP timeline for animations
        const tl = gsap.timeline();

        // Animation for hero section
        tl.from('.hero h1', { opacity: 0, y: 20, duration: 1 })
          .from('.hero span', { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
          .from('.btn-hero1', { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
          .from('.btn-hero2', { opacity: 0, y: 20, duration: 0.5 }, "-=0.3");

        // Animation for services section
        gsap.from('.services .box-serv , .box-serv ', {
            scrollTrigger: {
                trigger: '.services', // Section container
                start: 'top bottom', // Trigger animation when top of the section hits bottom of viewport
                end: 'bottom top', // End animation when bottom of the section hits top of viewport
                toggleActions: 'play none none reverse' // Animation plays once, then reverses on scroll up
            },
            opacity: 0,
            y: 90,
            duration: 1.7,
            stagger: 0.3
        });

        // Animation for big message section
        gsap.from('.message h1, .message p , .logoos , .final-sec   ', {
            scrollTrigger: {
                trigger: '.message',
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 1,
            stagger: 0.3
        });

        // Animation for futures section (example)
        gsap.from('.futures img , .imgg1 , .imgg2 ,  .imgg3 , .imgg4 , .imgg5 ', {
            scrollTrigger: {
                trigger: '.futures',
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.5,
            duration: 1,
            stagger: 0.3
        });

        // Optionally, play the timeline when the page loads
        tl.play();
});
