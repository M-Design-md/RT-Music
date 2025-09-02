// יצירת פסים במקום נקודות
//const particles = document.getElementById('particles');
//for(let i=0;i<80;i++){
//    let bar = document.createElement('div');
//    bar.classList.add('particle');
//    bar.style.left = `${Math.random()*100}%`;
//    bar.style.top = `${Math.random()*100}%`;
//    bar.style.height = `${Math.random()*40+20}px`; // כל פס בגובה שונה
//    bar.style.width = `${Math.random()*3+2}px`;   // רוחב אקראי קטן
//    bar.style.backgroundColor = `rgba(255,255,255,${Math.random()*0.8+0.2})`;
//    bar.style.animationDuration = `${Math.random()*4+3}s`;
//    particles.appendChild(bar);
//}

// כפתור חזרה לראש הדף
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', ()=>{
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
backToTop.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior:"smooth"});
});

// Contact form submission
//document.getElementById('contact-form').addEventListener('submit', function(e){
//    e.preventDefault();
//    document.getElementById('form-message').innerText = "תודה! ההודעה נשלחה בהצלחה.";
//    this.reset();
//});


(function() {
  emailjs.init("LxrXygSq6DEh9IMAF"); // המפתח מהאתר
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_k35chcc", "template_zgnzlgb", this)
    .then(() => {
      alert("ההודעה נשלחה בהצלחה!");
    }, (error) => {
      alert("שגיאה בשליחה: " + JSON.stringify(error));
    });
});


//עכבר
 const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  // מזיז את הפס הלבן הקבוע לפי חלון הדפדפן
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  // יוצר פס שובל
  const line = document.createElement('div');
  line.className = 'trail-line';
  line.style.left = e.clientX + 'px';
  line.style.top = e.clientY + 'px';

  // גובה רנדומלי כמו סאונד
  const randomHeight = 10 + Math.random() * 40;
  line.style.height = randomHeight + 'px';

  document.body.appendChild(line);

  // מסיר אחרי שהאנימציה נגמרת
  setTimeout(() => line.remove(), 700);
});

//פתיח
  const intro = document.getElementById('intro');
  const numStripes = 20; // מספר הרצועות
  const baseColor = { r: 62, g: 48, b: 78 }; // צבע בסיס
  const colorVariation = 30; // שונות בגוון

  // יוצרים את הרצועות
  for(let i=0; i<numStripes; i++){
    const stripe = document.createElement('div');
    stripe.classList.add('stripe');

    // צבע רנדומלי בגוונים שונים
    const r = baseColor.r + Math.floor(Math.random()*colorVariation);
    const g = baseColor.g + Math.floor(Math.random()*colorVariation);
    const b = baseColor.b + Math.floor(Math.random()*colorVariation);
    stripe.style.backgroundColor = `rgb(${r},${g},${b})`;

    intro.appendChild(stripe);

    // אנימציה עם עיכוב רנדומלי
    setTimeout(() => {
      stripe.classList.add('animate');
    }, Math.random()*1000);
  }

  // אחרי האנימציות, הכל מתאחד לצבע אחיד
  setTimeout(() => {
    document.querySelectorAll('.stripe').forEach(stripe => {
      stripe.classList.add('final');
    });

    // אחרי שניה נוספת, להראות את התוכן
    setTimeout(() => {
      intro.style.display = 'none';
      document.getElementById('content1').style.display = 'block';
    }, 1000);

  }, 3000); // זמן לפני שהכל מתאחד
