LDATA = new Meteor.Collection(null, {
  transform: function (doc) {
    return new Ctl(doc);
  }
});
ses = {};
sesp = [];
