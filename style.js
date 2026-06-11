document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('footer img');
    images.forEach(img => {
        img.addEventListener('mousedown', function() {
            this.classList.add('zoomed');
        });
        img.addEventListener('mouseup', function() {
            this.classList.remove('zoomed');
        });
        img.addEventListener('mouseleave', function() {
            this.classList.remove('zoomed');
        });
    });
});