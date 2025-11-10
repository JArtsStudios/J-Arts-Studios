function selectPlan(plan, price) {
    alert(`You have selected the ${plan} plan which costs $${price}`);
}



  const imageElement = document.querySelector('.laptop-img');
  const frames = [
    '../img/Asus.png',
    '../img/Asus2.png',
    '../img/Asus3.png',
    '../img/Asus4.png',
    '../img/Asus5.png',
    '../img/Asus6.png',
    '../img/Asus7.png',
    '../img/Asus8.png',
    '../img/Asus9.png',
    '../img/Asus10.png',
    '../img/Asus11.png',
    '../img/Asus12.png',
    '../img/Asus13.png'
  ];

  let index = 0;
  let hasPlayed = false; // Para evitar que se repita si ya se animó una vez

  const animateFrames = () => {
    if (index < frames.length) {
      imageElement.src = frames[index];
      index++;
      setTimeout(animateFrames, 100); // Ajusta la velocidad
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasPlayed) {
        animateFrames();
        hasPlayed = true;
      }
    });
  }, {
    threshold: 0.6 // Empieza cuando el 50% de la imagen es visible
  });

  observer.observe(imageElement);



document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('mousemove', (e) => {
        const tarjetaRect = tarjeta.getBoundingClientRect();
        const tarjetaCentroX = tarjetaRect.left + tarjetaRect.width / 2;
        const tarjetaCentroY = tarjetaRect.top + tarjetaRect.height / 2;
        const anguloX = (e.clientY - tarjetaCentroY) / 10;
        const anguloY = (e.clientX - tarjetaCentroX) / -10;

        tarjeta.style.transform = `rotateX(${anguloX}deg) rotateY(${anguloY}deg)`;
    });

    tarjeta.addEventListener('mouseleave', () => {
        tarjeta.style.transform = 'rotateX(0) rotateY(0)';
    });
});






const circle = document.getElementById('circle');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const updateCirclePosition = () => {
    const currentX = parseFloat(circle.style.left) || mouseX;
    const currentY = parseFloat(circle.style.top) || mouseY;

    const dx = (mouseX - currentX) * 0.1;
    const dy = (mouseY - currentY) * 0.1;

    circle.style.left = (currentX + dx) + 'px';
    circle.style.top = (currentY + dy) + 'px';

    requestAnimationFrame(updateCirclePosition);
};

updateCirclePosition();




