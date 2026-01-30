import { Col, Row } from "antd"
import type { Product } from "../../types/Product"
import { ProductCard } from "./ProductCard/ProductCard"
import type { FC } from "react"
import { LoadingGrid } from "./LoadingGrid"

interface Props {
    products: Product[],
    loading: boolean
    onSelect: (p: Product) => void
}

export const ProductList: FC<Props> = ({ products, loading, onSelect }) => {
    return loading ? <LoadingGrid /> :
        <Row gutter={[16, 16]}>
            {products.map(p => (
                <Col key={p.id} xs={24} sm={12} lg={8}>
                    <ProductCard key={p.id} product={p} onClick={onSelect}></ProductCard>
                </Col>
            ))}
        </Row>
}