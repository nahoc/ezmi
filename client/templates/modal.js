Template.modal.helpers({
    getClickedTask: function () {
        const results = Tasks.findOne({},{_id: CLICKED_TASK});
        console.log(results);
        return results;
    },
});