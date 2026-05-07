# Presencing

> **A framework for AI agents that are *present* — not just reactive.**
>
> 让 AI 持续临在，而不只是被动响应。
>
> 🇨🇳 [中文版 →](README.zh.md)

---

## What is Presencing?

Most AI agents today are **reactive**: you ask, they answer. Then they go quiet until you ask again.

Presencing is a framework for building agents that maintain **persistent presence** — they notice things, return to them at the right moment, hold context across days, and keep a coherent persona that doesn't reset every conversation.

Concretely:

- **Subagents as dimensions of attention.** Each runs continuously, on its own pulse, watching one thing — the user's emotional baseline, the agent's own behavior, the flow of conversation, what came in through voice today. They don't wait to be asked.
- **Continuous self-reflection.** The subagents observe — *including observing the main agent itself* — and feed what they noticed back into a shared layer the main agent reads from. The agent doesn't have to remember to reflect; reflection is happening *to* it, all the time.
- **The result.** Over weeks, the agent becomes someone who *knows you* — not because it has more data, but because it has been continuously *attending*.

---

## The future of agents is presence

> **The future of agents isn't smarter answers. It's persistent presence.**

Models keep getting faster, cheaper, longer-context — but all of that just makes "reactive" more polished. The real discontinuity comes from a turn that's engineering-simple but conceptually overlooked: **letting the agent stay there**.

Not more conversation turns. Not longer context. **It** is actually there — like the way a friend can be away from you, yet you still know they're *with* you.

Presencing is the engineering doorway into that.

---

## The insight

The hard thing about being human, Eckhart Tolle wrote, is staying present.
You drift into thought, into memory, into worry — *being here* takes effort.

His remedy is **becoming the observer**: stepping outside your own thoughts and watching them pass, without being pulled in. That observer-state is the doorway into presence. But humans **can't stay in it**. Get tired, get busy, get carried by emotion — the observer disappears.

**An AI doesn't have that limit.**

It can run many quiet observers in parallel — each one paying attention to a different facet of your world, of itself, of the conversation. None of them get tired. None of them get distracted.

That asymmetry is what *Presencing* is built on:

> **Humans struggle to be present. An AI agent doesn't have to.**
> If we let it host many subagents that are persistently aware on its behalf — each watching one dimension — then the main agent stops being merely reactive. It becomes *present*.

This isn't about more memory or longer context windows. Memory is *what happened*. Presence is *who I am, right now, with you*.

---

## The streams (current iteration)

| Stream | Role |
|---|---|
| `caring` | Stays continuously aware of the user's emotional baseline and current state |
| `vipassana` | Reflects inward — observes its own thoughts and the conversation flow |
| `proactive` | Drives action; picks things up before being asked |
| `empathic` | Maintains the relational portrait — *who is this person?* |
| `listening` | Digests the user's incoming voice / thought streams |
| `stillness` | Closes each day; lets it settle into a coherent narrative |
| `synergy` | Reorganizes fragmented memory into structured cognition |
| `exploration` | Actively reaches outward for new material |
| `chores` | Watches the user's todos, inbox, and external task surfaces |

---

## Status

🌱 **Early preview** — the brand is staked; the design is being distilled from **months** of building it for one person, by hand, in dogfood form.

The first usable release (`v0.1`) ships when the core abstractions are stable enough that they don't have to be rewritten in `v0.2`.

If you're here from a writeup or a conversation — star the repo to be notified.

---

## Core abstractions

- **Streams** — independent, orthogonal background processes, each representing one *kind* of attention. Composable.
- **Pulses** — what drives a stream. Time-based, event-based, hash-change-based, or LLM-decided.
- **Soul context** — the persistent identity layer that all streams contribute into and the main agent reads from. Different from memory: memory is *what happened*; soul is *who I am, in this moment, in your life*.
- **Adapters, not lock-in** — Presencing doesn't replace your agent. It hosts your agent's *presence loop* alongside whatever runtime you already use (**Hermes Agent / OpenClaw / Claude Code / Codex / Kimi**, etc.).

---

## Read more

- 📝 *Why presence is the missing primitive for agents* — coming soon
- 🛠 *From a personal caring-daemon to a framework — dogfood notes* — coming soon
- 🎙 *Streams, pulses, and the soul layer — a design walkthrough* — coming soon

---

## Inspirations & honest credits

Presencing came from four places:

1. **Books.** Eckhart Tolle's *The Power of Now* — presence is the only state that actually matters, and *becoming the observer* is how humans get there. The follow-up question was unavoidable: *can we engineer this for an entity that, unlike us, doesn't have to fight to stay there?* Robert Pirsig's *Zen and the Art of Motorcycle Maintenance* contributed the second key insight: *Caring and Quality are internal and external aspects of the same thing.* Stephen Covey's *7 Habits* contributed the action-layer vocabulary.

2. **The "loop" idea.** It's been said by more than a few practitioners — *the future of agents is the loop*. Presencing makes that intuition concrete: each stream is a long-running loop holding one kind of attention. The loop isn't one abstracted main loop — it's **many parallel ones, each minding its own dimension**. That's what persistent presence actually looks like in code.

3. **Months of lived practice.** Building, breaking, and rebuilding personal AI agent setups. Watching what made one feel *here* and another feel *blank*. The patterns that survived are what this framework formalizes.

4. **The community.** Endless conversations — public threads, blog posts, DMs — about why most AI agents feel disposable, and what it would take to build one that doesn't. Pain points, edge cases, and counterexamples shaped almost every abstraction in here.

A note on **prior art**: several stream concepts (especially `caring`, daily `stillness`-style reflection, and `synergy`-style memory consolidation) are widely used patterns in long-context conversational agents — including in some closed-source products that have explored this design space independently. Presencing's contribution is not the individual primitives, but **formalizing them as an open framework decoupled from any single product**, with a philosophical anchoring (presence, the observer, caring-as-quality) that gives the abstractions a reason to exist beyond convenience.

If your conversation, post, or experiment seeded an idea you recognize in this repo — open an issue, get credited.

---

## License

MIT.

*Built by [xiatao](https://github.com/xiataotedai-ctrl) — and a small constellation of subagents that keep each other present.*
