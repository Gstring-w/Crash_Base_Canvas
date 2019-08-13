### 在 node.js 中搭建 TS 开发环境

#### 安装 typescript

```
npm install --save typescript
```

#### 使用 tsc 编译 TS 代码

#### 安装@types/node

记录一下思路：
使用 viewer 创建一个 viewer 类 --> 传入 ElementClass（定义不同的形状，但是没有碰撞行为） ———> 传入 CrashClass（决定碰撞的行为）

1. viewer ——> 使用 2 种显示 Dom，Canvas
2. ElementClass ———> 工厂类，决定碰撞模型
3. CrashClass ---> 核心 碰撞行为
