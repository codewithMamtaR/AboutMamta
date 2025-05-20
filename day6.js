window.onload=function()
{
    alert("Welcome to Mamta's Personal Website");
};
function changeAboutMeText()
{
    const aboutMeTexts=["programmer","teacher","full stack web developer"];
    const typingSpeed=400;//ms per char 100
    const eraseSpeed=500;//50
    const pauseTime=400;
    const aboutMeElement=document.querySelector('.about-me')

    let textIndex=0;
    let charIndex=0;
    let isDeleting=false;

    function type()
    {
        const currentText=aboutMeTexts[textIndex];
        //typing
        if (!isDeleting && charIndex<currentText.length)
        {
            aboutMeElement.textContent+=currentText[charIndex];
            charIndex++;
            setTimeout(type,typingSpeed);
        }//erasing
        else if(isDeleting && charIndex>0)
        {
            aboutMeElement.textContent=currentText.substring(0,charIndex-1);
            charIndex--;
            setTimeout(type,eraseSpeed);
        }//switching the deleting or typing process
        else{
            isDeleting=!isDeleting;
            if(!isDeleting)
            {
                textIndex=(textIndex+1)%aboutMeTexts.length;
            }
            setTimeout(type,pauseTime);
        }
    }
    type();
}
document.addEventListener('DOMContentLoaded',function(){
    const darkmodetoggle=document.getElementById('dark-mode-toggle');
    const body=document.body;

    darkmodetoggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentmode=body.classList.contains('dark-mode')?'Dark':'Light';

        darkmodetoggle.querySelector('i').classList.toggle('fa-sun');
        darkmodetoggle.querySelector('i').classList.toggle('fa-moon');
        darkmodetoggle.querySelector('i').classList.toggle('light-mode');
    });
});

changeAboutMeText();
document.addEventListener('DOMContentLoaded',function(){
    const observer=new IntersectionObserver( entries => {
        entries.forEach( entry => {
            if (entry.isIntersecting){
                const progressbar=entry.target.querySelector('.progress-bar');
                const progress=progressbar.dataset.progress;
                progressbar.style.setProperty('--progress',`${progress}%`);
                progressbar.classList.add('animated');//add a class to trigger animation
                observer.unobserve(entry.target);//stop observing once animation is triggered

            }
        });
    });
    const pl=document.querySelectorAll('#prglangs .skill');
    pl.forEach(skill=>{
        observer.observe(skill);
    });
});