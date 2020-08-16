// $('.likeicon').on('click',function() {
//   let $btn = $(this);

//   if ($btn.hasClass('on')){

//     $btn.removeClass('on');
//     $btn.children("i").attr('class', 'far fa-heart likeicon-fa-heart');

//   } else {
//     $btn.addClass('on');
//     $btn.children("i").attr('class', 'fas fa-heart likeicon-fa-heart heart');
//   }
// }

// Likeボタンクリック
$(() => {
  // console.log("yukidayo")

  $('.likeicon').on('click', function() {
    let $btn = $(this);
    console.log("clicked");
    // console.log($btn);
    // Likeボタンがonクラス持っていたら
    if ($btn.hasClass('on')) {
      // console.log("");
      $btn.removeClass('on');
  
      // 白抜きアイコンに戻す
      $btn.children("svg").attr('class','far fa-heart likeicon-fa-heart');
  
    } else {
  
      $btn.addClass('on');
      // console.log($btn);
      // ポイントは2つ！！
      // ①アイコンを変更する
      // far fa-heart（白抜きアイコン）
      // ⇒ fas fa-heart（背景色つきアイコン）
      // ②アニメーション+アイコン色変更用のheartクラスを付与する
  
      $btn.children("svg").attr('class','fas fa-heart likeicon-fa-heart heart');
    }
  })
})

