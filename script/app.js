
class FadeAuto {
    constructor(){
        this.fadeObjects = document.querySelectorAll('.fadeAuto');
        this.fadeHeaderObjects = document.querySelectorAll('.fadeAuto.header');
        this.mouseover = null;
    }
    fadeAll() {
        this.fadeObjects.forEach((object) => {

            object.addEventListener('mouseenter', () => {
                object.classList.add('active');
                this.mouseover = true;
            });
            object.addEventListener('mouseleave', () => {
                object.classList.remove('active');
                this.mouseover = false;
            });
        // });

        // this.fadeHeaderObjects.forEach((object) => {

            document.addEventListener('scroll', () => {
                object.classList.add('active');           
                
                
                setTimeout(() => {
                    if (!this.mouseover){
                    object.classList.remove('active');
                    };
                },2000);
            
            
            });
        
        });

    }
}


const fadeAuto = new FadeAuto();
fadeAuto.fadeAll();
