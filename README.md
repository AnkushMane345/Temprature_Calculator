# 🌡 Advanced Temperature Converter

A simple and interactive web application that converts temperature from **Kelvin** to **Celsius, Fahrenheit, and Newton** in real-time.

---

## 🚀 Features

* 🔄 Instant temperature conversion as you type
* 🌡 Converts Kelvin → Celsius, Fahrenheit, Newton
* 🎨 Clean and modern UI with hover effects
* ⚡ Lightweight and fast (no external libraries)
* 📱 Responsive design (works on most screen sizes)

---

## 🛠 Technologies Used

* **HTML5** – Structure of the webpage
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Logic and interactivity

---

## 📂 Project Structure

```
📁 Temperature-Converter
│── index.html     # Main HTML file
│── style.css      # Styling file
│── script.js      # Conversion logic
```

---

## ⚙️ How It Works

1. User enters temperature in **Kelvin**
2. JavaScript listens for input changes
3. Values are converted using formulas:

   * Celsius = Kelvin − 273
   * Fahrenheit = (Celsius × 9/5) + 32
   * Newton = Celsius × 33/100
4. Results are displayed instantly on the screen

---

## ▶️ How to Run

1. Download or clone the repository
2. Open `index.html` in your browser
3. Enter a temperature value in Kelvin
4. View converted results instantly

---

## ⚠️ Input Validation

* Negative values or empty input will show:

  ```
  --
  ```
* Ensures only valid temperature values are processed

---

## 📸 Preview

* Input field for Kelvin
* Cards showing:

  * Celsius
  * Fahrenheit
  * Newton
* Smooth hover animation on result cards

---

## 💡 Future Improvements

* Add more temperature units (Rankine, Réaumur, etc.)
* Add dark mode 🌙
* Add unit selection instead of fixed Kelvin input
* Improve accessibility

---

## 📜 License

This project is open-source and free to use.
