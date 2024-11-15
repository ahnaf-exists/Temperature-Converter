# Temperature Converter App

A simple and intuitive temperature conversion web application built using HTML, CSS (Tailwind), and JavaScript. This app allows users to easily convert temperatures between Celsius, Fahrenheit, and Kelvin scales.

## Features

- 🌡️ Seamless conversion between Celsius, Fahrenheit, and Kelvin temperature scales
- 🔢 Real-time temperature value display
- 🔢 Automatic unit display for the converted temperature
- ⚡ Instant conversion with a single click or "Enter" key press

## Tech Stack

- HTML5
- CSS (Tailwind)
- JavaScript (Vanilla)

## Implementation Details

### User Interface
The app features a clean and minimalist design with a centered temperature conversion section. It consists of:

1. **Input**: Allows the user to enter a temperature value and select the input unit (Celsius, Fahrenheit, or Kelvin).
2. **Output**: Displays the converted temperature value and its corresponding unit.
3. **Convert Button**: Triggers the temperature conversion when clicked.

### Temperature Conversion Logic
The temperature conversion logic is implemented in the `main.js` file:

1. **Conversion Map**: The app uses an object `conversionMap` to store the conversion formulas between different temperature scales.
2. **Conversion Function**: The `convertTemp` function takes the input value, input unit, and output unit, and performs the necessary conversion using the formulas from the `conversionMap`.
3. **Event Handling**: The "Convert" button click and "Enter" key press events trigger the `handleClick` function, which gets the input values, performs the conversion, and updates the output display.

### Styling
The app's styling is done using Tailwind CSS, a utility-first CSS framework. This allows for a modular and maintainable approach to styling the application.

## Usage

1. **Enter the Temperature Value**: Type the temperature value you want to convert in the input field.
2. **Select the Input Unit**: Choose the temperature scale (Celsius, Fahrenheit, or Kelvin) for the input value.
3. **Select the Output Unit**: Choose the temperature scale you want to convert the input value to.
4. **Convert**: Click the "Convert" button or press the "Enter" key to see the converted temperature value and its unit.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open a new issue or submit a pull request.