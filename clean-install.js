stuff = new Meteor.Collection("stuff");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to clean-install.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (!stuff.findOne()) {
      stuff.insert({
        name: "Jonah",
        age: 42
      });
      stuff.insert({
        name: "Sarah",
        age: 34
      });
    }
  });
}
