# ide
micropython IDE


electron + yarn + serialPort + monacoEditor + blockly + micropython


esp32烧写固件
// 擦除
sudo esptool.py --chip esp32 --port /dev/cu.SLAB_USBtoUART erase_flash
// 烧写
sudo esptool.py --chip esp32 --port /dev/cu.SLAB_USBtoUART write_flash -z 0x1000 ~/Downloads/esp32-20180511-v1.9.4.bin
// 连接
picocom -b 115200 /dev/cu.SLAB_USBtoUART

import os
os.listdir(os.getcwd())
f = open('boot.py', 'r')
f.read()
f.close()



os.remove()

http://www.52pi.net/archives/636