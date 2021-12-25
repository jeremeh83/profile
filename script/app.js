
class FadeAuto {
    constructor(){
        this.fadeObjects = document.querySelectorAll('.fadeAuto');
        this.fadeHeaderObjects = document.querySelectorAll('.fadeAuto.header');
    }
    fadeAll() {
        this.fadeObjects.forEach((object) => {

            object.addEventListener('mouseenter', () => {
                object.classList.add('active');
            });
            object.addEventListener('mouseleave', () => {
                object.classList.remove('active');
            });
        });

        this.fadeHeaderObjects.forEach((object) => {

            document.addEventListener('scroll', () => {
                object.classList.add('active');           
                
                setTimeout(() => {
                    object.classList.remove('active');
                },2000);
            
            });
        
        });

    }
}


const fadeAuto = new FadeAuto();
fadeAuto.fadeAll();