import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素に書く要素を設定
  div.appendChild(li);

  //未完了のリストに追加
  document.getElementById("inconplate_list").appendChild(div);

  console.log(div);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
