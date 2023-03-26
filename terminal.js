$(window).on("load", function () {
    let dt=new Date(Date.now());
    //let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('#tLable').text('Guest@acc > '+ dt);
    $('#tText').append(selectOptions('banner')+"Type <span class=\"prcmd\">\"help\"</span> to see list of available commands.<br>");
});

function run(){
    let lableName=$('#tLable').text();
    let textBoxInput=$('#tInput').val().toLowerCase().trim();
    let tOutput=selectOptions(textBoxInput);
    //document.body.insertAdjacentHTML('beforeend','${textBoxInput}<br>')
    if(textBoxInput!=='clear'){
        $('#tText').append(lableName.concat(
            '<br>','>> <span class="prcmd">',textBoxInput,'</span>',"<br>"
            ,tOutput));
    }
    
}

function selectOptions(input){
    let text="";
    switch(input){
        case 'help':
            text=help();
            break;
        case 'social':
            text='\
            LinkedIn : <a href="https://www.linkedin.com/in/nadun-danushka-kooragamage-a33122207">https://www.linkedin.com/in/nadun-danushka-kooragamage-a33122207</a><br>\
            GitHub : <a href="https://github.com/nadundanushka2000696969">https://github.com/nadundanushka2000696969</a><br>\
            Instagram : <a href="https://www.instagram.com/ndonkykong/">https://www.instagram.com/ndonkykong/</a><br>\
            ';
            break;
        case 'whois':
            text='I’m a Computer science student at IIT (Informatics Institute of\
            Technology) SE intern at SimCentric Technologies Sri Lanka for 12 months.\
            An inspiring programmer who enjoys experimenting with new technologies dedicated to improving skills through practical learning and development.\
            Adept at using HTML5, Python, Java, JavaScript, C++, Game Engins such as UE4/5, Unity and other programming \
            languages to produce clean code. Well-organized and collaborative team player with communication \
            and analytical abilities.';
            break;
        case 'projects':
            text='\
            2022 - <b>Parkour Parkour | Game Engine Architecture</b><br>\
            A simple 3d platformer for the coursework. This project helped me understand how the game \
            engine works and its technology.<br>\
            <a href="https://youtu.be/N3-qi_nxl-U">Parkour Parkour</a><br><br>\
            \
            2021 - <b>DES KOMOREBI | Tourism web application</b><br>\
            <i>(Worked on OCR , Rest API & AWS)</i><br>\
            Worked on an OCR system to train and improve the accuracy of Sinhala characters not recognized \
            by tesseract and to link front-end and back-end using the Rest API for the software development \
            team project.<br>\
            <a href="https://goceylon.herokuapp.com">Goceylon</a><br><br>\
            \
            2021 - <b>Rocket game</b><br>\
            Created a simple rocket game that carries different weights of boulders within 3 days, without prior \
            knowledge of unity game engine for math and physics for game development coursework.<br><br>\
            2021 - <b>Championship management system</b><br>\
            Basic Championship management system using OOP concept for the Object-Oriented\
            programming coursework.<br><br>\
            \
            2021 - <b>AVAN | Demo Web Site – Front end development</b><br>\
            <i>(Worked on movie selection and buy system)</i><br>\
            Basic front end development web site for Web development coursework using HTML, CSS and Js.<br><br>\
            \
            2017 - <b>Supermarket management system</b><br>\
            <i>(Team leader | Worked on UI, Database, Programming)</i><br>\
            Successfully created a supermarket stock and employee management system using C# and MS \
            Access for the Esoft C# project.\
            ';
            break;
        case 'clear':
            $('#tText').empty();
            break;

        case 'banner':
            text='<div class=\'ascii-art\'><br>\
┌┬─┬┐░░░░░░░░░░░░░┌┐░░░░░░░░░┌─┐░░░┌┐┌─┐░░░┌┐░░<br>\
││││├─┬┐┌─┬─┬──┬─┐│└┬─┐┌──┬┬┐│┼├─┬┬┤└┤─┼─┬┐├┼─┐<br>\
│││││┴┤└┤─┤┼││││┴┤│┌┤┼││││││││┌┤┼│┌┤┌┤┌┤┼│└┤│┼│<br>\
└─┴─┴─┴─┴─┴─┴┴┴┴─┘└─┴─┘└┴┴┼┐│└┘└─┴┘└─┴┘└─┴─┴┴─┘<br>\
░░░░░░░░░░░░░░░░░░░░░░░░░░└─┘░░░░░░░░░░░░░░░░░░<br>\
             </div>';
            break;
        case 'email':
            text="<a href=\"mailto:nadun.danushka.kooragamage@gmail.com\">nadun.danushka.kooragamage@gmail.com</a>";
            break;
        case 'gui':
            window.location = "gui.html";
            break;
        default:
            text='Command not found : <span class="prcmd">'+input+'</span>';
    }
    return text;
}


//Enter key
$(document).on('keypress',function(e) {
    $('#tInput').attr('size',($('#tInput').val().length*2));//text box width set
    if(e.which == 13) {
        run();
        $('#tInput').val("");//text box value reset

        //timer
        let dt=new Date(Date.now());
        //let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        $('#tLable').text('Guest@acc > '+ dt);

        $("html, body").animate({ scrollTop: $(document).height() }, "fast","linear");
    }
});

$(document).on('click',function(){
    $('#tInput').focus();
})

function help(){
    //<tr><td></td><td></td></tr>\
    let text='\
    <table>\
    <tr><td class="cmd">whois</td><td>About the creator of this website.</td></tr>\
    <tr><td class="cmd">social</td><td>Social Media accounts.</td></tr>\
    <tr><td class="cmd">projects</td><td>Projects done by creator of this site.</td></tr>\
    <tr><td class="cmd">banner</td><td>Display the header</td></tr>\
    <tr><td class="cmd">gui</td><td>Launch the gui</td></tr>\
    <tr><td class="cmd">clear</td><td>Clear the terminal.</td></tr>\
    <tr><td class="cmd">email</td><td>Display the email </td></tr>\
    </table>';
    return text;
}
