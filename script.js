function calculateBMI() {
  var h = document.bmiForm.height.value;
  var w = document.bmiForm.weight.value;

  if (h == "" || w == "") {
    alert("Please enter both height and weight.");
    return;
  }

  var height = parseFloat(h) / 100;
  var weight = parseFloat(w);
  var bmi = weight / (height * height);
  var category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  document.bmiForm.result.value = "Your BMI is " + bmi.toFixed(2) + "\nCategory: " + category;
}
