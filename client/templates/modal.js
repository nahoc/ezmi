Template.modal.helpers({
    getClickedTask: function () {
        let results = Session.get('clickedTaskArray');
        return results[0];
    },
});

Template.modal.events({
    'click .deleteTask' (event) {
        /*AntiModals.confirm({
            title: "Supprimation d'une tâche",
            message: 'Êtes-vous vraiment sûr de vouloir supprimer cette tâche?',
            ok: 'Supprimer',
            cancel: 'Annuler',
            closer: true,
        });*/
        let clickedTaskId = Session.get('clickedTaskArray')[0]._id;

        if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche?")) {
            Tasks.remove({
                _id: clickedTaskId,
            });
            AntiModals.dismissOverlay($('.anti-modal-overlay'));
        }
    },
});