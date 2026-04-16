import React from 'react'
import useFireStore from '../../Firebase/useFireStore';
import styles from './photoGrid.module.css'

function PhotoGrid() {
    const [,,,,inputRef, images, progress, uploadImage] = useFireStore();
    return (
        <header className={styles['App-header']}>
            <h1>Photo Grid<span>Using firebase storage</span></h1>
            <div className={styles['chooserBox']}>
                <input type="file" onChange={uploadImage} ref={inputRef}/>
                <progress value={progress} max="100"></progress>
            </div>

            <div className={styles['photo-grid']}>
                {
                    images &&
                    images.map((image) => (
                        <img src={image.url} alt="" key={image.id}/>
                    ))
                }
            </div>
        </header>      
    )
}

export default PhotoGrid
