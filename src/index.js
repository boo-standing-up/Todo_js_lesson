import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list_row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //戻るダク生成
  const bockButton = document.createElement("button");
  bockButton.innerText = "戻る";
  bockButton.addEventListener("click", () => {
    //押された完了ボタン　完了に追加　未完了リストから削除
    // const kanryouTaget = deleteButton.parentNode;
    //未完了のリストに追加
    document.getElementById("inconplate_list").appendChild(div);
    div.appendChild(complateButton);
    div.appendChild(deleteButton);
    div.removeChild(bockButton);
  });

  //ボタン完了ダク生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //押された完了ボタン　完了に追加　未完了リストから削除
    const kanryouTaget = deleteButton.parentNode;
    //完了のリストに追加
    document.getElementById("kanryou_list").appendChild(kanryouTaget);
    div.removeChild(complateButton);
    div.removeChild(deleteButton);
    div.appendChild(bockButton);
    // document.getElementById("inconplate_list").removeChild(deletTaget);
  });

  //ボタン削除ダク生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンのdivから削除
    const deletTaget = deleteButton.parentNode;
    document.getElementById("inconplate_list").removeChild(deletTaget);
  });
  //divタグの子要素に書く要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("inconplate_list").appendChild(div);

  //完了のリストに追加
  // document.getElementById("kanryou_list").appendChild(div);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
