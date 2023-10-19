document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const radio = document.getElementById('radio');
    const Vel = document.getElementById('Vel');
    const Car = document.getElementById('Car');
    const Sam = document.getElementById('Sam');

    FormChangeHandler();

    form.addEventListener('change', getFormValue);
    radio.addEventListener('change', FormChangeHandler);

    function FormChangeHandler(event) {
        if (Vel.checked) {
            document.getElementById('select').hidden = true;
            document.getElementById('checkbox').hidden = true;
        } else if (Car.checked) {
            document.getElementById('select').hidden = false;
            document.getElementById('checkbox').hidden = true;
        } else if (Sam.checked) {
            document.getElementById('select').hidden = true;
            document.getElementById('checkbox').hidden = false;
        }
    }

    function getFormValue(event) {
        event.preventDefault();
        const Number = form.querySelector('[name ="volume"]');
        const ProductType = form.querySelector('[name ="productType"]');
        const Result = form.querySelector('[name ="result"]');
        const CheckBox = form.querySelector('[name ="checkbox"]');
        
        if (Vel.checked) {
            Result.value = (Number.value * 30) + "$";
        } else if (Car.checked) {
            if (ProductType.value === 'first') Result.value = (500 * Number.value * 1.5) + "$";
            else if (ProductType.value === 'second') Result.value = (500 * Number.value * 0.9) + "$";
            else if (ProductType.value === 'third') Result.value = (500 * Number.value * 1.2) + "$";
            else Result.value = 'Выберите тип';
        } else if (Sam.checked) {
            if (CheckBox.checked) Result.value = (Number.value * 80 + 20) + "$";
            else Result.value = (Number.value * 80) + "$";
        }
    }
});
