import React from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import type { RootState } from '../../app/store'
import { addElem, removeElem, setTitle, setText, setId } from './todoSlice'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { Action } from '@reduxjs/toolkit'

export function Todo() {
  const elem = useSelector((state: RootState) => ({title: state.todo.inputTitle, text: state.todo.inputText, id: state.todo.inputId}))
  const elems = useSelector((state: RootState) => state.todo.elems)
  const dispatch = useDispatch()
  const dispatchAll = (actions: Action[]) => actions.map(action => dispatch(action))

  return (
    <>
      <Form>
        <Form.Group controlId="basicTodoForm">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setTitle(e.target.value))}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setText(e.target.value))}
          />
        </Form.Group>
        <Button variant="primary"
          onClick={() => 
            dispatchAll([setId(uuidv4()), addElem(elem)])
            // [setId(uuidv4()), addElem(elem)].map(action => dispatch(action))
          }
        >
          Submit
        </Button>
      </Form>
      <br/>
      {elems.map(x =>
        <Card style={{ width: '18rem' }} key={x.id}>
          <Card.Body>
            <Card.Title>{x.title}</Card.Title>
            <Card.Text>{x.text}</Card.Text>
            <Button variant="warning" onClick={() => dispatch(removeElem(x.id))}>Remove</Button>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export {}