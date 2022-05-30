

function run(){
    let lableName=$('#tLable').text();
    let textBoxInput=$('#tInput').val();

    let tOutput=selectOptions(textBoxInput);

    //document.body.insertAdjacentHTML('beforeend','${textBoxInput}<br>')
    $('#tText').append(lableName,textBoxInput.concat('<br>',tOutput,'<br>'));
    
}

function selectOptions(number){
    let text;
    switch(number){
        case '1':
            text='option 1 selected';
            break;
        case '2':
            text='option 2 selected';
            break;
        case '3':
            text='option 3 selected';
            break;
        case '4':
            text='Lorem ipsum dolor sit amet,\
            consectetur adipiscing elit. Nunc at mauris nulla.\
            Sed sit amet enim blandit mauris facilisis dignissim.\
            Pellentesque nec congue sapien. Phasellus eget pretium augue.\
            Vestibulum sed metus dignissim,\
            tincidunt mauris ac, hendrerit mi.\
            Phasellus efficitur nec risus sit amet sollicitudin.\
            Nam convallis lorem et venenatis consequat.Donec nec viverra mi.\
            Praesent nec lobortis enim. Aliquam in tellus mollis, tempor metus non, cursus ex. \
            Ut nec ligula quis dui mollis ornare. Phasellus sit amet mauris porta nibh facilisis vestibulum mollis nec erat.\
            Nulla facilisi. Fusce dapibus blandit arcu id finibus. In posuere nunc nec nisl aliquet, at tincidunt tortor egestas. \
            In semper risus eget orci sollicitudin, ac mollis massa ultrices. Sed pharetra dolor lorem, sed dictum enim eleifend viverra.\
            Ut ut facilisis nisi. Suspendisse sed massa sit amet sapien accumsan interdum vitae eget ex. Quisque ac justo quis velit mattis sodales.\
            Vestibulum fermentum dolor ac rutrum sagittis. Fusce quis sapien sapien.';
            break;
        default:
            text='Input is incorrect!Try again';
    }
    return text;
}


//Enter key
$(document).on('keypress',function(e) {
    $('#tInput').width($('#tInput').val().length*10);//text box width set
    if(e.which == 13) {
        run();
        $('#tInput').val("");//text box value reset
        $('#tInput').width();//text box width reset
    }
});
