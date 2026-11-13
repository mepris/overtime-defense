# 保卫下班 · Canvas Edition

打开即全屏战场：顶部资源 HUD、底部紧凑招募栏、选塔浮层；阵营/关卡/图鉴/玩法统一收进菜单，事件折叠为状态标记。横竖屏使用不同战场投影，人物保持直立。

全 Canvas 职场塔防，Konva 9.3.18 管理场景、UI 与点击区域。没有 DOM 按钮、卡片、侧栏或弹窗；HTML 仅提供画布宿主及屏幕阅读器状态。

- 10 张地图，共 150 波。
- 5 种职能，每种 7 套塔形态：基础三级、IC 四/五阶、管理四/五阶。
- 3 阵营、10 类随机事件、主动回滚与负面事件适配。
- 角色/环境/敌人/UI 图鉴，浏览器本地最佳纪录。

## 本地运行

```sh
cd dist
python3 -m http.server 4173
```

打开 http://localhost:4173 。Konva 已随项目固定版本保存，无需安装依赖，也不依赖外部 CDN 或字体网络。

## 文件结构

- `dist/engine.js`：纯游戏规则，不依赖 DOM 或 Konva。
- `dist/config.js`：阵营、职能、地图、事件、图集帧映射。
- `dist/battle-renderer.js`：纹理道路、静态场景缓存、角色/敌人绘制。
- `dist/game.js`：Konva 分层界面、交互、响应式、图鉴和加载流程。
- `dist/assets/`：生成的项目内素材。每职能图集 4×2：基础Ⅰ/Ⅱ/Ⅲ、IC4、IC5、管理4、管理5、头像。
- `DESIGN.md`：规则和边界；`ART-PROMPTS-V2.md`：新增素材的最终提示词。

## 加载页与素材交付

加载页使用 imagegen 生成的独立 Logo 与五人园区插画，由 `dist/loading-screen.js` 在 Canvas 中布局。进度按 10 项核心素材解码完成数计算，完成后自动进入游戏；`?preview=loading` 可停留查看设计。加载失败提供重试。

网页使用 WebP，PNG 原稿保留。启动素材从 27,048,449 字节降至 4,678,888 字节（含新版品牌图，约减少 83%）；这是文件体积比较，并非实测加载时长。概念原画仅打开图鉴时加载。更新 PNG 后，在已安装 sharp 的 Node 环境运行 `node scripts/encode-assets.cjs` 重新编码。生成提示词见 `ART-PROMPTS-LOADING.md`。

新版加载页已检查竖屏布局、进入游戏后的贴图及浏览器错误日志；仍建议人工回归横屏、慢网络与加载失败重试。

## 验证

语法检查通过。浏览器实操已验证部署、连续晋升、IC 分支贴图切换、预算、首波、二倍速与键盘图鉴。四关规则模拟已完成过胜利流程。未新增单元测试文件。

人工回归重点：全关卡实机长局；不同职能所有分支；管理光环重叠；负面事件适配；胜负结算与重开；窄屏触控及后台暂停。数值仍需玩家试玩调优。

## 建造防误触

点击工位只打开建造预览，显示范围、职能和价格；确认后才扣预算。切换职能保留空工位，取消、地面或 Esc 关闭预览。建成后收起面板，避免连续点击误触晋升或拆除。整备阶段新建且未参战的塔（含晋升投入）可全额撤销；开启波次或战斗中建造即视为参战，此后拆除返还 70%。

浏览器已验证预览预算保持 480、建造后 360、撤销恢复 480。人工回归重点：触屏连点、预算不足、切换职能、Esc 取消、战斗中建造和波次结束后的拆除比例。

## 晋升与波次信息

晋升面板复用规则计算伤害、范围和预算产出的前后对比，并展示下一阶外观；三级时并排展示 IC 与管理分支。预算不足显示具体差额。建造与晋升使用独立的短光效反馈，可在整备阶段播放。整备阶段显示下一波类型、数量及应对提示，选中工位时收起。

本轮验证：语法检查；浏览器建造、连续晋升至分支、收益对比、差额提示及下一波预告；错误日志为空。人工回归重点：五职能各级晋升、不同阵营和事件的数值、最高级状态、大屏与窄屏、战斗中操作及下一波切换。

## 工位覆盖修复

调整第一关 11/12 号、第三关 5/12 号工位，其他工位保持。全部 48 个工位的最近路线中心距离最大约 120.94，低于最短基础射程 142 在范围 -12% 事件下的 124.96。运营无攻击能力，只产出预算。范围显示改为低透明边界与单层渐变扫描，并高亮实际射程内的路线中心段。

本轮检查：JS 语法、48 工位几何覆盖、原第一关 12 号预览。人工回归重点：四关改位后的长局平衡、短射程设计塔与范围削弱事件、横竖屏工位点击。

## 关卡量化

现有 10 关、150 波。后六关为长直道、十字交汇、回字环廊、折返夹击、交织迷宫、短线突围。选关展示真实地图与战术标签。最新 270 局策略基准见 BALANCE.md；旧 2160 局结果仅对应此前地图。每关存在混合策略通关方案，自动策略不代表人类胜率。未做本轮浏览器验收；人工回归关注横竖屏选关、交叉路口箭头、工位建造和出入口漏怪。

软克制：装甲适合测试、模型护盾由测试打开 4 秒集火窗口、集群适合设计、高速插单适合产品减速、厚血需求适合研发。量化报告已按此规则重新生成，旧研发全通结论失效。

专业方向与协作技能已按职能区分，完整称呼、台词配置和四/五阶技能数值见 CAREERS.md 与 dist/career-paths.js。

## 攻击反馈与快捷选职能

建造卡片内提供五职能切换，选位、预算、范围随选择刷新，确认后才扣费。战斗反馈按研发弹体/火花、产品声波、设计溅射、测试锁定区分；角色施放轻微抬升，敌人受击短暂变亮，支持减少动态效果。动画只增强反馈，伤害、射程和出手时机不变。

回归点：卡片连续切换与确认、预算不足、横竖屏弹体起点、四职能实际战斗、高阶密集特效和减少动态效果。

## 敌人图鉴
菜单 → 敌人图鉴：8 类敌人，分两页展示真实贴图、特性、漏怪代价和四职能伤害倍率。倍率直接读取 ENEMY_TRAITS，说明模型破盾、运营与额外增伤的边界。打开时复用菜单暂停逻辑，关闭恢复此前状态。
人工回归：菜单入口、两页翻页及边界按钮、8 张贴图对应、模型破盾说明、战斗中查看暂停及关闭恢复、窄屏布局、Tab/Enter/Esc。

## Overtime and card placement
Leaks now add 5 narrative minutes (ordinary enemies) or 15 minutes (boss/deadline). Hope loss remains 1/5. Clock, exit label and result share this total; reset clears it. No extra waves are added. Exit feedback uses an orange warning and respects reduced motion.
Build and upgrade panels score placements against highlighted route samples and the selected pad. A fold/expand control offers a clear view when space is tight.
Verified with production Game: bug + boss leaves 14 hope, 20 overtime minutes, expected exit 18:20; following frames do not duplicate penalties; reset clears both counters. All 192 representative base-range placements (8 maps x 12 pads x 2 orientations) avoid highlighted samples. This does not cover every window size or promotion range. The 2160-run combat benchmark has unchanged outcomes.
Manual regression: consecutive leaks, reduced motion, high-level range and branching panels, narrow landscape/phone portrait, folding, pause/reset/failure and delayed-win wording.

## Wave preview
The next-wave card sits at the top right below the event badge. Single-type waves show the matching battle sprite; mixed waves show paper, bug, fast and model enemies. Manual regression: single/mixed/boss/final waves, event coexistence, narrow portrait and landscape, hidden state during battle/selection. Combat rules are unchanged.

## Illustrated events and faction families
Built-in imagegen produced five transparent assets: amber negative-event panel, jade beneficial-event panel, cyan/coral agile crest, blue penguin coordination crest, orange cat budget crest. Source PNGs and prompt briefs are retained in art/event-factions-v20; WebP delivery assets live in dist/assets. Five new WebPs total 264340 bytes; alpha preserved and transparent outer margins trimmed.
Event cards now expose the actual description, buff/debuff status and remaining waves with an explicit details/adaptation entry. The next-wave preview shifts beneath the card. Narrow virtual layouts place the event below the time estimate. Expanded event details reuse the generated panel.
Faction selection shows all three emblems and bonuses at once, selected state and faction-specific rank names. Existing pre-battle selection and in-battle locking rules are preserved. Loading progress now derives its total from required asset names.
Manual regression: both event skins and longest description; remaining waves/expiry; adaptation budget insufficient/sufficient; event plus wave preview in portrait and landscape; three faction selections before battle and locked state after battle; loading completion and asset errors. Combat rules unchanged.

Event panel geometry fix: five horizontal regions keep the illustration, corner caps and central top ornament at the same uniform scale. Only plain parchment and straight border bands stretch. Status card width 430, height 150, button bottom inset 21 and right inset 26 logical pixels. Text starts after the preserved illustration cap. Expanded details use the same layout.

## Modal and battle button art v22
New generated modal frame uses nine-slice scaling. Primary jade and secondary parchment buttons preserve end caps with three-slice scaling and offer press/hover/disabled feedback. Reused on the battle dock for start/pause/speed/rollback. Result panel now centers and fits the viewport, shows going-home art, time and three metric cards, and distinguishes primary/secondary actions. Source PNGs and exact built-in imagegen prompts are in art/modal-v22. Four delivery WebPs total 236174 bytes.
Verified before the user's request to stop testing: victory fixture rendered without console errors; Tab/Enter on next-level moved to map 02. Further fixture cases and the battle-dock skin were not browser-tested, per user instruction. No combat-rule changes or new unit tests. Manual follow-up: late/loss result, retry/map actions, small-screen layout, dock press/disabled/cooldown states.

## UI v31

选关页采用独立自适应布局，放大地图、关名与战术标签；预警默认使用底部紧凑条，详情面板避让出口和路线，选择工位时自动隐藏。建造卡默认 248 高、普通晋升卡 266 高，次要说明按需展开。查看路线会播放 4.5 秒沿真实路径前进的光点，进入关卡自动播放；减少动态效果模式仅显示静态路线。

本轮完成 JavaScript 语法和 diff 检查，未新增单元测试；浏览器工具不可用，未完成视觉验收。人工回归：选关三页与横竖屏排版；建造切职能、说明展开与确认取消；晋升普通/分支/最高级与撤销；预警展开收起、选工位避让；交叉路线光点、重复播放与到期消失。
