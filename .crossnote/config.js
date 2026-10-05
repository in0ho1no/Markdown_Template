// Crossnote / Markdown Preview Enhanced の表示・変換設定。
({
  katexConfig: {
  "macros": {}
},
  
  mathjaxConfig: {
  "tex": {},
  "options": {},
  "loader": {}
},
  
  mermaidConfig: {
  "startOnLoad": false
},

  // ブロック数式の区切り記号を $$ … $$ だけにする。
  // 既定では \[ … \] もブロック数式になるため、角括弧をエスケープした
  // \[更新\] のような記述が数式として表示されてしまう。
  mathBlockDelimiters: [
    ["$$", "$$"]
  ],
})
