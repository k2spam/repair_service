declare interface Item {
    title: string
    description: string
    image: string
}
declare interface ItemBlock {
    title: string
    icon: string
    type: string
    items: Item[]
}

declare interface Items {
    title: string
    items: ItemBlock[]
}