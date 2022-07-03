var link=document.getElementsByClassName('links'),
    img=document.getElementsByTagName('img'),
    i,
    y;
for(i=0;i<link.length;i++)
{
    link[i].onclick= function()
    {
        for(y=0;y<img.length;y++)
        {
            if(img[y].getAttribute('data-filter') == this.getAttribute('data-filter') || this.getAttribute('data-filter')=='all')            
            {
                img[y].style.display='block';
            }
            else
            {
                img[y].style.display='none';
            }
        }
    }
}
var imgs1=document.getElementsByClassName('imgs'),
    divIMG=document.getElementById('img-show'),
    close1=document.getElementById('close'),
    caption1=document.getElementById('caption'),
    imgShow=document.getElementById('show-img');
imgs1[0].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[1].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[2].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[3].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[4].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[5].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[6].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[7].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[8].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[9].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[10].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[11].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[12].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[13].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[14].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[15].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[16].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[17].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[18].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
imgs1[19].onclick=function()
{
    divIMG.style.display='block';
    caption1.innerHTML=this.alt;
}
close1.onclick=function()
{
    divIMG.style.display='none';
}
var currentTab = 0;
              document.addEventListener("DOMContentLoaded", function(event) {


              showTab(currentTab);

              });

              function showTab(n) {
              var x = document.getElementsByClassName("tab");
              x[n].style.display = "block";
              if (n == 0) {
              document.getElementById("prevBtn").style.display = "none";
              } else {
              document.getElementById("prevBtn").style.display = "inline";
              }
              if (n == (x.length - 1)) {
              document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
              } else {
              document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
              }
              fixStepIndicator(n)
              }

              function nextPrev(n) {
              var x = document.getElementsByClassName("tab");
              if (n == 1 && !validateForm()) return false;
              x[currentTab].style.display = "none";
              currentTab = currentTab + n;
              if (currentTab >= x.length) {
            
              document.getElementById("nextprevious").style.display = "none";
              document.getElementById("all-steps").style.display = "none";
              document.getElementById("register").style.display = "none";
              document.getElementById("text-message").style.display = "block";




              }
              showTab(currentTab);
              }

              function validateForm() {
                   var x, y, i, valid = true;
                   x = document.getElementsByClassName("tab");
                   y = x[currentTab].getElementsByTagName("input");
                   for (i = 0; i < y.length; i++) {
                       if (y[i].value == "") {
                           y[i].className += " invalid";
                           valid = false;
                       }


                   }
                   if (valid) {
                       document.getElementsByClassName("step")[currentTab].className += " finish";
                   }
                   return valid;
               }

               function fixStepIndicator(n) {
                   var i, x = document.getElementsByClassName("step");
                   for (i = 0; i < x.length; i++) {
                       x[i].className = x[i].className.replace(" active", "");
                   }
                   x[n].className += " active";
               }
var btn5=document.getElementById('up');
var btn11=document.getElementById('btn3');
var btn22=document.getElementById('btn1');
window.onscroll=function()
{
    if(scrollY >= 300)
    {
        btn5.style.display='block';
    }
    else
    {
        btn5.style.display='none';
    }
    btn5.onclick= function()
    {
        window.scroll(0,0);
    }
    btn11.onclick= function()
    {
        window.scroll(0,1121);
    }
    btn22.onclick= function()
    {
        window.scroll(0,1861);
    }
}
var word="Late Night Dine Right",
    letter=document.getElementById('letter'),
    mark=document.getElementById('mark'),
    position=0;
function written()
{
    if(position<word.length)
    {
        letter.textContent += word.charAt(position);
        position++;
        setTimeout(written,250);
        setTimeout(show,200);
    }
    else
    {
        setTimeout(delete1,250);
    }
}
setTimeout(written,250)
function show()
{
    mark.classList.toggle('show')
}
function delete1()
{
    if(position>=0)
    {
        letter.textContent=word.substring(0,position);
        position--;
        setTimeout(show,200);
        setTimeout(delete1,250);
    }
    else
    {
        setTimeout(written,250);
    }
}