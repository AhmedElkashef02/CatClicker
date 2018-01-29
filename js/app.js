var cat = function(data) {
  this.name = ko.observable(data.name);
  this.clickCount = ko.observable(data.clickCount);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nickNames = ko.observableArray(data.nickNames);

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
  this.currentCat = ko.observable(new cat({
    name: 'katy',
    clickCount: 0,
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nickNames: ['boody','7ambozo','lawy','bozo']
  }));

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

}

ko.applyBindings(new ViewModel())
