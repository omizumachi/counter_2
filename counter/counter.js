(()=>{
    const $counter = document.getElementById("js-counter");

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCounter = parseInt($counter.textContent,10);
        console.log($targetButton.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCounter +1;
        }else if($targetButton.textContent === "+10"){
            $counter.textContent = currentCounter +10;
        }else if($targetButton.textContent === "-10"){
            $counter.textContent = currentCounter -10;
        }else{$counter.textContent = currentCounter -1;}

        updateColor(parseInt($counter.textContent, 10));
    }

    for(let index = 0;index < document.getElementsByClassName("js-button").length;index++){
        document.getElementsByClassName("js-button")[index].addEventListener("click",(e)=> clickHandler(e));
    }
    function updateColor(value) {
        const counter = document.getElementById("js-counter");
        if (value > 0) {
            counter.style.color = 'blue';
        } else if (value < 0) {
            counter.style.color = 'red';
        } else {
            counter.style.color = 'black';
        }
    }

})();
