import {PageTitle} from '../../../../../../_metronic/layout/core'
import {KTCard, KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import {Button, Form, Input, message, Modal, Space, Table} from 'antd'
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {API_URL} from "../../../../../urls";
import {useState} from "react";
import TextArea from "antd/lib/input/TextArea";
import {text} from "stream/consumers";

export const GameTypeTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)

  const {data: gameTypes, isLoading} = useQuery('gameTypes', () => axios.get(`${API_URL}/gameTypes`))
  console.log("Game Types", gameTypes)
  const [form] = Form.useForm()


  ///////////////////////////////////
  // add modal functions  ///////////
  ///////////////////////////////////
  const queryClient = useQueryClient()
  const {mutate: addGameType} = useMutation((values: any) => axios.post(`${API_URL}/gameTypes`, values))

  function handleCancel() {
    form.resetFields()
    setIsModalOpen(false)
  }
  const onFinish = async (values: any) => {
    setSubmitLoading(true)
    addGameType(values, {
      onSuccess: () => {
        queryClient.invalidateQueries('gameTypes')
        message.success('Game Type added successfully')
        form.resetFields()
        setSubmitLoading(false)
        setIsModalOpen(false)
      },
      onError: (error: any) => {
        message.error(error.message)
        setSubmitLoading(false)
      }
    })
  }


  const showModal = () => {
    setIsModalOpen(true)
  }
///////////////////////////////////
// End add modal functions  ///////////


///////////////////////////////////
// Delete modal functions  ///////////
///////////////////////////////////
 const {mutate: mutateDeleteGameType} = useMutation((text: any) => axios.delete(`${API_URL}/gameTypes/${text.id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('gameTypes')
      message.success('Game Type deleted successfully')
    },  onError: (error: any) => {
      message.error(error.message)
    }
  })
  function deleteGameType(text: any) {
    Modal.confirm({
        title: 'Are you sure you want to delete this Game Type?',
        content: 'This action cannot be undone',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          mutateDeleteGameType(text)
        }
    })
  }
  const columns: any = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Game Type',
      dataIndex: 'name',
      sorter: (a: any, b: any) => {
        if (a.txmanf > b.txmanf) {
          return 1
        }
        if (b.txmanf > a.txmanf) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a: any, b: any) => {
        if (a.txmanf > b.txmanf) {
          return 1
        }
        if (b.txmanf > a.txmanf) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Action',
        dataIndex: 'action',
        render: (record: any, text: any) => (
            <Space size='middle'>
                    <button type='button' className='btn btn-danger me-3' onClick={() => {deleteGameType(text)}}>
                        Delete
                    </button>
            </Space>
        ),
    },
  ]
  return (
    <>
      <PageTitle>Game Type</PageTitle>
      <KTCard>
        <KTCardBody>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
              <Input
                placeholder='Enter Search Text'
                // onChange={handleInputChange}
                type='text'
                allowClear
                // value={searchText}
              />
              <Button type='primary'>Search</Button>
            </Space>
            <Space style={{marginBottom: 16}}>
              <button type='button' className='btn btn-primary me-3' onClick={showModal}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add New Game Type
              </button>
            </Space>
          </div>
          <Table
            columns={columns}
            bordered
            dataSource={gameTypes?.data}
            rowKey='id'
            loading={isLoading}
          />
          <Modal
            title='Add Game Type'
            open={isModalOpen}
            onCancel={handleCancel}
            closable={true}
            footer={[
              <Button key='back' onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                key='submit'
                type='primary'
                htmlType='submit'
                loading={submitLoading}
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  form.submit()
                }}
              >
                Submit
              </Button>,
            ]}
          >
            <Form
              form={form}
              name='control-hooks'
              labelCol={{span: 8}}
              wrapperCol={{span: 14}}
              title='Add Game Type'
              onFinish={onFinish}
            >
              <Form.Item name='name' label='Name of the Game Type'>
                <Input style={{color: 'black'}} />
              </Form.Item>
              <Form.Item name='description' label='Description of the Game Type'>
                <TextArea style={{color: 'black'}} />
              </Form.Item>
            </Form>
          </Modal>
        </KTCardBody>
      </KTCard>
    </>
  )
}
