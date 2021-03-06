
## 命名均要有指导含义，以期`信达雅`

## JS 编码风格以 standard 为标准

- `变量`以`小驼峰`命名（首位小写，缩写除外）
- 两个空格作为代码缩进
- 保留字前后空格分隔开
- 语句结束不用写分号

## 数据库表/栏位命名

- 简体为主
- `SCHEMA` 和`表`及`栏位`以`大驼峰`命名（首位大写）
- 表默认设置`CreateAt`和`CreateBy`栏位
- 避免栏位在多表中冗余
- 避免栏位缺失（没有记录，需要逻辑才能体现）

## 应用目录使用

- `config` 配置文件
- `controller` 调用业务逻辑，装配请求/响应的上下文
  - **简单(基础资料CRUD) 或者 无复用价值(复杂查询)的逻辑也放进来**
- `router` 调用控制器，制定 URI 
- `middleware` 中间件（面向切面）
- `service` 业务逻辑函数 
  - **能复用的函数**
- `lib` 共用功能函数
- `log` 存储日志

## 代码复用

- 通过中间件，分离系统专注点。如： 异常抛出、鉴权、校验等
- 避免大的事务，业务模组之间建立`消息机制`，非实时事务放在后台稍后做。
- `函数`为中心，业务函数细粒化后再拼装使用，以期最大化代码（函数）复用。
  - ……数据库事务是OK的！
- 避免产生冗余数据的逻辑。如：一个状态写几个相关表。
  - 后台逻辑事务保障不是用户的关注点
  - 是否用户需要的是业务进度追踪功能
- 前后端分离。
  - MVVM
- 伴随视图所产生的定制化复杂联合查询可以：拆分为`单表`查询 + 描述信息后再拼装，以期降低编码难度。
  - 进一步：描述信息还可以缓存起来，减少数据库读取。
- 状态转移与行为分离。

## RESTFULL 风格

- 名词 + 单数
- GET/POST/DELETE