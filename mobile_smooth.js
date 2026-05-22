const heddenSections = document.querySelectorAll('.scroll-reveal');

const options = {
  rootMargin: '20px',
  threshold: 0.20,
}

const callback = (entries, observer)=>{
     entries.forEach(element => {
         if(element.isIntersecting){
            element.target.classList.add('is-visible')
            observer.unobserve(element.target); 
         }
     });   
}

const observer = new IntersectionObserver(callback, options)

heddenSections.forEach(section =>{
    observer.observe(section)
})