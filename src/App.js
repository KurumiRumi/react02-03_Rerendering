import { useCallback, useMemo, useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.text);

  const onClickOpen = () => setOpen(!open);

  // 処理内容が変わらない場合は使いまわす指示をする
  const onClickClose = useCallback(() => setOpen(false), []);

  // 変数のメモ化
  const temp = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
