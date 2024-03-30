const inputs = document.querySelectorAll('.tip_card input');
const tip_btns = document.querySelectorAll('.tip_percentage');

inputs.forEach(el => {
    el.addEventListener('input', () => {
    let value = el.value;
    if (!isNaN(Number(value)) && parseFloat(value) > 0){
        el.classList.remove("error")
    } else{
        el.classList.add("error")
    }
    calculateTip()
  })
});

tip_btns.forEach(el => {
    el.addEventListener('click', (e) => {
        tip_btns.forEach(btn => {
            btn.classList.remove("clicked");
        });
        e.target.classList.add("clicked");
    })
});

function getTip(){
    let tip = parseFloat(document.getElementById('custom_tip').value);
    if (isNaN(tip)){
            try {
                tip = parseInt(document.querySelector('.clicked').innerHTML.slice(0, -1));
            } catch (error) {
                return 0
            }
    }
    return tip
}

  
function calculateTip(){
    let errors = 3
    inputs.forEach(e => {
        if (!e.classList.contains('error')) {
            errors -= 1
        }
    });
    if (errors == 0){
        const bill = parseFloat(document.getElementById('bill').value);
        const people = parseInt(document.getElementById('number_of_people').value);
        const tip = getTip();
        if (bill && people && tip) {
            document.getElementById('final_tip').innerHTML = ((bill * tip / 100) / people).toFixed(2)
            document.getElementById('final_amount').innerHTML = ((bill * tip / 100) + bill).toFixed(2)
        }
    }
}
