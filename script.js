document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    const handleScroll = () => {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (boxTop < triggerPoint) {
                box.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
