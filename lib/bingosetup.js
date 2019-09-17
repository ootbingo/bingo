function bingosetup() {
  $('.popout').click(function() {
        var mode = null;
        var line = $(this).attr('id');
        var name = $(this).html();
        var items = [];
        var cells = $('#bingo .'+ line);
        for (var i = 0; i < 5; i++) {
          items.push($(cells[i]).html());
        };
        window.open('../bingo-popout.html#'+ encodeURIComponent(name +'='+ items.join(';;;')),"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=220, height=460");
    });

  $("#bingo tr td:not(.popout), #selected td").toggle(
    function () {
      $(this).addClass("greensquare");
    },
    function () {
      $(this).addClass("redsquare").removeClass("greensquare");
    },
    function () {
      $(this).removeClass("redsquare");
    }
  );

  $("#row1").hover(function() { $(".row1").addClass("hover"); }, function() {	$(".row1").removeClass("hover"); });
  $("#row2").hover(function() { $(".row2").addClass("hover"); }, function() {	$(".row2").removeClass("hover"); });
  $("#row3").hover(function() { $(".row3").addClass("hover"); }, function() {	$(".row3").removeClass("hover"); });
  $("#row4").hover(function() { $(".row4").addClass("hover"); }, function() {	$(".row4").removeClass("hover"); });
  $("#row5").hover(function() { $(".row5").addClass("hover"); }, function() {	$(".row5").removeClass("hover"); });

  $("#col1").hover(function() { $(".col1").addClass("hover"); }, function() {	$(".col1").removeClass("hover"); });
  $("#col2").hover(function() { $(".col2").addClass("hover"); }, function() {	$(".col2").removeClass("hover"); });
  $("#col3").hover(function() { $(".col3").addClass("hover"); }, function() {	$(".col3").removeClass("hover"); });
  $("#col4").hover(function() { $(".col4").addClass("hover"); }, function() {	$(".col4").removeClass("hover"); });
  $("#col5").hover(function() { $(".col5").addClass("hover"); }, function() {	$(".col5").removeClass("hover"); });

  $("#tlbr").hover(function() { $(".tlbr").addClass("hover"); }, function() {	$(".tlbr").removeClass("hover"); });
  $("#bltr").hover(function() { $(".bltr").addClass("hover"); }, function() {	$(".bltr").removeClass("hover"); });

  var bingoOpts = {
    seed: getUrlParameter('seed') || Math.ceil(999999 * Math.random()).toString(),
    mode: getUrlParameter('mode') || 'normal',
    lang: getUrlParameter('lang') || 'name'
  };

  var prettyMode = {
  'normal': 'Normal',
  'short': 'Short',
  'long': 'Long',
  'blackout': 'Blackout'
  };

  var cardType = prettyMode[bingoOpts.mode];
  var results = $("#results");
  var newCards = $("#newcards");

  newCards.append("<a class=\"newcard\" href=\"?mode=normal&seed=" + Math.ceil(999999 * Math.random()).toString() + "\">Normal card</a>");
  newCards.append("<a class=\"newcard\" href=\"?mode=short&seed=" + Math.ceil(999999 * Math.random()).toString() + "\">Short card</a>");
  newCards.append("<a class=\"newcard\" href=\"?mode=blackout&seed=" + Math.ceil(999999 * Math.random()).toString() + "\">Blackout card</a>");

  results.append("<a href=\"?mode=" + bingoOpts.mode + "&seed=" + bingoOpts.seed + "\"><img src=\"../img/flags/United_States_of_America.png\" alt=\"English\"></a>");
  results.append("<a href=\"?mode=" + bingoOpts.mode + "&seed=" + bingoOpts.seed + "&lang=jp\"><img src=\"../img/flags/Japan.png\" alt=\"Japanese\"></a>");

  results.append(
    "<p>OoT Bingo <strong>" + bingoList["info"].version
    + "</strong>&emsp;Seed: <strong>" + bingoOpts.seed
    + "</strong>&emsp;Card type: <strong>" + cardType + "</strong></p>");

  var bingoFunc = ootBingoGenerator;

  var bingoBoard = bingoFunc(bingoList, bingoOpts);

  for (i=1; i<=25; i++) {
    $('#slot'+i).append(bingoBoard[i].name);
  }
}

$(bingosetup);
