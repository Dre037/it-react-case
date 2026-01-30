import { Drawer, Descriptions, Space, Tag, Switch } from "antd"
import type { Product } from "../../types/Product"
import type { FC } from "react"
import { formatCurrency } from "../../utils/Currency"

interface Props {
    product: Product | null,
    onClose: () => void,
    onToggleStatus: (id: number) => void
}

export const ProductDetails: FC<Props> = ({ product, onClose, onToggleStatus }) => {
    if (!product) return null

    const mappedDesc: { [key: string]: string } = {
        name: 'Nome',
        type: 'Tipo',
        description: 'Descrição',
        interestRate: 'Taxa de Juros',
        createdAt: 'Criado em',
        spent: 'Gasto',
        limit: 'Limite',
        active: 'Status'
    }

    const formatValues = (key: string, value: any) => {
        switch (key) {
            case 'interestRate':
                return value + '%'
            case 'createdAt':
                return new Date(product.createdAt).toLocaleDateString()
            case 'active':
                return (
                    <Space>
                        <Tag color={value ? 'green' : 'red'}>
                            {value ? 'Ativo' : 'Inativo'}
                        </Tag>
                        <Switch checked={value} onChange={() => onToggleStatus(product.id)}></Switch>
                    </Space>
                )
            case 'spent':
            case 'limit':
                return formatCurrency(value)
            default:
                return value
        }
    }

    const items = Object.entries(product).map(([key, value]) => {
        if (key === 'id') return
        else return (
            <Descriptions.Item label={mappedDesc[key]}>
                {formatValues(key, value)}
            </Descriptions.Item>
        )
    }

    )

    return (
        <Drawer
            title="Detalhes do produto"
            open={product && true}
            onClose={onClose}
            size={360}>
            <Descriptions column={1} bordered size="small">
                {items}
            </Descriptions>
        </Drawer>
    )
}