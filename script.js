let currentSection = 0;
  const sections = document.querySelectorAll('.section_scroll');
  let isScrolling = false;

  if (window.innerWidth <= 768) {
    mobileSection.style.display = 'block';
    sections.forEach(section => section.style.display = 'none');
  }




  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isScrolling) return;

    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      currentSection++;
    } else if (e.deltaY < 0 && currentSection > 0) {
      currentSection--;
    } else {
      return;
    }



    isScrolling = true;

    sections[currentSection].scrollIntoView({
      behavior: 'smooth'
    });

    setTimeout(() => {
      isScrolling = false;
    }, 700); // ⬅ длительность анимации (регулируй)
  }, { passive: false });


  gsap.registerPlugin(ScrollTrigger);

