# ide
micropython IDE


electron + yarn + serialPort + monacoEditor + blockly + micropython


esp32烧写固件
// 擦除
sudo esptool.py --chip esp32 --port /dev/cu.SLAB_USBtoUART erase_flash
// 烧写
sudo esptool.py --chip esp32 --port /dev/cu.SLAB_USBtoUART write_flash -z 0x1000 ~/Desktop/work/esp32-20180511-v1.9.4.bin
// 连接
picocom -b 115200 /dev/cu.SLAB_USBtoUART

import os
os.listdir(os.getcwd())
f = open('main.py', 'r')
f.read()
f.close()



os.remove()

http://www.52pi.net/archives/636







response = urequests.get('http://192.168.1.120:3000/getfs?id=fsdbhgrwh5&title=main&msg=def%20calc_sum(*args)%3A%0A%20%20%20%20ax%20%3D%200%0A%20%20%20%20for%20n%20in%20args%3A%0A%20%20%20%20%20%20%20%20ax%20%3D%20ax%20%2B%20n%0A%20%20%20%20return%20ax%0A%20%20%20%20%0Adef%20lazy_sum(*args)%3A%0A%20%20%20%20def%20sum()%3A%0A%20%20%20%20%20%20%20%20ax%20%3D%200%0A%20%20%20%20%20%20%20%20for%20n%20in%20args%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20ax%20%3D%20ax%20%2B%20n%0A%20%20%20%20%20%20%20%20return%20ax%0A%20%20%20%20return%20sum%0A%20%20%20%20')