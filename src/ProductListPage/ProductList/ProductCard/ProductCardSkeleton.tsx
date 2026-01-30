import { Card, Skeleton } from "antd";
import type { FC } from "react";

export const ProductCardSkeleton: FC = () => (
    <Card style={{ height: '100%' }}>
        <Skeleton active paragraph={{rows: 2}}></Skeleton>
    </Card>
)