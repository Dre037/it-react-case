import { Drawer, Descriptions, Space, Tag, Switch, Divider, Progress } from "antd"
import type { Product } from "../../types/Product"
import { useEffect, useState, type FC } from "react"
import { formatCurrency } from "../../utils/Currency"
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import './ProductDetail.css'
import { DollarOutlined, FileTextOutlined, RiseOutlined } from "@ant-design/icons";

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
        if (['active', 'id'].includes(key)) return
        else return (
            <Descriptions.Item label={mappedDesc[key]}>
                {formatValues(key, value)}
            </Descriptions.Item>
        )
    })

    const isMobile = window.innerWidth < 786

    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        if (product) {
            setAnimate(false)
            setTimeout(() => setAnimate(true), 50)
        }
    }, [product])

    const usagePercent = Math.round((product.spent / product.limit) * 100);

    return (
        <Drawer
            open={product && true}
            onClose={onClose}
            size={isMobile ? '100%' : 720} style={{ padding: 24 }}>
            <div className={`card-visual ${animate ? 'flip' : ''}`}>
                <div className="card-face">
                    <Space style={{ justifyContent: 'space-between' }}>
                        <Tag color={product.active ? 'blue' : 'red'}>
                            {product.active ? 'Ativo' : 'Inativo'}
                        </Tag>
                        <Switch checked={product.active} onChange={() => onToggleStatus(product.id)}></Switch>
                    </Space>
                    <Title level={3} style={{ color: '#fff', margin: '16px 0 0 0' }}>{product.name}</Title>
                    <Text style={{ color: '#fff' }}>{product.type}</Text>
                </div>
            </div>
            <Space orientation="horizontal" size={24} style={{ width: '100%', justifyContent: 'space-between', marginBottom: 16}}>
                <Space>
                    <FileTextOutlined></FileTextOutlined>
                    <Text>{product.description}</Text>
                </Space>
                <Space>
                    <RiseOutlined></RiseOutlined>
                    <Text>Juros: {product.interestRate}%</Text>
                </Space>
            </Space>
            <Space orientation="vertical" size={24} style={{ width: '100%' }}>
                <Space orientation="horizontal" style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Space>
                        <DollarOutlined></DollarOutlined>
                        <Text>{formatCurrency(product.limit)}</Text>
                    </Space>
                    <Space>
                        <RiseOutlined></RiseOutlined>
                        <Text>Gastos: <Text strong>{formatCurrency(product.spent)}</Text></Text>
                    </Space>
                </Space>

                <Progress percent={usagePercent} status={usagePercent > 75 ? 'exception' : 'active'}></Progress>
            </Space>
            <Divider></Divider>
            <Space></Space>
            <Descriptions column={1} bordered size="small">
                {items}
            </Descriptions>
        </Drawer>
    )
}