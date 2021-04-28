export function sortByScore(a, b) {
    if (a.score >= b.score) return -1
    else return 1
}

export function sortByPriceAsc(a, b) {
    if (a.price <= b.price) return -1
    else return 1
}

export function sortByPriceDesc(a, b) {
    if (a.price >= b.price) return -1
    else return 1
}

