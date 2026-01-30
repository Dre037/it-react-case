import { useEffect, useMemo, useState, type FC } from "react"
import { useProducts } from "../hooks/ProductState";
import type { Product } from "../types/Product";
import { ErrorState } from "./ErrorState";
import { Layout, Space } from "antd";
import { SearchBar } from "./SearchBar/SearchBar";
import { ProductList } from "./ProductList/ProductList";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { useDebounce } from "../hooks/SearchState";

export const ProductListPage: FC = () => {
    const [search, setSearch] = useState('');
    const [loadingSearch, setLoadingSerach] = useState(false)
    const debounceSearch = useDebounce(search, 400)
    const { products, loading, error, reload, toggleStatus } = useProducts()
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const filtered = useMemo(() => {
        if (!debounceSearch) return products
        return products.filter(f => f.name.toLowerCase().includes(debounceSearch.toLowerCase()));
    }, [products, debounceSearch])

    const selected = useMemo(() => products.find(f => f.id === selectedId) || null,
        [products, selectedId]
    )

    useEffect(() => {
        if (search === '') return

        setLoadingSerach(true)

        const timer = setTimeout(() => {
            setLoadingSerach(false)
        }, 500);

        return () => clearTimeout(timer)
    }, [debounceSearch])

    return (
        <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
            <Layout.Content style={{ flex: 1, padding: 24, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
                <Space style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
                    <Title level={2} style={{ marginBottom: 8 }}>
                        Seus Produtos Financeiros
                    </Title>

                    <Text type="secondary">
                        Gerencie seus cartões, visualize detalhes e controle o status de cada produto.
                    </Text>
                </Space>
                <SearchBar value={search} onChange={setSearch}></SearchBar>
                <ProductList products={filtered} loading={loading || loadingSearch} onSelect={(product) => setSelectedId(product.id)}></ProductList>
                {error && <ErrorState onRetry={reload} />}
                <ProductDetails product={selected} onClose={() => setSelectedId(null)} onToggleStatus={toggleStatus}></ProductDetails>
            </Layout.Content>
        </Layout>
    )
}