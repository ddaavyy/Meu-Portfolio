var observer = new IntersectionObserver((e) => {
    e.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

var hiddenText = document.querySelectorAll('.hidden');
hiddenText.forEach((el) => observer.observe(el));

function menuAparecer() {
    const aparecerMenu = document.querySelector('.botao');
    aparecerMenu.classList.toggle('aparecer')
}