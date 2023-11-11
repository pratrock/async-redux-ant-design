import { Modal, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/userActions";
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const ModalComponent = ({
  open,
  dispatch,
  handleCancel,
  user,
  confirmLoading,
  setConfirmLoading,
}) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    setConfirmLoading(true);
    dispatch(
      updateUser({
        id: user.id,
        name: form.getFieldValue("name"),
        email: form.getFieldValue("email"),
        phone: form.getFieldValue("phone"),
        website: form.getFieldValue("website"),
      })
    );
    setTimeout(() => {
      handleCancel();
      setConfirmLoading(false);
    }, 2000);
  };
  const onFill = () => {
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });
  };

  useEffect(() => {
    onFill();
    return () => {
      form.resetFields();
      Modal.destroyAll();
    };
  }, [open]);

  return (
    <>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="website"
            label="Website"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default connect(null)(ModalComponent);
