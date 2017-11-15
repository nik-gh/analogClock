function setTime() {
  const canvas = document.getElementById('aclock');
  const context = canvas.getContext('2d');
  const aClockRad = canvas.width / 2;

  context.fillStyle = 'black';
  context.beginPath();
  context.arc(aClockRad, aClockRad, aClockRad, 0, 2 * Math.PI);
  context.fill();

  context.fillStyle = 'white';
  context.beginPath();
  context.arc(aClockRad, aClockRad, 12, 0, 2 * Math.PI);
  context.fill();

  context.font = `${aClockRad / 10}px ariel`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  for (let index = 1; index <= 12; index++) {
    context.fillText(index, aClockRad + (
      (aClockRad * 0.9) * Math.sin((index * (2 * Math.PI)) / 12)), aClockRad - (
      (aClockRad * 0.9) * Math.cos((index * (2 * Math.PI)) / 12)));
  }

  const hours = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const fullHr = (hours % 12) + (min / 60) + (sec / 3600);
  const hrAngle = fullHr * ((2 * Math.PI) / 12);
  const minAngle = min * ((2 * Math.PI) / 60);
  const secAngle = sec * ((2 * Math.PI) / 60);

  context.strokeStyle = 'white';
  function clockHandle(con, acr, size, angleType, lw) {
    con.moveTo(acr, acr);
    con.lineTo(acr + (
      (acr * size) * Math.sin(angleType)), acr - (
      (acr * size) * Math.cos(angleType)));
    con.lineWidth = lw;
    con.stroke();
  }

  clockHandle(context, aClockRad, 0.6, hrAngle, 5);
  clockHandle(context, aClockRad, 0.8, minAngle, 3);
  clockHandle(context, aClockRad, 0.9, secAngle, 2);
}

setTime();
setInterval(setTime, 1000);
