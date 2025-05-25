// إضافة القيمة للعرض
function append(value) {
  const display = document.getElementById("display");
  if (display.textContent === "0" || display.textContent === "Error") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

// مسح العرض بالكامل
function clearDisplay() {
  document.getElementById("display").textContent = "0";
}

// حذف آخر حرف من العرض
function deleteLast() {
  const display = document.getElementById("display");
  if (display.textContent.length > 1 && display.textContent !== "Error") {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

// حساب التعبير الرياضي بأمان
function calculate() {
  const display = document.getElementById("display");
  const expression = display.textContent;

  // تحقق من الرموز المسموح بها فقط (أرقام وعوامل حسابية)
  if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
    display.textContent = "Error";
    return;
  }

  try {
    const result = math.evaluate(expression);
    display.textContent = result;
  } catch {
    display.textContent = "Error";
  }
}
