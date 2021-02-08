import styled from 'styled-components'
import { Modal } from 'antd'

export const StyledModal = styled(Modal)`
  .ant-modal-footer {
    display: none;
  }
  .ant-modal-header {
    border: none;
  }
  .ant-modal-title {
    text-align: center;
  }
`
export const AddButton = styled.button`
  background-color: transparent;
  font-size: 36px;
  border: none;
  border-radius: 50%;
  padding: 0px 19px;
  @media screen and (max-width: 1024px) {
    background-color: #f6f6f6;
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  cursor: pointer;
  transition: 0.1s all ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:active {
    outline: none;
    background-color: rgba(0, 0, 0, 0.07);
  }
  &:focus,
  &:active {
    outline: none;
  }
`
