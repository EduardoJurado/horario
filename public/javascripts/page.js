function TotalHoras(){
    let h = parseInt( $(".txtHoras").val()); 
    let d = parseInt( $(".txtDias").val()); 
    let t = d* h ;
    if (isNaN(t))
        t = 0; 
    if(t <9 ) {
        t = "0"+t; 
    }
    
    t = t + ":00"; 
    
    $(".TotalStandar").text(t); 
}

$(".txtHoras").change(e => {
    e.preventDefault();
    TotalHoras(); 
});
$(".txtDias").change(e => {
    e.preventDefault();
    TotalHoras(); 
});