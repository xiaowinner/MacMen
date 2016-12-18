/**
 * Created by MWY on 12/10/16.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/macmen');
mongoose.Promise = Promise;

var personSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: Number,
  stories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Story'}]
});
var storySchema = new mongoose.Schema({
  _creator: {type: Number, ref: 'Person'},
  title: String,
  fans: [{type: Number, ref: 'Person'}]
});

var Story = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);

/*var arron = new Person({_id: 1, name: 'Aaron', age: 100});
arron.save(function (err, doc) {
  if (err) {
    console.log(err)
  } else {
    //console.log(doc);
    var story1 = new Story({
      title: 'Once upon a timex',
      _creator: arron._id
    });

    story1.save(function (err) {
      if (err) {
        return
      }
    })
  }
});*/

Story.findOne({title: 'Once upon a timex'}).populate('_creator').exec(function (err, story) {
  console.log(story);
})


