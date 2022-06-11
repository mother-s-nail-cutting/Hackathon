var Hokkaikou = {
  name: "Hokkaidou",
  var hokkaidou = [‘’, ‘’],//エリア名
  var douhoku = [‘’, ‘’],//北のエリア名
  playSpot: 100,
  sayName: function() {  // 匿名関数でメソッド定義
    alert(this.name);
  },
  display: function() {  // 匿名関数でメソッド定義

  }
};

var Touhoku = {
  name: "Touhoku",
  var Touhoku = [‘Aomori’, ‘’],//県名
  var Aomori = [‘’, ‘’],//エリア名
  playSpot: 100,
  sayName: function() {  // 匿名関数でメソッド定義
    alert(this.name);
  },
  judgeArea: function(area) {  // 匿名関数でメソッド定義
    if(){//北海道
      area = hokkaidou,
    }else if(){//東北地方

    }else if(){//関東地方

    }else if(){//中部地方

    }else if(){//近畿地方

    }else if(){//中国地方

    }else if(){//四国地方

    }else if(){//九州地方

    }
    return area;
  }
};
function displayPoint(p) {  // 関数宣言
  alert(p.name);
}
