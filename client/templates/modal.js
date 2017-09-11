Template.modal.helpers({
    getClickedTask: function () {
        let results = Session.get('clickedTaskArray');
        return results[0];
    },
});