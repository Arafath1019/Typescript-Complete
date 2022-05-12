const add = (a: number, b: number): number => {
  return a + b;
};

// Inference around functions
const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// Annotations for Anonymous Functions
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void and Never
const logger = (message: string): void =>{
  console.log(message);
}

const throwError = (message: string) : never =>{
  throw new Error(message);
}

// Distructuring with Annotations

const forecast = {
  date: new Date(),
  weather: "sunny",
};
// Normal function
const logWeather = (forecast : {date: Date; weather: string}): void =>{
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);
// Distructured Function
const logWeatherDistructured = ({date, weather} : {date: Date; weather: string}): void => {
  console.log(date);
  console.log(weather);
}


