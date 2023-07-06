    $(document).ready(function() {
        $('#task-form').submit(function(event) {
        event.preventDefault();
        var taskName = $('#task-name').val();
        if (taskName) {
            var taskItem = $('<li><input type="checkbox"><span>' + taskName + '</span></li>');
            $('#task-list').append(taskItem);
            $('#task-name').val('');
        }
        });
    
        $(document).on('click', '#task-list li', function() {
        $(this).toggleClass('completed');
        });
    });
    