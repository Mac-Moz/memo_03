
$("#saves").on("click", function () {
  const key_date = $("#key_date").val();
  const key_name = $("#key_name").val();
  const key_number = $("#key_number").val();
  const q1_select = $("#q1_select").val();
  const q1_text = $("#q1_text").val();
  const q2_select = $("#q2_select").val();
  const q2_text = $("#q2_text").val();
  const q3_select = $("#q3_select").val();
  const q3_text = $("#q3_text").val();
  const q4_select = $("#q4_select").val();
  const q4_text = $("#q4_text").val();
  const q5_select = $("#q5_select").val();
  const q5_text = $("#q5_text").val();
  const q6_select = $("#q6_select").val();
  const q6_text = $("#q6_text").val();
  const q7_select = $("#q7_select").val();
  const q7_text = $("#q7_text").val();
  const key = [];
  const value = [];
  const character = [["hishin_001", "/img/en.png"], ["hishin_002", "/img/bihei.png"], ["hishin_003", "/img/sosui.png"]]
  var img = "";
  // keyを格納（日付、名前、管理番号）
  key.push(key_date, key_name, key_number)
  // valueを格納
  value.push([q1_select, q1_text], [q2_select, q2_text], [q3_select, q3_text], [q4_select, q4_text], [q5_select, q5_text], [q6_select, q6_text], [q7_select, q7_text]);
  // 配列をJOSNに変換してからlocalstrageに格納
  localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
  for (let i = 0; i < character.length; i++){
    if (key_number === character[i][0]) {
      img = character[i][1].toString();
      break;
    }
  };
  alert("正常に保存されました");
//   const html = `
//   <div class="data">
//   <img src=${img} alt="">
//   <input type="checkbox" class="memo_checkbox" name="text" value=${key}>
//   <div class="inner_data_key">
//     <p>${key[0]}</p>
//     <p>${key[1]}</p>
//     <p>${key[2]}</p>

//   </div>
//   <div class="inner_data_value">
//     <p>取引条件: ${value[0]}</p>
//     <p>報酬支払日: ${value[1]}</p>
//     <p>禁止行為: ${value[2]}</p>
//     <p>募集条項: ${value[3]}</p>
//     <p>育児介護等: ${value[4]}</p>
//     <p>ハラスメント: ${value[5]}</p>
//     <p>中途解除: ${value[6]}</p>
//   </div>
// </div>
//     `;
//   $("#list").append(html);
});


// //1.Save クリックイベント
// $("#save").on("click", function () {
//   const key_date = $("%key_date").val();
//   const value_01 = $("#text-01").val();
//   const value_02 = $("#text-02").val();
//   const value = [];
//   value.push(value_01, value_02);

//   localStorage.setItem(key, value);
//   const html = `
//       <li class="data">
//       <input type="checkbox" class="memo-checkbox" name="text" value=${key}>
//         <p>${key}</p>
//         <p>${value}</p>
//       </li>
//     `;
//   $("#list").append(html);
// });


//2.clear クリックイベント
$("#clear").on("click", function () {
  localStorage.clear();
  $("#list").empty();
});



//3.ページ読み込み：保存データ取得表示
function display() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = JSON.parse(localStorage.key(i));
    const key_01 = localStorage.key(i)
    const value = JSON.parse(localStorage.getItem(key_01));
    console.log("key",key)
    console.log("value", value)
    const character = [["hishin_001", "/img/en.png"], ["hishin_002", "/img/bihei.png"], ["hishin_003", "/img/sosui.png"]]
    var img = "";
    for (let i = 0; i < character.length; i++) {
      if (key[2] === character[i][0]) {
        img = character[i][1].toString();
        break;
      }
    };
    console.log(img);
    const html = `
 <div class="data">
    <input type="checkbox" class="memo_checkbox" name="text" value=${key_01}>
     <img src=${img} alt="">
  <div class="inner_data_key">
    <p>${key[0]}</p>
    <p>${key[1]}</p>
    <p>${key[2]}</p>
  </div>
  <div class="inner_data_value">
    <p>取引条件: ${value[0]}</p>
    <p>報酬支払日: ${value[1]}</p>
    <p>禁止行為: ${value[2]}</p>
    <p>募集条項: ${value[3]}</p>
    <p>育児介護等: ${value[4]}</p>
    <p>ハラスメント: ${value[5]}</p>
    <p>中途解除: ${value[6]}</p>
  </div>
</div>
    `;
    $("#list").append(html);
  }
};

//4.relode クリックイベント
$("#relode").on("click", function () {
  $("#list").empty();
  display();

});

//5.selectclear クリックイベント
$("#selectclear").on("click", function () {
  $(".memo_checkbox[type=checkbox]:checked").each(function () {
    const key = $(this).val();
    localStorage.removeItem(key);
    console.log(key);
  });
  $("#list").empty();
  display();

});
