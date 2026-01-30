import { useEffect, useState } from "react"
import type { Product } from "../types/Product"
import { fetchProducts } from "../services/ProductService"

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const loadProducts = async () => {
        try {
            setLoading(true)
            const data = await fetchProducts()
            setProducts(data)
            setError(null)
        } catch (error) {
            console.error(error)
            setError('Não foi possível carregar os produtos')
        } finally {
            setLoading(false)
        }
    }

    const toggleStatus = (id: number) => {
        setProducts(products => 
            products.map(p => 
                p.id === id ? {...p, active: !p.active} : p
            )
        )
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return { products, loading, error, reload: loadProducts, toggleStatus }
}