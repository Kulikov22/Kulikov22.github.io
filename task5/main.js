document.addEventListener("DOMContentLoaded", function () {
    function isNotInteger(getCount) {
        return /^\d+$/.test(getCount) && parseInt(getCount) !== 0;
    }
        function calc(event){
            let getProduct=document.getElementById("product").value;
            let getCount=document.getElementById("volume").value;
            if(!isNotInteger(getCount))
            {
                window.alert("Значение введено некорректно");
                 return;
            }
            let FinalPrice = getCount * getProduct;
            document.getElementById("total").innerText = FinalPrice;
            event.preventDefault();
        }
        document.getElementById("calculateButton").addEventListener("click", calc);
});