var cat = function() {
  this.name = ko.observable("katy");
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.nickNames = ko.observableArray([
    {nickName: "boosy"},
    {nickName: "7ambozo"},
    {nickName: "lawy"},
    {nickName: "bozo"}
  ]);

  this.level = ko.computed(function() {
    if (this.clickCount() < 10) {
      return "newborn";
    } else if (this.clickCount() < 20) {
      return "infant";
    } else if (this.clickCount() < 30) {
      return "master";
    } else {
      return "I don't know what to say";
    }
  }, this);
}

var ViewModel = function() {
  this.currentCat = ko.observable(new cat());
  
  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };

}

ko.applyBindings(new ViewModel())
