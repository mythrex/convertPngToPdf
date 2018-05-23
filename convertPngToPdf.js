const { exec } = require('child_process');
var files = "";
for(var i=1;i<=process.argv[3];i++){
	if(i== process.argv[3])
		files += i+".png";
	else
		files += i+".png ";
}
var command = "convert "+files+" "+`${process.argv[2]}.pdf`;
exec(command, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    console.error(err);
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
