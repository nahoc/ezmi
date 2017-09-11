Template.colorCode.events({
  'click .color' (event) {
    // Prevent default browser form submit
    event.preventDefault();
    const clickedColor = event.currentTarget.id;
    const parent = $(event.currentTarget).closest('.anti-modal-body')[0];
    const id = $(parent).find('#modalTaskId').html();

    Tasks.update({
      _id: id
    }, {
      $set: {
        colorCode: clickedColor,
      }
    });

    Session.set('clickedTaskArray', Tasks.find({
      _id: id,
    }).fetch());
  },
});