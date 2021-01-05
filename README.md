# ciscc-api
## 使用 (生產環境)
```batch
$ yarn
$ yarn build
$ yarn start:prod
```

## 使用 (開發環境)
```batch
$ yarn -D
$ yarn start:dev
```

## `.env` 設定
- `DC_TOKEN`: Discord 機器人的 Token
  - 必須設定
- `CHANNEL_ID`: 要傳送訊息之 DC 頻道的 ID
  - 非必須設定
