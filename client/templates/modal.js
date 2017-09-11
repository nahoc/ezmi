// helpers
Template.modal.helpers({
    getClickedTask: function () {
        let results = Session.get('clickedTaskArray');
        return results[0];
    },
});

// events
Template.modal.events({
    'click .deleteTask' (event) {
        let clickedTaskId = Session.get('clickedTaskArray')[0]._id;

        if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche?")) {
            Tasks.remove({
                _id: clickedTaskId,
            });
            AntiModals.dismissOverlay($('.anti-modal-overlay'));
        }
    },
});