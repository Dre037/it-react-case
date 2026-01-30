import { Card, Progress, Space, Tag } from "antd"
import type { Product } from "../../../types/Product"
import type { FC } from "react"
import { CreditCardOutlined, DollarOutlined, RiseOutlined } from "@ant-design/icons"
import Text from "antd/es/typography/Text";
import { formatCurrency } from "../../../utils/Currency";

interface Props {
    product: Product,
    onClick: (p: Product) => void
}

export const ProductCard: FC<Props> = ({ product, onClick }) => {
    const usagePercent = Math.min(
        Math.round((product.spent / product.limit) * 100), 100
    )

    return (
        <Card hoverable onClick={() => onClick(product)} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                <Space>
                    <CreditCardOutlined style={{ fontSize: 16 }}></CreditCardOutlined>
                    <Text strong>{product.name}</Text>
                </Space>
                <Tag color={product.active ? 'green' : 'red'}>
                    {product.active ? 'Ativo' : 'Inativo'}
                </Tag>
            </Space>
            <Space style={{ justifyContent: 'space-between', width: '100%', marginTop: 16, marginBottom: 8 }}>
                <Space>
                    <RiseOutlined></RiseOutlined>
                    <Text>
                        Gasto: <Text strong>{formatCurrency(product.spent)}</Text>
                    </Text>
                </Space>
                <Space>
                    <DollarOutlined></DollarOutlined>
                    <Text>
                        Limite: <Text strong>{formatCurrency(product.limit)}</Text>
                    </Text>
                </Space>
            </Space>
            <Text type="secondary">Percentual de uso</Text>
            <Progress percent={usagePercent} status={usagePercent > 75 ? 'exception' : 'active'}></Progress>
        </Card>
    )
}