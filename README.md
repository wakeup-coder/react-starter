# React Starter

一个现代化的 React + TypeScript 开发启动模板，集成了完整的开发、测试和构建工具链。

## 技术栈

- [React 18](https://react.dev/) - 用于构建用户界面的 JavaScript 库
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集，添加了类型系统
- [Webpack 5](https://webpack.js.org/) - 现代 JavaScript 应用程序的静态模块打包工具
- [SWC](https://swc.rs/) - 快速的 TypeScript/JavaScript 编译器
- [TailwindCSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Material-UI (MUI)](https://mui.com/) - React UI 组件库
- [Jotai](https://jotai.org/) - 原始且灵活的 React 状态管理库
- [React Router](https://reactrouter.com/) - React 的声明式路由

## 特性

- ⚡️ 使用 [SWC](https://swc.rs/) 实现快速开发编译
- 🎨 集成 [TailwindCSS](https://tailwindcss.com/) 和 [Material-UI](https://mui.com/)
- 📦 开箱即用的状态管理（[Jotai](https://jotai.org/) + [Immer](https://immerjs.github.io/immer/)）
- 🔍 完整的测试解决方案
  - [Jest](https://jestjs.io/) - JavaScript 测试框架
  - [Cypress](https://www.cypress.io/) - 现代化的 E2E 测试工具
  - [BackstopJS](https://github.com/garris/BackstopJS) - UI 回归测试工具
- 📱 响应式设计支持eslint ./src --ext .ts,.tsx
- 🛠 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) 代码规范

## 开发环境设置

1. **Node.js 环境要求**
   - Node.js >= 16.0.0
   - pnpm >= 8.0.0

2. **安装依赖**
   ```bash
   pnpm install
   ```

## 构建和部署

```bash
# 启动开发服务器
npm run start

# 构建生产版本
npm run build

# 运行测试
npm run test

# 运行 UI 测试
npm run test:uidiff

# 运行端到端测试
npm run test:e2e

# 使用可视化界面运行测试
npm run test:ui

# 代码检查
npm run lint

# 自动修复代码格式
npm run lint:fix
```

## 测试

项目集成了多层次的测试方案：

- [Jest](https://jestjs.io/)：单元测试和集成测试
- [BackstopJS](https://github.com/garris/BackstopJS)：UI 回归测试
- [Cypress](https://www.cypress.io/)：端到端测试
- [Majestic](https://github.com/Raathigesh/majestic)：测试可视化界面

测试报告将生成在 `docs/jest-stare` 目录下。

## 代码规范

项目使用 [ESLint](https://eslint.org/) 和 [Prettier](https://prettier.io/) 来确保代码质量和一致性：

- 基于 [Airbnb TypeScript](https://github.com/iamturns/eslint-config-airbnb-typescript) 规范
- 集成 Prettier 格式化
- React Hooks 规则检查
- 提交前自动格式化（通过 [Husky](https://typicode.github.io/husky/)）

## 性能优化

- 使用 [SWC](https://swc.rs/) 替代 Babel 实现更快的编译速度
- CSS 代码压缩和优化
- 生产环境代码分割和压缩
- [Why Did You Render](https://github.com/welldone-software/why-did-you-render) 优化支持

## 构建工具

项目使用 [Webpack 5](https://webpack.js.org/) 作为构建工具，包含以下优化：

- 友好的错误提示
- 进度条显示
- 构建分析工具
- CSS 提取和优化
- 热模块替换（HMR）

## 项目结构

```
.
├── .husky/                    # Git hooks 配置
├── backstop_data/             # UI 回归测试数据
├── config/                    # 项目配置文件
├── coverage/                  # 测试覆盖率报告
├── cypress/                   # E2E 测试文件
├── docs/                      # 项目文档
├── node_modules/             # 依赖包
├── public/                   # 静态资源文件
├── scripts/                  # 构建和工具脚本
├── src/                          # 源代码目录
│   ├── assets/                   # 静态资源文件（图片、字体等）
│   ├── components/               # 可复用的 React 组件
│   ├── constants/                # 常量定义
│   ├── hooks/                    # 自定义 React Hooks
│   ├── layouts/                  # 页面布局组件
│   ├── pages/                    # 页面级组件
│   ├── routes/                   # 路由配置
│   ├── services/                 # 服务层，处理业务逻辑
│   ├── states/                   # 状态管理（Jotai store）
│   ├── types/                    # TypeScript 类型定义
│   ├── utils/                    # 工具函数
│   ├── index.development.html    # 开发环境 HTML 模板
│   ├── index.production.html     # 生产环境 HTML 模板
│   ├── index.tsx                 # 应用入口文件
│   ├── style.css                 # 全局样式
│   └── wdyr.tsx                  # Why Did You Render 配置
├── tests/                    # 单元测试文件
├── .env                      # 环境变量
├── .eslintignore             # ESLint 忽略配置
├── .eslintrc                 # ESLint 配置
├── .gitignore                # Git 忽略配置
├── .npmrc                    # NPM 配置
├── .swcrc                    # SWC 编译器配置
├── backstop.json             # UI 测试配置
├── cypress.config.js         # Cypress 测试配置
├── jest.config.js            # Jest 测试配置
├── package.json              # 项目依赖和脚本
├── pnpm-lock.yaml            # pnpm 依赖锁定文件
├── postcss.config.js         # PostCSS 配置
├── prettier.config.js        # 代码格式化配置
├── README.md                 # 项目说明文档
├── tailwind.config.js        # TailwindCSS 配置
├── tsconfig.eslint.json      # TypeScript ESLint 配置
├── tsconfig.json             # TypeScript 配置
└── webpack.config.js         # Webpack 构建配置
```

## 开发规范

### 组件开发规范

- 组件放置在 `src/components` 目录下
- 每个组件应该有自己的目录，包含组件文件和样式文件
- 使用 TypeScript 编写组件，确保类型安全

### 状态管理规范

- 全局状态使用 Jotai 管理，相关代码放在 `src/states` 目录
- 组件内部状态使用 React Hooks（useState, useReducer）
- 复杂的状态逻辑封装为自定义 Hooks，放在 `src/hooks` 目录

### 路由规范

- 路由配置集中在 `src/routes` 目录管理
- 页面组件放在 `src/pages` 目录，与路由配置对应
- 使用懒加载优化页面加载性能

### 样式开发规范

- 优先使用 TailwindCSS 的工具类
- 组件特定样式使用 CSS Module
- 全局样式定义在 `src/style.css`

## License

ISC
