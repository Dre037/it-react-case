import { Col, Row } from "antd";
import type { FC } from "react";
import { ProductCardSkeleton } from "./ProductCard/ProductCardSkeleton";

export const LoadingGrid: FC = () => (
    <Row gutter={[16, 16]}>
        {Array.from({length: 5}).map((_, index) => (
            <Col key={index} xs={24} sm={12} lg={8}>
                <ProductCardSkeleton></ProductCardSkeleton>
            </Col>
        ))}
    </Row>
)