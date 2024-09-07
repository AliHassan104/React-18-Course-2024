// var let const

function datatypes() {
  var x = 10;
  let y = 20;
  const z = 30;

  if (true) {
    var x = 15; // globally updated
    let y = 25; // locally updated

    //z = 35; //can't update because const can't change
  }

  console.log(x);
  console.log(y);
  console.log(z);
}

datatypes();
