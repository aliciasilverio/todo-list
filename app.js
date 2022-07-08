window.onload = function () {
    added();
    closed();
    checked();
};

function added() {
    let myNodelist = document.getElementsByTagName("LI");
    let boxy = document.getElementById("box_id");
    let todo = document.getElementById("to_do");
    for (i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}
ap



// For adding a "checked" symbol when clicking on a list item
function checked() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

// For Clicking on a "x" button to delete the current list item
function closed() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";

        }
    }
}

function addnew() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    let li = document.createElement("li");
    let inputs = document.getElementById("new").value;
    let t = document.createTextNode(inputs);
    li.appendChild(t);
    if (inputs === '') {
        alert("Come on, there must be something you need to do!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("new").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // scrollBarFix()
}

// ADDED THIS FUNCTION WHICH ADDS MARGIN TO .close BY THE VALUE OF SCROLLBAR WIDTH
function scrollBarFix() {
    var ul = $("ul");
    // if scrollbar is visible
    if(ul.prop('scrollHeight') > ul.height()) {
        //calculate width and apply margin
        var normalw = $("ul").width();
        var scrollw = normalw - $(".test").width(); // total_width - width_of_element_pushed_by_scrollbar = scrollbar_width
        $(".close").css({marginRight: "-" + scrollw +'px'});
    }
}


//active button with .active class

$(function () {
    $('.add_new').click(function () {

        $(this).toggleClass('active');
        setTimeout(function () {
            $('.add_new').removeClass('active');
        }, 1100);
    });
});



//active button with .rotate class

$(function(){
$('.add_new').click(function() {

  $(this).toggleClass('rotate_button');
    setTimeout(function(){  
    $('.add_new').toggleClass('rotate_back_button');
      setTimeout(function(){  
    $('.add_new').removeClass('rotate_button rotate_back_button');
      }, 1200);
      }, 1000);

      })
});
