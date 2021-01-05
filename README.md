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

## `.env` / 環境變數 設定
### `DC_TOKEN`
Discord 機器人的 Token。必須設定。

### `CHANNEL_ID`
自動設定訊息目的地的 DC 頻道。非必須設定。

如果未設定，可以在想要的訊息目的地頻道輸入 `!ciscc::SetChannel`
命令，就可以在執行時更改 DC 頻道的 ID。執行完上述命令之後，
控制台會顯示出設定的頻道 ID，就像這樣：

    info: the default text channel has been set to 123456123456123456

後面那串數字就可以是 `CHANNEL_ID` 的值，設定好之後，未來啟動這個 API
都會自動將頻道設定成 `CHANNEL_ID` 所指定的頻道。

**請注意：`!ciscc:SetChannel` 命令的執行者需要有
`MANAGE_ROLES`（管理身份組）權限。**