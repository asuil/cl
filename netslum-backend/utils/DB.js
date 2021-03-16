const mongoose = require('mongoose');

const CONNSTR = `mongodb+srv://adminUser:\
${process.env.MONGODB_PASSWORD}\
@cluster0.ueqgo.mongodb.net/myFirstDatabase\
?retryWrites=true&w=majority`;

const DB = ({
  onSuccess,
  onFailure,
}) => {
  mongoose.connect(CONNSTR, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }).then((response) => {
    onSuccess(response);
  }).catch((err) => {
    onFailure(err);
  });
};

module.exports = DB;
