// Дэлгэцтэй ажжлах контроллер
var uiController = (function () {
  console.log();
})();

// Санхүүтэй ажжлах контроллер
var financeController = (function () {})();

// Программ холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    console.log("test");
    //1. оруулсан өгөгдөлийг дэлгэцээс олж авна.
    //2. олж авсан өгөгдөлөө өгөгдөлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    //3. олж авсан өгөгдөлөө вэбийн тохирох хэсэгт гаргана.
    //4. төсөвийг тооцоолно.
    //5. эцэсийн үлдэгдэл тооцоог дэлгэцэд гаргана.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    } else {
      console.log("oor tovch baina");
    }
  });
})(uiController, financeController);
