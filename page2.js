      const audio = document.getElementById('bg-audio');
      const slider = document.getElementById('volume-slider');
      const volumeText = document.getElementById('volume-level');
    
      // ตั้งค่าระดับเสียงเริ่มต้น
      audio.volume =0.3;
    
      // เปลี่ยนระดับเสียงเมื่อเลื่อน slider
      slider.addEventListener('input', function() {
        audio.volume = this.value;
        volumeText.textContent = Math.round(this.value * 100) + "%";
      });