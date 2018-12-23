var people = ['takuyanin', 'furukawa', 'noma', 'oya', 'kamiura', 'okino', 'nakagawa', 'sinohara', 'mitsunobu', 'yagyu', 'nakamura', 'kitao', 'ishida', 'kitagaki', 'nakanishi', 'ishikawa', 'migitani', 'kinosita', 'moritomo', 'tanaka', 'verna', 'justine', 'tina', 'kenny','joy','julli','emz','ezrah','ron','riz','matitani','mori','mako','oda','saitou','yayo','yamaguchi','sawamura','jan','tagawa', 'fukihara', 'furuta', 'furuichi', 'fukuda', 'fukui'];

$(function() {
  var list = $("#list");
  var preWord;

  function appendList(word) {
    var item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    var result = "^" + element;
    return result;
  }

  $("#keyword").on("keyup", function() {
    var input = $("#keyword").val();
    var inputs = input.split(" ").filter(function(e) { return e; });
    var newInputs = inputs.map(editElement);
    var word = newInputs.join("|");
    var reg = RegExp(word);
    if (word != preWord) {
      $(".list").remove();
      if(input.length !== 0) {
        $.each(people, function(i, person) {
          if (person.match(reg)) {
            appendList(person);
          }
        });
        if ($(".list").length === 0) {
          appendList("一致する果物はありませんでした");
        }
      }
    }
    preWord = word;
  });
});
