
pm2 是一个带有负载均衡功能的Node应用的进程管理器.
当你要把你的独立代码利用全部的服务器上的所有CPU，并保证进程永远都活着，0秒的重载， PM2是完美的。

# 安装

[地址](http://pm2.keymetrics.io/docs/usage/quick-start/)

```bash
npm install pm2 -g # 安装pm2
pm2 update #  更新pm2
pm2 uninstall pm2 # 移除pm2
```

```bash
$ pm2 start app.js # 启动app.js应用程序
$ pm2 start app.js -i 4 # cluster 模式启动4个app.js的应用实例 4个应用程序会自动进行负载均衡
$ pm2 start app.js -i 0 # 0 代表 cluster 模式启动的数量按 cpu 内核数

$ pm2 start app.js --name="api" # 启动应用程序并命名为 "api"
$ pm2 start app.js --watch # 监控文件夹，当文件变化时自动重启应用
$ pm2 start script.sh # 启动 bash 脚本

$ pm2 list # 列表 PM2 启动的所有的应用程序
$ pm2 monit # 显示每个应用程序的CPU和内存占用情况
$ pm2 show [app-name] # 显示应用程序的所有信息
$ pm2 show 0 # 查看执行编号为0的进程

$ pm2 logs # 显示所有应用程序的日志
$ pm2 logs [app-name] # 显示指定应用程序的日志
$ pm2 flush # 清洗所有的数据

$ pm2 stop all # 停止所有的应用程序
$ pm2 stop 0 # 停止 id为 0的指定应用程序
$ pm2 restart all # 重启所有应用 
$ pm2 reload all # 重启 cluster 模式下的所有应用 （每一个线程会等待在新的线程创建之后才会被终止掉，因此，当你在产品环境部署新的代码时，server会不间断地一直保持运行）
$ pm2 gracefulReload all # 所有应用优雅重启 （同上，不同的是它不会立即终止工作线程，而是通过IPC发送一个shutdown信号来关闭所有当前的连接并处理一些自定义的任务，然后再优雅地退出）
$ pm2 delete all # 关闭并删除所有应用
$ pm2 delete 0 # 删除指定应用 id 0
$ pm2 scale api 10 # 把名字叫api的应用扩展到10个实例
$ pm2 scale api +3 # 把名字叫api的应用再扩展3个实例
$ pm2 reset [app-name] # 重置重启数量

$ pm2 startup # 创建开机自启动命令
$ pm2 save # 保存当前应用列表
$ pm2 resurrect # 重新加载保存的应用列表
$ pm2 update # Save processes, kill PM2 and restore processes
$ pm2 generate # Generate a sample json configuration file

$ pm2 start big-array.js --max-memory-restart 20M # 内存使用超过上限自动重启

# 执行用其他语言编写的app (fork模式):
$ pm2 start my-bash-script.sh    -x --interpreter bash
$ pm2 start my-python-script.py -x --interpreter python
```

# 目录结构： 
- $HOME/.pm2 
- $HOME/.pm2/logs 应用日志
- $HOME/.pm2/pids 应用进程id
- $HOME/.pm2/pm2.log PM2日志
- $HOME/.pm2/pm2.pid PM2进程id
- $HOME/.pm2/rpc.sock Socket远程命令
- $HOME/.pm2/pub.sock Socket公开事件
- $HOME/.pm2/conf.js PM2配置
