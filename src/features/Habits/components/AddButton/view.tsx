import React, { useState } from 'react'
import { AddButton, StyledModal } from './styled'
import { Menu, Dropdown } from 'antd'
import AddHabit from '../AddHabit'
import { addHabitAsync } from 'shared/core/habits/duck/actions'
import { useDispatch } from 'react-redux'
import Library from 'features/Library'

const AddButtonView = () => {
  const [modalVisible, setModalVisibility] = useState(false)
  const [modalType, setmodalType] = useState('create')
  const dispatch = useDispatch()

  type ModalType = 'create' | 'choose'
  const showModal = (type: ModalType) => {
    setmodalType(type)
    setModalVisibility(true)
  }
  const handleOk = (values, callback?) => {
    dispatch(addHabitAsync(values))
    setModalVisibility(false)
    callback()
  }

  const handleCancel = e => {
    console.log(e)
    setModalVisibility(false)
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <div
          style={{ textAlign: 'center', padding: '5px 15px' }}
          onClick={() => {
            showModal('create')
          }}
        >
          Create
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          style={{ textAlign: 'center', padding: '5px 15px' }}
          onClick={() => {
            showModal('choose')
          }}
        >
          Choose from library
        </div>
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <StyledModal
        title={modalType === 'create' ? 'Create new habit' : 'Choose habit'}
        visible={modalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        {modalType === 'create' && <AddHabit onSubmit={handleOk} />}
        {modalType === 'choose' && <Library onSubmit={handleOk} />}
      </StyledModal>
      <Dropdown
        overlay={menu}
        placement={window.innerWidth < 1024 ? 'topRight' : 'bottomCenter'}
        arrow
      >
        <AddButton>+</AddButton>
      </Dropdown>
    </>
  )
}
export default AddButtonView
