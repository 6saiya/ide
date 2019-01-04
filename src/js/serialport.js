let serialport = require('serialport');
let port = null;
serialport.list((err, ports) => {
    let sid = document.getElementById('disabledSelect')
    for (let item of ports) {
        // $('.com').append(`<option>${item.comName}</option>`)
        sid.options[sid.options.length] = new Option(item.comName);
    }
});

let serialportstring = ''

// 连接
$('.btn-submit').click((data) => {
    let COM = $('select option:selected').text();
    let BaudRate = $('#BaudRate').val();
    console.log(`打开串口: ${COM}, 波特率: ${BaudRate}`);
    port = new serialport(COM, {
        baudRate: parseInt(BaudRate)
    });
    $('.receive-windows').text(`打开串口: ${COM}, 波特率: ${BaudRate}`);
    $('.receive-windows').append('<br/>=======================================<br/>');
    port.on('data', data => {
        // console.log(`DATA: ${data}`);
        // $('.receive-windows').append(data.toString());
        // $('.receive-windows').append('<br/>');
        // console.log(`${data}`)
        serialportstring += `${data}`
        mpydao.reflashFileList()
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

let mpydao = {
    // 刷新文件列表
    readfile: function () {
        serialportstring = ''
        port.write('import os\r\n')
        port.write('os.listdir("/")\r\n')
    },
    // 刷新文件列表
    reflashFileList: function () {
        // console.log(serialportstring)
        if (serialportstring.slice(15, 25) == 'os.listdir' &&
            serialportstring.slice(serialportstring.length - 7, serialportstring.length - 6) == ']') {
            let arr = serialportstring.split('')
            let startflag = arr.indexOf('[')
            let endflag = arr.indexOf(']')
            let fArr = []
            for (let i = startflag + 1; i < endflag; i++) {
                fArr.push(arr[i])
            }
            let s = fArr.join('')
            fArr = s.split(',')
            s = ''
            for (let i = 0; i < fArr.length; i++) {
                s += `<div class = 'floderdiv' id = 'floderdiv${i}' >${fArr[i]}</div>`
            }
            document.getElementById("floderList").innerHTML = s
            serialportstring = ''
        }
    },
    // 上传文件
    savefile: function () {
        let name = 'd.py',
            v = editor.getValue()
        port.write(`f=open('${name}','w')\r\n`)
        setTimeout(function () {
            console.log(serialportstring)
            port.write(`f.write('${v}')\r\n`)
        }, 100)
        setTimeout(function () {
            console.log(serialportstring)
            port.write(`f.close()\r\n`)
        }, 200)
        setTimeout(function () {
            console.log(serialportstring)
            serialportstring = ''
        }, 300)
    },

    runfile: function () {
        this.readfile()
    },

    deletefile: function (filename) {
        console.log(filename)
    }

}

document.getElementById("filebutton").addEventListener("click", mpydao.readfile);
document.getElementById("upbutton").addEventListener("click", mpydao.savefile);