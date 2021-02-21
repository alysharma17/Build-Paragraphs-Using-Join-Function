function submit() {
   var get_text = [];
   for(var a = 1 ; a <=6 ; a++)
   {
      get_text.push(document.getElementById("s_" + a).value);
   }
document.getElementById("display_p1").innerHTML = get_text.join(". ");
}

function submit() {
   var get_text_2 = [];
   for(var b = 1 ; b <=6 ; b++)
   {
      get_text_2.push(document.getElementById("s_" + b).value);
   }
document.getElementById("display_p2").innerHTML = get_text_2.join(". ");
}

