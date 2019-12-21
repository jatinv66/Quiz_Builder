$(document).ready(function(){
    $('.delete-question').on('click',function(e){
        $target =$(e.target);
        const id=($target.attr('data-id'));
        $.ajax({
            type:'DELETE',
            url:'/questions/'+id,
            success: function(response){
                alert('Deleting Question');
                window.location.href='/admins/admin_index';

            },
            error: function(err){
                console.log(err);
            }
        });
    });
});