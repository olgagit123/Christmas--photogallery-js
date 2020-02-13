function imageGallery() {
    const highlight = document.querySelector(".gallery-highlight");
    const preview = document.querySelectorAll(".photo-preview img");

    preview.forEach(preview => {
        preview.addEventListener('click', function() {
            console.log(this);
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src = bigSrc;
            console.log(bigSrc);
            // previews.forEach(preview => preview.classList.remove('photo-active'));
            preview.classList.add("photo-active");
        });
    });
}

imageGallery();