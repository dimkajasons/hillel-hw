Array.prototype.multiget = function () {
    var args = Array.apply(null, arguments);
    var result = [];
    for (var i = 0; i < args.length; i++) {
        result.push(this[args[i]]);
    }
    return result;
}

let Main = {
    fields: [],
    reset: function () {
        document.querySelectorAll('.field').forEach(function (el) {
            el.dataset.value = 'undefined';
            el.style.background = '';
        })
        this.fields = [];
        document.querySelector('.result').innerHTML = '';
    },
    checkZeroVin: function () {
        let localField = this.fields.slice();
        for (let i = 0; i < 9; i++) {
            if (localField[i] === '0') {
                localField[i] = Number(1);
            } else {
                localField[i] = 0;
            }
        }
        if (localField[0] == 1 && localField[1] == 1 && localField[2] == 1 || localField[3] == 1 && localField[4] == 1 && localField[5] == 1 ||
            localField[6] == 1 && localField[7] == 1 && localField[8] == 1 || localField[0] == 1 && localField[3] == 1 && localField[6] == 1 ||
            localField[1] == 1 && localField[4] == 1 && localField[7] == 1 || localField[2] == 1 && localField[5] == 1 && localField[8] == 1 ||
            localField[0] == 1 && localField[4] == 1 && localField[8] == 1 || localField[2] == 1 && localField[4] == 1 && localField[6] == 1) {
            document.querySelector('.result').innerHTML = 'Zero win!';
        }
    },
    checkCrossVin: function () {
        let localField = this.fields.slice();
        for (let i = 0; i < 9; i++) {
            if (localField[i] === '1') {
                localField[i] = Number(1);
            } else {
                localField[i] = 0;
            }
        }
        if (localField[0] == 1 && localField[1] == 1 && localField[2] == 1 || localField[3] == 1 && localField[4] == 1 && localField[5] == 1 ||
            localField[6] == 1 && localField[7] == 1 && localField[8] == 1 || localField[0] == 1 && localField[3] == 1 && localField[6] == 1 ||
            localField[1] == 1 && localField[4] == 1 && localField[7] == 1 || localField[2] == 1 && localField[5] == 1 && localField[8] == 1 ||
            localField[0] == 1 && localField[4] == 1 && localField[8] == 1 || localField[2] == 1 && localField[4] == 1 && localField[6] == 1) {
            document.querySelector('.result').innerHTML = 'Cross win!';
        }
    },
    stroke: function (field) {
        if (field.dataset.value == 'undefined') {
            field.dataset.value = +1;
            this.fields[field.dataset.number] = field.dataset.value;
            field.style.background = 'url(./img/cross.png)';
            field.style.backgroundSize = '100px';
        } else if (field.dataset.value == 1) {
            field.dataset.value = +0;
            this.fields[field.dataset.number] = field.dataset.value;
            field.style.background = 'url(./img/zero.png)'
            field.style.backgroundSize = '100px';
        } else if (field.dataset.value == 0) {
            this.fields[field.dataset.number] = field.dataset.value;
            field.dataset.value = 'undefined';
            field.style.background = ''
        }
        this.checkCrossVin();
        this.checkZeroVin();
    }
}


document.querySelectorAll('.field').forEach((el) =>
    el.addEventListener('click', function (e) {
        Main.stroke(e.target)
    })
)
document.querySelector('.reset-button').addEventListener('click', Main.reset.bind(Main))
