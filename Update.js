

$(function(){
   


  hideInputs();
    loading();
   
$('#Testing').on('click','.btn-warning',edit)
   


})


function loading(){
    $.ajax({
        method:'GET',
        url:'https://usman-cui-recipies.herokuapp.com/api/recipes',
        success:function(res){
            for(let i=0; i<res.length;i++){
                let data=res[i];
                $('#Testing').append(`<div class='d-flex justify-content-between' data-id='${data._id}' >  <h4> ${data.title}   </h4>  <button class='btn btn-warning' id="btn" > Edit </button>  </div>`)
            }
        }
    })
}



function edit(){
    $('#Body').show();
    $('#Title').show();
    $('#Btn').show(); 
    
 
    let id=$(this).closest('.d-flex').attr('data-id');
    console.log(id);    

    $('#Btn').click(function(){
        let body=$('#Body').val();
        let title=$('#Title').val();
        $.ajax({
            method:"PUT",
            url:`https://usman-cui-recipies.herokuapp.com/api/recipes/${id}`,
            data:{body,title},
            success:function(){
             loading();
            }
        })
    })

}

function hideInputs(){
    $('#Body').hide();
    $('#Title').hide();
    $('#Btn').hide();
}

