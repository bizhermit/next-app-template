# Next.js

## 不要な依存

`npm i`を実行する前に[package.json](../package.json)を編集するかアンインストール実施。

```bash
npm un @remix-run/node @remix-run/react @remix-run/serve isbot @remix-run/dev remix-flat-routes vite vite-tsconfig-paths --force
```

### dependencies

- @remix-run/node
- @remix-run/react
- @remix-run/serve
- isbot

### devDependencies

- @remix-run/dev
- remix-flat-routes
- vite
- vite-tsconfig-paths

## 不要なファイルおよびディレクトリ

- src/routes
- src/root.tsx
- src/entry.server.tsx
- src/entry.client.tsx
- src/tsconfig-remix.json
- 

# Remix

`npm i`を実行する前に[package.json](../package.json)を編集するかアンインストール実施。

```bash
npm un next next-auth eslint-config-next --force
```

## 不要な依存

## dependencies

- next
- next-auth

## devDependencies

- eslint-config-next

## devDependenciesからdependenciesに変更

- cross-env
- dotenv

## 不要なファイルおよびディレクトリ

```bash
npx rimraf src/app ...
```

- src/app
- src/pages
- src/middleware.ts
- src/next-auth.d.ts
- src/tsconfig-next.json