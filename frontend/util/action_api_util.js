const ActionApiUtil = {
  createLunch(formData){
    $.ajax({
      url: `api/lunch_events`,
      type: "POST",
      data: {lunch_events: formData},
      success(city) {
      console.log("code worked- you're so smart and amazing!");
      },
      error(city){
      console.log("create a lunch failedddd: you're pathetic");
      console.log("this is the city you tried sending:"+city);
      }
    });
  },
  fetchLunches (cb) {
    console.log("got to api util fetch lunches ajax request");

    $.ajax({
      url: "api/lunch_events",
      success (lunches) {
        cb(lunches);
      }
    });
  },

  getLunch (id, cb) {
    $.ajax({
      url: `api/lunch_event/${id}`,
      success (lunch) {
        cb(lunch);
      }
    });
  },
};

module.exports = ActionApiUtil;
