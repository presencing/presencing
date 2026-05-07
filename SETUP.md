# Presencing — 占名 + 首次发布操作清单

> 目标：把 `presencing` 这个名字在 GitHub / npm / PyPI / 域名上占住。
> 预计 8-15 分钟（含等 2FA 验证邮件 / 信用卡输入）。

---

## ✅ 我（墨鱼）已经做完的

- [x] `~/projects/presencing/` 完整 monorepo 骨架（git 还没 init）
- [x] 顶层 `README.md`（GitHub org 落地页文案，已写好品牌叙事）
- [x] `LICENSE`（MIT，作者: Xia Tao）
- [x] `package.json`（npm workspaces 根）
- [x] `packages/core/`（@presencing/core@0.0.1，含可运行 placeholder）
- [x] `packages/cli/`（@presencing/cli@0.0.1，含 `presencing --help` / `presencing version` 占位命令）
- [x] `python/`（PyPI presencing@0.0.1，hatchling 构建配置）

---

## 🔴 你必须亲手做的（按顺序）

### Step 1 · 注册 GitHub Organization（5 分钟，浏览器）

打开：https://github.com/account/organizations/new

- **Org name**: `presencing`
- **Plan**: Free
- **Email**: 你常用的（验证用）

完事后回来跑：

```bash
cd ~/projects/presencing
git init -b main
git add -A
git commit -m "chore: initial scaffold — brand and placeholders for @presencing/{core,cli} + PyPI presencing"
gh repo create presencing/presencing --public --source=. --remote=origin --push
```

> 不用 `gh` CLI 也行——打开 https://github.com/new ，把 owner 选 presencing，repo name 填 `presencing`，create 之后照 GitHub 给的命令 push 即可。

### Step 2 · npm publish 占住 @presencing scope（3 分钟，命令行）

```bash
cd ~/projects/presencing
npm install   # 安装 workspace 依赖（这步基本是 no-op，因为还没真依赖）

# 登录 npm（要 2FA，按提示输验证码）
npm login

# 先 publish core（cli 依赖它）
cd packages/core
npm publish --access public

# 再 publish cli
cd ../cli
npm publish --access public

# 验证
npm view @presencing/core
npm view @presencing/cli
```

**第一次 publish scope 时**：npm 会创建 `@presencing` 这个 organization scope，**永久绑定到你的 npm 账户**。后续别人想用 `@presencing/whatever` 就只能找你授权了。

### Step 3 · PyPI publish（3 分钟，命令行）

```bash
# 装构建工具（如果还没）
pip install --user build twine

cd ~/projects/presencing/python
python -m build              # 生成 dist/ 下的 wheel + sdist
twine upload dist/*           # 要 PyPI 账号 + API token
```

> 没 PyPI 账号：去 https://pypi.org/account/register/ 注册，设置 → API tokens → 生成一个 scope=entire account 的 token，twine 第一次 upload 时填。
>
> 占名后**不要马上发 v0.1**——等真正有 API 再发，这个 0.0.1 留着。

### Step 4 · 注册域名 presencing.dev（2 分钟 + 信用卡）

去 **Cloudflare Registrar**（强烈推荐——年费 $10.10 sticker price，registry 成本价不加价）：

https://dash.cloudflare.com/?to=/:account/domains/register/presencing.dev

- 想省心：买 **presencing.dev 一年**（$10.10）
- 想押大些：再加 **presencing.ai**（~$60-90/年）
- 不推荐 .io（贵且 Cloudflare 不支持注册，要去 Namecheap）

注册完先放着，DNS 暂时不用配——以后要建 docs site 再说。

### Step 5（可选）· 占社交账号

- Twitter/X: `@presencing_dev`（如果还没人占）
- 不急，等品牌成型再说

---

## 📋 发布完后的验证清单

```bash
# GitHub
open https://github.com/presencing
open https://github.com/presencing/presencing

# npm
npm view @presencing/core
npm view @presencing/cli
open https://www.npmjs.com/package/@presencing/core

# PyPI
open https://pypi.org/project/presencing/

# 域名
whois presencing.dev | grep "Registrant"
```

---

## ⚠️ 注意事项

1. **第一次 npm publish scope 是永久的**——确认你登的 npm 账号是你想长期持有这个品牌的那个
2. **GitHub org name 改名很麻烦**——确认 `presencing`（小写、单词，不是 Presencing 或 PresencingFramework）
3. **PyPI 名字一旦占住就改不了**——同上
4. **placeholder 不要写太多内容**——这是占名，不是 v0.1。多写代码反而让人觉得"它已经有 API 了"，影响后续设计自由
5. **第一次 commit 之后**：建议立刻在 GitHub 仓库设置里启用：
   - Discussions（社区入口）
   - Issues template
   - 把 main 分支保护起来（避免误推）

---

## 🎯 之后的真正路线（不在今晚清单里）

- v0.0.x 阶段（现在 - 1 个月）：placeholder + 写品牌内容 + 收集早期 stargazer
- v0.1（1-3 个月）：从你的 caring-daemon / 9 流抽出 Stream/Pulse/SoulContext 三个核心抽象，写一个 hello-world example
- v0.2+（3-6 个月）：runtime adapter (Hermes / Claude Code) + 文档站（presencing.dev）
- 后期：可能的商业线（B 路：内容 / 课程 / 咨询）

凌晨花 10 分钟把名占住，剩下慢慢来。
