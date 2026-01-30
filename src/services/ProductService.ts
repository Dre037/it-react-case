import type { Product } from "../types/Product";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


export const fetchProducts = async (): Promise<Product[]> => {
    await sleep(2000)

    const response = await fetch('/data/database.json')

    if (!response.ok) throw new Error('Erro ao buscar cartões')

    return response.json()
}