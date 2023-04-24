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

var observer2 = new IntersectionObserver((e) => {
    e.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add('workv');
        } else{
            entry.target.classList.remove('workv');
        }
    });
});

var hiddenWork = document.querySelectorAll('.work');
hiddenWork.forEach((el) => observer2.observe(el));


