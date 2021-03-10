import React from 'react'
import { Modal, Input } from 'antd';
import { UPDATE_POST_REQUEST } from '../../reducers/post';
const { TextArea } = Input;
import useInput from '../../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';


function UpdatePostModal({ postId, visible, setIsModalVisible }) {
    const dispatch = useDispatch();
    const [text, onChangeText] = useInput("");

    const handleOk = () => {
        setIsModalVisible(false);
        console.log("text : ", text);

        return dispatch({
            type: UPDATE_POST_REQUEST,
            data: {
                postId: postId,
                text: text
            }
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
                <TextArea value={text} onChange={onChangeText} />
            </Modal>
        </div>
    )
}

export default UpdatePostModal
