setInterval(()=>{
    d= new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime = d.getSeconds(); 
    hrotation=30*htime+mtime/2;
    motation=6*mtime;
    srotation=6*stime;

    hours.style.transform = `rotate(${hrotation}deg)`
    minuts.style.transform = `rotate(${motation}deg)`
    second.style.transform = `rotate(${srotation}deg)`

},1000)