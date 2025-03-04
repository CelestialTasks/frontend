import { FC, ReactNode } from 'react'
import { Group, Rect, Text } from 'react-konva'

interface CloudCardProps {
  x: number
  y: number
  width?: number
  height?: number
  name: string
  children?: ReactNode
}

export const CloudCard: FC<CloudCardProps> = ({
  x,
  y,
  width = 800,
  height = 600,
  name,
  children,
}) => {
  const cornerRadius = 12
  const padding = 20

  return (
    <Group x={x} y={y} width={width} height={height} draggable>
      <Rect
        width={width}
        height={height}
        fill="#ffffff"
        cornerRadius={cornerRadius}
        shadowColor="#E5E5E5"
        shadowBlur={15}
        shadowOffset={{ x: 0, y: 3 }}
        shadowOpacity={0.3}
      />
      <Text x={padding} y={padding} text={name} fontSize={20} fontWeight="bold" />
      {children}
    </Group>
  )
}
