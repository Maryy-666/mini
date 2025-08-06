let scale = 1;

function reply(answer) {
  const yesButton = document.querySelector('.yes-btn');
  const noButton = document.querySelector('.no-btn');

  if (answer === "Evet") {
    // Sayfanın içeriğini değiştir, mesaj göster
    document.body.innerHTML = `
      <div class="full-screen-yes">
        🖤💖🖤 BEN DE SENİ ÇOK SEVİYORUM SEVGİLİMMMMMM 🖤💖🖤
      </div>
    `;
  } else {
    // Her Hayır tıklamasında Evet büyür, Hayır küçülür
    scale += 0.2;

    yesButton.style.transform = `scale(${scale})`;

    const newNoScale = 1 - (scale - 1);
    if (newNoScale > 0) {
      noButton.style.transform = `scale(${newNoScale})`;
    } else {
      noButton.style.display = "none";
    }

    // Evet butonu çok büyürse yine ekranı kaplasın
    if (scale >= 5) {
      document.body.innerHTML = `
        <div class="full-screen-yes">
          🖤 BEN DE SENİ ÇOK SEVİYORUM SEVGİLİMMMMMM 🖤
        </div>
      `;
    }
  }
}
