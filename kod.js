function kaydet(){
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;
    localStorage.setItem('isim', isim);
    localStorage.setItem('soyisim', soyisim);
    window.location.assign("sayfa2.html");
    
  }
  function notHesapla() {
    var vize1 = Number(document.getElementById("vize1").value);
    var vize2 = Number(document.getElementById("vize2").value);
    var final = Number(document.getElementById("final").value);
    var puan = (vize1 + vize2 + final) / 3;
  
    
    if (puan >=90) {
      var harf = "AA ð";
    } else if (puan >= 80) {
      var harf = "BA ð";
    } else if (puan >= 70) {
      var harf = "BB ð";
    } else if (puan >= 60) {
      var harf = "CB ð";
    } else if (puan >= 50) {
        var harf = "CC ð";
    } else {
      var harf = "FF ð¥";
    }
  
    document.getElementById("sonuc").innerHTML =
      "SayÄ±n " +
      localStorage.getItem("isim") +
      " " +
      localStorage.getItem("soyisim")+
      " Harf Notunuz: " +
      harf;
  }
  function sayfa1(){
    window.location.assign('index.html');
  }
  
  function sayfa2(){
  
    window.location.assign('sayfa2.html');
  }
