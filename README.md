# Rollup + Vue + TypeScript with declaration issue

A repo to repro [Rollup](https://github.com/rollup/rollup) + [Vue](https://github.com/vuejs/rollup-plugin-vue) + [TypeScript](https://github.com/ezolenko/rollup-plugin-typescript2) with declaration bundling issue.

## Step to reproduce

```bash
git clone https://github.com/gluons/rollup-plugin-typescript2-issue-97.git
cd rollup-plugin-typescript2-issue-97
yarn # Install dependencies
yarn build # Rollup this Vue library
```

Try to toggle `declaration` compiler option in [`tsconfig.json`](./tsconfig.json).

---

It will raise this error when set `declaration` to `true`.

```
Error: ENOENT: no such file or directory, open '<path to this repo directory>/dist/components/Hello.vue?rollup-plugin-vue=script.d.ts'
```

---

No error occur when turn it off.

## Issue

Tracking on [rollup-plugin-typescript2#97](https://github.com/ezolenko/rollup-plugin-typescript2/issues/97)
