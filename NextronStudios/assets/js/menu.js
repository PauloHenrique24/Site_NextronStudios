var x = false;

function open_burguer(){
    var menu = document.getElementById('burg').style;
    var linha1 = document.getElementById('linha1').style;
    var linha2 = document.getElementById('linha2').style;
    var linha3 = document.getElementById('linha3').style;
    
    if(x){
        // closed
        menu.transform = 'translateX(130px)';
        menu.opacity = '0';
        menu.transition = 'all .5s';

        linha1.transform = 'translate3d(0,-8px,0)';
        // linha1.backgroundColor = 'white';
        
        linha2.transform = 'translate3d(0,0,0)';
        // linha2.backgroundColor = 'white';
        linha2.opacity = '1';

        linha3.transform = 'translate3d(0,8px,0)';
        // linha3.backgroundColor = 'white';


    }else{
        // open
        menu.transform = 'translateX(0)';
        menu.opacity = '1';

        linha1.transform = 'translate3d(0,0,0)rotate(45deg)';
        // linha1.backgroundColor = 'var(--gold)';

        linha2.transform = 'translate3d(0,0,0)scale(0.1,1.0)';
        // linha2.backgroundColor = 'var(--gold)';
        linha2.opacity = '0';

        linha3.transform = 'translate3d(0,0,0)rotate(-45deg)';
        // linha3.backgroundColor = 'var(--gold)';

    }

    x = !x;
}