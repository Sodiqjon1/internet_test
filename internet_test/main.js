document.getElementById('startButton').addEventListener('click', function() {
  var startTime = new Date().getTime();
  var downloadSpeed = Math.random() * 100; // Simulating download speed
  var uploadSpeed = Math.random() * 50; // Simulating upload speed
  var endTime = new Date().getTime();

  var downloadMbps = downloadSpeed.toFixed(2);
  var uploadMbps = uploadSpeed.toFixed(2);

  var timeTaken = (endTime - startTime) / 1000;

  var result = document.getElementById('result');
  result.innerHTML = 'Download Speed: ' + downloadMbps + ' Mbps<br>';
  result.innerHTML += 'Upload Speed: ' + uploadMbps + ' Mbps<br>';
  result.innerHTML += 'Test completed in ' + timeTaken + ' seconds';
});