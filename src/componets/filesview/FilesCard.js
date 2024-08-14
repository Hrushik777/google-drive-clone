import React from 'react'
import '../../styles/FileCard.css'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const FileCard = ({ name, fileimage }) => {
    return (
        <div className='fileCard'>
            <div className="fileCard--top">
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
                {/* <img src = {fileimage}/> */}
            </div>

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard