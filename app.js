const thresholdInput = document.querySelector('#treshold > input');
let bonus = document.getElementById("bonus");
let funnyImage = document.getElementById('image');

function bonusCalculator(money) {
    money = Number(money);
    let bonusSum = 0;
    if (money < 10000) return bonusSum;
    money -= 10000;

    if (money >= 15000) {
        bonusSum += (15000 * 0.05);
        money -= 15000;
    } else {
        bonusSum += (money * 0.05);
        money = 0;
    }

    let factor = 0.1;
    while (money && factor < 0.3) {
        if (money >= 10000) {
            bonusSum += (10000 * factor);
            money -= 10000;
        } else {
            bonusSum += (money * factor);
            money = 0;
        }
        factor += 0.05;
    }
    console.log(factor);
    bonusSum += (money * 0.25);
    return bonusSum.toFixed(2);
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

thresholdInput.addEventListener('keyup', function () {
    let bonusAmount = bonusCalculator(thresholdInput.value);
    bonus.innerHTML = bonusAmount;
    setImage(bonusAmount);
});
