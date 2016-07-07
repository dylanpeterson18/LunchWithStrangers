const ActionApiUtil = {
  createLunch(formData, cb){
    $.ajax({
      url: `api/lunch_events`,
      type: "POST",
      data: {lunch_events: formData},
      success(lunch) {
        cb(lunch);
      },
      error(city){
      }
    });
  },
  fetchLunches (cb) {
    $.ajax({
      url: "api/lunch_events",
      success (lunches) {
        cb(lunches);
      }
    });
  },

  getLunch (id, cb) {
    $.ajax({
      url: `api/lunch_events/${id}`,
      success (lunch) {
        cb(lunch);
      }
    });
  },
};

module.exports = ActionApiUtil;
