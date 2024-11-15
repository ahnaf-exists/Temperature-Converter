const elems = {
    inputValue: document.getElementById("input-value"),
    inputUnit: document.getElementById("input-unit"),
    convertUnit: document.getElementById("convert-unit"),
    outputValue: document.getElementById("output-value"),
    outputUnit: document.getElementById("output-unit"),
    convertBtn: document.getElementById("convert-btn"),
};

const conversionMap = {
    "C->F": (v) => (v * 9) / 5 + 32,
    "F->C": (v) => ((v - 32) * 5) / 9,
    "C->K": (v) => v + 273.15,
    "K->C": (v) => v - 273.15,
    "F->K": (v) => ((v - 32) * 5) / 9 + 273.15,
    "K->F": (v) => ((v - 273.15) * 9) / 5 + 32,
};

const convertTemp = (value, from, to) => {
    if (from === to) return value || 0;
    const key = `${from}->${to}`;
    return conversionMap[key] ? conversionMap[key](Number(value)) : 0;
};

const handleClick = () => {
    const { inputValue, inputUnit, convertUnit, outputValue, outputUnit } =
        elems;
    outputValue.innerText = convertTemp(
        inputValue.value,
        inputUnit.value,
        convertUnit.value
    );
    outputUnit.innerText = convertUnit.value;
};

elems.convertBtn.addEventListener("click", handleClick);
elems.inputValue.addEventListener(
    "keypress",
    (e) => e.key === "Enter" && handleClick()
);
