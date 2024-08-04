let currentSlide = 0;
    const imageHeight = 250; // 每张图片的高度
    const totalImages = 6; // 图片总数

    function slide(direction) {
      const imagesContainer = document.querySelector('.images');
      currentSlide += direction;

      if (currentSlide < 0) {
        currentSlide = 0;
      } else if (currentSlide > totalImages - 3) {
        currentSlide = totalImages - 3;
      }

      imagesContainer.style.transform = `translateY(-${currentSlide * imageHeight}px)`;
    }