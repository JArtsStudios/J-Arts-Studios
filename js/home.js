const cursor = document.querySelector('.cursor-custom');
const cards = document.querySelectorAll('.card');

let activeCard = null;

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        activeCard = card;
        cursor.style.display = 'block';
        cursor.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        activeCard = null;
        cursor.style.display = 'none';
        cursor.classList.remove('active');
    });
});

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

let lastX = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {

    // suavizado (inercia tipo gravedad)
    posX += (mouseX - posX) * 0.18;
    posY += (mouseY - posY) * 0.18;

    // velocidad horizontal (para deformación)
    const speedX = mouseX - lastX;
    lastX = mouseX;

    const stretch = Math.min(Math.abs(speedX) * 0.03, 0.6);

    const scaleX = 1 + stretch;
    const scaleY = 1 - stretch * 0.4;

    cursor.style.left = posX + 'px';
    cursor.style.top = posY + 'px';

    if (!activeCard) {
        cursor.style.transform =
            `translate(-50%, -50%) scale(${scaleX}, ${scaleY})`;
    } else {

        const rect = activeCard.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle =
            Math.atan2(
                mouseY - centerY,
                mouseX - centerX
            ) * 180 / Math.PI;

        cursor.style.transform =
            `translate(-50%, -50%)
             rotate(${angle}deg)
             scale(${scaleX * 1.2}, ${scaleY * 1.2})`;
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();















const pill = document.querySelector('.cursor-pill');

// URLs por ID
const urls = {
  lasendaweb: "https://milasendahn.org/",
  ebenezersrcweb: "https://ebenezersrc.org/inicio/",
  ebenezerzacapaweb: "https://ebenezerzacapa.org/",
  rustide: "https://jartsstudio.itch.io/rustide-alpha"
};

// mover capsula con el mouse
document.addEventListener('mousemove', (e) => {
  pill.style.left = e.clientX + 'px';
  pill.style.top = e.clientY + 'px';
});

// aplicar eventos a cada ID
Object.keys(urls).forEach(id => {
  const el = document.getElementById(id);

  if (!el) return;

  el.style.cursor = "pointer";

  el.addEventListener('mouseenter', () => {
    pill.textContent = urls[id];
    pill.style.opacity = 1;
  });

  el.addEventListener('mouseleave', () => {
    pill.style.opacity = 0;
  });

  el.addEventListener('click', () => {
    window.location.href = urls[id];
  });
});









const dcards = document.querySelectorAll(".dcard");

dcards.forEach(dcard => {

    dcard.addEventListener("mousemove", (e) => {

        const rect = dcard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 12;
        const rotateX = ((centerY - y) / centerY) * 12;

        dcard.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.2)
        `;
    });

    dcard.addEventListener("mouseleave", () => {
        dcard.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });

});









(() => {
  const bubble = document.querySelector(".cursor-bubble");

  let mouseX = 0;
  let mouseY = 0;

  let posX = 0;
  let posY = 0;

  let lastX = 0;

  let blocked = false;

  // detectar si estás sobre zona bloqueada
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const el = document.elementFromPoint(mouseX, mouseY);

    blocked = !!el?.closest(".burbujacursor");

    // invertir lógica: si estás en burbujacursor → ocultar
    bubble.style.opacity = blocked ? "0" : "1";
  });

  function animate() {

    if (!blocked) {

      posX += (mouseX - posX) * 0.18;
      posY += (mouseY - posY) * 0.18;

      const speedX = mouseX - lastX;
      lastX = mouseX;

      const stretch = Math.min(Math.abs(speedX) * 0.03, 0.6);

      const scaleX = 1 + stretch;
      const scaleY = 1 - stretch * 0.5;

      bubble.style.transform =
        `translate(${posX}px, ${posY}px)
         translate(-50%, -50%)
         scale(${scaleX}, ${scaleY})`;
    }

    requestAnimationFrame(animate);
  }

  animate();
})();


document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los botones de descarga
    const downloadButtons = document.querySelectorAll('.btn-download');

    downloadButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = button.getAttribute('data-product');
            const fileUrl = button.getAttribute('href');
            
            console.log(`Descarga iniciada para: ${productName} (${fileUrl})`);
            
            // Si el enlace sigue siendo '#' (aún no configurado), evitamos que recargue y avisamos
            if (fileUrl === '#') {
                event.preventDefault();
                alert(`Configura la URL de descarga para ${productName} en el archivo HTML.`);
            }
            // Si tiene una ruta real (como './files/tu-plugin.zip'), el navegador lo descargará solo.
        });
    });
});


