let serialport = require('serialport');
let port = null;
serialport.list((err, ports) => {
    let sid = document.getElementById('disabledSelect')
    for (let item of ports) {
        // $('.com').append(`<option>${item.comName}</option>`)
        sid.options[sid.options.length]=new Option(item.comName);
    }
});

// 连接
$('.btn-submit').click((data) => {
    let COM = $('select option:selected').text();
    let BaudRate = $('#BaudRate').val();
    console.log(COM);
    console.log(BaudRate);
    port = new serialport(COM, {
        baudRate: parseInt(BaudRate)
    });
    $('.receive-windows').text(`打开串口: ${COM}, 波特率: ${BaudRate}`);
    $('.receive-windows').append('<br/>=======================================<br/>');
    port.on('data', data => {
        console.log(`DATA: ${data}`);
        $('.receive-windows').append(data.toString());
        $('.receive-windows').append('<br/>');
    });
});
// 点击发送信息
$('.btn-send').click(() => {
    var sendData = $('.input-send-data').val() + '\r\n';
    if (port != {} && port != null) {
        console.log(`SendData: ${sendData}`);
        port.write(sendData);
    }
})
// 清空信息
$('.btn-reset').click(() => {
    $('.input-send-data').val('');
})

