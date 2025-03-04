import { FC, useCallback, useRef } from 'react'
import Konva from 'konva'
import { KonvaEventObject } from 'konva/lib/Node'
import { Circle, Group, Rect, Text } from 'react-konva'

interface TaskProps {
  x: number
  y: number
  width?: number
  height?: number
  name: string
  taskText: string
  date: string
  colors: string[]
}

export const Task: FC<TaskProps> = ({
  x,
  y,
  width = 200,
  height = 120,
  name: username,
  taskText,
  date,
  colors,
}) => {
  const groupRef = useRef<Konva.Group>(null)
  const cornerRadius = 8
  const padding = 12

  const moveWithAnimation = useCallback((x: number, y: number) => {
    groupRef.current?.to({
      x,
      y,
      duration: 0.15,
      easing: Konva.Easings.EaseOut,
    })
  }, [])

  const onDragEnd = useCallback(
    (e: KonvaEventObject<DragEvent>) => {
      if (!groupRef.current) return

      const parent = groupRef.current.getParent()
      if (!parent) return

      const parentWidth = parent.width()
      const parentHeight = parent.height()
      let newX = e.target.attrs.x
      let newY = e.target.attrs.y
      if (e.target.attrs.x < 0) {
        newX = 0
      } else if (e.target.attrs.x > parentWidth - width) {
        newX = parentWidth - width
      }
      if (e.target.attrs.y < 0) {
        newY = 0
      } else if (e.target.attrs.y > parentHeight - height) {
        newY = parentHeight - height
      }
      moveWithAnimation(newX, newY)
    },
    [height, width, moveWithAnimation],
  )
  return (
    <Group ref={groupRef} x={x} y={y} draggable onDragEnd={onDragEnd}>
      <Rect
        width={width}
        height={height}
        fill="#ffffff"
        cornerRadius={cornerRadius}
        shadowColor="#E5E5E5"
        shadowBlur={10}
        shadowOffset={{ x: 0, y: 2 }}
        shadowOpacity={0.5}
      />
      <Text
        x={padding}
        y={padding}
        text={username}
        fontSize={14}
        fontFamily="Arial"
        fill="#666666"
      />
      <Text
        x={padding}
        y={padding + 25}
        text={taskText}
        fontSize={16}
        fontFamily="Arial"
        fill="#333333"
      />
      <Text
        x={padding}
        y={padding + 50}
        text={date}
        fontSize={14}
        fontFamily="Arial"
        fill="#666666"
      />
      <Group x={padding} y={height - padding - 8}>
        {colors.map((color, index) => (
          <Circle key={index} x={index * 16} y={0} radius={4} fill={color} />
        ))}
      </Group>
    </Group>
  )
}
