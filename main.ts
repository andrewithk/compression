function compressLEDs (ledString: string) {
    let count = 1
    let compressed = ""
    for (let i = 1; i < ledString.length; i++) {
        if (ledString[i] === ledString[i - 1]) {
            count += 1;
        } else {
            compressed += count + ledString[i - 1];
            count = 1;
        }
    }
    compressed = "" + compressed + count + ledString[ledString.length - 1]
    return compressed
}
function decompressLEDs (compressedString: string) {
    let count = 0
    let j = 0
    let decompressed = ""
    while (j < compressedString.length) {
        let count = parseInt(compressedString[j])
        let ledString = compressedString[j + 1]
        serial.writeValue("x", count)
        for (let index = 0; index < count; index++) {
                decompressed = "" + decompressed + ledString
        }
        j += 2
    }
    return decompressed
}
let test = "0000099999666663333322288"
let test1 = compressLEDs(test)
basic.showString(test1)
let result = decompressLEDs(test1)
basic.pause(100)
basic.showString(result)
