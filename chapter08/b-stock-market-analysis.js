const fs = require('fs');
const util = require('util');

async function loadWasmModule(filePath) {
    const buffer = fs.readFileSync(filePath);
    const module = await WebAssembly.compile(buffer);
    const instance = await WebAssembly.instantiate(module);
    return instance.exports;
}
async function main() {
    const wasmModule = await loadWasmModule('moving_average.wasm');
    const prices = Float64Array.from([10.0, 20.0, 30.0, 40.0, 50.0]);
    const average = wasmModule.moving_average(prices, prices.length);
    console.log(`Moving Average: ${average}`);
}
main();