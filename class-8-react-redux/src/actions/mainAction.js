export function addNumber(number) {
    return {
        type: "ADD",
        value: number
    }
}

export function removeNumber(number) {
    return {
        type: "REMOVE",
        value: number
    }
}