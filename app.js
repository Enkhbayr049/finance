// Дэлгэцтэй ажжлах контроллер "аймшгийн архтет "
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    gitInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// Санхүүтэй ажжлах контроллер
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    items: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };

  return {
    addItem: function (type, desc, val) {
      var item, id;

      if (data.items[type].length === 0) id = 1;
      else {
        XMLDocument;
        id = data.items[type][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }

      data.items[type].push(item);
    },

    seeData: function () {
      return data;
    },
  };
})();

// Программ холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // console.log(uiController.gitInput());
    var input = uiController.gitInput();
    //1. оруулсан өгөгдөлийг дэлгэцээс олж авна.
    //2. олж авсан өгөгдөлөө өгөгдөлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    financeController.addItem(input.type, input.description, input.value);
    //3. олж авсан өгөгдөлөө вэбийн тохирох хэсэгт гаргана.
    //4. төсөвийг тооцоолно.
    //5. эцэсийн үлдэгдэл тооцоог дэлгэцэд гаргана.
  };
  var setUpEventListeners = function () {
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      return setUpEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
