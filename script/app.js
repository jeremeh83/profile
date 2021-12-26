
class FadeHeader {
    constructor(){
        this.fadeHeaderObjects = document.querySelectorAll('.fadeHeader');
        this.mouseover = null;
    }
    fade() {
        this.fadeHeaderObjects.forEach((object) => {

            this.fadeTimer(object);

            object.addEventListener('mouseenter', () => {
                object.classList.add('active');
                this.mouseover = true;
            });
            object.addEventListener('mouseleave', () => {
                object.classList.remove('active');
                this.mouseover = false;
            });
    
            document.addEventListener('scroll', () => {
                object.classList.add('active');      
                
                
                this.fadeTimer(object);
            
            
            });
        
        });

    }
    fadeTimer(object) {
        setTimeout(() => {
            if (!this.mouseover){
            object.classList.remove('active');
             };
        },2000);
    }
}

class FadeAuto {
    constructor(){
        this.fadeObjects = document.querySelectorAll('.fadeAuto');
        this.fadeHeaderObjects = document.querySelectorAll('.fadeAuto.header');
        this.mouseover = null;
    }
    fade() {
        this.fadeObjects.forEach((object) => {

            object.addEventListener('mousemove', () => {
                this.fadeAll();
                object.classList.add('active');
                this.mouseover = true;
            });

            object.addEventListener('mouseleave', () => {
                this.showAll();
                this.mouseover = false;
            });

            // document.addEventListener('scroll', () => {
            //     object.classList.add('active');
            
            // });
        
        })

    }
    fadeAll() {
        this.fadeObjects.forEach((object) => {
            object.classList.remove('active');
        })
    }
    showAll() {
        this.fadeObjects.forEach((object) => {
            object.classList.add('active');
        })
    }
}


const fadeAuto = new FadeAuto();
fadeAuto.fade();

const fadeHeader = new FadeHeader();
fadeHeader.fade();

document.querySelector('#projects').addEventListener('onfocus', () => {
    console.log('triggered')
})
