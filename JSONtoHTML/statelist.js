$(document).ready(function(){
    $.getJSON("statelist.json", function(data){
        /*var statelist_data="";
        $.each(data, function(i, item) {
            alert(item.stateName);
        });
        $.each(data, function(data){
          statelist_data +="<tr>";
          statelist_data +="<td>" + data.stateName + "</td>";
          statelist_data +="<td>" + data.stateCode + "</td>";
          statelist_data +="</tr>";
        });
        $('#statelist').append(statelist_data);*/
        console.log('It Worked');
    });
});


/*$(document).ready(function () { 

    // FETCHING DATA FROM JSON FILE 
    $.getJSON("statelist.json", 
            function (data) { 
        var student = ''; 

        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 

            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
            student += '<tr>'; 
            student += '<td>' + 
                value.stateCode + '</td>'; 

            student += '<td>' + 
                value.NoOfProblems + '</td>'; 

            student += '<td>' + 
                value.TotalScore + '</td>'; 

            student += '<td>' + 
                value.Articles + '</td>'; 

            student += '</tr>'; 
        }); 
        
        //INSERTING ROWS INTO TABLE 
        $('#table').append(student); 
    }); 
}); */