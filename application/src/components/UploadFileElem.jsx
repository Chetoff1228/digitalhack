import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import { UploadProps } from 'antd';
import { message, Upload } from 'antd';
const { Dragger } = Upload

function UploadFileElem({setUploaded}) {
    const settings = {
        name: 'file',
        multiple: false,
        listType: 'picture',
        accept: '.png,.jpg,.jpeg',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        beforeUpload (file){
            console.log(file)
        },
        // customRequest(){
        //     // OnSuccess(true)
        //     console.log('file_sent')
            
        // },
      
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`)
                setUploaded(true)
            }
            else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },

    };
    return (
        <div>
            <Dragger {...settings} style={{background: '#ffffff'}}>
                <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                <p className="ant-upload-text">Нажмите или перенесите файл для загрузки</p>
                <p className="ant-upload-hint">Можно загружать несколько файлов</p>
            </Dragger>
        </div>
    )
}

export default UploadFileElem