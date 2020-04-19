$(function(){

  'use strict';
  {
    const btn = document.getElementById('gacha-btn');

    btn.addEventListener('mousedown',()=>{
      btn.classList.add('pressed')
    });

    btn.addEventListener('mouseup',()=>{
      btn.classList.remove('pressed')
    });

    btn.addEventListener('click',()=>{

      var h1 = document.getElementById("show-rality");
      h1.textContent = "";
      var h1 = document.getElementById("description");
      h1.textContent = "";
      const n = Math.random();

      if (n < 0.1){
        var gr = 4;
      }else if (n < 0.3){
        var gr = 3;
      }else if (n < 0.6){
        var gr = 2;
      }else{
        var gr = 1;
      };

      switch(gr){

        case 4:
        const results1 = ["assets/games/shadowverse/legend/l_f_1.png","assets/games/shadowverse/legend/l_f_2.png","assets/games/shadowverse/legend/l_f_3.png","assets/games/shadowverse/legend/l_f_4.png",
                          "assets/games/shadowverse/legend/l_f_5.png","assets/games/shadowverse/legend/l_f_6.png","assets/games/shadowverse/legend/l_f_7.png","assets/games/shadowverse/legend/l_f_8.png",
                          "assets/games/shadowverse/legend/l_nf_1.png","assets/games/shadowverse/legend/l_nf_2.png","assets/games/shadowverse/legend/l_nf_3.png","assets/games/shadowverse/legend/l_nf_4.png",
                          "assets/games/shadowverse/legend/l_nf_5.png","assets/games/shadowverse/legend/l_nf_6.png","assets/games/shadowverse/legend/l_nf_7.png","assets/games/shadowverse/legend/l_nf_8.png"
                        ];
          const n1 = Math.floor(Math.random()*results1.length);
          document.getElementById('gacha-result').src = results1[n1];
          var h1 = document.getElementById("show-rality");
          h1.textContent = "⭐️🌈レジェンドレア🌈⭐️";
        break;

        case 3:
        const results2 = ["assets/games/shadowverse/gold/g_f_1.png","assets/games/shadowverse/gold/g_f_2.png","assets/games/shadowverse/gold/g_f_3.png","assets/games/shadowverse/gold/g_f_4.png",
                          "assets/games/shadowverse/gold/g_f_5.png","assets/games/shadowverse/gold/g_f_6.png","assets/games/shadowverse/gold/g_f_7.png","assets/games/shadowverse/gold/g_f_8.png",
                          "assets/games/shadowverse/gold/g_s_1.png","assets/games/shadowverse/gold/g_s_2.png","assets/games/shadowverse/gold/g_s_3.png","assets/games/shadowverse/gold/g_s_4.png",
                          "assets/games/shadowverse/gold/g_s_5.png","assets/games/shadowverse/gold/g_s_6.png","assets/games/shadowverse/gold/g_s_7.png","assets/games/shadowverse/gold/g_s_8.png",
                          "assets/games/shadowverse/gold/g_a_1.png","assets/games/shadowverse/gold/g_a_2.png","assets/games/shadowverse/gold/g_a_3.png"
                        ];
          const n2 = Math.floor(Math.random()*results2.length);
          document.getElementById('gacha-result').src = results2[n2];
          var h1 = document.getElementById("show-rality");
          h1.textContent = "ゴールドレア!!!";
        break;

        case 2:
        const results3 = ["assets/games/shadowverse/silver/s_f_1.png","assets/games/shadowverse/silver/s_f_2.png","assets/games/shadowverse/silver/s_f_3.png","assets/games/shadowverse/silver/s_f_4.png",
                          "assets/games/shadowverse/silver/s_f_5.png","assets/games/shadowverse/silver/s_f_6.png","assets/games/shadowverse/silver/s_f_7.png","assets/games/shadowverse/silver/s_f_8.png",
                          "assets/games/shadowverse/silver/s_s_1.png","assets/games/shadowverse/silver/s_s_2.png","assets/games/shadowverse/silver/s_s_3.png","assets/games/shadowverse/silver/s_s_4.png",
                          "assets/games/shadowverse/silver/s_s_5.png","assets/games/shadowverse/silver/s_s_6.png","assets/games/shadowverse/silver/s_s_7.png","assets/games/shadowverse/silver/s_s_8.png",
                          "assets/games/shadowverse/silver/s_a_1.png","assets/games/shadowverse/silver/s_a_2.png","assets/games/shadowverse/silver/s_a_3.png","assets/games/shadowverse/silver/s_a_4.png",
                          "assets/games/shadowverse/silver/s_a_5.png","assets/games/shadowverse/silver/s_a_6.png","assets/games/shadowverse/silver/s_a_7.png","assets/games/shadowverse/silver/s_a_8.png"
                        ];
          const n3 = Math.floor(Math.random()*results3.length);
          document.getElementById('gacha-result').src = results3[n3];
          var h1 = document.getElementById("show-rality");
          h1.textContent = "シルバーレア!!";
        break;

        default:
        const results4 = ["assets/games/shadowverse/bronze/b_f_1.png","assets/games/shadowverse/bronze/b_f_2.png","assets/games/shadowverse/bronze/b_f_3.png","assets/games/shadowverse/bronze/b_f_4.png",
                          "assets/games/shadowverse/bronze/b_f_5.png","assets/games/shadowverse/bronze/b_f_6.png","assets/games/shadowverse/bronze/b_f_7.png","assets/games/shadowverse/bronze/b_f_8.png",
                          "assets/games/shadowverse/bronze/b_s_1.png","assets/games/shadowverse/bronze/b_s_2.png","assets/games/shadowverse/bronze/b_s_3.png","assets/games/shadowverse/bronze/b_s_4.png",
                          "assets/games/shadowverse/bronze/b_s_5.png","assets/games/shadowverse/bronze/b_s_6.png","assets/games/shadowverse/bronze/b_s_7.png","assets/games/shadowverse/bronze/b_s_8.png",
                          "assets/games/shadowverse/bronze/b_a_1.png","assets/games/shadowverse/bronze/b_a_2.png","assets/games/shadowverse/bronze/b_a_3.png"
                        ];
          const n4 = Math.floor(Math.random()*results4.length);
          document.getElementById('gacha-result').src = results4[n4];
          var h1 = document.getElementById("show-rality");
          h1.textContent = "ブロンズレア!";
        break;
      };
      const gachaResult = document.getElementById('gacha-result').src;
      console.log(gachaResult);
      switch (gachaResult) {
        case "http://localhost:3000/assets/games/shadowverse/legend/l_f_1.png":
        var h1 = document.getElementById("description");
        h1.textContent = "始祖の大狼・オムニス";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_f_2.png":
        var h1 = document.getElementById("description");
        h1.textContent = "レヴィオンの英雄・アルベール";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_f_3.png":
        var h1 = document.getElementById("description");
        h1.textContent = "蒼の反逆者・テトラ";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_f_4.png":
        var h1 = document.getElementById("description");
        h1.textContent = "蒼海の主・ネプチューン";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_f_5.png":
        var h1 = document.getElementById("description");
        h1.textContent = "紫紺の抵抗者・エンネア";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_f_6.png":
        var h1 = document.getElementById("description");
        h1.textContent = "真紅の抗戦者・モノ";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_f_7.png":
        var h1 = document.getElementById("description");
        h1.textContent = "清純なる祈り・エイラ";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_f_8.png":
        var h1 = document.getElementById("description");
        h1.textContent = "ラグナアウェイク";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_1.png":
        var h1 = document.getElementById("description");
        h1.textContent = "至高の戦神・オーディン";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_2.png":
        var h1 = document.getElementById("description");
        h1.textContent = "アイギスシールド・アテナ";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_3.png":
        var h1 = document.getElementById("description");
        h1.textContent = "鋼鉄と大地の神";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_4.png":
        var h1 = document.getElementById("description");
        h1.textContent = "至高神・ゼウス";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_5.png":
        var h1 = document.getElementById("description");
        h1.textContent = "母なる君";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_6.png":
        var h1 = document.getElementById("description");
        h1.textContent = "闇の翼・オリヴィエ";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_7.png":
        var h1 = document.getElementById("description");
        h1.textContent = "神託の大天使・ガブリエル";
        break;
        case "http://localhost:3000/assets/games/shadowverse/legend/l_nf_8.png":
        var h1 = document.getElementById("description");
        h1.textContent = "機械神";
        break;
        case "http://localhost:3000/assets/games/shadowverse/gpld/g_f_1.png":
        var h1 = document.getElementById("description");
        h1.textContent = "豪風のリノセウス";
        break;
      };
    });
  }
});