function menubutton(){
    var x = document.getElementById("expand")
    x.style.display='grid'
}
function menubuttonclose(){
    var x = document.getElementById("expand")
    x.style.display='none'
}

// know-more and hide

function expandconstruction(){
    var x = document.getElementById("constructiontext")
    var y = document.getElementById("hide-construction-button")
    var z = document.getElementById("construction-button")
    x.style.display='block'
    y.style.display='block'
    z.style.display='none'
}
function collapseconstruction(){
    var x = document.getElementById("constructiontext")
    var y = document.getElementById("hide-construction-button")
    var z = document.getElementById("construction-button")
    x.style.display='none'
    y.style.display='none'
    z.style.display='block'
}
function expandIDA(){
    var x = document.getElementById("IDAtext")
    var y = document.getElementById("hide-IDA-button")
    var z = document.getElementById("IDA-button")
    x.style.display='block'
    y.style.display='block'
    z.style.display='none'
}
function collapseIDA(){
    var x = document.getElementById("IDAtext")
    var y = document.getElementById("hide-IDA-button")
    var z = document.getElementById("IDA-button")
    x.style.display='none'
    y.style.display='none'
    z.style.display='block'
}
function expandPSP(){
    var x = document.getElementById("PSPtext")
    var y = document.getElementById("hide-PSP-button")
    var z = document.getElementById("PSP-button")
    x.style.display='block'
    y.style.display='block'
    z.style.display='none'
}
function collapsePSP(){
    var x = document.getElementById("PSPtext")
    var y = document.getElementById("hide-PSP-button")
    var z = document.getElementById("PSP-button")
    x.style.display='none'
    y.style.display='none'
    z.style.display='block'
}
function expandlegal(){
    var x = document.getElementById("legaltext")
    var y = document.getElementById("hide-legal-button")
    var z = document.getElementById("legal-button")
    x.style.display='block'
    y.style.display='block'
    z.style.display='none'
}
function collapselegal(){
    var x = document.getElementById("legaltext")
    var y = document.getElementById("hide-legal-button")
    var z = document.getElementById("legal-button")
    x.style.display='none'
    y.style.display='none'
    z.style.display='block'
}