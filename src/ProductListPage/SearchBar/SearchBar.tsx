import { Input } from "antd"
import type { FC } from "react"

interface Props {
    value: string
    onChange: (value: string) => void
}

export const SearchBar: FC<Props> = ({value, onChange}) => {

    return (
        <Input.Search placeholder="Buscar produto por nome" value={value} 
            onChange={(e) => onChange(e.target.value)}
            allowClear style={{ marginBottom: 16 }}
        ></Input.Search>
    )
}