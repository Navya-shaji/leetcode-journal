class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.initialvalue = value
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.initialvalue += value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.initialvalue -= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {

        this.initialvalue *= value
        return this

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value == 0) {
            throw new Error("Division by zero is not allowed"
            )
        }
        this.initialvalue /= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.initialvalue **= value
        return this
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.initialvalue
    }
}