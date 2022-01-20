var btn = document.querySelector("#topo");

window.addEventListener('scroll', (event) => {
    var scroll = this.scrollY;

    if(scroll > 0){
        document.getElementById('topo').style.display = 'block'
    }
    else{
        document.getElementById('topo').style.display = 'none'
    }

});

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});