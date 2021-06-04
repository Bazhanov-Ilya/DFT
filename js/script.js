function DTF() {

    //Готовим диаграмму
    Diagram();
    Gistogram();



}

function Diagram() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        cubicInterpolationMode: 'monotone',
        data: {
            labels: [], //Подписи оси x
            datasets: [{
                    label: 'f(x)', //Метка
                    data: [], //Данные
                    borderColor: 'blue', //Цвет
                    borderWidth: 2, //Толщина линии
                    fill: false //Не заполнять под графиком
                }
                //Можно добавить другие графики
            ]
        },
        options: {
            responsive: false, //Вписывать в размер canvas
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    display: true
                }]
            }
        }
    });
    //Заполняем данными
    for (var x = 0; x <= 6; x += 0.1) {
        myChart.data.labels.push('' + x.toFixed(2));
        myChart.data.datasets[0].data.push(f(x).toFixed(2));
        //   window.alert(f(x).toFixed(2));
    }
    //Обновляем
    myChart.update();


}
//window.alert(document.getElementById('a_1').value * Math.sin(document.getElementById('b_1').value * Math.PI * document.getElementById('c_1').value)) + (document.getElementById('a_2').value * Math.sin(document.getElementById('b_2').value * Math.PI * document.getElementById('c_2').value)) + (document.getElementById('a_3').value * Math.sin(document.getElementById('b_3').value * Math.PI * document.getElementById('c_3').value));

function f(x) { //Вычисление нужной функции
    //window.alert(document.getElementById('a_1').value);
    //window.alert(Math.sin(document.getElementById('b_1').value * Math.PI * document.getElementById('c_1').value * x))
    //window.alert(document.getElementById('a_1').value * Math.sin(document.getElementById('b_1').value * Math.PI * document.getElementById('c_1').value));

    return (document.getElementById('a_1').value * Math.sin(document.getElementById('b_1').value * Math.PI * document.getElementById('c_1').value * x)) + (document.getElementById('a_2').value * Math.sin(document.getElementById('b_2').value * Math.PI * document.getElementById('c_2').value * x));
}

function Gistogram() {
    var ctx = document.getElementById("myChart2");
    var myChart = new Chart(ctx, {
        type: 'bar',
        cubicInterpolationMode: 'monotone',
        data: {
            labels: [], //Подписи оси x
            datasets: [{
                    label: 'f(x)', //Метка
                    data: [], //Данные
                    borderColor: 'blue', //Цвет
                    borderWidth: 2, //Толщина линии
                    fill: false //Не заполнять под графиком
                }
                //Можно добавить другие графики
            ]
        },
        options: {
            responsive: false, //Вписывать в размер canvas
            scales: {
                xAxes: [{
                    display: true
                }],
                yAxes: [{
                    display: true
                }]
            }
        }
    });
    //Заполняем данными
    for (var x = 0; x <= 30; x += 0.1) {
        myChart.data.labels.push('' + x.toFixed(1));
        myChart.data.datasets[0].data.push(f_g(x));
        //window.alert(f_g(x).toFixed(2));
    }
    //Обновляем
    myChart.update();


}
//window.alert(document.getElementById('a_1').value * Math.sin(document.getElementById('b_1').value * Math.PI * document.getElementById('c_1').value)) + (document.getElementById('a_2').value * Math.sin(document.getElementById('b_2').value * Math.PI * document.getElementById('c_2').value)) + (document.getElementById('a_3').value * Math.sin(document.getElementById('b_3').value * Math.PI * document.getElementById('c_3').value));

function f_g(x) { //Вычисление нужной функции
    //window.alert(document.getElementById('a_1').value);
    //window.alert(Math.sin(document.getElementById('b_1').value * Math.PI * document.getElementById('c_1').value * x))
    //window.alert(document.getElementById('a_1').value * Math.sin(document.getElementById('b_1').value * Math.PI * document.getElementById('c_1').value));
    var x_t;
    if (x == document.getElementById('c_1').value) {
        x_t = document.getElementById('a_1').value;
    } else if (x == document.getElementById('c_2').value) {
        x_t = document.getElementById('a_2').value;
    } else {
        x_t = 0;
    }
    return x_t;
    //  switch (x) {

    //      case (document.getElementById('a_1').value):
    //          window.alert("Прошло");
    //          return document.getElementById('c_1').value;
    //          break;

    //      case (document.getElementById('a_2').value):
    //          return document.getElementById('c_2').value;
    //          break;
    //      default:
    //          return 0;
    //          break;

}
//return (document.getElementById('a_1').value * Math.sin(document.getElementById('b_1').value * Math.PI * document.getElementById('c_1').value * x)) + (document.getElementById('a_2').value * Math.sin(document.getElementById('b_2').value * Math.PI * document.getElementById('c_2').value * x));


// function drawGraf() {
//     var canvas = document.getElementById('c1');
//     var ctx = canvas.getContext(`2d`);
//     var x = 0;
//     var timer;
//     y = 100 + 50 * ((document.getElementById('a_1') * Math.sin(document.getElementById('b_1') * Math.PI * document.getElementById('c_1'))) + (document.getElementById('a_2') * Math.sin(document.getElementById('b_2') * Math.PI * document.getElementById('c_2'))) + (document.getElementById('a_3') * Math.sin(document.getElementById('b_3') * Math.PI * document.getElementById('c_3'))));
//     x = x + 0.2;
//     ctx.fillRect(5 * x, y, 2, 2);
//     timer = setTimeout(drawGraf, 10)
// }