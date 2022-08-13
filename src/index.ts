export function capitalize(word: string): string {
    return word[0].toUpperCase() + word.slice(1)
}

export function transformPathIntoPhrase(path: string): string {
    return capitalize(path.split('-').join(' '))
}

export function transformPathIntoCamelcase(path: string): string {
    return path.split('-').map((word, index) => !!index ? capitalize(word) : word).join('')
}

export function reverseString(str: string): string {
    return str.split('').reverse().join('')
}

export function getSingleForm(word: string): string {
    const reversed = reverseString(word)

    if (reversed.startsWith('sei')) return reverseString(reversed.slice(3)) + 'y'
    if (reversed.startsWith('ses')) return reverseString(reversed.slice(2))
    return reverseString(reversed.slice(1))
}

export function getPluralForm(word: string): string {
    const reversed = reverseString(word)

    if (reversed.startsWith('y')) return reverseString(reversed.slice(1)) + 'ies'
    if (reversed.startsWith('s')) return reverseString(reversed) + 'es'
    return reverseString(reversed) + 's'
}

export function turnSnakeToCamel(phrase: string): string {
    return phrase
        .split('-')
        .map((part, index) => index !== 0 ? capitalize(part) : part)
        .join('')
}
