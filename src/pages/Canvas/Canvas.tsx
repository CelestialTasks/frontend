import { FC } from 'react'
import { Layer, Stage } from 'react-konva'

import { CloudCard } from './components/CloudCard'
import { Task } from './components/CloudCard/components/Task'
import { clouds } from './data'

export const Home: FC = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} className="bg-[#F5F5F5]">
      <Layer>
        {clouds.map((cloud, index) => (
          <CloudCard key={cloud.id} x={index * 220} y={0} name={cloud.name}>
            {cloud.tasks.map((task) => (
              <Task
                key={task.id}
                x={0}
                y={0}
                name={task.name}
                taskText={task.taskText}
                date={task.date}
                colors={task.colors}
              />
            ))}
          </CloudCard>
        ))}
      </Layer>
    </Stage>
  )
}
