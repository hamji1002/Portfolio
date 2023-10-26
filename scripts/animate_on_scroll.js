const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {threshold: 0.5});

const elements = document.querySelectorAll('.scroll-animation');
elements.forEach(el => {
    observer.observe(el);
});
