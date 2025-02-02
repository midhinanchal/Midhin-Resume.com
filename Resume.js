let a=document.getElementById("navigation-bar");
let b=document.getElementById("menu");
let c=document.getElementById("close");
function btn(){
    if(a.style.display=="none" || a.style.display==""){
        a.style.display="block";
        b.style.display="none";
    }
    else{
        a.style.display="none";
        b.style.display="block";
    }
}

function closeMenu(){
    if(a.style.display=="block"|| a.style.display==""){
        a.style.display="none";
        b.style.display="block";
        
   }else{
       a.style.display="block";
       b.style.display="none";
   }
}
let d=document.getElementById("home");
let e=document.getElementById("tab-02");
let f=document.getElementById("tab-03");
let g=document.getElementById("tab-04");
let h=document.getElementById("tab-05");
let i=document.getElementById("li-tab1");
let j=document.getElementById("li-tab2");
let k=document.getElementById("li-tab3");
let l=document.getElementById("li-tab4");
let m=document.getElementById("li-tab5");
function tab1(event){
    event.preventDefault();
    if((e.style.display=="none"||e.style.display=="") && (j.style.backgroundColor=="transparent"|| j.style.backgroundColor=="") ){
        e.style.display="flex";
        d.style.display="none";
        f.style.display="none";
        g.style.display="none";
        h.style.display="none";
        j.style.backgroundColor="transparent";
        i.style.backgroundColor="#ffc107";
        k.style.backgroundColor="transparent";
        l.style.backgroundColor="transparent";
        m.style.backgroundColor="transparent";
        setActiveTab(1);
    }else{
        e.style.display="flex";
       j.style.backgroundColor="#ffc107";
        
    }
    
}
function tab2(event){
    event.preventDefault();
    if((e.style.display=="none"||e.style.display=="") && (j.style.backgroundColor=="transparent"|| j.style.backgroundColor=="") ){
        e.style.display="flex";
        d.style.display="none";
        f.style.display="none";
        g.style.display="none";
        h.style.display="none";
        j.style.backgroundColor="#ffc107";
        i.style.backgroundColor="transparent";
        k.style.backgroundColor="transparent";
        l.style.backgroundColor="transparent";
        m.style.backgroundColor="transparent";
        setActiveTab(2);
    }else{
        e.style.display="flex";
       j.style.backgroundColor="#ffc107";
        
    }
    
}
function tab3(event){
    event.preventDefault();
    if(f.style.display=="none" && k.style.backgroundColor=="transparent" ) {
        f.style.display="flex";
        d.style.display="none";
        e.style.display="none";
        g.style.display="none";
        h.style.display="none";
        k.style.backgroundColor="#ffc107";
        j.style.backgroundColor="transparent";
        i.style.backgroundColor="transparent";
        l.style.backgroundColor="transparent";
        m.style.backgroundColor="transparent";
        setActiveTab(3);
    }else{
        f.style.display="flex";
        k.style.backgroundColor="#ffc107";
        
    }
    
}
function tab4(event){
    event.preventDefault();
    if(g.style.display=="none" && l.style.backgroundColor=="transparent" ) {
        g.style.display="flex";
        d.style.display="none";
        e.style.display="none";
        f.style.display="none";
        h.style.display="none";
        l.style.backgroundColor="#ffc107";
        k.style.backgroundColor="transparent";
        j.style.backgroundColor="transparent";
        i.style.backgroundColor="transparent";
        m.style.backgroundColor="transparent";
       
        setActiveTab(4);
    }else{
        g.style.display="flex";
        l.style.backgroundColor="#ffc107";
        k.style.backgroundColor="transparent";
        j.style.backgroundColor="transparent";
        i.style.backgroundColor="transparent";
        m.style.backgroundColor="transparent";
    }
    
}
function tab5(event){
    event.preventDefault();
    if(h.style.display=="none" &&  m.style.backgroundColor=="transparent" ) {
        h.style.display="flex";
        d.style.display="none";
        e.style.display="none";
        g.style.display="none";
        f.style.display="none";
        m.style.backgroundColor="#ffc107";
        l.style.backgroundColor="transparent";
        k.style.backgroundColor="transparent";
        j.style.backgroundColor="transparent";
        i.style.backgroundColor="transparent";
        setActiveTab(5);
    }else{
        h.style.display="flex";
        m.style.backgroundColor="#ffc107";
        l.style.backgroundColor="transparent";
        k.style.backgroundColor="transparent";
        j.style.backgroundColor="transparent";
        i.style.backgroundColor="transparent";
    }
}
