import React, { useRef } from 'react';
import { useDatabase } from '../context/database/databaseContext';


const Test = () => {

    const nameRef = useRef()
    const priceRef = useRef()
    const voteRef = useRef()
    const imageRef = useRef()
    const image2Ref = useRef()
    const image3Ref = useRef()
    const image4Ref = useRef()
    const categoryRef = useRef()
    const desRef = useRef()
    const des2Ref = useRef()
    const des3Ref = useRef()
    const des4Ref = useRef()
    const { addDocument } = useDatabase()
    const submitHandler = e => {
        e.preventDefault();
        const product = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            vote: voteRef.current.value,
            image: [imageRef.current.value, image2Ref.current.value, image3Ref.current.value, image4Ref.current.value],
            category: categoryRef.current.value,
            description: [desRef.current.value, des2Ref.current.value, des3Ref.current.value, des4Ref.current.value],
        }
        addDocument('products', product)
        nameRef.current.value = ''
        priceRef.current.value = ''
        imageRef.current.value = ''
        image2Ref.current.value = ''
        image3Ref.current.value = ''
        image4Ref.current.value = ''
        desRef.current.value = ''
        des2Ref.current.value = ''
        des4Ref.current.value = ''
        des3Ref.current.value = ''
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>name</label>
                <input ref={nameRef} className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <div>
                <label>price</label>
                <input ref={priceRef} className="w-full border-solid border-[1px] border-gray-400" type="number" step="0.01" />
            </div>
            <div>
                <label>vote</label>
                <input ref={voteRef} defaultValue={5} className="w-full border-solid border-[1px] border-gray-400" type="number" />
            </div>
            <div>
                <label>image</label>
                <input ref={imageRef} className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <div>
                <label>image2</label>
                <input ref={image2Ref} className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <div>
                <label>image3</label>
                <input ref={image3Ref} className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <div>
                <label>image4</label>
                <input ref={image4Ref} className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <div>
                <label>category</label>
                <input ref={categoryRef} defaultValue="video-game" className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <div>
                <label>des</label>
                <input ref={desRef} className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <div>
                <label>des2</label>
                <input ref={des2Ref} className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <div>
                <label>des3</label>
                <input ref={des3Ref} className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <div>
                <label>des4</label>
                <input ref={des4Ref} className="w-full border-solid border-[1px] border-gray-400" type="text" />
            </div>
            <button>add</button>
        </form>
    );
}

export default Test;
