---
html:
  embed_local_images: true
  embed_svg: true
  offline: true
  toc: true
export_on_save:
  html: true
---

# template markdown

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [template markdown](#template-markdown)
  - [凡例](#凡例)
  - [章立て](#章立て)
    - [章立て2](#章立て2)
      - [項](#項)
  - [画像](#画像)
    - [画像2](#画像2)
    - [画像3](#画像3)
    - [PlantUML](#plantuml)
    - [Table](#table)

<!-- /code_chunk_output -->

## 凡例

本書内での記述例を示す。

:::tip
知っておくと便利な小技系
:::

:::info
知っておいた方がよさそうな情報
:::

:::note
おまけ的なメモ・自分語り
:::

:::warning
極めてリスクの高い事例
:::

:::caution
注意深く利用する必要のある事例
:::

:::sample
コマンドやコードのサンプル等
:::

## 章立て

markdownによる文書を作成したい場合は、この環境を利用する。  

- 推奨事項に追加してある拡張機能を有効化すること。
- 上記有効化してあれば、目次も自動更新される。

### 章立て2

#### 項

## 画像

![画像jpg](./img/AdobeStock_489911657.jpeg){.image_w300}

### 画像2

![画像png](./img/AdobeStock_491863380.png)

pngとjpgが張り付けられることは確認した。

### 画像3

![drawio](./img/draw.drawio.png)

複数ページを作成しても、参照されるのはページ1のみ。

![drawio2](./img/draw2.drawio.png)

drawio側を更新してもmarkdown側には即反映ではない？  
⇒ プレビューに反映されないだけみたい。html出力には反映された。  
⇒⇒ MPEを利用しているなら右上から更新すればいい  

### PlantUML

```plantuml
@startuml
hide empty description
[*] --> State1
State1 --> [*]
State1 : this is a string
State1 : this is another string

State1 -> State2
State2 --> [*]
@enduml
```

---

### Table

| No. |  タイトル |
| --- | --------: |
| 1   | サンプル1 |
| 2   | サンプル2 |
