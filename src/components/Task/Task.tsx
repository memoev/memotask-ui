import React, { useState } from 'react';
import { FormLabel, Switch, Button } from '@chakra-ui/react'

interface TaskProps {
  description: string,
  completed: boolean,
}

export const Task: React.FC<TaskProps> = ({description, completed}) => {
  const [taskCompleted, setTaskCompleted] = useState<boolean>(completed);
  const handleChange = () => {
    setTaskCompleted(!taskCompleted);
  }

    return (<div style={{display:'flex'}}>
      <FormLabel htmlFor={`${description}`}>{description}</FormLabel>
      <Switch id={`${description}`} defaultChecked={taskCompleted} onChange={handleChange}/>
      <Button size={'xs'} variant={'solid'} colorScheme={'red'}>Delete</Button>
    </div>);
}