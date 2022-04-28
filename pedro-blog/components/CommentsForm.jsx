import React, { useRef, useState } from 'react'

const CommentsForm = (slug) => {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState()
    const [showSuccesMessage, setShowSuccesMessage] = useState(true)
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeDataEl = useRef()

    console.log(commentEl.current.value)

    const handleCommentSubmit = () => {
        setError(false)
        const { value: comment } = commentEl.current
        const { value: name } = nameEl.current
        const { value: email } = emailEl.current
        const { checked: storeDataEl } = storeDataEl.current

        if (!comment || !name || !email) {
            setError(true)
            return
        }
        const commentObj = {
            name,
            email,
            comment,
            slug,
        }

        if (storeDataEl) {
            localStorage.setItem('name', storeDataEl)
            localStorage.setItem('email', email)
        } else {
            localStorage.removeItem('name', storeDataEl)
            localStorage.removeItem('email', email)
        }
    }

    return (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
            <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
                Comment
            </h3>
            <div className="mb-4 grid-cols-1 gap-4">
                <textarea
                    ref={commentEl}
                    className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Comment"
                    name="comment"
                />
            </div>
            <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                <input
                    type="text"
                    ref={nameEl}
                    className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Name"
                    name="name"
                />
                <input
                    type="text"
                    ref={emailEl}
                    className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Email"
                    name="email"
                />
            </div>
            <div className="mb-4 grid grid-cols-1 gap-4">
                <div>
                    <input
                        type="checkbox"
                        ref={storeDataEl}
                        className=""
                        id="storeData"
                        name="storeData"
                    />
                    <label
                        className="ml-2 cursor-pointer text-xs text-gray-500"
                        htmlFor="storeData"
                    >
                        Save my e-email and name for the next time i comment
                    </label>
                </div>
            </div>
            {error && (
                <p className=" text-center text-xs text-red-500">
                    All fields are required.
                </p>
            )}
            <div className="mt-8 ">
                <button
                    type="button"
                    onClick={handleCommentSubmit}
                    className="ease inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg text-white transition duration-500 hover:bg-indigo-900"
                >
                    Post Comment
                </button>
                {showSuccesMessage && (
                    <span className="  float-right mt-3 text-center text-xl font-semibold text-green-500">
                        Comment submitted for review.
                    </span>
                )}
            </div>
        </div>
    )
}

export default CommentsForm
