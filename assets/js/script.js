window.addEventListener("DOMContentLoaded", (event) => {
    let is_run    = true;

    init();

    function init(){
       document.querySelector('.button').addEventListener('click', (event) => {
            is_run = !is_run
            if (document.querySelector('.button').classList.contains('pause')) {
                document.querySelector('.button').classList.remove('pause');
            } else {
                document.querySelector('.button').classList.add('pause');
            }
        });
    

        setInterval(function(){
            if (is_run) {
                let oDate = new Date();
                document.querySelector('#hours').innerHTML   = adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML = adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML = adjustTimer(oDate.getSeconds());

                document.querySelector('body').style.background = randomHexColor(
                    oDate.getHours(), oDate.getMinutes(), oDate.getSeconds()
                );
            }
        }, 1000);
    }

    function adjustTimer(timer) {
        return (timer < 10 ? '0' + timer : timer);
    }

    function randomHexColor(x, y, z){
        return "rgb(" + Math.floor(x/100 * 256) + "," + Math.floor(y/100 * 256) + "," + Math.floor(z/100 * 256) + ")";
    }
});