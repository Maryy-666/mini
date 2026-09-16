let scale = 1;

function reply(answer) {
    const yesButton = document.querySelector(".yes-btn");
    const noButton = document.querySelector(".no-btn");

    if (answer === "Evet") {
        document.body.innerHTML = `
            <div class="full-screen-yes">
                💗💖 BEN DE SENİ ÇOK SEVİYORUM 💖💗
            </div>
        `;
        return;
    }

    if (answer === "Hayır") {
        scale += 0.2;

        yesButton.style.transform = `scale(${scale})`;

        const newNoScale = Math.max(0, 1 - (scale - 1));

        if (newNoScale > 0) {
            noButton.style.transform = `scale(${newNoScale})`;
        } else {
            noButton.style.display = "none";
        }
    }

    // Evet butonu çok büyüdüğünde ekranı değiştir
    if (scale >= 5) {
        document.body.innerHTML = `
            <div class="full-screen-yes">
                💗 BEN DE SENİ ÇOK SEVİYORUM 💗
            </div>
        `;
    }
}
