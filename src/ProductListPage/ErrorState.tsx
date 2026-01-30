import type { FC } from "react"
import { Button, Result } from "antd"

export const ErrorState: FC<{ onRetry: () => void}> = ({ onRetry }) => (
    <Result status="error" title="Erro ao carregar produtos"
        subTitle="Não foi possível buscar os dados. Tente novamente"
        extra={[
            <Button type="primary" onClick={onRetry}>
                Tentar novamente
            </Button>
        ]}>
    </Result>
)
