
## 1. ubuntu 允许远程桌面共享

系统-》首选项-》桌面共享，或者直接搜索 桌面共享：

- 共享
    - 允许其他人查看你的桌面   `V`
        - 运行其他用户控制你的桌面  `V`
- 安全
    - 必须对本机器的每次访问进行确认   `X   取消！`
    - 要求远程用户输入此密码   `V`
- 显示通知区域图标
    - 只在其他人连接时

## 2. ubuntu 安装 vncserver

```bash
sudo apt-get install xrdp vnc4server xbase-clients
```

## 3. ubuntu 安装 dconf-editor

```bash
sudo apt-get install dconf-editor
```

## 4. ubuntu dconf-editor 配置

在桌面搜索dconf-editor打开， 依次展开org->gnome->desktop->remote-access，然后取消 “requlre-encryption”的勾选即可。

## 5. 远程连接 Ubuntu 16.04

下载 [VNC Viewer客户端](https://www.realvnc.com/en/connect/download/viewer) 进行访问， 或者 通过 Windows 自带远程桌面控制(mstsc)进行访问
