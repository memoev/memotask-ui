import { Button } from '@chakra-ui/react';
import React from 'react'

interface CreateTaskProps {
  onClick: () => void,
}

export const CreateTask: React.FC<CreateTaskProps> = ({onClick}) => {
  return <Button size={'sm'} colorScheme={'green'} onClick={onClick}>Create New Task</Button>;
}