const tresholdInput = document.querySelector('#treshold > input');
let bonus = document.getElementById("bonus");
let funnyImage = document.getElementById('image');

function bonusCalculator(money) {
    money = Number(money);
    let bonus_sum = 0;
    if (money < 10000) return bonus_sum;
    money -= 10000;

    if (money >= 15000) {
        bonus_sum += (15_000 * 0.05);
        money -= 15_000;
    } else {
        bonus_sum += (money * 0.05);
        money = 0;
    }

    let factor = 0.1;
    while (money && factor < 0.3) {
        if (money >= 10000) {
            bonus_sum += (10_000 * factor);
            money -= 10_000;
        } else {
            bonus_sum += (money * factor);
            money = 0;
        }
        factor += 0.05;
    }
    console.log(factor);
    bonus_sum += (money * 0.25);
    return bonus_sum.toFixed(2);
}

function setImage(bonusAmount) {
    if (bonusAmount === 0) {
        funnyImage.src = 'images/work_brit.gif'
    } else if (bonusAmount > 0 && bonusAmount < 1000) {
        funnyImage.src = 'images/its_something.jpg'
    } else if (bonusAmount >= 1000 && bonusAmount < 8000) {
        funnyImage.src = 'images/jp2.gif'
    } else if (bonusAmount >= 8000) {
        funnyImage.src = 'images/kim_money.gif'
    }
}

tresholdInput.addEventListener('input', function () {
    let justTest = bonusCalculator(tresholdInput.value);
    bonus.innerHTML = justTest;
    setImage(justTest);
});
