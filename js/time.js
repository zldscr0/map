var t = setTimeout(time, 1000);
function time() {
     clearTimeout(t);
      var dt = new Date();
      
      var d1 = new Date('2022/03/12 10:42:22');
    
      var d = parseInt(dt - d1) / 1000;//两个时间相差的秒数
      const h = parseInt(d / 3600)
      const m = parseInt(d / 60 % 60)
      const s = Math.ceil(d % 60)    
      var day=0;
      document.querySelector(".time").innerHTML = "开始写地图已经："+day + "天"+h%24 +"时"+m+"分"+s+"秒";
      t=setTimeout(time, 1000);
    }
